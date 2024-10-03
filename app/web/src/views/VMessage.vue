<script setup lang='ts'>
import CSubTitle from '@/CSubTitle.vue'
import { NCard, NSpace, useMessage } from 'naive-ui'
import { ref } from 'vue'
import type { Issue } from '~/api/module/issue'
import issueApi from '~/api/module/issue'
import appConfig from '~/app.config'
import { useI18n } from '~/i18n'
import CMarkdown from '~/views/components/CMarkdown.vue'
import CReactions from '~/views/components/CReactions.vue'
import CComment from './components/CComment.vue'
import CLoadData from './components/CLoadData.vue'

const { t } = useI18n()
const message = useMessage()
const issue = ref<Issue>()
async function queryDataFunc(): Promise<Issue> {
  const data = await issueApi.page({
    page: 1,
    per_page: 1,
    labels: appConfig.funcLabels.message,
  })
  if (data.length === 0) {
    message.error(t('api.error.notFound'))
    throw new Error('not found')
  }
  return data[0]
}
</script>

<template>
  <NSpace :vertical="true">
    <NSpace :vertical="true">
      <NCard size="small">
        <CSubTitle>
          {{ t('page.message.title') }}
        </CSubTitle>
      </NCard>
      <NCard size="small">
        <CLoadData v-model:data="issue" :query-data-func="queryDataFunc">
          <template #success="{ data }">
            <CMarkdown :id="data.number" :content="data.body" />
            <CReactions :reaction="data.reactions" :issue-url="data.html_url" />
          </template>
        </CLoadData>
      </NCard>
    </NSpace>
    <CComment :issue="issue" />
  </NSpace>
</template>
