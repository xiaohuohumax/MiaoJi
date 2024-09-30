<script setup lang='ts'>
defineProps<{ title: string }>()
</script>

<template>
  <h1 class="text-2xl mb-2  dark:text-green-300 text-orange-500">
    {{ title }}
  </h1>
</template>
