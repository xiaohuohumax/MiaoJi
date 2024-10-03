<script setup lang="ts">
import { NIcon, NSpace } from 'naive-ui'
</script>

<template>
  <NSpace :size="2" align="center" justify="start">
    <NIcon>
      <slot name="icon" />
    </NIcon>
    <slot />
  </NSpace>
</template>
