<script setup lang='ts'>
import type { ComponentExposed } from 'vue-component-type-helpers'
import type { QueryFuncRes } from './components/CLoadPages.vue'
import { NSpace } from 'naive-ui'
import { onActivated, useTemplateRef } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import type { Issue } from '~/api/module/issue'
import issueApi from '~/api/module/issue'
import appConfig from '~/app.config'
import CDocCard from '~/views/components/CArticleCard.vue'
import CBanner from './components/CBanner.vue'
import CLoadPages from './components/CLoadPages.vue'

const props = defineProps<{ label?: string }>()

const loadPagesRef = useTemplateRef<ComponentExposed<typeof CLoadPages>>('loadPagesRef')

async function queryPagesFunc(page: number, perPage: number): Promise<QueryFuncRes<Issue>> {
  const labels = [appConfig.funcLabels.article]
  if (props.label) {
    labels.push(props.label)
  }
  const data = await issueApi.page({
    page,
    per_page: perPage,
    labels: labels.join(','),
  })
  return {
    datas: data,
    hasNext: data.length === perPage,
  }
}

let oldSTop = 0
const beginBottom = 100

function handleScroll() {
  const sTop = document.documentElement.scrollTop
  const cHeight = document.documentElement.clientHeight
  const sHeight = document.documentElement.scrollHeight

  const viewH = sTop + cHeight + beginBottom
  if (oldSTop < sTop && viewH >= sHeight) {
    loadPagesRef.value!.queryPages(1)
  }
}

onActivated(() => {
  window.scrollTo(0, oldSTop)
  window.addEventListener('scroll', handleScroll)
})

onBeforeRouteLeave(() => {
  oldSTop = document.documentElement.scrollTop
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <NSpace :vertical="true">
    <CBanner />
    <CLoadPages ref="loadPagesRef" :query-pages-func="queryPagesFunc">
      <template #default="{ datas }">
        <NSpace :vertical="true">
          <CDocCard v-for="issue in datas" :key="issue.number" :issue="issue" />
          <div class="mt-4" />
        </NSpace>
      </template>
    </CLoadPages>
  </NSpace>
</template>
