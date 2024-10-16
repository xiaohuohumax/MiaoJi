<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import CPointBackground from '@/CPointBackground.vue'
import { NConfigProvider, NGlobalStyle, NLoadingBarProvider, NMessageProvider } from 'naive-ui'
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from '~/i18n'
import { useAppStore } from './store/app'
import title from './util/title'

const appStore = useAppStore()
const { t, tm, locale } = useI18n()
const route = useRoute()
const router = useRouter()

router.beforeEach(({ meta }, _from, next) => {
  title.setTitle(meta.title && t(meta.title))
  next()
})

watch(() => appStore.language, () => {
  const language = appStore.language
  locale.value = language
  route.meta.title && title.setTitle(t(route.meta.title))
  document.documentElement.lang = language
}, { immediate: true })

watch(() => appStore.theme, () => {
  const htmlClassList = document.documentElement.classList
  appStore.theme.name === 'dark'
    ? htmlClassList.add('dark')
    : htmlClassList.remove('dark')
}, { immediate: true })

// 初始加载
onMounted(() => {
  document.documentElement.classList.add('load-ok')
  setTimeout(() => {
    document.documentElement.classList.remove('loading')
  }, 1500)
})

const themeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily: 'ChillRoundGothic',
    fontFamilyMono: 'ChillRoundGothic',
  },
  Menu: {
    itemTextColorActiveHoverHorizontal: 'var(--text-color)',
    itemTextColorHoverHorizontal: 'var(--text-color)',
    itemTextColorActiveHorizontal: 'var(--text-color)',
  },
  Card: {
    color: 'transparent',
    borderColor: 'transparent',
  },
  BackTop: {
    iconColorHover: 'var(--text-color)',
  },
}
</script>

<template>
  <CPointBackground class="-z-20 fixed left-0 top-0 hidden sm:block opacity-60" />
  <NLoadingBarProvider>
    <NConfigProvider
      :theme-overrides="themeOverrides" :theme="appStore.theme.naiveTheme" :locale="tm('naiveUi.locale')"
      :date-locale="tm('naiveUi.dateLocale')"
    >
      <NGlobalStyle />
      <NMessageProvider>
        <RouterView />
      </NMessageProvider>
    </NConfigProvider>
  </NLoadingBarProvider>
</template>
