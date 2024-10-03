<script setup lang='ts'>
import CAuthor from '@/CAuthor.vue'
import CRelativeTime from '@/CRelativeTime.vue'
import CLabels from '@/CTags.vue'
import CTitle from '@/CTitle.vue'
import { markdown } from '@xiaohuohumax/miaoji-util'
import { NCard, NIcon, NImage, NSpace } from 'naive-ui'
import { ref } from 'vue'
import type { Issue } from '~/api/module/issue'
import issueApi from '~/api/module/issue'
import { IAperture } from '~/icons'
import { useAppStore } from '~/store/app'
import title from '~/util/title'
import CReactions from '~/views/components/CReactions.vue'
import CComment from './components/CComment.vue'
import CEditAtGithub from './components/CEditAtGithub.vue'
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
    <NCard>
      <CLoadData v-model:data="issueImage" :query-data-func="queryDataFunc">
        <template #success="{ data: { issue, images } }">
          <NSpace :vertical="true">
            <CTitle>{{ issue.title }}</CTitle>
            <NSpace align="center">
              <CAuthor :user="issue.user" />
              <CRelativeTime :updated-at="issue.updated_at" />
              <CEditAtGithub :url="issue.html_url" />
              <CLabels :labels="issue.labels" />
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
