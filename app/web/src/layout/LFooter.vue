<template>
    <div size="small" class="text-center py-8 flex justify-center items-center text-xs">
        <NSpace>
            <a :href="appConfig.repository" target="_blank" class="hover:text-orange-500 dark:hover:text-green-300">
                {{ appConfig.name }}
            </a>
            <span>
                v{{ appConfig.version }}
            </span>
            <a :href="appConfig.author.url" target="_blank" class="hover:text-orange-500 dark:hover:text-green-300 flex items-center">
                <GithubOne class="inline-block" />
                {{ appConfig.author.name }}
            </a>
        </NSpace>
    </div>
</template>
<script setup lang="ts">
import { GithubOne } from '@icon-park/vue-next';
import { NSpace } from 'naive-ui';
import appConfig from '#/app.config';
</script>
