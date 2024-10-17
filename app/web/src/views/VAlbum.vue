<script setup lang='ts'>
import type { QueryFuncRes } from './components/CLoadPages.vue'
import CSubTitle from '@/CSubTitle.vue'
import { NCard, NGrid, NGridItem, NSpace } from 'naive-ui'
import type { Issue } from '~/api/module/issue'
import issueApi from '~/api/module/issue'
import appConfig from '~/app.config'
import { useI18n } from '~/i18n'
import { hasFuncLabel } from '~/util/label'
import CPhotoCard from './components/CAlbumCard.vue'
import CLoadPages from './components/CLoadPages.vue'

const { t } = useI18n()
async function queryPagesFunc(page: number, perPage: number): Promise<QueryFuncRes<Issue>> {
  const labels = [appConfig.funcLabels.album]
  const datas: Issue[] = []

  if (page === 1) {
    const pinLabels = labels.concat(appConfig.funcLabels.pin)
    const pinData = await issueApi.all({
      labels: pinLabels.join(','),
    })
    datas.push(...pinData)
  }

  const data = await issueApi.page({
    page,
    per_page: perPage,
    labels: labels.join(','),
  })
  for (const issue of data) {
    if (hasFuncLabel(issue.labels, appConfig.funcLabels.pin)) {
      continue
    }
    datas.push(issue)
  }

  return {
    datas,
    hasNext: data.length === perPage,
  }
}
</script>

<template>
  <NSpace :vertical="true">
    <NCard size="small">
      <CSubTitle>
        {{ t('page.album.title') }}
      </CSubTitle>
    </NCard>
    <CLoadPages :query-pages-func="queryPagesFunc">
      <template #default="{ datas }">
        <NGrid cols="1 s:2 m:3 l:3 xl:4" responsive="screen" :x-gap="12" :y-gap="12">
          <NGridItem v-for="issue in datas" :key="issue.number">
            <CPhotoCard :issue="issue" />
            <div class="mt-4" />
          </NGridItem>
        </NGrid>
      </template>
    </CLoadPages>
  </NSpace>
</template>
