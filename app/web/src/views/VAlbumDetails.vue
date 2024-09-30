<script setup lang='ts'>
import type { Label } from '@xiaohuohumax/miaoji-api'
import CLink from '@/CLink.vue'
import CLabels from '@/CTags.vue'
import CTitle from '@/CTitle.vue'
import { markdown } from '@xiaohuohumax/miaoji-util'
import { NCard, NIcon, NImage, NSpace, NTime } from 'naive-ui'
import { ref } from 'vue'
import type { Issue } from '~/api/module/issue'
import issueApi from '~/api/module/issue'
import { IAperture } from '~/icons'
import { useAppStore } from '~/store/app'
import title from '~/util/title'
import CReactions from '~/views/components/CReactions.vue'
import CComment from './components/CComment.vue'
import CLoadData from './components/CLoadData.vue'

interface IssueImage {
  issue: Issue
  images: markdown.MarkdownImage[]
}

const props = defineProps<{ id: string }>()

const appStore = useAppStore()
const issueCache = appStore.getIssueCache(Number.parseInt(props.id))

const issueImage = ref<IssueImage>()
async function queryDataFunc(): Promise<IssueImage> {
  const id = Number.parseInt(props.id)
  const data = issueCache || await issueApi.get(id)
  const images = data.body ? markdown.parseImages(data.body) : []
  title.setTitle(data.title)
  return {
    issue: data,
    images,
  }
}
</script>

<template>
  <NSpace :vertical="true">
    <NCard :bordered="false">
      <CLoadData v-model:data="issueImage" :query-data-func="queryDataFunc">
        <template #success="{ data: { issue, images } }">
          <NSpace :vertical="true">
            <CTitle :title="issue.title" />
            <NSpace align="center">
              <CLink v-if="issue.user" :href="issue.user.html_url">
                {{ issue.user.login }}
              </CLink>
              <NTime :time="new Date(issue.updated_at)" type="relative" />
              <CLabels :labels="issue.labels as Label[]" />
              <CReactions :reaction="issue.reactions" :issue-url="issue.html_url" />
            </NSpace>
            <NImage v-for="image in images" :key="image.src" class="md:w-3/4" :src="image.src" :alt="image.alt" lazy>
              <template #placeholder>
                <div class="text-center p-2">
                  <NIcon size="30">
                    <IAperture class="animate-spin inline-block" />
                  </NIcon>
                </div>
              </template>
            </NImage>
          </NSpace>
        </template>
      </CLoadData>
    </NCard>
    <CComment :issue="issueImage?.issue" />
  </NSpace>
</template>
