<script setup lang='ts'>
import type { IssueSearch, Label } from '@xiaohuohumax/miaoji-api'
import type { ComponentExposed } from 'vue-component-type-helpers'
import type { QueryFuncRes } from './CLoadPages.vue'
import CLink from '@/CLink.vue'
import CTags from '@/CTags.vue'
import { NButton, NCard, NIcon, NInput, NInputGroup, NList, NListItem, NModal, NSelect, NSpace } from 'naive-ui'
import { ref, useTemplateRef, watch } from 'vue'
import { useRouter } from 'vue-router'
import issueApi from '~/api/module/issue'
import appConfig from '~/app.config'
import { useI18n } from '~/i18n'
import { IDocument, IPicture, ISearch, ITag } from '~/icons'
import { RouteName } from '~/router/routes'
import { useAppStore } from '~/store/app'
import { excludeFuncLabels } from '~/util/label'
import { sleep } from '~/util/time'
import CLoadPages from './CLoadPages.vue'

const { t } = useI18n()
const appStore = useAppStore()
const router = useRouter()
type Mode = 'tag' | 'article' | 'album'
const show = ref(false)
const mode = ref<Mode>('tag')
const select = ref('')

const loadPagesRef = useTemplateRef<ComponentExposed<typeof CLoadPages>>('loadPagesRef')

async function queryPagesFunc(page: number, perPage: number): Promise<QueryFuncRes<IssueSearch | Label>> {
  const datas: (IssueSearch | Label)[] = []
  if (mode.value === 'tag') {
    const labels = excludeFuncLabels(select.value === ''
      ? appStore.labels
      : appStore.labels.filter(label => label.name.includes(select.value)))
    const labelsIndex = (page - 1) * perPage
    await sleep(Math.random() * 1000)
    datas.push(...labels.slice(labelsIndex, labelsIndex + perPage))
  }
  else {
    const label = mode.value === 'article'
      ? appConfig.funcLabels.article
      : appConfig.funcLabels.album
    const data = await issueApi.search({
      page,
      per_page: perPage,
      keyword: select.value,
      commands: { label },
    })
    datas.push(...data)
  }
  return {
    datas,
    hasNext: datas.length === perPage,
  }
}

function handleSelect() {
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

watch(() => mode.value, () => loadPagesRef.value?.init())
</script>

<template>
  <CLink class="mr-2">
    <NIcon :size="22">
      <ISearch @click="show = true" />
    </NIcon>
  </CLink>
  <NModal :show="show" :mask-closable="true" display-directive="show" @mask-click="show = false">
    <div class="flex w-[540px] px-2 md:px-0" style="margin-top: calc(100svh / 6);">
      <NCard aria-modal="true">
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
            <NButton secondary type="success" size="large" @click="handleSelect">
              {{ t('component.headerSearch.search') }}
            </NButton>
          </NInputGroup>
          <CLoadPages ref="loadPagesRef" :query-pages-func="queryPagesFunc" :auto-query="false">
            <template #default="{ datas }">
              <CTags v-if="mode === 'tag'" :key="datas.length" :show-icon="false" :labels="datas as Label[]" @update:label-click="show = false" />
              <NList v-else hoverable clickable :show-divider="false" class="bg-none w-full">
                <NListItem
                  v-for="(issue, index) in datas as IssueSearch[]" :key="issue.number"
                  @click="handleIssueClick(issue.number)"
                >
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
