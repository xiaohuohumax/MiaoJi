<script setup lang='ts'>
import type { Label } from '@xiaohuohumax/miaoji-api'
import CLink from '@/CLink.vue'
import CLabels from '@/CTags.vue'
import CTitle from '@/CTitle.vue'
import { NCard, NSpace, NTime } from 'naive-ui'
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
    <NCard :bordered="false">
      <CLoadData v-model:data="issue" :query-data-func="queryDataFunc">
        <template #success="{ data }">
          <NSpace :vertical="true">
            <CTitle :title="data.title" />
            <NSpace align="center">
              <CLink v-if="data.user" :href="data.user.html_url" target="_blank">
                {{ data.user.login }}
              </CLink>
              <NTime :time="new Date(data.updated_at)" type="relative" />
              <CLabels :labels="data.labels as Label[]" />
              <CReactions :reaction="data.reactions" :issue-url="data.html_url" />
              <CEditAtGithub :url="data.html_url" />
            </NSpace>
            <CMarkdown :id="data.number" :content="data.body" />
          </NSpace>
        </template>
      </CLoadData>
    </NCard>
    <CComment :issue="issue" />
  </NSpace>
</template>
