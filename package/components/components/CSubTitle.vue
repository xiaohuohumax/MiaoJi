<template>
    <NCard size="small" :bordered="false">
        <div class="font-bold text-lg">
            {{ context }}
        </div>
    </NCard>
</template>
<script setup lang="ts">
import { NCard } from 'naive-ui';
defineProps<{
    context: string
}>();
</script>