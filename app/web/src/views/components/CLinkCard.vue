<script setup lang='ts'>
import CLink from '@/CLink.vue'
import { markdown } from '@xiaohuohumax/miaoji-util'
import { NCard, NImage, NThing } from 'naive-ui'
import { computed } from 'vue'
import type { Issue } from '~/api/module/issue'

const props = defineProps<{
  issue: Issue
}>()

interface Link {
  title: string
  href: string
}

const link = computed(() => {
  const defaultLink: Link = {
    title: props.issue.user?.login || 'Unknown',
    href: props.issue.user?.html_url || '#',
  }
  if (!props.issue.body) {
    return defaultLink
  }
  const links = markdown.parseLinks(props.issue.body)
  if (links.length === 0) {
    return defaultLink
  }
  return {
    title: links[0].content,
    href: links[0].href,
  }
})
</script>

<template>
  <CLink :href="link.href" target="_blank">
    <NCard size="small" class="hover:scale-[1.02] transition-transform duration-200 ease-in-out">
      <NThing>
        <template #avatar>
          <NImage :src="issue.user?.avatar_url" class="w-16 h-16 rounded-md" />
        </template>
        <template #header>
          <CLink :href="link.href" target="_blank">
            {{ link.title }}
          </CLink>
        </template>
        <template #description>
          <CLink v-if="issue.user" :href="issue.user.html_url" target="_blank">
            {{ issue.user.login }}
          </CLink>
        </template>
      </NThing>
    </NCard>
  </CLink>
</template>
