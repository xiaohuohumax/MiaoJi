<script setup lang='ts'>
import type { Issue } from '@xiaohuohumax/miaoji-api'
import { IUserCircle } from '~/icons'
import CLink from './CLink.vue'
import CPreIcon from './CPreIcon.vue'

defineProps<{
  user: Issue['user']
}>()
</script>

<template>
  <CPreIcon v-if="user">
    <template #icon>
      <IUserCircle />
    </template>
    <CLink :href="user.html_url" target="_blank">
      {{ user.login }}
    </CLink>
  </CPreIcon>
</template>
