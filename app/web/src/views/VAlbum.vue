<script setup lang='ts'>
import type { QueryFuncRes } from './components/CLoadPages.vue'
import CSubTitle from '@/CSubTitle.vue'
import { NCard, NGrid, NGridItem, NSpace } from 'naive-ui'
import type { Issue } from '~/api/module/issue'
import issueApi from '~/api/module/issue'
import appConfig from '~/app.config'
import { useI18n } from '~/i18n'
import CPhotoCard from './components/CAlbumCard.vue'
import CLoadPages from './components/CLoadPages.vue'

const { t } = useI18n()
async function queryPagesFunc(page: number, perPage: number): Promise<QueryFuncRes<Issue>> {
  const data = await issueApi.page({
    page,
    per_page: perPage,
    labels: appConfig.funcLabels.album,
  })
  return {
    datas: data,
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
