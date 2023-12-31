import { RouteRecordRaw } from 'vue-router';
import { createRouter } from '@miaoji/util';
import appConfig from '#/app.config';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/layout/LMain.vue'),
        children: [
            {
                path: '',
                name: 'PHome',
                component: () => import('@/view/PHome.vue'),
                props: route => route.query,
                meta: {
                    title: '首页',
                    scrollTop: false,
                    keepAlive: true
                }
            },
            {
                path: 'doc/:id',
                name: 'PDocument',
                component: () => import('@/view/PDocument.vue'),
                props: (to) => to.params,
                meta: {
                    title: '文章',
                    scrollTop: true
                }
            },
            {
                path: 'about',
                name: 'PAbout',
                component: () => import('@/view/PAbout.vue'),
                meta: {
                    title: '关于',
                    scrollTop: true,
                    label: [appConfig.label.aboutLabel]
                }
            },
            {
                path: 'label',
                name: 'PLabel',
                component: () => import('@/view/PLabel.vue'),
                meta: {
                    title: '标签',
                    scrollTop: true
                }
            },
            {
                path: 'communication',
                name: 'PCommunication',
                component: () => import('@/view/PCommunication.vue'),
                meta: {
                    title: '留言',
                    scrollTop: true,
                    label: [appConfig.label.communicationLabel]
                }
            },
            {
                path: 'link',
                name: 'PLink',
                component: () => import('@/view/PLink.vue'),
                meta: {
                    title: '友链',
                    scrollTop: true,
                    label: [appConfig.label.linkLabel]
                }
            },
            {
                path: 'history',
                name: 'PHistory',
                component: () => import('@/view/PHistory.vue'),
                meta: {
                    title: '历史',
                    scrollTop: true,
                    label: [appConfig.label.historyLabel]
                }
            },
            {
                path: 'photo',
                name: 'PPhoto',
                component: () => import('@/view/PPhoto.vue'),
                meta: {
                    title: '相册',
                    scrollTop: true,
                    label: [appConfig.label.photoLabel]
                }
            },
            {
                path: 'photo/:id',
                name: 'PhotoDetails',
                component: () => import('@/view/PPhotoDetails.vue'),
                props: (to) => to.params,
                meta: {
                    title: '相册',
                    scrollTop: true
                }
            },
            {
                path: '/404',
                name: 'PNotFound',
                component: () => import('@/view/PNotFound.vue'),
                meta: {
                    title: '404',
                    scrollTop: true
                }
            },
        ]
    },
    {
        path: '/:pathMatch(.*)',
        redirect: {
            name: 'PNotFound'
        }
    }
];

export default createRouter('WebHistory', routes, {
    scrollBehavior(to) {
        if (to.meta.scrollTop) {
            return { top: 0 };
        }
    },
});