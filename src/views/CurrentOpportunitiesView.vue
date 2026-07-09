<script setup>
/*
 * Current Opportunities 页面
 * PageHero + 地点筛选 Tab + 职位卡片列表 + FAQ 链接
 */
import { ref, computed } from 'vue'
import PageHero from '@/components/common/PageHero.vue'
import { jobs } from '@/data/careers'

/* 地点筛选 Tab：All + 各地点（按出现顺序去重） */
const locations = ['All', ...Array.from(new Set(jobs.map((j) => j.location)))]

const activeLocation = ref('All')

const filteredJobs = computed(() => {
  if (activeLocation.value === 'All') return jobs
  return jobs.filter((job) => job.location === activeLocation.value)
})

/* 当前筛选结果计数 */
const resultCount = computed(() => filteredJobs.value.length)
</script>

<template>
  <main class="page">
    <PageHero
      title="Current Opportunities"
      subtitle="Build your career at StepStone"
      eyebrow="Careers"
    />

    <section class="careers-section">
      <div class="container careers-inner">
        <div class="careers-intro">
          <p class="careers-intro-text">
            We're a global team of curious, collaborative experts dedicated to
            delivering more for our clients. Explore our open roles and find
            where you can make an impact.
          </p>
        </div>

        <!-- 地点筛选 Tab -->
        <div class="filter-bar">
          <div class="tabs" role="tablist" aria-label="Filter jobs by location">
            <button
              v-for="tab in locations"
              :key="tab"
              class="tab"
              :class="{ active: activeLocation === tab }"
              role="tab"
              :aria-selected="activeLocation === tab"
              @click="activeLocation = tab"
            >
              {{ tab }}
            </button>
          </div>
          <span class="result-count">{{ resultCount }} open {{ resultCount === 1 ? 'role' : 'roles' }}</span>
        </div>

        <!-- 职位卡片列表 -->
        <transition name="grid-fade" mode="out-in">
          <div class="jobs-list" :key="activeLocation">
            <article
              v-for="job in filteredJobs"
              :key="job.id"
              class="job-card"
            >
              <div class="job-main">
                <h3 class="job-title">{{ job.title }}</h3>
                <div class="job-tags">
                  <span class="job-tag job-dept">{{ job.department }}</span>
                  <span class="job-tag job-loc">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 21s7-5.686 7-11a7 7 0 10-14 0c0 5.314 7 11 7 11z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="2" />
                    </svg>
                    {{ job.location }}
                  </span>
                  <span class="job-tag job-type">{{ job.type }}</span>
                </div>
              </div>
              <a class="job-apply" href="https://www.stepstonegroup.com/current-opportunities/" target="_blank" rel="noopener noreferrer">
                Apply now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </article>
          </div>
        </transition>

        <!-- 空状态 -->
        <p v-if="!resultCount" class="jobs-empty">
          No open roles in this location right now. Please check back soon.
        </p>

        <!-- FAQ 链接 -->
        <div class="faq-link-wrap">
          <router-link
            to="/current-opportunities/frequently-asked-questions"
            class="faq-link"
          >
            <span class="faq-link-text">View FAQ</span>
            <span class="faq-link-arrow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page {
  width: 100%;
}

.careers-section {
  padding: var(--space-3xl) 0;
  background: var(--color-bg);
}

.careers-inner {
  max-width: var(--container-max);
}

.careers-intro {
  max-width: 720px;
  margin-bottom: var(--space-2xl);
}

.careers-intro-text {
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--color-text-light);
}

/* ===== 筛选栏 ===== */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  padding-bottom: var(--space-lg);
  margin-bottom: var(--space-xl);
  border-bottom: 1px solid var(--color-border);
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs) var(--space-lg);
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

.result-count {
  font-size: 0.8125rem;
  color: var(--color-text-light);
  white-space: nowrap;
}

/* ===== 职位列表 ===== */
.jobs-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.job-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
  padding: var(--space-lg) var(--space-xl);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}

.job-card:hover {
  border-color: var(--color-accent);
  box-shadow: 0 10px 28px rgba(15, 26, 38, 0.08);
  transform: translateY(-2px);
}

.job-title {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
  transition: color 0.2s ease;
}

.job-card:hover .job-title {
  color: var(--color-accent);
}

.job-tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-sm) var(--space-md);
}

.job-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8125rem;
  color: var(--color-text-light);
}

.job-dept {
  font-weight: 600;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.75rem;
}

.job-loc svg {
  color: var(--color-text-light);
}

.job-type {
  padding: 2px 10px;
  background: var(--color-bg-alt);
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-light);
}

.job-apply {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  padding: 10px 18px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  border-radius: 2px;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.job-apply svg {
  transition: transform 0.25s ease;
}

.job-apply:hover {
  background: var(--color-accent);
  color: #ffffff;
  border-color: var(--color-accent);
}

.job-apply:hover svg {
  transform: translateX(3px);
}

.jobs-empty {
  padding: var(--space-2xl) 0;
  text-align: center;
  color: var(--color-text-light);
  font-size: 0.9375rem;
}

/* ===== FAQ 链接 ===== */
.faq-link-wrap {
  margin-top: var(--space-2xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--color-border);
}

.faq-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 16px 28px;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  font-weight: 600;
  color: #ffffff;
  background: var(--color-primary);
  border: 1px solid var(--color-primary);
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.faq-link:hover {
  background: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  color: #ffffff;
  transform: translateY(-2px);
}

.faq-link-arrow {
  display: inline-flex;
  transition: transform 0.25s ease;
}

.faq-link:hover .faq-link-arrow {
  transform: translateX(4px);
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

/* ===== 平板 ===== */
@media (max-width: 1023px) {
  .careers-section {
    padding: var(--space-2xl) 0;
  }
  .job-card {
    padding: var(--space-md) var(--space-lg);
  }
}

/* ===== 移动：卡片纵向布局，Tab 横向滚动 ===== */
@media (max-width: 767px) {
  .filter-bar {
    flex-direction: column;
    align-items: flex-start;
  }
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
    width: 100%;
  }
  .tabs::-webkit-scrollbar {
    display: none;
  }
  .job-card {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-md);
    padding: var(--space-md);
  }
  .job-apply {
    width: 100%;
    justify-content: center;
  }
}
</style>
