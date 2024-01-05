import { RouteRecordRaw } from 'vue-router';
import { createRouter } from '@miaoji/util';
import { useAppStore } from '@/store/app.store';
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
                    title: 'router.title.home',
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
                    title: 'router.title.doc',
                    scrollTop: true,
                    keepAlive: true
                }
            },
            {
                path: 'about',
                name: 'PAbout',
                component: () => import('@/view/PAbout.vue'),
                meta: {
                    title: 'router.title.about',
                    scrollTop: true,
                    label: [appConfig.label.aboutLabel],
                    keepAlive: true
                }
            },
            {
                path: 'label',
                name: 'PLabel',
                component: () => import('@/view/PLabel.vue'),
                meta: {
                    title: 'router.title.label',
                    scrollTop: true
                }
            },
            {
                path: 'communication',
                name: 'PCommunication',
                component: () => import('@/view/PCommunication.vue'),
                meta: {
                    title: 'router.title.communication',
                    scrollTop: true,
                    label: [appConfig.label.communicationLabel],
                    keepAlive: true
                }
            },
            {
                path: 'link',
                name: 'PLink',
                component: () => import('@/view/PLink.vue'),
                meta: {
                    title: 'router.title.link',
                    scrollTop: true,
                    label: [appConfig.label.linkLabel],
                    keepAlive: true
                }
            },
            {
                path: 'history',
                name: 'PHistory',
                component: () => import('@/view/PHistory.vue'),
                meta: {
                    title: 'router.title.history',
                    scrollTop: true,
                    label: [appConfig.label.historyLabel],
                    keepAlive: true
                }
            },
            {
                path: 'photo',
                name: 'PPhoto',
                component: () => import('@/view/PPhoto.vue'),
                meta: {
                    title: 'router.title.photo',
                    scrollTop: true,
                    label: [appConfig.label.photoLabel],
                    keepAlive: true
                }
            },
            {
                path: 'photo/:id',
                name: 'PhotoDetails',
                component: () => import('@/view/PPhotoDetails.vue'),
                props: (to) => to.params,
                meta: {
                    title: 'router.title.photoDetails',
                    scrollTop: true,
                    keepAlive: true
                }
            },
            {
                path: '404',
                name: 'PNotFound',
                component: () => import('@/view/PNotFound.vue'),
                meta: {
                    title: 'router.title.notFound',
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

const router = createRouter(
    // 路由模式
    import.meta.env.VITE_ROUTER_HISTORY,
    // 路由
    routes,
    // 基础路径
    import.meta.env.VITE_APP_BASE,
    {
        scrollBehavior(to) {
            if (to.meta.scrollTop) {
                return { top: 0 };
            }
        },
    }
);

router.beforeEach(({ meta }, _from, next) => {
    const appStore = useAppStore();
    // 拦截不可用标签
    if (Array.isArray(meta.label) && !appStore.hasLabels(meta.label)) {
        return next({ name: 'PNotFound' });
    }
    next();
});

export default router;