<script setup lang='ts' generic="D">
import awaitTo from 'await-to-js'
import { NButton, NEmpty, NIcon, NSpace } from 'naive-ui'
import { ref } from 'vue'
import appConfig from '~/app.config'
import { useI18n } from '~/i18n'
import { IAperture } from '~/icons'

export type State = 'init' | 'loading' | 'error' | 'more' | 'over' | 'empty'
export interface QueryFuncRes<D> {
  datas: D[]
  hasNext: boolean
}

const props = withDefaults(defineProps<{
  perPage?: number
  autoQuery?: boolean
  state?: State
  queryPagesFunc: (page: number, perPage: number) => Promise<QueryFuncRes<D>>
}>(), {
  perPage: appConfig.perPage,
  autoQuery: true,
  state: 'init',
})

const { t } = useI18n()
const datas = defineModel<D[]>('datas', { default: () => [] })
const page = ref(1)
const s = ref<State>(props.state)

async function queryPages(op: number) {
  if (s.value === 'empty' || s.value === 'over') {
    return
  }
  s.value = 'loading'
  page.value += op
  const [err, res] = await awaitTo(props.queryPagesFunc(page.value, props.perPage))
  if (err) {
    s.value = 'error'
    return
  }
  datas.value.push(...res.datas)
  s.value = res.hasNext
    ? 'more'
    : datas.value.length === 0
      ? 'empty'
      : 'over'
}

if (props.autoQuery) {
  queryPages(0)
}

function init() {
  s.value = 'init'
  page.value = 1
  datas.value = []
}

defineExpose({
  init,
  queryPages,
})
</script>

<template>
  <NSpace :vertical="true">
    <slot :datas="datas" />
    <slot v-if="s === 'loading'" name="loading">
      <div class="text-center p-2">
        <NIcon :size="30">
          <IAperture class="animate-spin inline-block" />
        </NIcon>
      </div>
    </slot>
    <div v-else-if="s === 'error'" @click="queryPages(0)">
      <slot name="error">
        <NButton class="w-full" secondary type="warning">
          {{ t('component.loadPages.retry') }}
        </NButton>
      </slot>
    </div>
    <div v-else-if="s === 'more'" @click="queryPages(1)">
      <slot name="more">
        <NButton class="w-full" secondary type="info">
          {{ t('component.loadPages.more') }}
        </NButton>
      </slot>
    </div>
    <slot v-else-if="s === 'over'" name="over">
      <p class="text-center">
        {{ t('component.loadPages.over') }}
      </p>
    </slot>
    <slot v-else-if="s === 'empty'" name="empty">
      <NEmpty class="p-4" />
    </slot>
  </NSpace>
</template>
