<script setup lang='ts'>
import type { Issue } from '@xiaohuohumax/miaoji-api'
import type { ComponentExposed } from 'vue-component-type-helpers'
import type { QueryFuncRes } from './CLoadPages.vue'
import CLink from '@/CLink.vue'
import CRelativeTime from '@/CRelativeTime.vue'
import CSubTitle from '@/CSubTitle.vue'
import { NButton, NCard, NImage, NSpace, NThing } from 'naive-ui'
import { computed, nextTick, useTemplateRef, watch } from 'vue'
import type { Comment } from '~/api/module/comment'
import commentApi from '~/api/module/comment'
import appConfig from '~/app.config'
import { useI18n } from '~/i18n'
import { hasFuncLabel } from '~/util/label'
import CMarkdown from '~/views/components/CMarkdown.vue'
import CLoadPages from './CLoadPages.vue'
import CReactions from './CReactions.vue'

const props = defineProps<{
  issue?: Issue | null
}>()

const { t } = useI18n()
const isHidden = computed(() => props.issue && hasFuncLabel(props.issue.labels, appConfig.funcLabels.hiddenComment))
const loadPagesRef = useTemplateRef<ComponentExposed<typeof CLoadPages>>('loadPagesRef')

async function queryPagesFunc(page: number, perPage: number): Promise<QueryFuncRes<Comment>> {
  const data = await commentApi.page({
    page,
    per_page: perPage,
    issue_number: props.issue!.number,
  })
  return {
    datas: data,
    hasNext: data.length === perPage,
  }
}

watch(() => props.issue, () => {
  if (!props.issue && !isHidden.value) {
    return
  }
  nextTick(() => {
    loadPagesRef.value!.init()
    loadPagesRef.value!.queryPages(0)
  })
}, { immediate: true })
</script>

<template>
  <NCard size="small">
    <NSpace :vertical="true">
      <CSubTitle>
        {{ t('component.comment.title') }}
      </CSubTitle>
      <div v-if="isHidden" class="text-center">
        {{ t('component.comment.hiddenComment') }}
      </div>
      <CLoadPages v-else ref="loadPagesRef" :query-pages-func="queryPagesFunc" :auto-query="false" state="loading">
        <template #default="{ datas }">
          <NSpace :vertical="true">
            <CLink v-if="issue" :href="`${issue.html_url}#new_comment_field`" target="_blank">
              <NButton secondary class="w-full" type="info">
                {{ t('component.comment.toComment') }}
              </NButton>
            </CLink>
            <NThing v-for="comment in datas" :key="comment.id">
              <template #avatar>
                <NImage :src="comment.user?.avatar_url" class="w-16 h-16 rounded-md" />
              </template>
              <template #header>
                <CLink :href="comment.user?.html_url" target="_blank">
                  {{ comment.user?.login }}
                </CLink>
              </template>
              <template #description>
                <NSpace align="center">
                  <CRelativeTime :updated-at="comment.created_at" />
                  <CReactions :reaction="comment.reactions" :issue-url="comment.issue_url" />
                </NSpace>
                <CMarkdown :id="comment.id" :content="comment.body" />
              </template>
            </NThing>
          </NSpace>
        </template>
      </CLoadPages>
    </NSpace>
  </NCard>
</template>
