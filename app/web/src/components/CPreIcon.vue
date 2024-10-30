<script setup lang="ts">
import { NFlex, NIcon } from 'naive-ui'
</script>

<template>
  <NFlex :size="2" align="center" justify="start">
    <NIcon v-if="$slots.icon">
      <slot name="icon" />
    </NIcon>
    <slot />
  </NFlex>
</template>
