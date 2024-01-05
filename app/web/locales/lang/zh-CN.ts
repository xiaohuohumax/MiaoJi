import { dateZhCN, zhCN } from 'naive-ui';

const lang: I18nSchema = {
    meta: {
        name: 'zh-CN',
        description: '中文'
    },
    comment: {
        button: {
            refresh: '刷新',
            retry: '重试',
            more: '更多',
            search: '搜索'
        },
        span: {
            createAt: '创建',
            updateAt: '更新'
        }
    },
    menu: {
        search: '搜索',
        menu: '菜单',
        home: '首页',
        doc: '文章',
        about: '关于',
        label: '标签',
        communication: '留言',
        link: '友链',
        history: '历史',
        photo: '相册',
        notFound: '404未找到',
        lang: '语言',
        theme: '主题'
    },
    page: {
        home: {
            subtitle: '文章'
        },
        doc: {
            subtitle: '文章',
            commentsTitle: '评论',
        },
        about: {
            subtitle: '关于',
            commentsTitle: '评论',
            noPageTip: '未找到关于页!'
        },
        label: {
            subtitle: '标签',
        },
        communication: {
            subtitle: '留言',
            commentsTitle: '留言',
            noPageTip: '未找到留言页!'
        },
        link: {
            subtitle: '友链',
            gotoApply: '去申请'
        },
        history: {
            subtitle: '历史'
        },
        photo: {
            subtitle: '相册',
        },
        photoDetails: {
            subtitle: '相册',
            commentsTitle: '评论',
        },
        notFound: {
            communication: '这里啥也没有',
        }
    },
    layout: {
        header: {
            search: {
                title: '搜索',
                radioLabel: '标签',
                radioDoc: '文章',
                radioPhoto: '相册',
                noMatchContext: '未匹配相关内容!',
            }
        }
    },
    component: {
        cOver: {
            context: '木有啦'
        },
        cComments: {
            hiddenContext: '{title}已经隐藏!',
            gotoComment: '去{title}'
        },
        cLoading: {
            success: '{name}查询成功!',
            fail: '{name}查询失败!',
        }
    },
    router: {
        title: {
            home: '首页',
            doc: '文章',
            about: '关于',
            label: '标签',
            communication: '留言',
            link: '友链',
            history: '历史',
            photo: '相册',
            photoDetails: '相册',
            notFound: '404未找到',
        }
    },
    api: {
        error: {
            network: '网络链接异常!',
            unauthorized: '未授权!',
            rateLimit: '访问太频繁了,超出限制!',
            forbidden: '没有权限!',
            notFound: '未找到相关资源!',
            unprocessableEntity: '参数异常'
        }
    },
    naiveUi: {
        locale: zhCN,
        dateLocale: dateZhCN
    }
};

export default lang;