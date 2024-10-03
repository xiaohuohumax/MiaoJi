<script setup lang='ts'>
import { NTime } from 'naive-ui'
import { ICalendar } from '~/icons'
import CPreIcon from './CPreIcon.vue'

defineProps<{
  updatedAt: string
}>()
</script>

<template>
  <CPreIcon>
    <template #icon>
      <ICalendar />
    </template>
    <NTime :time="new Date(updatedAt)" type="relative" />
  </CPreIcon>
</template>
