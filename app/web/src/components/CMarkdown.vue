<template>
    <MdPreview :modelValue="text" v-if="text != null" :theme="appStore.theme.markdown" :editorId="'editor-' + id + ''" />
</template>
<script setup lang="ts">
import { MdPreview } from 'md-editor-v3';
import { useAppStore } from '@/store/app.store';
import 'md-editor-v3/lib/style.css';
defineProps<{
    text: string | null,
    id: string | number
}>();

const appStore = useAppStore();
</script>

<style scoped>
::v-deep(.md-editor-preview-wrapper) {
    padding: 0 !important;
}

::v-deep(#md-editor-v3-preview > :nth-child(1)) {
    margin-top: 0 !important;
}

::v-deep(#md-editor-v3-preview > :last-child) {
    margin-bottom: 0 !important;
}

.md-editor {
    background: none !important;
}

.medium-zoom-image {
    border-radius: 8px !important;
}

.default-theme img {
    border: none !important;
}
</style>