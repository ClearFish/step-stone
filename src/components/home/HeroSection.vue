<script setup>
/*
 * Hero 区块
 * 全宽背景图 + 深色渐变遮罩，左对齐垂直居中白色文字
 */
defineProps({
  image: {
    type: String,
    default: '/images/hero/GettyImages-544690378.jpg'
  }
})
</script>

<template>
  <section class="hero">
    <div class="hero-bg" :style="{ backgroundImage: `url(${image})` }" aria-hidden="true"></div>
    <div class="hero-overlay" aria-hidden="true"></div>
    <div class="hero-inner container">
      <div class="hero_con">
        <h1 class="hero-title">
          <span class="hero-line">Opportunity is everywhere.</span>
          <span class="hero-line">So are we.</span>
        </h1>
        <p class="hero-subtitle">
          Worldwide, world-wise: your private markets partner.
        </p>
        <router-link to="/who-we-are" class="concact-link">Who we are</router-link>
      </div>
    </div>
    <div class="hero-scroll" aria-hidden="true">
      <span class="hero-scroll-line"></span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--color-primary-dark);
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transform: scale(1.04);
  animation: heroZoom 18s ease-out forwards;
}

@keyframes heroZoom {
  to {
    transform: scale(1);
  }
}

/* 深色渐变遮罩：左下深、右上透明，叠加整体半透明深色保证可读 */
.hero-overlay {
}

.hero-inner {
  position: relative;
  z-index: 2;
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  width: var(--container-max);
}
.hero_con {
  width: 606px;
  height: 465px;
  background: #191f23cc;
  padding: 30px;
  border-radius: 4px;
}
.hero-title {
  color: #daff96;
  font-size: clamp(2.5rem, 6vw, 4.75rem);
  font-weight: 200;
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin-bottom: var(--space-lg);
  font-family: sans-serif, sans-serif;
}

.hero-line {
  display: block;
  opacity: 0;
  transform: translateY(28px);
  animation: heroRise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.hero-line:nth-child(1) {
  animation-delay: 0.25s;
}

.hero-line:nth-child(2) {
  animation-delay: 0.45s;
}

@keyframes heroRise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-subtitle {
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  line-height: 1.5;
  max-width: 540px;
  margin-bottom: 0;
  opacity: 0;
  transform: translateY(20px);
  animation: heroRise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 0.7s;
}

.hero-scroll {
  position: absolute;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  justify-content: center;
}

.hero-scroll-line {
  display: block;
  width: 1px;
  height: 56px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0)
  );
  animation: scrollPulse 2.4s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%,
  100% {
    opacity: 0.4;
    transform: scaleY(0.7);
    transform-origin: top;
  }
  50% {
    opacity: 1;
    transform: scaleY(1);
    transform-origin: top;
  }
}

/* ===== 平板 ===== */
@media (max-width: 1023px) {
  .hero {
    min-height: 78vh;
  }
  .hero-inner {
    padding-top: var(--space-xl);
    padding-bottom: var(--space-xl);
  }
}

/* ===== 移动 ===== */
@media (max-width: 767px) {
  .hero {
    min-height: 70vh;
  }
  .hero-overlay {
  }
  .hero-scroll {
    display: none;
  }
}
</style>
<style lang="scss" scoped>
.concact-link {
  width: 140px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
  color: #445460;
  background: #daff96;
  border-radius: 4px;
  margin-top: 30px;
  &:hover{
    background: #445460;
    color: #fff;
  }
}
</style>
