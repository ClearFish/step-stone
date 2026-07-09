<script setup>
/*
 * News & Events 页面
 * PageHero + 分类 Tab 筛选 + 三列新闻卡片网格
 */
import { ref, computed } from 'vue'
import PageHero from '@/components/common/PageHero.vue'
import { newsArticles } from '@/data/news'

/* 分类 Tab：All + 4 个分类 */
const tabs = ['All', 'Firm News', 'Press Releases', 'Market Insights', 'Events']

const activeTab = ref('All')

const filteredArticles = computed(() => {
  if (activeTab.value === 'All') return newsArticles
  return newsArticles.filter((item) => item.category === activeTab.value)
})
</script>

<template>
  <main class="page">
    <PageHero
      title="News & Events"
      subtitle="The latest from StepStone Group"
      eyebrow="Newsroom"
    />

    <section class="news-section">
      <div class="container news-inner">
        <!-- 分类 Tab 栏 -->
        <div class="tabs" role="tablist" aria-label="News categories">
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
          <div
            v-if="filteredArticles.length"
            class="news-grid"
            :key="activeTab"
          >
            <a
              v-for="item in filteredArticles"
              :key="item.id"
              :href="item.link"
              class="news-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="news-media">
                <img :src="item.image" :alt="item.title" loading="lazy" />
                <span class="news-category">{{ item.category }}</span>
              </div>
              <div class="news-body">
                <h3 class="news-title">{{ item.title }}</h3>
                <div class="news-meta">
                  <time :datetime="item.date">{{ item.date }}</time>
                  <span class="news-readmore">
                    Read more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
          <p v-else class="news-empty" :key="`empty-${activeTab}`">
            No articles in this category yet. Please check back soon.
          </p>
        </transition>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page {
  width: 100%;
}

.news-section {
  padding: var(--space-3xl) 0;
  background: var(--color-bg);
}

.news-inner {
  max-width: var(--container-max);
}

/* ===== Tab 栏 ===== */
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs) var(--space-lg);
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
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl) var(--space-lg);
}

.news-card {
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  color: inherit;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease, border-color 0.3s ease;
}

.news-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(15, 26, 38, 0.12);
  border-color: transparent;
  color: inherit;
}

.news-media {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--color-bg-alt);
}

.news-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.news-card:hover .news-media img {
  transform: scale(1.06);
}

/* 分类标签浮于缩略图左上 */
.news-category {
  position: absolute;
  top: var(--space-sm);
  left: var(--space-sm);
  padding: 4px 10px;
  font-family: var(--font-sans);
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #ffffff;
  background: rgba(15, 26, 38, 0.82);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.news-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--space-md) var(--space-md) var(--space-lg);
}

.news-title {
  font-family: var(--font-serif);
  font-size: 1.1875rem;
  font-weight: 700;
  line-height: 1.35;
  color: var(--color-primary);
  margin-bottom: var(--space-md);
  transition: color 0.2s ease;
}

.news-card:hover .news-title {
  color: var(--color-accent);
}

.news-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  margin-top: auto;
  padding-top: var(--space-sm);
  border-top: 1px solid var(--color-border);
}

.news-meta time {
  font-size: 0.8125rem;
  color: var(--color-text-light);
}

.news-readmore {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-accent);
}

.news-readmore svg {
  transition: transform 0.25s ease;
}

.news-card:hover .news-readmore svg {
  transform: translateX(3px);
}

.news-empty {
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
  .news-section {
    padding: var(--space-2xl) 0;
  }
  .news-grid {
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
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
