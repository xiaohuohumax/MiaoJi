interface ImportMetaEnv {
    // 项目名称
    readonly VITE_APP_NAME: string;
    // Issue 仓库名称
    readonly VITE_ISSUE_REPO: string;
    // Issue 仓库持有者
    readonly VITE_ISSUE_OWNER: string;
    // Issue 标签创建权限 Token
    readonly VITE_GITHUB_TOKEN?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
