<script setup lang="ts">
import { useMessage } from 'naive-ui'
import LBody from './LBody.vue'
import LFooter from './LFooter.vue'
import LHeader from './LHeader.vue'

window.$message = useMessage()
</script>

<template>
  <div class="flex flex-col h-screen">
    <LHeader />
    <LBody class="flex-grow my-2" />
    <LFooter />
  </div>
</template>
