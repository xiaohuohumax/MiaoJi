<script setup lang='ts'>
import CLink from '@/CLink.vue'
import { markdown } from '@xiaohuohumax/miaoji-util'
import { NCard, NIcon, NImage, NThing } from 'naive-ui'
import { computed } from 'vue'
import type { Issue } from '~/api/module/issue'
import appConfig from '~/app.config'
import { IHashtag } from '~/icons'
import { hasFuncLabel } from '~/util/label'

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
const isPin = computed(() => hasFuncLabel(props.issue.labels, appConfig.funcLabels.pin))
</script>

<template>
  <CLink :href="link.href" target="_blank">
    <NCard size="small" class="relative hover:scale-[1.02] transition-transform duration-200 ease-in-out">
      <NIcon v-if="isPin" class="absolute top-0 right-0 z-30 font-bold dark:text-green-300 text-orange-500" :size="24">
        <IHashtag />
      </NIcon>
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
