<template>
    <div class="sticky top-0 z-50">
        <NCard size="small" class="container mx-auto" :bordered="false">
            <div class="flex justify-between items-center">
                <div class="text-xl flex-shrink-0 group">
                    <RouterLink to="/" title="首页" class="flex items-center font-bold">
                        <img class="w-10 md:w-16 hover:scale-105 duration-100" src="/logo.png" :alt="appConfig.name">
                        <span class="ml-2  group-hover:text-green-300">{{ appConfig.name }}</span>
                    </RouterLink>
                </div>
                <NSpace class="font-bold text-lg">
                    <template v-for="menu in appStore.menus">
                        <!-- 留言板 -->
                        <RouterLink :to="menu.path" class="group flex items-center hover:scale-105 duration-100"
                            v-if="appStore.hasLabels(menu.labels)" :key="menu.name">
                            <NIcon class="group-hover:text-green-300">
                                <component :is="menu.icon" stroke-linecap="round" stroke-linejoin="round"
                                    :stroke-width="5" />
                            </NIcon>
                            <span class="hidden md:inline">{{ menu.name }}</span>
                        </RouterLink>
                    </template>
                    <div @click="appStore.toggleTheme()"
                        class="group flex items-center cursor-pointer hover:scale-105 duration-100">
                        <NIcon class="group-hover:text-green-300">
                                <component :is="appStore.theme.icon" stroke-linecap="round" stroke-linejoin="round"
                                    :stroke-width="5" />
                            </NIcon>
                        <span class="hidden md:inline">切换</span>
                    </div>
                    <!-- <a :href="appConfig.repository" target="_blank" title="Github" class="flex items-center">
                    <GithubOne size="1rem" /><span>仓库</span>
                </a> -->
                </NSpace>
            </div>
        </NCard>
    </div>
</template>
<script setup lang="ts">
import { NCard, NIcon, NSpace } from 'naive-ui';
import { useAppStore } from '@/store/app.store';
import appConfig from '#/app.config';
const appStore = useAppStore();
</script>