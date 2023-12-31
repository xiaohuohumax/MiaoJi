import 'vue-router';

declare module 'vue-router' {
    interface RouteMeta {
        // 网页title名称
        title?: string,
        // 是否回到开头
        // 默认 true
        scrollTop?: boolean,
        // 是否缓存
        keepAlive?: boolean,
        // 存在某些标签才可访问 且
        label?: string[]
    }
}