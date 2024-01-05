<template>
    <NSpace vertical>
        <CSubTitle :context="t('page.link.subtitle')" />
        <NGrid cols="1 s:2 m:3 l:4 xl:5 2xl:6" responsive="screen" :x-gap="12" :y-gap="12" v-if="links.length > 0">
            <NGridItem v-for="link in links" :key="link.number">
                <NCard size="small" :bordered="false">
                    <NSpace class="h-full">
                        <a class="font-bold flex-shrink-0 mt-1" target="_blank" :href="link.user.html_url">
                            <img class="w-16 rounded-md mx-auto hover:scale-105 duration-100" :src="link.user.avatar_url"
                                :alt="link.user.login" />
                        </a>
                        <NSpace size="small" vertical class="flex-grow">
                            <div size="small" class="flex items-center text-xl hover:text-green-300">
                                <a :href="link.anchor ? link.anchor.href : link.user.html_url" target="_blank">
                                    {{ link.anchor ? link.anchor.content : link.title }}
                                </a>
                            </div>
                            <div size="small" class="flex items-center hover:text-green-300">
                                <a :href="link.user.html_url" target="_blank">
                                    {{ link.user.login }}
                                </a>
                            </div>
                        </NSpace>
                    </NSpace>
                </NCard>
            </NGridItem>
            <!-- <NGridItem>
                <NCard class="text-center h-full text-xl font-bold" v-if="aLState == 'success'" :bordered="false">
                    <a :href="applyLink.html_url" target="_blank">
                        <div class="flex items-center h-full justify-center">
                            <NIcon :component="LinkTwo" size="2rem"></NIcon>
                        </div>
                    </a>
                </NCard>
            </NGridItem> -->
        </NGrid>
        <CLoading :state="lState">
            <template #fail>
                <div class="text-center">
                    <NButton @click="nextPage">
                        {{ t('comment.button.retry') }}
                    </NButton>
                </div>
            </template>
            <COver v-if="isOver" :context="t('component.cOver.context')" />
            <div v-else class="text-center">
                <NButton @click="nextPage">
                    {{ t('comment.button.more') }}
                </NButton>
            </div>
        </CLoading>
        <NCard size="small" :bordered="false" v-if="aLState == 'success'">
            <a :href="applyLink.html_url" target="_blank">
                <NButton class="w-full" type="info">{{ t('page.link.gotoApply') }}</NButton>
            </a>
        </NCard>
    </NSpace>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Issue } from '@miaoji/api';
import { CLoading, COver, CSubTitle, LoadingState, watchLoading } from '@miaoji/components';
import { gAnchors } from '@miaoji/util';
import awaitTo from 'await-to-js';
import { NButton, NCard, NGrid, NGridItem, NSpace } from 'naive-ui';
import { issueApi } from '@/api';
import { Link } from '@/api/entity.ext';
import appConfig from '#/app.config';
import { uI18n } from '#/locales';

const perPage = 10;
let page = 1;

const { t } = uI18n();

// 查询友链
const links = ref<Link[]>([]);
const lState = watchLoading({
    state: 'loading',
    fail: () => t('component.cLoading.fail', { name: t('page.link.subtitle') })
});
const isOver = ref(false);

async function queryLinks(page: number) {
    lState.value = 'loading';
    const [err, res] = await awaitTo(issueApi.qIssuePage({
        labels: appConfig.label.linkLabel,
        state: 'all',
        page: page.toString(),
        per_page: perPage.toString()
    }));
    if (err) {
        lState.value = 'fail';
        return;
    }

    if (res.data.length == 0 || res.data.length < perPage) {
        isOver.value = true;
    }
    const d: Link[] = res.data.map(d => {
        const anchors = gAnchors(d.body);
        return { ...d, anchor: anchors.length > 0 ? anchors[0] : null };
    });
    links.value.push(...d);
    lState.value = 'success';
}

queryLinks(page);

function nextPage() {
    const oldSize = links.value.length;
    const nPage = page + 1;
    queryLinks(nPage).then(() => {
        if (oldSize != links.value.length) {
            page += nPage;
        }
    });
}
// 申请地址
const applyLink = ref<Issue>(null!);
const aLState = ref<LoadingState>('loading');

async function queryApplyLink() {
    const [err, res] = await awaitTo(issueApi.qIssuePage({
        labels: appConfig.label.applyLinkLabel,
        state: 'all',
        page: '1',
        per_page: '1'
    }));
    if (err || res.data.length == 0) {
        aLState.value = 'fail';
        return;
    }
    applyLink.value = res.data[0];
    aLState.value = 'success';
}

queryApplyLink();
</script>