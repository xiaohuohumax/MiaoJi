<script setup lang='ts'>
import type { markdown } from '@xiaohuohumax/miaoji-util'
import CLink from '@/CLink.vue'
import { NCard, NIcon, NImage, NSpace, NTime } from 'naive-ui'
import type { Issue } from '~/api/module/issue'
import { IAperture } from '~/icons'
import { RouteName } from '~/router/routes'
import CReactions from './CReactions.vue'

export interface Album {
  images: markdown.MarkdownImage[]
  issue: Issue
}

defineProps<Album>()
</script>

<template>
  <RouterLink :to="{ name: RouteName.AlbumDetail, params: { id: issue.number } }">
    <NCard size="small" :bordered="false">
      <NImage :src="images[0].src" :alt="images[0].alt" :preview-disabled="true" lazy>
        <template #placeholder>
          <div class="text-center p-2">
            <NIcon size="30">
              <IAperture class="animate-spin inline-block" />
            </NIcon>
          </div>
        </template>
      </NImage>
      <NSpace vertical size="small">
        <div class="text-lg">
          {{ issue.title }}
        </div>
        <NSpace>
          <CLink :href="issue.user?.html_url" target="_blank">
            {{ issue.user?.login }}
          </CLink>
          <NTime :time="new Date(issue.updated_at)" type="relative" />
        </NSpace>
        <CReactions :reaction="issue.reactions" :issue-url="issue.html_url" />
      </NSpace>
    </NCard>
  </RouterLink>
</template>
