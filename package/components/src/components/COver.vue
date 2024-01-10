<template>
    <div class="text-center font-bold py-4">
        <slot>{{ context }}</slot>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    context: string
}>();
</script>