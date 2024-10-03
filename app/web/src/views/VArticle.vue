<script setup lang='ts'>
import CAuthor from '@/CAuthor.vue'
import CRelativeTime from '@/CRelativeTime.vue'
import CLabels from '@/CTags.vue'
import CTitle from '@/CTitle.vue'
import { NCard, NSpace } from 'naive-ui'
import { ref } from 'vue'
import type { Issue } from '~/api/module/issue'
import issueApi from '~/api/module/issue'
import { useAppStore } from '~/store/app'
import title from '~/util/title'
import CEditAtGithub from '~/views/components/CEditAtGithub.vue'
import CMarkdown from '~/views/components/CMarkdown.vue'
import CReactions from '~/views/components/CReactions.vue'
import CComment from './components/CComment.vue'
import CLoadData from './components/CLoadData.vue'

const props = defineProps<{
  id: string
}>()

const appStore = useAppStore()
const issueCache = appStore.getIssueCache(Number.parseInt(props.id))

const issue = ref<Issue>()
async function queryDataFunc(): Promise<Issue> {
  const issue = issueCache || await issueApi.get(Number.parseInt(props.id))
  title.setTitle(issue.title)
  return issue
}
</script>

<template>
  <NSpace :vertical="true">
    <NCard size="small">
      <CLoadData v-model:data="issue" :query-data-func="queryDataFunc">
        <template #success="{ data }">
          <NSpace :vertical="true">
            <CTitle>{{ data.title }}</CTitle>
            <NSpace align="center">
              <CAuthor :user="data.user" />
              <CRelativeTime :updated-at="data.updated_at" />
              <CEditAtGithub :url="data.html_url" />
              <CLabels :labels="data.labels" />
              <CReactions :reaction="data.reactions" :issue-url="data.html_url" />
            </NSpace>
            <CMarkdown :id="data.number" :content="data.body" />
          </NSpace>
        </template>
      </CLoadData>
    </NCard>
    <CComment :issue="issue" />
  </NSpace>
</template>
