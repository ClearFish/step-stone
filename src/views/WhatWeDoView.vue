<script setup>
/*
 * What We Do 业务总览页
 * 复刻 StepStone Group /what-we-do/ 结构：
 *   1. PageHero（背景图 + 深色遮罩，左对齐白色文字 + 面包屑）
 *   2. 总览介绍区块
 *   3. Asset Classes 资产类别（浅灰，四列卡片）
 *   4. Strategies 策略（白底，四列卡片）
 *   5. Solutions & Services 解决方案（浅灰，四列卡片）
 * 卡片统一样式，移动优先响应式（桌面四列 / 平板两列 / 移动单列）
 */
import PageHero from '@/components/common/PageHero.vue'
import { assetClasses, strategies, solutions } from '@/data/whatWeDo'

/* 面包屑：Home / What We Do */
const breadcrumb = [
  { label: 'Home', to: '/' },
  { label: 'What We Do', to: '/what-we-do' }
]

/* PageHero 背景图取自 asset-classes 目录的真实文件 */
const heroBackground = '/images/asset-classes/Asset_Classes_Banner_GettyImages-112624706_medium.jpeg'

/* 三个卡片区块统一配置：theme 控制背景（alt=浅灰 / light=白底） */
const sections = [
  {
    kicker: 'Asset Classes',
    title: 'Invest across four core asset classes',
    items: assetClasses,
    theme: 'alt'
  },
  {
    kicker: 'Strategies',
    title: 'Four complementary investment strategies',
    items: strategies,
    theme: 'light'
  },
  {
    kicker: 'Solutions & Services',
    title: 'End-to-end solutions and services',
    items: solutions,
    theme: 'alt'
  }
]
</script>

<template>
  <div class="what-we-do">
    <!-- 1. PageHero -->
    <PageHero
      title="What We Do"
      subtitle="Customized investment solutions across private markets"
      :background-image="heroBackground"
      :breadcrumb="breadcrumb"
    />

    <!-- 2. 总览介绍 -->
    <section class="overview">
      <div class="container overview-inner">
        <span class="overview-kicker" aria-hidden="true">Overview</span>
        <h2 class="overview-title">
          A comprehensive approach to private markets investing
        </h2>
        <div class="overview-text">
          <p>
            StepStone brings together deep specialization and global reach to help
            clients build and manage private markets portfolios. We invest across
            four core asset classes — private equity, real estate, infrastructure,
            and private debt — and deploy capital through four complementary
            strategies: fund investments, secondaries, co-investments, and direct
            investments.
          </p>
          <p>
            Beyond investing, we support clients with advisory services,
            discretionary asset management, proprietary data and analytics, and
            private wealth solutions — combining every capability to deliver
            customized solutions tailored to each client's objectives.
          </p>
        </div>
      </div>
    </section>

    <!-- 3-5. 三个卡片区块（统一渲染） -->
    <section
      v-for="(section, s) in sections"
      :key="section.kicker"
      class="card-section"
      :class="`card-section--${section.theme}`"
    >
      <div class="container card-section-inner">
        <header class="card-section-head">
          <span class="card-section-kicker">{{ section.kicker }}</span>
          <h2 class="card-section-title">{{ section.title }}</h2>
        </header>

        <div class="card-grid">
          <router-link
            v-for="(item, i) in section.items"
            :key="item.to"
            :to="item.to"
            class="card"
            :style="{ '--card-delay': `${s * 0.05 + i * 0.04}s` }"
          >
            <div class="card-media">
              <img :src="item.image" :alt="item.title" loading="lazy" />
            </div>
            <div class="card-body">
              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-desc">{{ item.description }}</p>
              <span class="card-link">
                Learn more
                <span class="card-arrow" aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ===== 总览介绍 ===== */
.overview {
  background: var(--color-bg);
  padding: var(--space-3xl) 0;
}

.overview-inner {
  max-width: 860px;
}

.overview-kicker {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-accent);
  margin-bottom: var(--space-md);
}

.overview-title {
  font-family: var(--font-serif);
  font-size: clamp(1.75rem, 3.6vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-primary);
  letter-spacing: -0.01em;
  margin-bottom: var(--space-xl);
}

.overview-text {
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--color-text);
}

.overview-text p {
  margin-bottom: var(--space-md);
}

.overview-text p:last-child {
  margin-bottom: 0;
}

/* ===== 卡片区块通用 ===== */
.card-section {
  padding: var(--space-3xl) 0;
}

.card-section--alt {
  background: var(--color-bg-alt);
}

.card-section--light {
  background: var(--color-bg);
}

.card-section-inner {
  max-width: var(--container-max);
}

.card-section-head {
  margin-bottom: var(--space-2xl);
  max-width: 720px;
}

.card-section-kicker {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-accent);
  margin-bottom: var(--space-sm);
}

.card-section-title {
  font-family: var(--font-serif);
  font-size: clamp(1.75rem, 3.6vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-primary);
  letter-spacing: -0.01em;
}

/* ===== 卡片网格 ===== */
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.card {
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  overflow: hidden;
  color: inherit;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(15, 26, 38, 0.12);
  border-color: transparent;
}

.card:hover .card-title {
  color: var(--color-accent);
}

/* 媒体区：固定宽高比，hover 图片轻微放大 */
.card-media {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--color-bg-alt);
}

.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.card:hover .card-media img {
  transform: scale(1.05);
}

.card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--space-lg);
}

.card-title {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
  transition: color 0.25s ease;
}

.card-desc {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-text-light);
  margin-bottom: var(--space-md);
  flex: 1;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
  letter-spacing: 0.01em;
}

.card-arrow {
  display: inline-block;
  transition: transform 0.25s ease;
}

.card:hover .card-arrow {
  transform: translateX(4px);
}

/* ===== 平板：两列 ===== */
@media (max-width: 1023px) {
  .overview,
  .card-section {
    padding: var(--space-2xl) 0;
  }
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
  }
  .card-section-head {
    margin-bottom: var(--space-xl);
  }
}

/* ===== 移动：单列 ===== */
@media (max-width: 767px) {
  .overview,
  .card-section {
    padding: var(--space-xl) 0;
  }
  .card-grid {
    grid-template-columns: 1fr;
  }
  .card-body {
    padding: var(--space-md);
  }
}
</style>
