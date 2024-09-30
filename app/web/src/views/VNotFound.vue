<script setup lang="ts">
import { NSpace } from 'naive-ui'
import { useI18n } from '~/i18n'

const { t } = useI18n()
</script>

<template>
  <div class="h-full flex justify-center items-center">
    <NSpace :vertical="true" class="text-center">
      <img src="/images/error_404.svg?url" class="max-w-64 md:max-w-96 mx-auto">
      <div class="">
        {{ t('page.notFound.content') }}
      </div>
    </NSpace>
  </div>
</template>
