# 标签规则

**以下为默认规则,可搭配配置文件修改**

## 标签分类

+ 功能标签: 以 `func:` 为前缀
+ 普通标签: 不满足`功能标签`要求的其他标签

`功能标签` 默认前缀: `func:`

## 标签对照表

| 名称     | 标签                                                                   | 可标记数量 |
| -------- | ---------------------------------------------------------------------- | ---------- |
| 留言板   | `func:communication`                                                   | 1          |
| 友链     | `func:link`                                                            | n          |
| 友链申请 | `func:apply-link`                                                      | 1          |
| 关于     | `func:about`                                                           | 1          |
| 影藏评论 | `func:hidden-comment`                                                  | n          |
| 首页轮播 | `func:banner`                                                          | n          |
| 历史记录 | `func:history` `func:history:[default,success,info,warning,error,...]` | n          |
| 相册     | `func:photo`                                                           | n          |
| 文章     | `func:doc`                                                             | n          |
| 其他     | `****`                                                                 | n          |