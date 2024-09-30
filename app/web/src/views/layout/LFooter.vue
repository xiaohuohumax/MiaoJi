<script lang="ts" setup>
import CLink from '@/CLink.vue'
import { NIcon, NSpace } from 'naive-ui'
import appConfig from '~/app.config'
import { IGithubCircle } from '~/icons'
</script>

<template>
  <div class="container mx-auto text-xs">
    <NSpace align="center" justify="center" class="p-7">
      <NSpace align="center" justify="center" :size="0">
        <NIcon :size="18">
          <IGithubCircle />
        </NIcon>
        <CLink :href="appConfig.homepage">
          {{ appConfig.appName }} v{{ appConfig.version }}
        </CLink>
      </NSpace>
    </NSpace>
  </div>
</template>
