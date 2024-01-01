const defaultLabel = {
  // 功能标签前缀
  funcLabelPrefix: "func:",
  // 标签
  label: {
    // 留言标签
    communicationLabel: "func:communication",
    // 友链标签
    linkLabel: "func:link",
    // 关于标签
    aboutLabel: "func:about",
    // 文章笔记标签
    docLabel: "func:doc",
    // 申请友链标签
    applyLinkLabel: "func:apply-link",
    // 影藏评论标签
    hiddenCommentLabel: "func:hidden-comment",
    // 轮播图标签
    bannerLabel: "func:banner",
    // 历史记录标签
    historyLabel: "func:history",
    // 相册标签
    photoLabel: "func:photo"
  }
};
const version = "0.2.0";
const repository = "https://github.com/xiaohuohumax/MiaoJi";
const author = {
  name: "xiaohuohumax",
  url: "https://github.com/xiaohuohumax"
};
const appConfig = {
  // 项目名称
  name: "MiaoJi(喵记)",
  // 版本号
  version,
  // 仓库地址
  repository,
  // 作者信息
  author,
  api: {
    // github rest api 一般不变
    apiBaseUrl: "https://api.github.com",
    // 仓库名称
    repo: "MiaoJi",
    // 持有者
    owner: "xiaohuohumax",
    // github token 只需提供访问issue权限即可 可有可无
    // (提升游客访问数量限制)
    accessToken: {}.VITE_GITHUB_TOKEN
  },
  // 功能标签前缀
  funcLabelPrefix: defaultLabel.funcLabelPrefix,
  // 标签
  label: defaultLabel.label,
  // 循环刷新全部标签时间间隔
  loopLoadLabelsTimeout: 306e4
};
export {
  appConfig as a
};
