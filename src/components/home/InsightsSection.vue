<script setup>
/*
 * "Developments defining our world" 资讯区
 * 分类 Tab 筛选 + 三列卡片网格，computed 按当前 Tab 过滤
 */
import { ref, computed } from 'vue'
import { insights } from '@/data/home'

/* Tab 列表：All + 各分类 */
const tabs = [
  'All',
  'Industry updates',
  'Market insights',
  'Regulatory and compliance',
  'How we think',
  'Whitepapers'
]

const activeTab = ref('All')

const filteredInsights = computed(() => {
  if (activeTab.value === 'All') return insights
  return insights.filter((item) => item.category === activeTab.value)
})
</script>

<template>
  <section class="insights">
    <div class="container insights-inner">
      <header class="insights-head">
        <h2 class="insights-title">Developments defining our world</h2>
      </header>

      <!-- 分类 Tab 栏 -->
      <div class="tabs" role="tablist" aria-label="Insights categories">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="tab"
          :class="{ active: activeTab === tab }"
          role="tab"
          :aria-selected="activeTab === tab"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <!-- 卡片网格 -->
      <transition name="grid-fade" mode="out-in">
        <div v-if="filteredInsights.length" class="insights-grid" :key="activeTab">
          <a
            v-for="(item, i) in filteredInsights"
            :key="i"
            :href="item.link"
            class="insight-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="insight-media">
              <img :src="item.image" :alt="item.title" loading="lazy" />
            </div>
            <div class="insight-body">
              <span class="insight-category">{{ item.category }}</span>
              <h3 class="insight-card-title">{{ item.title }}</h3>
              <span class="insight-readmore">
                Read more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </div>
          </a>
        </div>
        <p v-else class="insights-empty" :key="`empty-${activeTab}`">
          No articles in this category yet. Please check back soon.
        </p>
      </transition>
    </div>
  </section>
</template>

<style scoped>
.insights {
  background: var(--color-bg);
  padding: var(--space-3xl) 0;
}

.insights-inner {
  max-width: var(--container-max);
}

.insights-head {
  margin-bottom: var(--space-xl);
}

.insights-title {
  font-family: var(--font-serif);
  font-size: clamp(1.875rem, 4vw, 2.75rem);
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: -0.01em;
}

/* ===== Tab 栏 ===== */
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs) var(--space-md);
  padding-bottom: var(--space-lg);
  margin-bottom: var(--space-xl);
  border-bottom: 1px solid var(--color-border);
}

.tab {
  position: relative;
  padding: 8px 2px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-light);
  white-space: nowrap;
  transition: color 0.2s ease;
}

.tab::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.25s ease;
}

.tab:hover {
  color: var(--color-primary);
}

.tab.active {
  color: var(--color-primary);
  font-weight: 600;
}

.tab.active::after {
  transform: scaleX(1);
}

/* ===== 卡片网格 ===== */
.insights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl) var(--space-lg);
}

.insight-card {
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  color: inherit;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease, border-color 0.3s ease;
}

.insight-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(15, 26, 38, 0.12);
  border-color: transparent;
  color: inherit;
}

.insight-media {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--color-bg-alt);
}

.insight-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.insight-card:hover .insight-media img {
  transform: scale(1.06);
}

.insight-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--space-md) var(--space-md) var(--space-lg);
}

.insight-category {
  font-family: var(--font-sans);
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  margin-bottom: var(--space-sm);
}

.insight-card-title {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.35;
  color: var(--color-primary);
  margin-bottom: var(--space-md);
  transition: color 0.2s ease;
}

.insight-card:hover .insight-card-title {
  color: var(--color-accent);
}

.insight-readmore {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-accent);
}

.insight-readmore svg {
  transition: transform 0.25s ease;
}

.insight-card:hover .insight-readmore svg {
  transform: translateX(3px);
}

.insights-empty {
  padding: var(--space-2xl) 0;
  text-align: center;
  color: var(--color-text-light);
  font-size: 0.9375rem;
}

/* ===== 网格切换过渡 ===== */
.grid-fade-enter-active,
.grid-fade-leave-active {
  transition: opacity 0.25s ease;
}
.grid-fade-enter-from,
.grid-fade-leave-to {
  opacity: 0;
}

/* ===== 平板：两列 ===== */
@media (max-width: 1023px) {
  .insights {
    padding: var(--space-2xl) 0;
  }
  .insights-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
}

/* ===== 移动：单列，Tab 横向滚动 ===== */
@media (max-width: 767px) {
  .tabs {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    gap: var(--space-md);
    padding-bottom: var(--space-md);
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
    scrollbar-width: none;
  }
  .tabs::-webkit-scrollbar {
    display: none;
  }
  .insights-grid {
    grid-template-columns: 1fr;
  }
}
</style>
