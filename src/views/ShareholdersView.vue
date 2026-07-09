<script setup>
/*
 * Shareholders 投资者关系页
 * 复刻 StepStone Group (Nasdaq: STEP) 投资者关系页面
 * 区块：Hero / 股票信息 / 关键数据 / 财务报告 / 投资者联系方式
 * 股价与财务数据均为静态示例
 */
import { computed } from 'vue'
import { stockInfo, financials, reports } from '@/data/shareholders'

/* 走势图：由示例数据点生成 SVG 路径（折线 + 填充区域） */
const chartWidth = 600
const chartHeight = 220
const pad = 12

const chartLinePath = computed(() => {
  const pts = stockInfo.chartPoints
  const min = Math.min(...pts)
  const max = Math.max(...pts)
  const range = max - min || 1
  const stepX = (chartWidth - pad * 2) / (pts.length - 1)
  return pts
    .map((v, i) => {
      const x = pad + i * stepX
      const y = chartHeight - pad - ((v - min) / range) * (chartHeight - pad * 2)
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
})

const chartAreaPath = computed(() => {
  const lastX = chartWidth - pad
  const baseY = chartHeight - pad
  return `${chartLinePath.value} L${lastX.toFixed(1)},${baseY} L${pad.toFixed(1)},${baseY} Z`
})

/* 财务报告日期格式化：YYYY-MM-DD -> Mon DD, YYYY */
function formatDate(iso) {
  const parts = iso.split('-')
  if (parts.length !== 3) return iso
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  const [y, m, d] = parts.map(Number)
  return `${months[m - 1]} ${d}, ${y}`
}
</script>

<template>
  <main class="shareholders">
    <!-- 1. Hero -->
    <section class="hero">
      <div class="hero-overlay" aria-hidden="true"></div>
      <div class="hero-inner container">
        <span class="hero-eyebrow">Investor Relations</span>
        <h1 class="hero-title">Shareholders</h1>
        <p class="hero-subtitle">
          Investor relations for StepStone Group Inc. (Nasdaq: STEP)
        </p>
      </div>
    </section>

    <!-- 2. 股票信息 -->
    <section class="stock">
      <div class="container stock-inner">
        <div class="stock-head">
          <div class="stock-symbol-block">
            <span class="stock-symbol">STEP</span>
            <span class="stock-exchange">Nasdaq Global Select Market</span>
          </div>
          <p class="stock-disclaimer">{{ stockInfo.asOf }}</p>
        </div>

        <div class="stock-grid">
          <div class="stock-stats">
            <div class="stat-cell">
              <span class="stat-cell-label">Share Price</span>
              <span class="stat-cell-value">{{ stockInfo.price }}</span>
            </div>
            <div class="stat-cell">
              <span class="stat-cell-label">Market Cap</span>
              <span class="stat-cell-value">{{ stockInfo.marketCap }}</span>
            </div>
            <div class="stat-cell">
              <span class="stat-cell-label">52-Week Range</span>
              <span class="stat-cell-value stat-cell-range">{{ stockInfo.weekRange52 }}</span>
            </div>
            <div class="stat-cell">
              <span class="stat-cell-label">Dividend Yield</span>
              <span class="stat-cell-value">{{ stockInfo.dividendYield }}</span>
            </div>
          </div>

          <div class="stock-chart">
            <div class="stock-chart-head">
              <span class="stock-chart-title">Stock performance</span>
              <span class="stock-chart-note">Static example</span>
            </div>
            <svg
              class="chart-svg"
              :viewBox="`0 0 ${chartWidth} ${chartHeight}`"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#0066b3" stop-opacity="0.28" />
                  <stop offset="100%" stop-color="#0066b3" stop-opacity="0" />
                </linearGradient>
              </defs>
              <path :d="chartAreaPath" fill="url(#chartFill)" />
              <path
                :d="chartLinePath"
                fill="none"
                stroke="#0066b3"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. 关键数据 -->
    <section class="key-data">
      <div class="container key-data-inner">
        <div class="key-data-grid">
          <div class="data-card" v-for="(item, i) in financials" :key="i">
            <div class="data-value">{{ item.value }}</div>
            <div class="data-label">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. 财务报告 -->
    <section class="reports">
      <div class="container reports-inner">
        <header class="reports-head">
          <span class="reports-eyebrow">Filings &amp; Results</span>
          <h2 class="reports-title">Financial Reports &amp; Filings</h2>
        </header>

        <ul class="reports-list">
          <li class="report-row" v-for="(r, i) in reports" :key="i">
            <div class="report-info">
              <h3 class="report-title">{{ r.title }}</h3>
              <span class="report-date">{{ formatDate(r.date) }}</span>
            </div>
            <div class="report-actions">
              <a
                :href="r.link"
                class="report-link report-link-view"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
              <a
                :href="r.link"
                class="report-link report-link-download"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- 5. 投资者联系方式 -->
    <section class="contact">
      <div class="contact-deco" aria-hidden="true"></div>
      <div class="container contact-inner">
        <header class="contact-head">
          <span class="contact-eyebrow">Get in touch</span>
          <h2 class="contact-title">Investor Relations Contact</h2>
        </header>

        <div class="contact-grid">
          <div class="contact-card">
            <h3 class="contact-card-title">Shareholder Relations</h3>
            <p class="contact-name">Seth Weiss</p>
            <p class="contact-line">
              <a :href="`mailto:shareholders@stepstonegroup.com`">shareholders@stepstonegroup.com</a>
            </p>
            <p class="contact-line">+1 (212) 351-6106</p>
          </div>

          <div class="contact-card">
            <h3 class="contact-card-title">Media Relations</h3>
            <p class="contact-name">Brian Ruby / Chris Gillick</p>
            <p class="contact-line">
              <a :href="`mailto:StepStonePR@icrinc.com`">StepStonePR@icrinc.com</a>
            </p>
            <p class="contact-line">+1 (203) 682-8268</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ===== Hero ===== */
.hero {
  position: relative;
  width: 100%;
  min-height: 46vh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: var(--color-primary-dark);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      120deg,
      rgba(15, 26, 38, 0.92) 0%,
      rgba(15, 26, 38, 0.74) 55%,
      rgba(0, 102, 179, 0.32) 100%
    );
}

.hero-inner {
  position: relative;
  z-index: 2;
  padding-top: var(--space-3xl);
  padding-bottom: var(--space-2xl);
}

.hero-eyebrow {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: var(--space-md);
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 6vw, 4.25rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: #ffffff;
  margin-bottom: var(--space-md);
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.84);
  max-width: 560px;
  margin-bottom: 0;
}

