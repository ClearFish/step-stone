<script setup>
/*
 * 通用占位视图组件
 * 根据 route.meta.title 显示页面标题，避免为每个子路由创建重复占位文件
 */
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const title = computed(() => route.meta?.title || route.name || 'Page')
const parent = computed(() => route.meta?.parent || null)
</script>

<template>
  <main class="page placeholder-page">
    <div class="container">
      <p class="breadcrumb" v-if="parent">{{ parent }}</p>
      <h1>{{ title }}</h1>
      <p class="placeholder-note">
        This is a placeholder page. Content will be added in a future iteration.
      </p>
    </div>
  </main>
</template>

<style scoped>
.placeholder-page {
  padding: var(--space-2xl) 0;
  min-height: 50vh;
}

.breadcrumb {
  color: var(--color-text-light);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-sm);
}

.placeholder-note {
  color: var(--color-text-light);
  margin-top: var(--space-md);
}
</style>
