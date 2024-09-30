<script setup lang='ts'>
import { NSpace, NTag } from 'naive-ui'
import { computed } from 'vue'
import type { Label } from '~/api/module/label'
import { RouteName } from '~/router/routes'
import { excludeFuncLabels } from '~/util/label'

const props = defineProps<{ labels: Label[] }>()
const emit = defineEmits(['update:label-click'])
const filteredLabels = computed(() => excludeFuncLabels(props.labels))
</script>

<template>
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
</template>
