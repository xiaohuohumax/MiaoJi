<template>
    <div class="sticky top-0 z-50">
        <NCard size="small" class="container mx-auto bg-white dark:bg-[#101014]" :bordered="false">
            <div class="flex justify-between items-center">
                <div class="text-xl flex-shrink-0 group">
                    <RouterLink to="/" class="flex items-center font-bold">
                        <img class="w-10 md:w-12 object-cover flex-grow-0" src="/logo.svg" :alt="appConfig.name">
                        <span class="ml-2 group-hover:text-orange-500 dark:group-hover:text-green-300">{{ appConfig.name }}</span>
                    </RouterLink>
                </div>
                <div size="small" class="font-bold text-lg flex items-center">
                    <div class="group flex items-center cursor-pointer hover:scale-105 duration-100 mr-2"
                        @click="showSelect = !showSelect">
                        <NIcon class="group-hover:text-orange-500 dark:group-hover:text-green-300">
                            <Search stroke-linecap="round" stroke-linejoin="round" :stroke-width="5" />
                        </NIcon>
                        <span class="hidden md:inline">{{ t('menu.search') }}</span>
                    </div>
                    <NPopover :overlap="false" placement="top-end" trigger="click" :show-arrow="false">
                        <template #trigger>
                            <div class="group flex items-center cursor-pointer hover:scale-105 duration-100 lg:hidden mr-2">
                                <NIcon class="group-hover:text-orange-500 dark:group-hover:text-green-300">
                                    <ApplicationMenu stroke-linecap="round" stroke-linejoin="round" :stroke-width="5" />
                                </NIcon>
                                <span class="hidden md:inline">{{ t('menu.menu') }}</span>
                            </div>
                        </template>
                        <NCard size="small" class="shadow-none" :bordered="false">
                            <NSpace vertical class="text-lg font-bold">
                                <template v-for="menu in appStore.menus" :key="menu.name">
                                    <RouterLink :to="menu.path" class="group flex items-center hover:scale-105 duration-100"
                                        v-if="appStore.hasLabels(menu.labels)">
                                        <NIcon class="group-hover:text-orange-500 dark:group-hover:text-green-300">
                                            <component :is="menu.icon" stroke-linecap="round" stroke-linejoin="round"
                                                :stroke-width="5" />
                                        </NIcon>
                                        <span>{{ t(menu.name) }}</span>
                                    </RouterLink>
                                </template>
                            </NSpace>
                        </NCard>
                    </NPopover>
                    <LDocSelect v-model:show="showSelect" />
                    <template v-for="menu in appStore.menus" :key="menu.name">
                        <div class="hidden lg:block mr-2" v-if="appStore.hasLabels(menu.labels)">
                            <RouterLink :to="menu.path" class="group flex items-center hover:scale-105 duration-100">
                                <NIcon class="group-hover:text-orange-500 dark:group-hover:text-green-300">
                                    <component :is="menu.icon" stroke-linecap="round" stroke-linejoin="round"
                                        :stroke-width="5" />
                                </NIcon>
                                <span class="hidden md:inline">{{ t(menu.name) }}</span>
                            </RouterLink>
                        </div>
                    </template>
                    <NPopover :overlap="false" placement="top-end" trigger="click" :show-arrow="false">
                        <template #trigger>
                            <div class="group flex items-center cursor-pointer hover:scale-105 duration-100 mr-2">
                                <NIcon class="group-hover:text-orange-500 dark:group-hover:text-green-300">
                                    <Translate stroke-linecap="round" stroke-linejoin="round" :stroke-width="5" />
                                </NIcon>
                                <span class="hidden md:inline">{{ t('menu.lang') }}</span>
                            </div>
                        </template>
                        <NCard size="small" class="shadow-none" :bordered="false">
                            <NSpace vertical class="text-lg font-bold">
                                <div @click="switchLang(lang.meta.name)" class="group flex items-center cursor-pointer"
                                    v-for="lang in langs" :key="lang.meta.name">
                                    <span>{{ lang.meta.description }}</span>
                                </div>
                            </NSpace>
                        </NCard>
                    </NPopover>
                    <div @click="appStore.toggleTheme()"
                        class="group flex items-center cursor-pointer hover:scale-105 duration-100">
                        <NIcon class="group-hover:text-orange-500 dark:group-hover:text-green-300">
                            <component :is="appStore.theme.icon" stroke-linecap="round" stroke-linejoin="round"
                                :stroke-width="5" />
                        </NIcon>
                        <span class="hidden md:inline">{{ t('menu.theme') }}</span>
                    </div>
                </div>
            </div>
        </NCard>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { ApplicationMenu, Search, Translate } from '@icon-park/vue-next';
import { NCard, NIcon, NPopover, NSpace } from 'naive-ui';
import { useAppStore } from '@/store/app.store';
import appConfig from '#/app.config';
import { langs, uI18n } from '#/locales';
import LDocSelect from './item/LDocSelect.vue';

const { t } = uI18n();
const appStore = useAppStore();
const showSelect = ref(false);

function switchLang(lang: string) {
    appStore.lang = lang;
}
</script>