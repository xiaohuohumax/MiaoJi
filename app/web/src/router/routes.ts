import type { RouteRecordRaw } from 'vue-router'
import appConfig from '~/app.config'

export enum RouteName {
  Home = 'Home',
  About = 'About',
  Message = 'Message',
  Article = 'Article',
  History = 'History',
  Tag = 'Tag',
  Link = 'Link',
  Album = 'Album',
  AlbumDetail = 'AlbumDetail',
  NotFound = 'NotFound',
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('~/views/layout/LMain.vue'),
    children: [
      {
        path: '',
        name: RouteName.Home,
        props: route => route.query,
        component: () => import('~/views/VHome.vue'),
        meta: {
          unScrollToTop: true,
        },
      },
      {
        path: 'about',
        name: RouteName.About,
        component: () => import('~/views/VAbout.vue'),
        meta: {
          title: 'page.about.title',
          label: appConfig.funcLabels.about,
        },
      },
      {
        path: 'message',
        name: RouteName.Message,
        component: () => import('~/views/VMessage.vue'),
        meta: {
          title: 'page.message.title',
          label: appConfig.funcLabels.message,
        },
      },
      {
        path: 'article/:id',
        name: RouteName.Article,
        props: to => to.params,
        component: () => import('~/views/VArticle.vue'),
        meta: {
          title: 'page.article.title',
        },
      },
      {
        path: 'history',
        name: RouteName.History,
        component: () => import('~/views/VHistory.vue'),
        meta: {
          title: 'page.history.title',
          labels: appConfig.funcLabels.history,
        },
      },
      {
        path: 'tag',
        name: RouteName.Tag,
        component: () => import('~/views/VTag.vue'),
        meta: {
          title: 'page.tag.title',
        },
      },
      {
        path: 'link',
        name: RouteName.Link,
        component: () => import('~/views/VLink.vue'),
        meta: {
          title: 'page.link.title',
          labels: appConfig.funcLabels.link,
        },
      },
      {
        path: 'album',
        name: RouteName.Album,
        component: () => import('~/views/VAlbum.vue'),
        meta: {
          title: 'page.album.title',
          labels: appConfig.funcLabels.album,
        },
      },
      {
        path: 'album/:id',
        name: RouteName.AlbumDetail,
        props: to => to.params,
        component: () => import('~/views/VAlbumDetails.vue'),
        meta: {
          title: 'page.albumDetail.title',
        },
      },
      {
        path: '404',
        name: RouteName.NotFound,
        component: () => import('~/views/VNotFound.vue'),
        meta: {
          title: 'page.notFound.title',
          unKeepAlive: true,
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    redirect: {
      name: RouteName.NotFound,
    },
  },
]

export default routes
