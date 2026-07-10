<script setup>
/*
 * "An uncommonly clear view" 区块
 * 深色背景 + 白色文字 + CTA 按钮
 */
</script>

<template>
  <section class="clear-view">
    <div class="clear-view-deco" aria-hidden="true"></div>
    <div class="container clear-view-inner">
      <h2 class="clear-view-title">比類のないクリアな視点</h2>
      <p class="clear-view-body">
        プライベートマーケットにおける独自の立ち位置から、私たちは世界を形づくり、
        映し出しているあらゆる影響や要因を見つめています。最新のニュース、潮流、
        認識、視点を整理し、明確にすることで、その全体像を理解しやすくします。
      </p>
      <!-- <router-link to="/how-we-think" class="clear-view-cta">
        Explore insights
        <svg class="cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </router-link> -->
    </div>
  </section>
</template>

<style scoped>
.clear-view {
  position: relative;
  /* background: var(--color-primary); */
  color: #445460;
  padding-top: var(--space-3xl);
  overflow: hidden;
}

/* 右上角装饰光晕，增加深色块的层次感 */
.clear-view-deco {
  position: absolute;
  top: -40%;
  right: -10%;
  width: 60%;
  height: 180%;
  /* background: radial-gradient(
    circle at center,
    rgba(0, 102, 179, 0.28) 0%,
    rgba(0, 102, 179, 0) 60%
  ); */
  pointer-events: none;
}

.clear-view-inner {
  position: relative;
  max-width: 820px;
  text-align: center;
  margin: 0 auto;
}

.clear-view-eyebrow {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: var(--space-md);
}

.clear-view-title {
  font-family: var(--font-serif);
  font-size: clamp(1.875rem, 4.5vw, 3rem);
  font-weight: 700;
  color: #445460;
  line-height: 1.15;
  letter-spacing: -0.01em;
  margin-bottom: var(--space-lg);
}

.clear-view-body {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #445460;
  margin-bottom: var(--space-xl);
}

.clear-view-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 14px 28px;
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  transition: background 0.25s ease, border-color 0.25s ease,
    color 0.25s ease;
}

.clear-view-cta:hover {
  background: #ffffff;
  border-color: #ffffff;
  color: var(--color-primary);
}

.cta-arrow {
  transition: transform 0.25s ease;
}

.clear-view-cta:hover .cta-arrow {
  transform: translateX(4px);
}

@media (max-width: 767px) {
  .clear-view {
    padding: var(--space-2xl) 0;
  }
  .clear-view-body {
    font-size: 1rem;
  }
}
</style>
