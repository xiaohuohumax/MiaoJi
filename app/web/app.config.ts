import { DefaultLabel, defaultLabel } from '@miaoji/base';
import { author, repository, version } from './package.json';

export type AppConfig = DefaultLabel & {
    name: string,
    version: string,
    repository: string,
    author: {
        name: string,
        url: string
    },
    api: {
        apiBaseUrl: string,
        repo: string,
        owner: string,
        accessToken?: string
    },
    loopLoadLabelsTimeout: number,
    selectDocPageSize:number
}

const appConfig: AppConfig = {
    // 项目名称
    name: import.meta.env.VITE_APP_NAME,
    // 版本号
    version,
    // 仓库地址
    repository,
    // 作者信息
    author,
    api: {
        // github rest api 一般不变
        apiBaseUrl: 'https://api.github.com',
        // 仓库名称
        repo: import.meta.env.VITE_ISSUE_REPO,
        // 持有者
        owner: import.meta.env.VITE_ISSUE_owner,
        // github token 只需提供访问issue权限即可 可有可无
        // (提升游客访问数量限制)
        accessToken: import.meta.env.VITE_GITHUB_TOKEN,
    },
    // 功能标签前缀
    funcLabelPrefix: defaultLabel.funcLabelPrefix,
    // 标签
    label: defaultLabel.label,
    // 循环刷新全部标签时间间隔
    loopLoadLabelsTimeout: 30_60_000,
    // 文章查询数量 最多100
    selectDocPageSize: 5
};

export default appConfig;