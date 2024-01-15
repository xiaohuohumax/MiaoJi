<template>
    <NCard size="small" :bordered="false" v-if="appStore.banners.length > 0">
        <NCarousel autoplay>
            <div class="border border-transparent h-48 md:h-56 lg:h-64 xl:h-72 w-full inline-block rounded-md overflow-hidden"
                v-for="banner in appStore.banners" :key="banner.src">
                <NImage object-fit="cover" width="100%" height="100%" class="w-full h-full" :src="banner.src"
                    :alt="banner.alt" />
            </div>
        </NCarousel>
    </NCard>
</template>
<script setup lang="ts">
import { NCard, NCarousel, NImage } from 'naive-ui';
import { useAppStore } from '@/store/app.store';
const appStore = useAppStore();
</script>