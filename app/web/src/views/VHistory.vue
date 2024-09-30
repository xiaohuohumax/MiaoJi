<script setup lang='ts'>
import type { Label } from '@xiaohuohumax/miaoji-api'
import type { QueryFuncRes } from './components/CLoadPages.vue'
import CSubTitle from '@/CSubTitle.vue'
import { NCard, NSpace, NTime, NTimeline, NTimelineItem } from 'naive-ui'
import type { Issue } from '~/api/module/issue'
import issueApi from '~/api/module/issue'
import appConfig from '~/app.config'
import { useI18n } from '~/i18n'
import CMarkdown from '~/views/components/CMarkdown.vue'
import CLoadPages from './components/CLoadPages.vue'
import CReactions from './components/CReactions.vue'

const { t } = useI18n()
async function queryPagesFunc(page: number, perPage: number): Promise<QueryFuncRes<Issue>> {
  const data = await issueApi.page({
    page,
    per_page: perPage,
    labels: appConfig.funcLabels.history,
  })
  return {
    datas: data,
    hasNext: data.length === perPage,
  }
}

function getHistoryColor(issue: Issue) {
  for (const { name, color } of issue.labels as Label[]) {
    if (name.startsWith(appConfig.funcLabels.history) && name !== appConfig.funcLabels.history) {
      return `#${color}`
    }
  }
}
</script>

<template>
  <NCard :bordered="false">
    <NSpace :vertical="true">
      <CSubTitle>
        {{ t('page.history.title') }}
      </CSubTitle>
      <CLoadPages :query-pages-func="queryPagesFunc">
        <template #default="{ datas }">
          <NTimeline>
            <NTimelineItem v-for="issue in datas" :key="issue.number" :color="getHistoryColor(issue)">
              <template #header>
                <div class="text-xl">
                  {{ issue.title }}
                </div>
              </template>
              <template #footer>
                <NSpace vertical size="small">
                  <CReactions :reaction="issue.reactions" :issue-url="issue.html_url" />
                  <NSpace>
                    <span>
                      {{ t('common.createdAt') }}
                      <NTime :time="new Date(issue.created_at)" />
                    </span>
                    <span>
                      {{ t('common.updatedAt') }}
                      <NTime :time="new Date(issue.updated_at)" type="relative" />
                    </span>
                  </NSpace>
                  <CMarkdown :id="issue.number" :content="issue.body" />
                </NSpace>
              </template>
            </NTimelineItem>
          </NTimeline>
        </template>
      </CLoadPages>
    </NSpace>
  </NCard>
</template>
