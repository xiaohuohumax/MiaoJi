<script setup lang='ts'>
import type { markdown } from '@xiaohuohumax/miaoji-util'
import { NCard, NIcon, NImage, NSpace } from 'naive-ui'
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
      <NSpace vertical>
        <div class="text-lg">
          {{ issue.title }}
        </div>
        <CReactions :reaction="issue.reactions" :issue-url="issue.html_url" />
      </NSpace>
    </NCard>
  </RouterLink>
</template>
