<script setup lang='ts'>
import type { Album } from './components/CAlbumCard.vue'
import type { QueryFuncRes } from './components/CLoadPages.vue'
import CSubTitle from '@/CSubTitle.vue'
import { markdown, steam } from '@xiaohuohumax/miaoji-util'
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

function issueToAlbum(issues: Issue[]): Album[] {
  return issues.map((issue) => {
    if (!issue.body) {
      return null
    }
    const images = markdown.parseImages(issue.body)
    if (images.length === 0) {
      return null
    }
    return {
      images,
      issue,
    }
  }).filter(steam.filterNullFunc)
}
</script>

<template>
  <NCard :bordered="false">
    <NSpace :vertical="true">
      <CSubTitle :title="t('page.album.title')" />
      <CLoadPages :query-pages-func="queryPagesFunc">
        <template #default="{ datas }">
          <NGrid cols="1 s:2 m:3 l:3 xl:4" responsive="screen" :x-gap="12" :y-gap="12">
            <NGridItem v-for="album in issueToAlbum(datas)" :key="album.issue.number">
              <CPhotoCard v-bind="album" />
            </NGridItem>
          </NGrid>
        </template>
      </CLoadPages>
    </NSpace>
  </NCard>
</template>
