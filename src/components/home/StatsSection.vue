<script setup>
/*
 * 关键数据统计区块
 * 三列网格，大号 serif 数字 + 标签 + 说明
 */
import { stats } from '@/data/home'
</script>

<template>
  <section class="stats">
    <div class="container stats-inner">
      <div class="stats-grid">
        <div class="stat" v-for="(item, i) in stats" :key="i">
          <div class="stat-value">{{ item.value }}</div>
          <div class="stat-label">{{ item.label }}</div>
          <p class="stat-note" v-if="item.note">{{ item.note }}</p>
          <p class="stat-desc">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  background: var(--color-bg);
  padding: var(--space-3xl) 0;
}

.stats-inner {
  max-width: var(--container-max);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-2xl);
}

.stat {
  position: relative;
  padding: 0 var(--space-lg);
}

/* 列间细分割线 */
.stat:not(:first-child)::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 1px;
  /* background: var(--color-border); */
}

.stat-value {
  /* font-family: var(--font-serif); */
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 200;
  line-height: 1;
  color: var(--color-primary);
  margin-bottom: var(--space-md);
  letter-spacing: -0.02em;
  text-align: center;
}

.stat-label {
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text);
  margin-bottom: var(--space-sm);
   text-align: center;
}

.stat-note {
  font-size: 0.75rem;
  color: var(--color-text-light);
  margin-bottom: var(--space-md);
  text-align: center;
}

.stat-desc {
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--color-text);
  margin-bottom: 0;
  text-align: center;
}

/* ===== 平板：两列 ===== */
@media (max-width: 1023px) {
  .stats {
    padding: var(--space-2xl) 0;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-xl) var(--space-lg);
  }
  .stat {
    padding: 0 var(--space-md);
  }
  /* 第三列单独一行时去掉左边线，居中处理由网格自动完成 */
  .stat:nth-child(3) {
    grid-column: 1 / -1;
    padding-top: var(--space-xl);
    border-top: 1px solid var(--color-border);
  }
  .stat:nth-child(3)::before {
    display: none;
  }
}

/* ===== 移动：单列 ===== */
@media (max-width: 767px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
  .stat {
    padding: var(--space-lg) 0 0;
    border-top: 1px solid var(--color-border);
  }
  .stat:not(:first-child)::before {
    display: none;
  }
  .stat:first-child {
    padding-top: 0;
    border-top: none;
  }
  .stat:nth-child(3) {
    grid-column: auto;
    border-top: 1px solid var(--color-border);
    padding-top: var(--space-lg);
  }
}
</style>
