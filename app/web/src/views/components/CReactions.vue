<script setup lang='ts'>
import type { Issue } from '@xiaohuohumax/miaoji-api'
import CLink from '@/CLink.vue'
import CPreIcon from '@/CPreIcon.vue'
import { steam } from '@xiaohuohumax/miaoji-util'
import { NFlex, NTag } from 'naive-ui'
import { IBarChart } from '~/icons'

type IssueReaction = Issue['reactions']

const props = defineProps<{
  reaction: IssueReaction
  issueUrl: string
}>()
type ReactionKey = keyof IssueReaction
const reactionMap: Record<ReactionKey, string> = {
  '+1': '👍',
  '-1': '👎',
  'laugh': '😄',
  'hooray': '🎉',
  'confused': '😕',
  'heart': '❤️',
  'rocket': '🚀',
  'eyes': '👀',
}
const reactionKeys = Object.keys(reactionMap) as ReactionKey[]

const reactions = Object.entries(props.reaction || {}).map(([key, value]) => {
  const reactionKey = key as ReactionKey
  if (!reactionKeys.includes(reactionKey) || value === 0) {
    return null
  }
  return {
    icon: reactionMap[reactionKey],
    count: value,
  }
}).filter(steam.filterNullFunc)
</script>

<template>
  <CPreIcon v-if="reactions.length > 0">
    <template #icon>
      <IBarChart />
    </template>
    <NFlex>
      <CLink v-for="r in reactions" :key="r.count" :href="issueUrl" target="_blank" @click.stop>
        <NTag :bordered="false" :checkable="true" class="bg-transparent">
          {{ r.icon }} {{ r.count }}
        </NTag>
      </CLink>
    </NFlex>
  </CPreIcon>
</template>
