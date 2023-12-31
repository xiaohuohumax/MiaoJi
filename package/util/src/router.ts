import {
    createMemoryHistory, createRouter as cRouter, createWebHashHistory,
    createWebHistory, RouteRecordRaw, RouterHistory, RouterOptions
} from 'vue-router';

type HistoryType = 'MemoryHistory' | 'WebHashHistory' | 'WebHistory';

const historyMap: {
    [key in HistoryType]: (base?: string) => RouterHistory
} = {
    'WebHashHistory': createWebHashHistory,
    'MemoryHistory': createMemoryHistory,
    'WebHistory': createWebHistory
};

function getHistoryFunc(routerHistory: HistoryType) {
    return Object.keys(historyMap).includes(routerHistory)
        ? historyMap[routerHistory]
        : historyMap.MemoryHistory;
}

export function createRouter(historyType: HistoryType, routes: RouteRecordRaw[], option: Partial<RouterOptions> = {}) {
    return cRouter({
        history: getHistoryFunc(historyType)(),
        routes,
        ...option
    });
}