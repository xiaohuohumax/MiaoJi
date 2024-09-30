<script setup lang='ts'>
import CLink from '@/CLink.vue'
import { NImage, NThing } from 'naive-ui'
import type { Issue } from '~/api/module/issue'

export interface Link {
  title: string
  href: string
  issue: Issue
}

defineProps<Link>()
</script>

<template>
  <CLink :href="href" target="_blank">
    <NThing>
      <template #avatar>
        <NImage :src="issue.user?.avatar_url" class="w-16 h-16 rounded-md" />
      </template>
      <template #header>
        <CLink :href="href" target="_blank">
          {{ title }}
        </CLink>
      </template>
      <template #description>
        <CLink v-if="issue.user" :href="issue.user.html_url" target="_blank">
          {{ issue.user.login }}
        </CLink>
      </template>
    </NThing>
  </CLink>
</template>
