<script setup lang='ts'>
import type { Link } from './components/CLinkCard.vue'
import type { QueryFuncRes } from './components/CLoadPages.vue'
import CLink from '@/CLink.vue'
import CSubTitle from '@/CSubTitle.vue'
import { markdown, steam } from '@xiaohuohumax/miaoji-util'
import { NButton, NCard, NGrid, NGridItem, NSpace } from 'naive-ui'
import { computed } from 'vue'
import type { Issue } from '~/api/module/issue'
import issueApi from '~/api/module/issue'
import appConfig from '~/app.config'
import { useI18n } from '~/i18n'
import CLinkCard from './components/CLinkCard.vue'
import CLoadPages from './components/CLoadPages.vue'

const { t } = useI18n()
async function queryPagesFunc(page: number, perPage: number): Promise<QueryFuncRes<Issue>> {
  const data = await issueApi.page({
    page,
    per_page: perPage,
    labels: appConfig.funcLabels.link,
  })
  return {
    datas: data,
    hasNext: data.length === perPage,
  }
}

function issueToLink(issues: Issue[]): Link[] {
  return issues.map((issue) => {
    if (!issue.body) {
      return null
    }
    const links = markdown.parseLinks(issue.body)
    if (links.length === 0) {
      return null
    }
    return {
      title: links[0].content,
      href: links[0].href,
      issue,
    }
  }).filter(steam.filterNullFunc)
}

const applyHref = computed(() => {
  return [
    appConfig.repository,
    '/issues/new?title=',
    encodeURIComponent(t('page.link.applyTitle')),
    '&body=',
    encodeURIComponent(t('page.link.applyContent')),
  ].join('')
})
</script>

<template>
  <NSpace :vertical="true">
    <NCard :bordered="false">
      <NSpace :vertical="true">
        <CSubTitle :title="t('page.link.title')" />
        <CLoadPages :query-pages-func="queryPagesFunc">
          <template #default="{ datas }">
            <NGrid cols="1 s:2 m:3 l:4 xl:5 2xl:6" responsive="screen" :x-gap="12" :y-gap="12">
              <NGridItem v-for="link in issueToLink(datas)" :key="link.issue.number">
                <CLinkCard v-bind="link" />
              </NGridItem>
            </NGrid>
          </template>
        </CLoadPages>
        <CLink :href="applyHref" target="_blank">
          <NButton class="w-full" quaternary>
            {{ t('page.link.toApply') }}
          </NButton>
        </CLink>
      </NSpace>
    </NCard>
  </NSpace>
</template>
