<script setup lang='ts'>
import { NSpace, NTag } from 'naive-ui'
import { computed } from 'vue'
import type { Label } from '~/api/module/label'
import { ITag } from '~/icons'
import { RouteName } from '~/router/routes'
import { excludeFuncLabels } from '~/util/label'
import CPreIcon from './CPreIcon.vue'

const props = withDefaults(defineProps<{
  labels: Label[]
  showIcon?: boolean
}>(), {
  showIcon: true,
})
const emit = defineEmits(['update:label-click'])
const filteredLabels = computed(() => excludeFuncLabels(props.labels))
</script>

<template>
  <CPreIcon v-if="filteredLabels.length > 0">
    <template v-if="showIcon" #icon>
      <ITag />
    </template>
    <NSpace>
      <RouterLink
        v-for="label in filteredLabels" :key="label.name"
        :to="{ name: RouteName.Home, query: { label: label.name } }" @click="emit('update:label-click', label)"
      >
        <NTag :color="{ textColor: `#${label.color}` }" :bordered="false" :checkable="true">
          <span
            class="inline-block p-1 rounded-full shadow-md mr-1" :style="{
              backgroundColor: `#${label.color}`,
            }"
          />
          {{ label.name }}
        </NTag>
      </RouterLink>
    </NSpace>
  </CPreIcon>
</template>
