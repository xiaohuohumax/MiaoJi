<script setup lang='ts'>
import CLink from '@/CLink.vue'
import CPreIcon from '@/CPreIcon.vue'
import { useI18n } from '~/i18n'
import { IWriteF } from '~/icons'

defineProps<{
  url: string
}>()
const { t } = useI18n()
</script>

<template>
  <CPreIcon>
    <template #icon>
      <IWriteF />
    </template>
    <CLink :href="url" target="_blank">
      {{ t('component.editAtGithub') }}
    </CLink>
  </CPreIcon>
</template>
