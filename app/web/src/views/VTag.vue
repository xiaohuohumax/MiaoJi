<script setup lang='ts'>
import CSubTitle from '@/CSubTitle.vue'
import CTags from '@/CTags.vue'
import { NCard, NEmpty, NFlex } from 'naive-ui'
import { useAppStore } from '~/store/app'

const appStore = useAppStore()
</script>

<template>
  <NFlex :vertical="true">
    <NCard size="small">
      <CSubTitle>
        {{ $t('page.tag.title') }}
      </CSubTitle>
    </NCard>
    <NCard size="small">
      <CTags v-if="appStore.labels.length > 0" :labels="appStore.labels" :show-icon="false" />
      <NEmpty v-else />
    </NCard>
  </NFlex>
</template>
