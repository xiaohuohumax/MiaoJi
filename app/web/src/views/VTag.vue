<script setup lang='ts'>
import CSubTitle from '@/CSubTitle.vue'
import CLabels from '@/CTags.vue'
import { NCard, NEmpty, NSpace } from 'naive-ui'
import { useI18n } from '~/i18n'
import { useAppStore } from '~/store/app'

const { t } = useI18n()
const appStore = useAppStore()
</script>

<template>
  <NCard :bordered="false">
    <NSpace :vertical="true">
      <CSubTitle>
        {{ t('page.tag.title') }}
      </CSubTitle>
      <CLabels v-if="appStore.labels.length > 0" :labels="appStore.labels" :show-icon="false" />
      <NEmpty v-else />
    </NSpace>
  </NCard>
</template>
