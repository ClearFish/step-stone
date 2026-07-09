<script setup>
/*
 * 全局布局骨架
 * - AppHeader 固定顶部，main 通过 padding-top 占位
 * - main 包裹 router-view，min-height 撑开使页脚贴底
 * - AppFooter 在底部
 */
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
</script>

<template>
  <div class="layout">
    <AppHeader />
    <main class="layout-main">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

.layout-main {
  /* 顶部固定 header 的占位 */
  /* padding-top: 40px; */
  margin-top: -230px;
  /* 让 main 撑开剩余空间，页脚自然贴底 */
  flex: 1 0 auto;
}
</style>
