import type { ResourcePath } from '@intlify/core-base'
import type { NDateLocale, NLocale } from 'naive-ui'

declare module 'vue-i18n' {

  interface I18nLocaleMessage {
    meta: {
      lang: string
      description: string
    }
    common: {
      createdAt: string
      updatedAt: string
    }
    api: {
      error: {
        network: string
        unauthorized: string
        rateLimit: string
        forbidden: string
        notFound: string
        unprocessableEntity: string
      }
    }
    menu: {
      tag: string
      message: string
      link: string
      album: string
      about: string
      history: string
    }
    page: {
      about: {
        title: string
      }
      message: {
        title: string
      }
      article: {
        title: string
      }
      history: {
        title: string
      }
      tag: {
        title: string
      }
      link: {
        title: string
        applyTitle: string
        applyContent: string
        toApply: string
      }
      album: {
        title: string
      }
      albumDetail: {
        title: string
      }
      notFound: {
        title: string
        content: string
      }
    }
    component: {
      comment: {
        title: string
        hiddenComment: string
        toComment: string
      }
      editAtGithub: string
      headerSearch: {
        radioTag: string
        radioArticle: string
        radioAlbum: string
        search: string
      }
      loadData: {
        retry: string
      }
      loadPages: {
        retry: string
        more: string
        over: string
      }
    }
    naiveUi: {
      locale: NLocale
      dateLocale: NDateLocale
    }
  }

  export type I18nKeys = ResourcePath<I18nLocaleMessage>

  export interface DefineLocaleMessage extends I18nLocaleMessage { }
}
