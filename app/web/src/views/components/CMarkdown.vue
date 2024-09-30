<script setup lang="ts">
import { MdPreview } from 'md-editor-v3'
import { useAppStore } from '~/store/app'
import 'md-editor-v3/lib/style.css'

defineProps<{
  content?: string | null
  id: number
}>()
const appStore = useAppStore()
</script>

<template>
  <MdPreview
    v-if="content" :model-value="content" :editor-id="`editor-${id}`" :theme="appStore.theme.name"
    :code-foldable="true" code-theme="github" :language="appStore.language"
  />
</template>

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

::v-deep(.default-theme img) {
  border: none !important;
  border-radius: 8px !important;
  padding: 0;
}

.md-mask {
  background: linear-gradient(to bottom, transparent 20%, var(--n-color-modal));
}
</style>
