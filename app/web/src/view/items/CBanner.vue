<template>
    <NCarousel autoplay v-if="issuesStore.banners.length > 0">
        <div class="h-48 w-full inline-block rounded-md overflow-hidden" v-for="banner in issuesStore.banners"
            :key="banner.src">
            <NImage object-fit="cover" class="h-full w-full inline-block" :src="banner.src" :alt="banner.alt" />
        </div>
    </NCarousel>
</template>
<script setup lang="ts">
import { NCarousel, NImage } from 'naive-ui';
import { useAppStore } from '@/store/app.store';
const issuesStore = useAppStore();
</script>