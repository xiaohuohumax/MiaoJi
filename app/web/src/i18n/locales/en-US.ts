import { dateEnUS, enUS } from 'naive-ui'

const lng: I18nSchema = {
  meta: {
    name: 'en-US',
    description: 'English',
  },
  common: {
    createdAt: 'Created at:',
    updatedAt: 'Updated at:',
  },
  api: {
    error: {
      network: 'Network error!',
      unauthorized: 'Unauthorized!',
      rateLimit: 'Rate limit!',
      forbidden: 'Forbidden!',
      notFound: '404 not found!',
      unprocessableEntity: 'Validation params error!',
    },
  },
  menu: {
    tag: 'Tag',
    message: 'Message',
    link: 'Link',
    album: 'Album',
    about: 'About',
    history: 'History',
  },
  page: {
    about: {
      title: 'About',
    },
    message: {
      title: 'Message',
    },
    article: {
      title: 'Article',
    },
    history: {
      title: 'History',
    },
    tag: {
      title: 'Tag',
    },
    link: {
      title: 'Link',
      applyTitle: 'Apply Friend Link',
      applyContent: '[Link Name](Link URL)',
      toApply: 'Go to Apply',
    },
    album: {
      title: 'Album',
    },
    albumDetail: {
      title: 'Album Detail',
    },
    notFound: {
      title: 'Page Not Found',
      content: 'Sorry, the page you\'re visiting doesn\'t exist or has been deleted.',
    },
  },
  component: {
    comment: {
      title: 'Comment',
      hiddenComment: 'Comment Hidden',
      toComment: 'Go to Comment',
    },
    editAtGithub: 'Edit this page on GitHub',
    headerSearch: {
      radioTag: 'Tag',
      radioArticle: 'Article',
      radioAlbum: 'Album',
      search: 'Search',
    },
    loadData: {
      retry: 'Retry',
    },
    loadPages: {
      retry: 'Retry',
      more: 'More',
      over: 'No more',
    },
  },
  naiveUi: {
    locale: enUS,
    dateLocale: dateEnUS,
  },
}

export default lng
