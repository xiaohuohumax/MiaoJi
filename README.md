## MiaoJi(喵记)

[中文](/README.md) | [English](/README_en.md)

**基于 Github REST API，Issue，Label，Github Pages 实现的简单博客**

> [!WARNING]
> 访问频次有限制（大概60次/每人/每小时）详见：[REST API 的速率限制](https://docs.github.com/zh/rest/using-the-rest-api/rate-limits-for-the-rest-api)。

## ✨ 项目特点

+ 👐 开源，免费，无广告
+ 🌗 深色主题
+ 💪 无后端服务器，数据来源 Github API
+ 📱 兼容移动端
+ 🌏 i18n 多语言支持

## 🔨 运作原理

通过为每个 Issue 添加特定的标签 (Label)，可以将这些 Issue 归类为相应的板块内容。当用户访问时，前端会根据这些标签筛选出相关的 Issue，并按照板块样式将其渲染到 HTML 页面中。比如： `func:article` 标签的 Issue 属于文章板块，`func:album` 标签的 Issue 属于相册板块。

## 🔖 标签说明

| 标签名                 | 说明          |
| ---------------------- | ------------- |
| `func:article`         | 文章          |
| `func:album`           | 相册          |
| `func:about`           | 博客介绍      |
| `func:banner`          | 首页轮播图    |
| `func:message`         | 留言板        |
| `func:link`            | 友情链接      |
| `func:history`         | 更新历史      |
| `func:history:warning` | 更新历史-警告 |
| `func:history:info`    | 更新历史-信息 |
| `func:history:success` | 更新历史-成功 |
| `func:history:error`   | 更新历史-错误 |
| `func:history:default` | 更新历史-默认 |
| `func:hidden-comment`  | 隐藏评论      |
| `func:pin`             | 置顶          |

## 📦 启动项目

> [!TIP]
> 项目使用 `pnpm` 进行包管理，请确保已安装 `pnpm` 全局依赖。

```shell
pnpm i
pnpm dev
pnpm build
```

## 🚀 快速开始

+ [新建文章](https://github.com/xiaohuohumax/MiaoJi/issues/new?title=Article%20Title&labels=func:article&body=%3C!--%0Aexcerpt:%20Article%20excerpt%0A--%3E%0A%0AArticle%20content)
+ [新建相册](https://github.com/xiaohuohumax/MiaoJi/issues/new?title=Album%20Title&labels=func:album&body=!%5B%5D())
+ [新建历史](https://github.com/xiaohuohumax/MiaoJi/issues/new?title=History%20Title&labels=func:history&body=Hostory%20content)

## ♻ 提交流程

```shell
pnpm changeset
pnpm changeset version
pnpm i
pnpm commit
```

## ℹ License

[MIT](/LICENSE)
