# 功能使用说明

**请先阅读:** [标签规则](./label.md)

`链接地址`,`图片地址`: 除非特殊说明,则均为markdown格式

```md
[链接](...)
![图片](...)
```

## 文章

`issue` 添加 `func:doc` 标签即可用于首页展示,
添加`非功能标签`可用于辅助搜索(例如: `java` `node`等)

## 留言板

`issue` 添加 `func:communication` 标签即可作为留言板, 此`issue`的`评论`即可作为留言信息

## 友链

`issue` 添加 `func:link` 标签即可作为网站友链, `issue` 标题做为友链标题, `issue` 正文作为友链`链接地址`

## 关于

`issue` 添加 `func:about` 标签则是作为网站介绍说明

## 影藏评论

有评论模块的 `issue` 添加 `func:hidden-comment` 标签即可影藏评论

## 首页轮播

`issue` 添加 `func:banner` 标签即可用于banner图片显示, `issue` 内容添加`图片链接`即可,可多个

## 历史记录

`issue` 添加 `func:history` 标签即可用于历史记录显示, 历史的颜色则使用 `func:history:[default,success,info,warning,error,...]` 等其他标签的标记

例如: 添加一个红色的历史记录:只需 `issue` 添加 `func:history` `func:history:error`标签颜色[red]

## 相册

`issue` 添加 `func:photo` 标签即可用于相册显示, 一个 `issue` 对应一个相册, `issue` 正文添加 `图片链接` 即可

## 友链申请

`issue` 添加 `func:apply-link` 标签可用于友链申请, 此 `issue` 不用于显示, 只用于其他用户在评论申请友链