/* ===== 股票信息 ===== */
.stock {
  background: var(--color-bg);
  padding: var(--space-3xl) 0;
}

.stock-inner {
  max-width: var(--container-max);
}

.stock-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-md);
  padding-bottom: var(--space-xl);
  margin-bottom: var(--space-xl);
  border-bottom: 1px solid var(--color-border);
}

.stock-symbol-block {
  display: flex;
  align-items: baseline;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.stock-symbol {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--color-primary);
}

.stock-exchange {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-text-light);
  letter-spacing: 0.02em;
}

.stock-disclaimer {
  font-size: 0.8125rem;
  color: var(--color-text-light);
  font-style: italic;
  margin-bottom: 0;
}

.stock-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: var(--space-2xl);
  align-items: stretch;
}

.stock-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
}

.stat-cell {
  background: var(--color-bg);
  padding: var(--space-lg) var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.stat-cell-label {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-light);
}

.stat-cell-value {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-primary);
  letter-spacing: -0.01em;
}

.stat-cell-range {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
}

.stock-chart {
  background: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.stock-chart-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}

.stock-chart-title {
  font-family: var(--font-serif);
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--color-primary);
}

.stock-chart-note {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-light);
  padding: 3px 8px;
  border: 1px solid var(--color-border);
  border-radius: 2px;
}

.chart-svg {
  width: 100%;
  height: 220px;
  flex: 1;
}

/* ===== 关键数据 ===== */
.key-data {
  background: var(--color-bg-alt);
  padding: var(--space-3xl) 0;
}

.key-data-inner {
  max-width: var(--container-max);
}

