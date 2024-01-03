import { markRaw, Raw } from 'vue';
import { Brightness, Moon } from '@icon-park/vue-next';
import {
    Communication, History, Info, Label as ILabel,
    LinkOne, PictureAlbum
} from '@icon-park/vue-next';
import { Icon } from '@icon-park/vue-next/lib/runtime';
import { Label } from '@miaoji/api';
import { gImages, Image, logger } from '@miaoji/util';
import awaitTo from 'await-to-js';
import { darkTheme, lightTheme } from 'naive-ui';
import { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface';
import { defineStore } from 'pinia';
import { issueApi, labelApi } from '@/api';
import appConfig from '#/app.config';


export function removeFuncLabels(labels: Label[]) {
    return appConfig.funcLabelPrefix == ''
        ? labels
        : labels.filter(l => !l.name.startsWith(appConfig.funcLabelPrefix));
}

export function hasLabel(labels: Label[], labelName: string) {
    return labels.find(l => l.name == labelName) != null;
}

type ThemeName = 'dark' | 'light'

interface Theme {
    name: ThemeName,
    naive: BuiltInGlobalTheme,
    markdown: ThemeName,
    icon: Raw<Icon>
}

const themes: Theme[] = [
    {
        name: 'light',
        naive: lightTheme,
        markdown: 'light',
        icon: markRaw(Brightness)
    },
    {
        name: 'dark',
        naive: darkTheme,
        markdown: 'dark',
        icon: markRaw(Moon)
    }
];

const uThemeName: ThemeName = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

interface Menu {
    name: string,
    path: string,
    labels: string[],
    icon: Icon
}

const menus: Menu[] = [
    {
        name: '标签',
        path: '/label',
        labels: [],
        icon: markRaw(ILabel)
    },
    {
        name: '留言',
        path: '/communication',
        labels: [appConfig.label.communicationLabel],
        icon: markRaw(Communication)
    },
    {
        name: '友链',
        path: '/link',
        labels: [appConfig.label.linkLabel],
        icon: markRaw(LinkOne)
    },
    {
        name: '历史',
        path: '/history',
        labels: [appConfig.label.historyLabel],
        icon: markRaw(History)
    },
    {
        name: '相册',
        path: '/photo',
        labels: [appConfig.label.photoLabel],
        icon: markRaw(PictureAlbum)
    },
    {
        name: '关于',
        path: '/about',
        labels: [appConfig.label.aboutLabel],
        icon: markRaw(Info)
    }
];

export const useAppStore = defineStore('app', {
    state: () => ({
        labels: <Label[]>[],
        banners: <Image[]>[],
        menus,
        themes,
        themeIndex: themes.findIndex(t => t.name == uThemeName),
        _st: <number>null!,
        _lt: <number>null!
    }),
    actions: {
        // 加载全部标签
        async loadLabels(failMax: number = -1, loop_steep: number = 1_000) {
            let count = 0;
            type Load<T> = (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: unknown) => void) => void
            const load: Load<Label[]> = async (res, rej) => {
                this._st && clearTimeout(this._st);
                if (failMax > 0 && count++ >= failMax) {
                    return rej();
                }
                const [err, data] = await awaitTo(labelApi.qAllLabels());
                if (err) {
                    logger.error('load labels fail', count, failMax, err);
                    this._st = setTimeout(load, loop_steep, res, rej);
                    return;
                }
                res(this.labels = data);
            };
            return new Promise(load);
        },
        // 定期加载全部标签
        loopLoadLabels() {
            this._lt && clearInterval(this._lt);
            this._lt = setInterval(this.loadLabels, appConfig.loopLoadLabelsTimeout);
        },
        // 加载全部banner
        async loadBanners() {
            const [err, data] = await awaitTo(issueApi.qIssuePage({
                state: 'all',
                page: '1',
                labels: appConfig.label.bannerLabel,
                per_page: '100'
            }));
            if (err || data == null || data.length == 0) {
                return;
            }
            this.banners = data.map(d => gImages(d.body)).flat(1);
        },
        // 是否存在某些标签
        hasLabels(labels: string[]) {
            if (labels.length == 0) {
                return true;
            }
            for (const lName of labels) {
                if (this.labels.find(l => l.name == lName) == null) {
                    return false;
                }
            }
            return true;
        },
        // 查询非功能标签
        selectNotFuncLabels(keyword: string) {
            if (keyword.trim() == '') {
                return [];
            }
            const inclues = this.labels.filter(({ name }) => name.includes(keyword));
            return removeFuncLabels(inclues);
        },
        // 切换主题
        toggleTheme() {
            this.themeIndex += 1 + themes.length;
            this.themeIndex = this.themeIndex % themes.length;
        },
    },
    getters: {
        // 全部历史标签
        historyLabels(state) {
            return state.labels
                .map(l => l.name.startsWith(appConfig.label.historyLabel));
        },
        // 全部非功能标签
        notFuncLabels(state) {
            return removeFuncLabels(state.labels);
        },
        // 当前主题
        theme(state) {
            return state.themes[state.themeIndex];
        }
    },
    persist: {
        key: appConfig.name + '-theme-store-' + appConfig.version,
        paths: ['themeIndex']
    }
});