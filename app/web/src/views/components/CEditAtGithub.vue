<script setup lang='ts'>
import CLink from '@/CLink.vue'
import { useI18n } from '~/i18n'

defineProps<{
  url: string
}>()
const { t } = useI18n()
</script>

<template>
  <CLink :href="url" target="_blank">
    {{ t('component.editAtGithub') }}
  </CLink>
</template>
