import { dateZhCN, zhCN } from 'naive-ui'

const lng: I18nSchema = {
  meta: {
    name: 'zh-CN',
    description: '中文',
  },
  common: {
    createdAt: '创建于：',
    updatedAt: '更新于：',
  },
  api: {
    error: {
      network: '网络链接异常!',
      unauthorized: '未授权!',
      rateLimit: '访问太频繁了,超出限制!',
      forbidden: '没有权限!',
      notFound: '未找到相关资源!',
      unprocessableEntity: '参数异常',
    },
  },
  menu: {
    tag: '标签',
    message: '留言',
    link: '友链',
    album: '相册',
    about: '关于',
    history: '历史',
  },
  page: {
    about: {
      title: '关于',
    },
    message: {
      title: '留言',
    },
    article: {
      title: '文章',
    },
    history: {
      title: '历史',
    },
    tag: {
      title: '标签',
    },
    link: {
      title: '友链',
      applyTitle: '申请友链',
      applyContent: '[链接名称](链接地址)',
      toApply: '去申请',
    },
    album: {
      title: '相册',
    },
    albumDetail: {
      title: '相册详情',
    },
    notFound: {
      title: '未找到页面',
      content: '抱歉，您访问的页面不存在或已删除。',
    },
  },
  component: {
    comment: {
      title: '评论',
      hiddenComment: '评论已隐藏',
      toComment: '去评论',
    },
    editAtGithub: '在GitHub上编辑此页',
    headerSearch: {
      radioTag: '标签',
      radioArticle: '文章',
      radioAlbum: '相册',
      search: '搜索',
    },
    loadData: {
      retry: '重试',
    },
    loadPages: {
      retry: '重试',
      more: '更多',
      over: '没有啦',
    },
  },
  naiveUi: {
    locale: zhCN,
    dateLocale: dateZhCN,
  },
}

export default lng
