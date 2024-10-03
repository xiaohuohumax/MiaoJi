<script setup lang='ts'>
import CAuthor from '@/CAuthor.vue'
import CRelativeTime from '@/CRelativeTime.vue'
import { markdown } from '@xiaohuohumax/miaoji-util'
import { NCard, NIcon, NImage, NSpace } from 'naive-ui'
import { computed } from 'vue'
import type { Issue } from '~/api/module/issue'
import { IAperture } from '~/icons'
import { RouteName } from '~/router/routes'
import CReactions from './CReactions.vue'

const props = defineProps<{
  issue: Issue
}>()

const images = computed(() => {
  return props.issue.body
    ? markdown.parseImages(props.issue.body)
    : []
})
</script>

<template>
  <RouterLink :to="{ name: RouteName.AlbumDetail, params: { id: issue.number } }">
    <NCard size="small" class="hover:scale-[1.02] transition-transform duration-200 ease-in-out">
      <template v-if="images.length > 0" #cover>
        <NImage class="w-full" :src="images[0].src" :alt="images[0].alt" :preview-disabled="true" lazy>
          <template #placeholder>
            <div class="flex items-center justify-center w-full py-20">
              <NIcon size="30">
                <IAperture class="animate-spin inline-block" />
              </NIcon>
            </div>
          </template>
        </NImage>
      </template>
      <NSpace vertical size="small">
        <div class="text-lg">
          {{ issue.title }}
        </div>
        <NSpace>
          <CAuthor :user="issue.user" />
          <CRelativeTime :updated-at="issue.updated_at" />
        </NSpace>
        <CReactions :reaction="issue.reactions" :issue-url="issue.html_url" />
      </NSpace>
    </NCard>
  </RouterLink>
</template>
