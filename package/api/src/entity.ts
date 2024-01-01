import { AxiosResponse } from 'axios';

export interface User {
    // 名称
    login: string,
    // id
    id: number,
    // 头像地址
    avatar_url: string,
    // 主页
    html_url: string
}

export interface Reactions {
    // 👍
    '+1': number,
    // 👎
    '-1': number,
    // 😄
    laugh: number,
    // 🎉
    hooray: number,
    // 😕
    confused: number,
    // ❤️
    heart: number,
    // 🚀
    rocket: number,
    // 👀
    eyes: number,
    // 总数
    total_count: number,
    [key: string]: number
}

export interface Label {
    id: number,
    name: string,
    color: string,
    description: string
}

export type Issue = {
    // 网页链接
    html_url: string
    // api链接
    url: string,
    // issues id
    number: number,
    // title
    title: string,
    // 标签
    labels: Label[],
    // 创建时间
    created_at: string,
    // 更新时间
    updated_at: string,
    // issues 内容 markdown
    body: string | null,
    // 用户信息
    user: User,
    // 表情统计
    reactions: Reactions
}

export type Comment = Omit<Issue, 'number' | 'title' | 'labels'> & {
    id: number
}

export interface ErrorItem {
    resource: string,
    code: string,
    field: string
}

export interface ErrorData {
    message: string,
    errors?: ErrorItem[]
}

type Res<R = any> = Omit<AxiosResponse<R>, 'status'>

type Res401 = Res<ErrorData> & {
    status: 401
}

type Res422 = Res<Required<ErrorData>> & {
    status: 422
}

type Res404 = Res & {
    status: 404
}
// 其他补充

// 异常返回
export type ResError = Res401 | Res422 | Res404