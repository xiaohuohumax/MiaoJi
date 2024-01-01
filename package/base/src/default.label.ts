export interface LabelName {
    communicationLabel: string,
    linkLabel: string,
    aboutLabel: string,
    docLabel: string,
    applyLinkLabel: string,
    hiddenCommentLabel: string,
    bannerLabel: string,
    historyLabel: string,
    photoLabel: string,
}

export interface DefaultLabel {
    funcLabelPrefix: string
    label: LabelName,
}

export const defaultLabel: DefaultLabel = {
    // 功能标签前缀
    funcLabelPrefix: 'func:',
    // 标签
    label: {
        // 留言标签
        communicationLabel: 'func:communication',
        // 友链标签
        linkLabel: 'func:link',
        // 关于标签
        aboutLabel: 'func:about',
        // 文章笔记标签
        docLabel: 'func:doc',
        // 申请友链标签
        applyLinkLabel: 'func:apply-link',
        // 影藏评论标签
        hiddenCommentLabel: 'func:hidden-comment',
        // 轮播图标签
        bannerLabel: 'func:banner',
        // 历史记录标签
        historyLabel: 'func:history',
        // 相册标签
        photoLabel: 'func:photo'
    },
};