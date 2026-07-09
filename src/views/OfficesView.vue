<script setup>
/*
 * Offices 页面
 * PageHero + 地区 Tab 筛选 + 纯文字办公室卡片网格
 */
import { ref, computed } from 'vue'
import PageHero from '@/components/common/PageHero.vue'
import { officesByRegion, officeRegionKeys } from '@/data/offices'

/* 地区 Tab：All + 各地区标签 */
const regionTabs = ['All', ...officeRegionKeys.map((k) => officesByRegion[k].label)]

const activeRegion = ref('All')

/* 当前展示的办公室列表（展平为含 region 字段） */
const visibleOffices = computed(() => {
  const all = []
  officeRegionKeys.forEach((key) => {
    const region = officesByRegion[key]
    region.offices.forEach((office) => {
      all.push({ ...office, region: region.label })
    })
  })
  if (activeRegion.value === 'All') return all
  return all.filter((office) => office.region === activeRegion.value)
})
</script>

<template>
  <main class="page">
    <PageHero
      title="Our Offices"
      subtitle="31 offices worldwide across 16 countries"
      eyebrow="Global Presence"
    />

    <section class="offices-section">
      <div class="container offices-inner">
        <!-- 地区 Tab 栏 -->
        <div class="tabs" role="tablist" aria-label="Office regions">
          <button
            v-for="tab in regionTabs"
            :key="tab"
            class="tab"
            :class="{ active: activeRegion === tab }"
            role="tab"
            :aria-selected="activeRegion === tab"
            @click="activeRegion = tab"
          >
            {{ tab }}
          </button>
        </div>

        <!-- 办公室卡片网格 -->
        <transition name="grid-fade" mode="out-in">
          <div class="offices-grid" :key="activeRegion">
            <article
              v-for="(office, i) in visibleOffices"
              :key="`${office.city}-${i}`"
              class="office-card"
            >
              <div class="office-card-head">
                <h3 class="office-city">{{ office.city }}</h3>
                <span v-if="office.isHQ" class="office-hq-badge">HQ</span>
              </div>
              <p class="office-country">{{ office.country }}</p>
              <address class="office-address">{{ office.address }}</address>
              <span class="office-region">{{ office.region }}</span>
            </article>
          </div>
        </transition>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page {
  width: 100%;
}

.offices-section {
  padding: var(--space-3xl) 0;
  background: var(--color-bg);
}

.offices-inner {
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
.offices-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.office-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-lg);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-accent);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease, border-color 0.3s ease;
}

.office-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(15, 26, 38, 0.1);
  border-color: var(--color-border);
  border-left-color: var(--color-primary);
}

.office-card-head {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: 4px;
}

.office-city {
  font-family: var(--font-serif);
  font-size: 1.3125rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.2;
}

.office-hq-badge {
  display: inline-block;
  padding: 2px 8px;
  font-family: var(--font-sans);
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ffffff;
  background: var(--color-accent);
}

.office-country {
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-text-light);
  margin-bottom: var(--space-md);
}

.office-address {
  font-style: normal;
  font-size: 0.9375rem;
  line-height: 1.55;
  color: var(--color-text);
  margin-bottom: var(--space-md);
}

.office-region {
  margin-top: auto;
  padding-top: var(--space-sm);
  border-top: 1px solid var(--color-border);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-accent);
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
  .offices-section {
    padding: var(--space-2xl) 0;
  }
  .offices-grid {
    grid-template-columns: repeat(2, 1fr);
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
  .offices-grid {
    grid-template-columns: 1fr;
  }
}
</style>
