<script setup lang="ts">
import { type AnchorHTMLAttributes, computed, useAttrs } from 'vue'

defineProps</* @vue-ignore */ AnchorHTMLAttributes>()
const props = computed<AnchorHTMLAttributes>(() => {
  return useAttrs()
})
</script>

<template>
  <a v-bind="props" class="hover:text-orange-500 dark:hover:text-green-300 cursor-pointer">
    <slot />
  </a>
</template>
