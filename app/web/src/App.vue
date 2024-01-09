<template>
  <CPointBackground class="-z-50 fixed left-0 top-0 hidden sm:block" v-if="appConfig.isUsePointBackground" />
  <NLoadingBarProvider>
    <NConfigProvider :theme-overrides="themeOverrides" :theme="appStore.theme.naive" :locale="tm('naiveUi.locale')"
      :date-locale="tm('naiveUi.dateLocale')">
      <NGlobalStyle />
      <NMessageProvider>
        <RouterView />
      </NMessageProvider>
    </NConfigProvider>
  </NLoadingBarProvider>
</template>
<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { updateTitle } from '@miaoji/util';
import { GlobalThemeOverrides, NConfigProvider, NGlobalStyle, NLoadingBarProvider, NMessageProvider } from 'naive-ui';
import { useAppStore } from '@/store/app.store';
import CPointBackground from '&/CPointBackground.vue';
import appConfig from '#/app.config';
import { uI18n } from '#/locales';

const { t, tm, locale } = uI18n();

const appStore = useAppStore();
const route = useRoute();
const router = useRouter();

// 设置标题
router.beforeEach(({ meta }, _from, next) => {
    meta?.title && updateTitle({ title: t(meta.title), after: '' });
    next();
});

// 监听语言变化
watch(() => appStore.lang, () => {
    const lang = appStore.lang;
    locale.value = lang;
    route.meta.title && updateTitle({ title: t(route.meta.title) });
    document.documentElement.lang = lang;
}, { immediate: true });

// 主题
const htmlClassList = document.documentElement.classList;
watch(() => appStore.theme, () => {
    appStore.theme.name == 'dark'
        ? htmlClassList.add('dark')
        : htmlClassList.remove('dark');
}, { immediate: true });

// 初始加载
onMounted(() => {
    document.documentElement.classList.add('load-ok');
    setTimeout(() => {
        document.documentElement.classList.remove('loading');
    }, 2_000);
});

const themeOverrides: GlobalThemeOverrides = {
    common: {
        fontFamily: 'ChillRoundGothic',
        fontFamilyMono: 'ChillRoundGothic',
    },
    Card: {
        color: 'transparent'
    },
};
</script>