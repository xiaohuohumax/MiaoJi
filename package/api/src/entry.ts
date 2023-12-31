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