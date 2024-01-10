import { Label } from '@miaoji/api';
import { defaultLabel, LabelName } from '@miaoji/base';

const { label } = defaultLabel;

const appConfig: AppConfig = {
    // 需要创建的标签
    // 颜色不填则为随机
    cLabels: [
        {
            title: '主要功能标签',
            labels: [
                {
                    name: label.communicationLabel,
                    description: '留言',
                },
                {
                    name: label.linkLabel,
                    description: '友链',
                },
                {
                    name: label.aboutLabel,
                    description: '关于',
                },
                {
                    name: label.docLabel,
                    description: '文章',
                },
                {
                    name: label.bannerLabel,
                    description: '轮播图',
                },
                {
                    name: label.historyLabel,
                    description: '历史记录',
                },
                {
                    name: label.photoLabel,
                    description: '相册',
                }
            ]
        },
        {
            title: '友链相关',
            labels: [
                {
                    name: label.applyLinkLabel,
                    description: '友链申请',
                },
            ]
        },
        {
            title: '历史记录相关',
            labels: [
                {
                    name: 'func:history:warning',
                    description: '历史:警告',
                    color: 'f08a00'
                },
                {
                    name: 'func:history:success',
                    description: '历史:成功',
                    color: '2a947d'
                },
                {
                    name: 'func:history:info',
                    description: '历史:信息',
                    color: '3889c5'
                },
                {
                    name: 'func:history:error',
                    description: '历史:错误',
                    color: 'd03a52'
                },
                {
                    name: 'func:history:default',
                    description: '历史:默认',
                    color: '909092'
                },
            ]
        },
        {
            title: '其他辅助',
            labels: [
                {
                    name: label.hiddenCommentLabel,
                    description: '隐藏评论',
                },
            ]
        },
    ],
    name: import.meta.env.VITE_APP_NAME,
    api: {
        // github rest api 一般不变
        apiBaseUrl: 'https://api.github.com',
        // 仓库名称
        repo: import.meta.env.VITE_ISSUE_REPO,
        // 持有者
        owner: import.meta.env.VITE_ISSUE_owner,
        // github token Issue 标签创建权限
        accessToken: import.meta.env.VITE_GITHUB_TOKEN,
    },
    // 标签
    label: label,
};

export type CLabel = Partial<Omit<Label, 'id'>> & {
    name: string
}

type AppConfig = {
    cLabels: {
        title: string,
        labels: CLabel[]
    }[],
    name: string,
    api: {
        apiBaseUrl: string,
        repo: string,
        owner: string,
        accessToken?: string
    },
    label: LabelName
}

export default appConfig;