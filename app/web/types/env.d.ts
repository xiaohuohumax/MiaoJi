interface ImportMetaEnv {
    // 项目名称
    readonly VITE_APP_NAME: string;
    // 项目根路径
    readonly VITE_APP_BASE: string;
    // Issue 仓库名称
    readonly VITE_ISSUE_REPO: string;
    // Issue 仓库持有者
    readonly VITE_ISSUE_OWNER: string;
    // 首次加载等待时间
    readonly VITE_APP_LOADING_TIME?: string;
    // 日志等级
    readonly VITE_LOGGER_LEVEL: import('loglevel').LogLevelDesc;
    // 路由模式
    readonly VITE_ROUTER_HISTORY?: import('@/router').RouterHistoryType;
    // Github Issue 访问Token
    readonly VITE_GITHUB_TOKEN?: string;

}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
