<script setup lang="ts">
import { full as emoji } from 'markdown-it-emoji'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'
import { config, MdPreview } from 'md-editor-v3'
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

config({
  markdownItConfig: (md) => {
    md.use(emoji)
    md.use(MarkdownItGitHubAlerts)
  },
})
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
