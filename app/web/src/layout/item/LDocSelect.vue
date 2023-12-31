<template>
    <NModal :show="show" :mask-closable="true" @mask-click="emit('update:show', false)" :closable="true"
        @close="emit('update:show', false)">
        <div class="max-w-full flex p-3 shadow-none" style="margin-top: calc(100svh / 6);">
            <NCard :title="t('layout.header.search.title')" style="width: 36rem;" class="flex-shrink" :bordered="false">
                <NSpace vertical size="large">
                    <NInputGroup>
                        <NSelect class="w-36" v-model:value="mode" size="large" :options="[
                            {
                                label: t('layout.header.search.radioLabel'),
                                value: 'label',
                            },
                            {
                                label: t('layout.header.search.radioDoc'),
                                value: 'doc',
                            },
                            {
                                label: t('layout.header.search.radioPhoto'),
                                value: 'photo',
                            }
                        ]">
                            <template #arrow>
                                <transition name="slide-left">
                                    <DocSearch v-if="mode == 'doc'" />
                                    <Tag v-else-if="mode == 'label'" />
                                    <PictureAlbum v-else />
                                </transition>
                            </template>
                        </NSelect>
                        <NInput size="large" v-model:value.trim="select" @keydown.enter="selectEnter" />
                        <NButton type="success" size="large" @click="selectEnter">{{ t('comment.button.search') }}</NButton>
                    </NInputGroup>
                    <template v-if="mode == 'label'">
                        <NSpace v-if="labels.length > 0">
                            <CLabel v-for="label in labels" :key="label.id" :hidden-des="false" :label="label"
                                @click="labelClick(label)" />
                        </NSpace>
                        <div v-else>{{ t('layout.header.search.noMatchContext') }}</div>
                    </template>
                    <template v-else>
                        <CLoading :state="docState">
                            <NSpace vertical>
                                <div class="cursor-pointer" v-for="doc, index in docs" :key="doc.number"
                                    @click="issueClick(doc)">
                                    <span class="mr-1">#{{ index + 1 }}</span>
                                    <span class="font-bol hover:text-orange-500 dark:hover:text-green-300">
                                        {{ doc.title }}
                                    </span>
                                </div>
                            </NSpace>
                            <div v-if="docs.length == 0">{{ t('layout.header.search.noMatchContext') }}</div>
                        </CLoading>
                    </template>
                </NSpace>
            </NCard>
        </div>
    </NModal>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { DocSearch, PictureAlbum, Tag } from '@icon-park/vue-next';
import { Issue, Label } from '@miaoji/api';
import { CLoading, watchLoading } from '@miaoji/components';
import awaitTo from 'await-to-js';
import { NButton, NCard, NInput, NInputGroup, NModal, NSelect, NSpace } from 'naive-ui';
import { issueApi } from '@/api';
import { useAppStore } from '@/store/app.store';
import CLabel from '&/CLabel.vue';
import appConfig from '#/app.config';
import { uI18n } from '#/locales';

const { t } = uI18n();
const appStore = useAppStore();

defineProps<{
    show: boolean
}>();

const router = useRouter();
const emit = defineEmits(['update:show']);
const labels = ref<Label[]>([]);
const docs = ref<Issue[]>([]);
const select = ref('');
type Mode = 'label' | 'doc' | 'photo'
const mode = ref<Mode>('doc');
const docState = watchLoading({
    state: 'init',
    fail: () => t('component.cLoading.fail', { name: '' })
});

async function selectByKeyword(label: string) {
    docState.value = 'loading';
    const [err, res] = await awaitTo(issueApi.qIssuePageByKeyword(
        // 搜索内容
        select.value,
        // 标签
        { label },
        // 默认只显示第一页
        { page: '1', 'per_page': appConfig.selectDocPageSize.toString() }
    ));
    if (err) {
        docState.value = 'fail';
        return;
    }
    docState.value = 'success';
    docs.value = res.data.items;
}

const selectDoMap: { [key in Mode]: () => void } = {
    'doc': () => selectByKeyword(appConfig.label.docLabel),
    'photo': () => selectByKeyword(appConfig.label.photoLabel),
    'label': () => {
        labels.value = appStore.selectNotFuncLabels(select.value);
    },
};

watch(() => mode.value, selectEnter);

function selectEnter() {
    if (select.value == '') {
        return;
    }
    selectDoMap[mode.value]();
}

function labelClick(label: Label) {
    emit('update:show', false);
    router.push({ path: '/', query: { label: label.name } });
}

function issueClick(doc: Issue) {
    emit('update:show', false);

    if (mode.value == 'doc') {
        router.push({ path: '/doc/' + doc.number });
    } else if (mode.value == 'photo') {
        router.push({ path: '/photo/' + doc.number });
    }
}
</script>