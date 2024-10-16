<script setup lang="ts">
import { NCard, NCarousel, NImage } from 'naive-ui'
import { useAppStore } from '~/store/app'

const appStore = useAppStore()
</script>

<template>
  <div v-if="appStore.banners.length > 0" class="relative">
    <NCarousel autoplay>
      <div
        v-for="banner in appStore.banners"
        :key="banner.src" class="border border-transparent h-48 md:h-56 lg:h-64 xl:h-72 w-full inline-block rounded-md overflow-hidden"
      >
        <NImage
          object-fit="cover" width="100%" height="100%" class="w-full h-full" :src="banner.src"
          :alt="banner.alt"
        />
      </div>
    </NCarousel>
    <NCard class="absolute w-full h-full top-0 left-0 -z-10" />
  </div>
</template>

<style scoped>
::v-deep(.n-carousel) .n-carousel__slides .n-carousel__slide {
  line-height: 0 !important;
}
</style>
