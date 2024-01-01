export interface QPageBase {
    // 仅显示上次在给定时间之后更新的结果(这是ISO8601格式的时间戳) YYYY-MM-DDTHH:MM:SSZ
    since?: string
    // 每页的结果数（最多 100 个）
    // 默认: 30
    per_page?: string
    // 要获取的结果的页码 
    // 默认: 1
    page?: string
}

export interface QSortBase {
    // 对结果进行排序的方向 
    // 默认: desc
    direction?: 'asc' | 'desc'
}