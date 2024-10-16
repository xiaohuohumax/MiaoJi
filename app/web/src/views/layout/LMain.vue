<script setup lang="ts">
import { NBackTop, useLoadingBar, useMessage } from 'naive-ui'
import { useIsMdScreen } from '~/use/media-query'
import LBody from './LBody.vue'
import LFooter from './LFooter.vue'
import LHeader from './LHeader.vue'

window.$message = useMessage()
window.$loadingBar = useLoadingBar()

const isMdScreen = useIsMdScreen()
</script>

<template>
  <div class="flex flex-col h-screen">
    <LHeader />
    <LBody class="flex-grow my-2" />
    <LFooter />
  </div>
  <NBackTop :right="isMdScreen ? 40 : 20" :bottom="isMdScreen ? 40 : 20" />
</template>
