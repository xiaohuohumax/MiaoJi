<script setup lang='ts'>
import CLink from '@/CLink.vue'
import { NButton, NCard, NDivider, NIcon, NMenu, NSpace } from 'naive-ui'
import { ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import appConfig from '~/app.config'
import { IGithubCircle, IMenu, IWorld } from '~/icons'
import { RouteName } from '~/router/routes'
import { useAppStore } from '~/store/app'
import CHeaderSelect from '../components/CHeaderSearch.vue'

const appStore = useAppStore()
const router = useRouter()
const route = useRoute()
const drawer = ref(false)
const menu = ref<string>('')

function toggleDrawer() {
  drawer.value = !drawer.value
  document.body.style.overflow = drawer.value ? 'hidden' : ''
}

router.beforeEach((_to, _from, next) => {
  drawer.value = false
  next()
})

watch(() => route.name, () => {
  menu.value = route.name as string
}, { immediate: true })
</script>

<template>
  <div class="header sticky top-0 z-50 font-bold">
    <div class="container mx-auto px-2">
      <NCard size="small" :bordered="false" class="rounded-t-none">
        <NSpace justify="space-between" align="center">
          <div class="text-lg">
            <RouterLink :to="{ name: RouteName.Home }" class="flex items-center group">
              <img class="w-6 md:w-8 object-cover flex-grow-0" src="/logo.svg?url" :alt="appConfig.appName">
              <span class="ml-2 group-hover:text-orange-500 dark:group-hover:text-green-300">{{ appConfig.appName }}</span>
            </RouterLink>
          </div>
          <div class="flex items-center">
            <CHeaderSelect />
            <div class="hidden md:block">
              <NSpace align="center">
                <NMenu v-model:value="menu" :options="appStore.menuOptions" mode="horizontal" />
                <CLink @click="appStore.toggleLanguage">
                  <NIcon :size="20">
                    <IWorld />
                  </NIcon>
                </CLink>
                <CLink>
                  <NIcon :size="20">
                    <component :is="appStore.theme.icon" @click="appStore.toggleTheme" />
                  </NIcon>
                </CLink>
                <CLink :href="appConfig.homepage" target="_blank">
                  <NIcon :size="22">
                    <IGithubCircle />
                  </NIcon>
                </CLink>
              </NSpace>
            </div>
            <CLink class="block md:hidden">
              <IMenu :size="30" @click="toggleDrawer" />
            </CLink>
            <div v-show="drawer" class="absolute left-0 top-full w-full h-screen">
              <NCard :bordered="false" class="h-full mt-2">
                <NSpace :vertical="true">
                  <NMenu v-model:value="menu" :options="appStore.menuOptions" :root-indent="8" :indent="8" />
                  <NDivider />
                  <NButton size="large" class="w-full" tertiary @click="appStore.toggleTheme">
                    <NIcon :size="24">
                      <component :is="appStore.theme.icon" :size="24" />
                    </NIcon>
                  </NButton>
                  <NButton size="large" class="w-full" tertiary @click="appStore.toggleLanguage">
                    <IWorld :size="26" />
                  </NButton>
                  <CLink :href="appConfig.homepage" target="_blank">
                    <NButton size="large" class="w-full" tertiary>
                      <IGithubCircle :size="28" />
                    </NButton>
                  </CLink>
                </NSpace>
              </NCard>
            </div>
          </div>
        </NSpace>
      </NCard>
    </div>
  </div>
</template>

<style scoped>
::v-deep(.n-menu).n-menu--horizontal .n-menu-item-content {
  padding: 0 4px !important;
}

::v-deep(.n-menu .n-menu-item-content::before) {
  left: 0 !important;
  right: 0 !important;
}

::v-deep(.n-menu .n-menu-item-content) {
  padding-right: 4px !important;
  padding-left: 0 !important;
}

::v-deep(.n-menu .n-menu-item-content .n-menu-item-content__icon) {
  margin-right: 0 !important;
}

::v-deep(.n-menu .n-menu-item-content.n-menu-item-content--selected::before),
::v-deep(.n-menu .n-menu-item-content:hover::before) {
  background: none !important;
}

::v-deep(.n-menu .n-menu-item-content--selected .n-menu-item-content-header a){
  color: var(--text-color) !important;
}

/* .header .n-card {
  background-image: radial-gradient(transparent 3px, #ffffff 10px);
  backdrop-filter: saturate(80%) blur(1px);
  background-size: 6px 6px;
}

html.dark .header .n-card {
  background-image: radial-gradient(transparent 3px, rgb(16, 16, 20) 3px);
} */
</style>
