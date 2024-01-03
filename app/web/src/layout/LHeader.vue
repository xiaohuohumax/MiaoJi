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
                <div class="font-bold text-lg flex">
                    <div class="group flex items-center cursor-pointer hover:scale-105 duration-100 mr-2"
                        @click="showSelect = !showSelect">
                        <NIcon class="group-hover:text-green-300">
                            <Search stroke-linecap="round" stroke-linejoin="round" :stroke-width="5" />
                        </NIcon>
                        <span class="hidden md:inline">搜索</span>
                    </div>
                    <NPopover :overlap="false" placement="top-end" trigger="click" :show-arrow="false">
                        <template #trigger>
                            <div class="group flex items-center cursor-pointer hover:scale-105 duration-100 lg:hidden mx-2"
                                @click="smMenu = !smMenu">
                                <NIcon class="group-hover:text-green-300">
                                    <ApplicationMenu stroke-linecap="round" stroke-linejoin="round" :stroke-width="5" />
                                </NIcon>
                                <span class="hidden md:inline">菜单</span>
                            </div>
                        </template>
                        <NCard size="small" class="shadow-none" :bordered="false">
                            <NSpace vertical class="text-lg font-bold">
                                <template v-for="menu in appStore.menus" :key="menu.name">
                                    <div class="group flex items-center cursor-pointer"
                                        v-if="appStore.hasLabels(menu.labels)" @click="routerClick(menu.path)">
                                        <NIcon>
                                            <component :is="menu.icon" stroke-linecap="round" stroke-linejoin="round"
                                                :stroke-width="5" />
                                        </NIcon>
                                        <span>{{ menu.name }}</span>
                                    </div>
                                </template>
                            </NSpace>
                        </NCard>
                    </NPopover>
                    <LDocSelect v-model:show="showSelect" />
                    <div class="hidden lg:block">
                        <NSpace class="font-bold text-lg">
                            <template v-for="menu in appStore.menus">
                                <RouterLink :to="menu.path" class="group flex items-center hover:scale-105 duration-100"
                                    v-if="appStore.hasLabels(menu.labels)" :key="menu.name">
                                    <NIcon class="group-hover:text-green-300">
                                        <component :is="menu.icon" stroke-linecap="round" stroke-linejoin="round"
                                            :stroke-width="5" />
                                    </NIcon>
                                    <span class="hidden md:inline">{{ menu.name }}</span>
                                </RouterLink>
                            </template>
                        </NSpace>
                    </div>
                    <div @click="appStore.toggleTheme()"
                        class="group flex items-center cursor-pointer hover:scale-105 duration-100 ml-2">
                        <NIcon class="group-hover:text-green-300">
                            <component :is="appStore.theme.icon" stroke-linecap="round" stroke-linejoin="round"
                                :stroke-width="5" />
                        </NIcon>
                        <span class="hidden md:inline">切换</span>
                    </div>
                    <!-- <a :href="appConfig.repository" target="_blank" title="Github" class="flex items-center">
                    <GithubOne size="1rem" /><span>仓库</span>
                </a> -->
                </div>
            </div>

        </NCard>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ApplicationMenu, Search } from '@icon-park/vue-next';
import { NCard, NIcon, NPopover, NSpace } from 'naive-ui';
import { useAppStore } from '@/store/app.store';
import appConfig from '#/app.config';
import LDocSelect from './item/LDocSelect.vue';
const appStore = useAppStore();
const showSelect = ref(false);
const smMenu = ref(false);

const router = useRouter();

function routerClick(path: string) {
    smMenu.value = false;
    router.push({ path });
}
</script>