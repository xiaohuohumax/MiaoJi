<template>
    <NCard size="small" :bordered="false">
        <NSpace class="font-bold text-center min-h-80" justify="center" align="center">
            <div>
                <p class="text-2xl">
                    404 Not Found
                </p>
                <p>{{ t('page.notFound.communication') }}</p>
            </div>
        </NSpace>
    </NCard>
</template>
<script setup lang="ts">
import { NCard, NSpace } from 'naive-ui';
import { uI18n } from '#/locales';

const { t } = uI18n();
</script>