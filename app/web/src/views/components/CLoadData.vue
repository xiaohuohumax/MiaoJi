<script setup lang='ts' generic="D">
import awaitTo from 'await-to-js'
import { NButton, NIcon, NSpace } from 'naive-ui'
import { ref } from 'vue'
import { useI18n } from '~/i18n'
import { IAperture } from '~/icons'

export type State = 'init' | 'loading' | 'error' | 'success'

const props = withDefaults(defineProps<{
  autoQuery?: boolean
  queryDataFunc: () => Promise<D>
}>(), {
  autoQuery: true,
})

const { t } = useI18n()
const data = defineModel<D>('data')
const state = ref<State>('init')

async function queryData() {
  state.value = 'loading'
  const [err, res] = await awaitTo(props.queryDataFunc())
  if (err) {
    state.value = 'error'
    return
  }
  data.value = res
  state.value = 'success'
}

if (props.autoQuery) {
  queryData()
}

function init() {
  state.value = 'init'
  data.value = undefined
}

defineExpose({
  init,
  queryData,
})
</script>

<template>
  <NSpace :vertical="true">
    <slot v-if="state === 'loading'" name="loading">
      <div class="text-center p-2">
        <NIcon :size="30">
          <IAperture class="animate-spin inline-block" />
        </NIcon>
      </div>
    </slot>
    <slot v-else-if="state === 'error'" name="error">
      <NButton class="w-full" secondary type="warning" @click="queryData">
        {{ t('component.loadData.retry') }}
      </NButton>
    </slot>
    <slot v-else-if="state === 'success'" name="success" :data="data as D" />
  </NSpace>
</template>