.key-data-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.data-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-top: 3px solid var(--color-accent);
  padding: var(--space-xl) var(--space-lg);
  text-align: left;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease;
}

.data-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(15, 26, 38, 0.12);
}

.data-value {
  font-family: var(--font-serif);
  font-size: clamp(2.25rem, 4.5vw, 3.25rem);
  font-weight: 700;
  line-height: 1;
  color: var(--color-primary);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-sm);
}

.data-label {
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-light);
}

/* ===== 财务报告 ===== */
.reports {
  background: var(--color-bg);
  padding: var(--space-3xl) 0;
}

.reports-inner {
  max-width: var(--container-max);
}

.reports-head {
  margin-bottom: var(--space-2xl);
}

.reports-eyebrow {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--color-accent);
  margin-bottom: var(--space-md);
}

.reports-title {
  font-family: var(--font-serif);
  font-size: clamp(1.875rem, 4vw, 2.75rem);
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: -0.01em;
}

.reports-list {
  border-top: 1px solid var(--color-border);
}

.report-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-md);
  padding: var(--space-lg) 0;
  border-bottom: 1px solid var(--color-border);
  transition: background 0.2s ease;
}

.report-row:hover {
  background: var(--color-bg-alt);
}

.report-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.report-title {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-primary);
  margin-bottom: 0;
}

.report-date {
  font-size: 0.875rem;
  color: var(--color-text-light);
}

.report-actions {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.report-link {
  display: inline-flex;
  align-items: center;
  padding: 8px 18px;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  border: 1px solid var(--color-border);
  border-radius: 2px;
  transition: background 0.25s ease, color 0.25s ease,
    border-color 0.25s ease;
}

.report-link-view {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.report-link-view:hover {
  background: var(--color-accent);
  color: #ffffff;
}

.report-link-download {
  color: var(--color-primary);
  border-color: var(--color-border);
}

.report-link-download:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #ffffff;
}

/* ===== 投资者联系方式 ===== */
.contact {
  position: relative;
  background: var(--color-primary);
  color: #ffffff;
  padding: var(--space-3xl) 0;
  overflow: hidden;
}

.contact-deco {
  position: absolute;
  top: -40%;
  right: -10%;
  width: 60%;
  height: 180%;
  background: radial-gradient(
    circle at center,
    rgba(0, 102, 179, 0.28) 0%,
    rgba(0, 102, 179, 0) 60%
  );
  pointer-events: none;
}

.contact-inner {
  position: relative;
  max-width: var(--container-max);
}

.contact-head {
  margin-bottom: var(--space-2xl);
}

.contact-eyebrow {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: var(--space-md);
}

.contact-title {
  font-family: var(--font-serif);
  font-size: clamp(1.875rem, 4vw, 2.75rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
}

.contact-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-top: 3px solid var(--color-accent);
  padding: var(--space-xl) var(--space-lg);
}

.contact-card-title {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: var(--space-md);
}

.contact-name {
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.92);
  margin-bottom: var(--space-sm);
}

.contact-line {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.78);
  margin-bottom: var(--space-xs);
}

.contact-line:last-child {
  margin-bottom: 0;
}

.contact-line a {
  color: #8fc4ee;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-line a:hover {
  color: #ffffff;
}

/* ===== 平板 768-1023 ===== */
@media (max-width: 1023px) {
  .stock,
  .key-data,
  .reports,
  .contact {
    padding: var(--space-2xl) 0;
  }

  .stock-grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .key-data-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
  }

  .data-card {
    padding: var(--space-lg);
  }
}

/* ===== 移动 <768 ===== */
@media (max-width: 767px) {
  .hero {
    min-height: 42vh;
  }

  .hero-inner {
    padding-top: var(--space-2xl);
    padding-bottom: var(--space-xl);
  }

  .stock-head {
    align-items: flex-start;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .stock-stats {
    grid-template-columns: 1fr;
  }

  .key-data-grid {
    grid-template-columns: 1fr;
  }

  .report-row {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
  }

  .report-actions {
    width: 100%;
  }

  .report-link {
    flex: 1;
    justify-content: center;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
