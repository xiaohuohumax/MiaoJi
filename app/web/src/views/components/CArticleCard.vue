<script setup lang='ts'>
import CLabels from '@/CTags.vue'
import { markdown } from '@xiaohuohumax/miaoji-util'
import { NCard, NSpace, NTime } from 'naive-ui'
import type { Issue } from '~/api/module/issue'
import type { Label } from '~/api/module/label'
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
          <NTime :time="new Date(issue.updated_at)" type="relative" />
          <CLabels :labels="issue.labels as Label[]" />
          <CReactions :reaction="issue.reactions" :issue-url="issue.html_url" />
        </NSpace>
        <CMarkdown :id="issue.number" :content="config.excerpt" />
      </NSpace>
    </NCard>
  </RouterLink>
</template>
