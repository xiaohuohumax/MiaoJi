<template>
    <NCarousel autoplay v-if="issuesStore.banners.length > 0">
        <div class="h-48 md:h-56 lg:h-64 xl:h-72 w-full inline-block rounded-md overflow-hidden" v-for="banner in issuesStore.banners"
            :key="banner.src">
            <NImage object-fit="cover" width="100%" height="100%" class="w-full h-full" :src="banner.src" :alt="banner.alt" />
        </div>
    </NCarousel>
</template>
<script setup lang="ts">
import { NCarousel, NImage } from 'naive-ui';
import { useAppStore } from '@/store/app.store';
const issuesStore = useAppStore();
</script>