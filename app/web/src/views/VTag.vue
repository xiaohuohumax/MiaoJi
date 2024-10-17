<script setup lang='ts'>
import CSubTitle from '@/CSubTitle.vue'
import CTags from '@/CTags.vue'
import { NCard, NEmpty, NSpace } from 'naive-ui'
import { useI18n } from '~/i18n'
import { useAppStore } from '~/store/app'

const { t } = useI18n()
const appStore = useAppStore()
</script>

<template>
  <NSpace :vertical="true">
    <NCard size="small">
      <CSubTitle>
        {{ t('page.tag.title') }}
      </CSubTitle>
    </NCard>
    <NCard size="small">
      <CTags v-if="appStore.labels.length > 0" :labels="appStore.labels" :show-icon="false" />
      <NEmpty v-else />
    </NCard>
  </NSpace>
</template>
