<script setup lang='ts'>
import CAuthor from '@/CAuthor.vue'
import CRelativeTime from '@/CRelativeTime.vue'
import CTags from '@/CTags.vue'
import { markdown } from '@xiaohuohumax/miaoji-util'
import { NCard, NIcon, NSpace } from 'naive-ui'
import { computed } from 'vue'
import type { Issue } from '~/api/module/issue'
import appConfig from '~/app.config'
import { IHashtag } from '~/icons'
import { RouteName } from '~/router/routes'
import { hasFuncLabel } from '~/util/label'
import CMarkdown from '~/views/components/CMarkdown.vue'
import CReactions from './CReactions.vue'

const props = defineProps<{ issue: Issue }>()

interface ArticleMarkdownConfig {
  excerpt?: string
}
const config = markdown.parseConfig<ArticleMarkdownConfig>(props.issue.body || '')
const isPin = computed(() => hasFuncLabel(props.issue.labels, appConfig.funcLabels.pin))
</script>

<template>
  <RouterLink :to="{ name: RouteName.Article, params: { id: issue.number } }">
    <NCard size="small" class="relative hover:scale-[1.02] transition-transform duration-200 ease-in-out">
      <NIcon v-if="isPin" class="absolute top-0 right-0 z-30 font-bold dark:text-green-300 text-orange-500" :size="24">
        <IHashtag />
      </NIcon>
      <NSpace :vertical="true">
        <h1 class="text-xl dark:text-green-300 text-orange-500">
          {{ issue.title }}
        </h1>
        <NSpace align="center">
          <CAuthor :user="issue.user" />
          <CRelativeTime :updated-at="issue.updated_at" />
          <CTags :labels="issue.labels" />
          <CReactions :reaction="issue.reactions" :issue-url="issue.html_url" />
        </NSpace>
        <CMarkdown :id="issue.number" :content="config.excerpt" />
      </NSpace>
    </NCard>
  </RouterLink>
</template>
