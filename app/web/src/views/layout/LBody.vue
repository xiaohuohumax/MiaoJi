<template>
  <div class="container mx-auto px-2">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" v-if="!route.meta.unKeepAlive" :key="route.fullPath" />
      </keep-alive>
      <component :is="Component" v-if="route.meta.unKeepAlive" :key="route.fullPath" />
    </router-view>
  </div>
</template>
