<script setup lang="ts">
import { MdPreview } from 'md-editor-v3'
import { useAppStore } from '~/store/app'
import 'md-editor-v3/lib/style.css'
import 'markdown-it-github-alerts/styles/github-colors-light.css'
import 'markdown-it-github-alerts/styles/github-colors-dark-class.css'
import 'markdown-it-github-alerts/styles/github-base.css'

export interface CMarkdownProps {
  content?: string | null
  id: number | string
}

defineProps<CMarkdownProps>()
const appStore = useAppStore()
</script>

<template>
  <MdPreview
    v-if="content" :model-value="content" :editor-id="`editor-${id}`" :theme="appStore.theme.name"
    :code-foldable="true" :no-highlight="true" :show-code-row-number="false" preview-theme="github" :language="appStore.language"
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

::v-deep(.md-editor-preview .md-editor-code pre) {
  background-color: transparent !important;
}

::v-deep(.md-editor code),
::v-deep(.md-editor-code code),
::v-deep(.md-editor-code .md-editor-code-head) {
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

::v-deep(.md-editor-preview h2) {
  border-bottom: none !important;
}

::v-deep(.default-theme .md-editor-code pre code) {
  box-shadow: none !important;
}
</style>
