<script setup lang='ts'>
defineProps<{ title: string }>()
</script>

<template>
  <h2 class="text-lg mb-2  dark:text-green-300 text-orange-500">
    {{ title }}
  </h2>
</template>
