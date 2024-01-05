import { ResourcePath } from '@intlify/core-base';
import { NDateLocale, NLocale } from 'naive-ui';

declare global {
    interface I18nSchema {
        // 语言元信息
        meta: {
            name: string;
            description: string;
        };
        // 通用
        comment: {
            button: {
                refresh: string;
                retry: string;
                more: string;
                search: string;
            };
            span: {
                createAt: string;
                updateAt: string;
            };
        }
        // 菜单
        menu: {
            search: string;
            menu: string;
            home: string;
            doc: string;
            about: string;
            label: string;
            communication: string;
            link: string;
            history: string;
            photo: string;
            notFound: string;
            lang: string;
            theme: string;
        };
        // 页面
        page: {
            home: {
                subtitle: string;
            };
            doc: {
                subtitle: string;
                commentsTitle: string;
            };
            about: {
                subtitle: string;
                commentsTitle: string;
                noPageTip: string;
            };
            label: {
                subtitle: string;
            };
            communication: {
                subtitle: string;
                commentsTitle: string;
                noPageTip: string;
            };
            link: {
                subtitle: string;
                gotoApply: string;
            };
            history: {
                subtitle: string;
            };
            photo: {
                subtitle: string;
            };
            photoDetails: {
                subtitle: string;
                commentsTitle: string;
            };
            notFound: {
                communication: string;
            };
        };
        // 布局
        layout: {
            header: {
                search: {
                    title: string;
                    radioLabel: string;
                    radioDoc: string;
                    radioPhoto: string;
                    noMatchContext: string;
                };
            };
        };
        // 组件
        component: {
            cOver: {
                context: string;
            };
            cComments: {
                hiddenContext: string;
                gotoComment: string;
            };
            cLoading: {
                success: string;
                fail: string;
            };
        };
        // 路由
        router: {
            title: {
                home: string;
                doc: string;
                about: string;
                label: string;
                communication: string;
                link: string;
                history: string;
                photo: string;
                photoDetails: string;
                notFound: string;
            };
        };
        // 请求
        api: {
            error: {
                network: string;
                unauthorized: string;
                rateLimit: string;
                forbidden: string;
                notFound: string;
                unprocessableEntity: string;
            };
        };
        // naive-ui
        naiveUi: {
            locale: NLocale;
            dateLocale: NDateLocale;
        };
    }
    type I18nSchemaKey = ResourcePath<I18nSchema>
}

export { };