## MiaoJi(喵记)

**基于 `Github API` `Issue` `Label` 实现的简单网站, 可用于搭建简单博客, 笔记等**

## 功能

+ 文章笔记
+ 轮播图
+ 留言板
+ 历史记录
+ 相册
+ 评论
+ 友链

## 📦打包构建

**注意必须用: `pnpm` 操作, 项目依赖 pnpm monorepo**

```shell
# npm install -g pnpm
pnpm install
pnpm dev
pnpm build
```

## 标签规则

[标签规则](./doc/label.md)

## 📖使用

1. 修改配置(后端issue仓库地址,Github Token等)
2. 项目打包
3. 部署前端页面(推荐:Github Pages)
4. 后端issue仓库添加所需[标签](./doc/label.md)
5. 在配置指定的仓库添加新issue并打上相应标签即可


## 📂配置文件

[app.config.ts](./app/web/app.config.ts) 或者 [dist/app.config.ts](./app/web/dist/app.config.js)
