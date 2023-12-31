<template>
  <NLoadingBarProvider>
    <NConfigProvider :theme="appStore.theme.naive" :locale="zhCN" :date-locale="dateZhCN">
      <NGlobalStyle />
      <NMessageProvider>
        <RouterView />
      </NMessageProvider>
    </NConfigProvider>
  </NLoadingBarProvider>
</template>
<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { dateZhCN, NConfigProvider, NGlobalStyle, NLoadingBarProvider, NMessageProvider, zhCN } from 'naive-ui';
import { useAppStore } from '@/store/app.store';
const appStore = useAppStore();
const htmlClassList = document.documentElement.classList;

function watchTailwindTheme() {
    appStore.theme.name == 'dark'
        ? htmlClassList.add('dark')
        : htmlClassList.remove('dark');
}

watchTailwindTheme();

watch(() => appStore.theme, watchTailwindTheme);

onMounted(() => {
    const loading = document.querySelector<HTMLDivElement>('.app-loading');
    const loadingTime = import.meta.env.VITE_APP_LOADING_TIME || '5';
    if (loading) {
        loading?.classList.add('app-load-ok');
        setTimeout(() => {
            loading.style.display = 'none';
        }, parseInt(loadingTime) * 1_000);
    }
});
</script>