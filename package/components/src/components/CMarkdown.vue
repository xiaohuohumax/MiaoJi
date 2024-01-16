<template>
    <div>
        <MdPreview :modelValue="ctx" :theme="theme" :editorId="'editor-' + id + ''" />
        <NButton @click="emit('more-click')" secondary strong v-if="ctxs.length > 1 && props.useMore" class="w-full"
            type="tertiary">
            {{ props.moreBtnText }}
        </NButton>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { MdPreview, Themes } from 'md-editor-v3';
import { NButton } from 'naive-ui';
import 'md-editor-v3/lib/style.css';

const props = withDefaults(defineProps<{
    text: string | null;
    id: string | number;
    theme?: Themes;
    useMore?: boolean;
    moreBtnText?: string;
}>(), {
    useMore: false,
    moreBtnText: '',
});

const emit = defineEmits(['more-click']);

// <!-- more -->
const moreRegExp = /<!--\s+more\s+-->/;
const ctxs = (props.text || '').split(moreRegExp);

const ctx = ref(props.useMore ? ctxs[0] : ctxs.join(''));

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

.md-mask {
    background: linear-gradient(to bottom, transparent 20%, var(--n-color-modal));
    ;
}
</style>