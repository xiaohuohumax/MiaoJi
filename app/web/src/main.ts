import { createApp } from 'vue';
import { logger } from '@miaoji/util';
import { updateTitle } from '@miaoji/util';
import { createPinia } from 'pinia';
import persistedstate from 'pinia-plugin-persistedstate';
import appConfig from '#/app.config';
import i18n from '#/locales';
import App from './App.vue';
import router from './router';
import { useAppStore } from './store/app.store';
import 'tailwindcss/lib/css/preflight.css';
import '@/style/style.css';

logger.setDefaultLevel(import.meta.env.VITE_LOGGER_LEVEL);

updateTitle({ pre: '🎉' + appConfig.name });

logger.info('welcome use: ' + appConfig.name);

(async () => {
    const app = createApp(App);

    // pinia
    const pinia = createPinia();
    pinia.use(persistedstate);
    app.use(pinia);
    const appStore = useAppStore();
    await (appStore.loadLabels(3, 1_000).catch(() => logger.error('加载标签失败!')));
    appStore.loadBanners();
    appStore.loopLoadLabels();

    // i18n
    app.use(i18n);
    // router
    app.use(router);

    // 等待
    // setTimeout(() => app.mount('#app'), 1_000);
    app.mount('#app');
})();
