<script setup lang='ts'>
import type { IssueSearch, Label } from '@xiaohuohumax/miaoji-api'
import type { ComponentExposed } from 'vue-component-type-helpers'
import type { QueryFuncRes } from './CLoadPages.vue'
import CLink from '@/CLink.vue'
import CLabels from '@/CTags.vue'
import { NButton, NCard, NIcon, NInput, NInputGroup, NList, NListItem, NModal, NSelect, NSpace } from 'naive-ui'
import { nextTick, ref, useTemplateRef, watch } from 'vue'
import { useRouter } from 'vue-router'
import issueApi from '~/api/module/issue'
import appConfig from '~/app.config'
import { useI18n } from '~/i18n'
import { IDocument, IPicture, ISearch, ITag } from '~/icons'
import { RouteName } from '~/router/routes'
import { useAppStore } from '~/store/app'
import CLoadPages from './CLoadPages.vue'

const { t } = useI18n()
const appStore = useAppStore()
const router = useRouter()
type Mode = 'tag' | 'article' | 'album'
const show = ref(false)
const mode = ref<Mode>('tag')
const select = ref('')
const labels = ref<Label[]>([])

const loadPagesRef = useTemplateRef<ComponentExposed<typeof CLoadPages>>('loadPagesRef')

async function queryPagesFunc(page: number, perPage: number): Promise<QueryFuncRes<IssueSearch>> {
  const label = mode.value === 'article'
    ? appConfig.funcLabels.article
    : appConfig.funcLabels.album
  const data = await issueApi.search({
    page,
    per_page: perPage,
    keyword: select.value,
    commands: { label },
  })
  return {
    datas: data,
    hasNext: data.length === perPage,
  }
}

function handleSelect() {
  if (mode.value === 'tag') {
    labels.value = select.value === ''
      ? appStore.labels
      : appStore.labels.filter(label => label.name.includes(select.value))
    return
  }
  if (loadPagesRef.value) {
    loadPagesRef.value.init()
    loadPagesRef.value.queryPages(0)
  }
}

function handleIssueClick(issueNumber: number) {
  router.push({
    name: mode.value === 'article'
      ? RouteName.Article
      : RouteName.AlbumDetail,
    params: {
      id: issueNumber,
    },
  })
  show.value = false
}

watch(() => mode.value, () => {
  nextTick(() => {
    if (loadPagesRef.value) {
      loadPagesRef.value.init()
    }
    labels.value = []
  })
})
</script>

<template>
  <CLink class="mr-2">
    <NIcon :size="22">
      <ISearch @click="show = true" />
    </NIcon>
  </CLink>
  <NModal :show="show" :mask-closable="true" display-directive="show" @mask-click="show = false">
    <div class="flex" style="margin-top: calc(100svh / 6);">
      <NCard aria-modal="true" :bordered="false">
        <NSpace :vertical="true">
          <NInputGroup>
            <NSelect
              v-model:value="mode" class="w-36" size="large" :options="[
                {
                  label: t('component.headerSearch.radioTag'),
                  value: 'tag',
                },
                {
                  label: t('component.headerSearch.radioArticle'),
                  value: 'article',
                },
                {
                  label: t('component.headerSearch.radioAlbum'),
                  value: 'album',
                },
              ]"
            >
              <template #arrow>
                <transition name="slide-left">
                  <NIcon>
                    <IDocument v-if="mode === 'article'" />
                    <ITag v-else-if="mode === 'tag'" />
                    <IPicture v-else />
                  </NIcon>
                </transition>
              </template>
            </NSelect>
            <NInput v-model:value.trim="select" size="large" @keydown.enter="handleSelect" />
            <NButton type="success" size="large" @click="handleSelect">
              {{ t('component.headerSearch.search') }}
            </NButton>
          </NInputGroup>
          <CLabels v-if="mode === 'tag'" :labels="labels" @update:label-click="show = false" />
          <CLoadPages v-else ref="loadPagesRef" :query-pages-func="queryPagesFunc" :auto-query="false">
            <template #default="{ datas }">
              <NList hoverable clickable :show-divider="false" class="bg-none">
                <NListItem v-for="(issue, index) in datas" :key="issue.number" @click="handleIssueClick(issue.number)">
                  #{{ index + 1 }}<span class="ml-2">{{ issue.title }}</span>
                </NListItem>
              </NList>
            </template>
          </CLoadPages>
        </NSpace>
      </NCard>
    </div>
  </NModal>
</template>
