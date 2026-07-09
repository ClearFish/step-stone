<script setup>
/*
 * 可复用页面 Hero 组件
 * 全宽深色背景（可选背景图 + 渐变遮罩），左对齐白色文字
 * Props:
 *   - title: 必填，主标题（serif）
 *   - subtitle: 副标题
 *   - backgroundImage: 背景图路径（可选，无则用纯深色渐变）
 *   - breadcrumb: 面包屑数组 [{ label, to }]，末项为当前页（无链接）
 */
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  backgroundImage: {
    type: String,
    default: ''
  },
  breadcrumb: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <section class="page-hero">
    <div
      v-if="backgroundImage"
      class="page-hero-bg"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
      aria-hidden="true"
    ></div>
    <div class="page-hero-overlay" aria-hidden="true"></div>

    <div class="page-hero-inner container">
      <nav v-if="breadcrumb.length" class="page-hero-crumbs" aria-label="Breadcrumb">
        <template v-for="(crumb, i) in breadcrumb" :key="i">
          <router-link
            v-if="crumb.to && i < breadcrumb.length - 1"
            :to="crumb.to"
            class="page-hero-crumb"
          >
            {{ crumb.label }}
          </router-link>
          <span v-else class="page-hero-crumb page-hero-crumb--current">{{ crumb.label }}</span>
          <span
            v-if="i < breadcrumb.length - 1"
            class="page-hero-crumb-sep"
            aria-hidden="true"
            >/</span
          >
        </template>
      </nav>

      <h1 class="page-hero-title">{{ title }}</h1>
      <p v-if="subtitle" class="page-hero-subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: var(--color-primary);
  background: linear-gradient(120deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
}

.page-hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    100deg,
    rgba(15, 26, 38, 0.88) 0%,
    rgba(15, 26, 38, 0.68) 50%,
    rgba(15, 26, 38, 0.42) 100%
  );
}

.page-hero-inner {
  position: relative;
  z-index: 2;
  padding-top: var(--space-3xl);
  padding-bottom: var(--space-2xl);
  max-width: var(--container-max);
  width: 100%;
}

/* 面包屑 */
.page-hero-crumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
  font-size: 0.8125rem;
  letter-spacing: 0.02em;
}

.page-hero-crumb {
  color: rgba(255, 255, 255, 0.72);
  transition: color 0.2s ease;
}

a.page-hero-crumb:hover {
  color: #ffffff;
}

.page-hero-crumb--current {
  color: rgba(255, 255, 255, 0.95);
}

.page-hero-crumb-sep {
  color: rgba(255, 255, 255, 0.4);
}

.page-hero-title {
  color: #ffffff;
  font-family: var(--font-serif);
  font-size: clamp(2.25rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin-bottom: var(--space-md);
  opacity: 0;
  transform: translateY(24px);
  animation: heroRise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 0.1s;
}

.page-hero-subtitle {
  color: rgba(255, 255, 255, 0.86);
  font-size: clamp(1.0625rem, 2vw, 1.375rem);
  line-height: 1.5;
  max-width: 620px;
  margin-bottom: 0;
  opacity: 0;
  transform: translateY(20px);
  animation: heroRise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 0.28s;
}

@keyframes heroRise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== 平板 ===== */
@media (max-width: 1023px) {
  .page-hero {
    min-height: 42vh;
  }
  .page-hero-inner {
    padding-top: var(--space-2xl);
    padding-bottom: var(--space-xl);
  }
}

/* ===== 移动 ===== */
@media (max-width: 767px) {
  .page-hero {
    min-height: 38vh;
  }
  .page-hero-overlay {
    background: linear-gradient(
      180deg,
      rgba(15, 26, 38, 0.5) 0%,
      rgba(15, 26, 38, 0.85) 100%
    );
  }
  .page-hero-inner {
    padding-top: var(--space-xl);
    padding-bottom: var(--space-xl);
  }
}
</style>
