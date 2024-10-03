<script setup lang='ts'>
import CAuthor from '@/CAuthor.vue'
import CRelativeTime from '@/CRelativeTime.vue'
import CLabels from '@/CTags.vue'
import { markdown } from '@xiaohuohumax/miaoji-util'
import { NCard, NSpace } from 'naive-ui'
import type { Issue } from '~/api/module/issue'
import { RouteName } from '~/router/routes'
import CMarkdown from '~/views/components/CMarkdown.vue'
import CReactions from './CReactions.vue'

const props = defineProps<{ issue: Issue }>()

interface ArticleMarkdownConfig {
  excerpt?: string
}
const config = markdown.parseConfig<ArticleMarkdownConfig>(props.issue.body || '')
</script>

<template>
  <RouterLink :to="{ name: RouteName.Article, params: { id: issue.number } }">
    <NCard :bordered="false">
      <NSpace :vertical="true">
        <h1 class="text-xl dark:text-green-300 text-orange-500">
          {{ issue.title }}
        </h1>
        <NSpace align="center">
          <CAuthor :user="issue.user" />
          <CRelativeTime :updated-at="issue.updated_at" />
          <CLabels :labels="issue.labels" />
          <CReactions :reaction="issue.reactions" :issue-url="issue.html_url" />
        </NSpace>
        <CMarkdown :id="issue.number" :content="config.excerpt" />
      </NSpace>
    </NCard>
  </RouterLink>
</template>
