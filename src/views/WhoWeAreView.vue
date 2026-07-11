<script setup>
/*
 * Who We Are 页面：复刻 StepStone Group "Who We Are" 关于页
 * 区块顺序：Hero / 公司介绍+关键数据 / Our Leadership / Culture / Corporate Citizenship
 * PageHero 组件尚未存在，故在本页内联 Hero。
 */
import { leadership, citizenship } from '@/data/whoWeAre'

// 公司介绍关键数据（横向排列）
const stats = [
  { value: '2007', label: 'Founded' },
  { value: '31', label: 'Offices' },
  { value: '1,240+', label: 'Experts' },
  { value: '$771B', label: 'Total capital responsibility' }
]

const heroImage = '/images/insights/2018_StepStone_NewYork_2949web-e1544552951172.jpeg'
const introImage = '/images/insights/2018_StepStone_NewYork_1995web-e1544550999386.jpg'
</script>

<template>
  <main class="wwa">
    <!-- 1. Hero -->
    <section class="hero">
      <div
        class="hero-bg"
        :style="{ backgroundImage: `url(${heroImage})` }"
        aria-hidden="true"
      ></div>
      <!-- <div class="hero-overlay" aria-hidden="true"></div> -->
      <div class="hero-inner container">
        <div class="hero_con">
          <h1 class="hero-title">私たちについて</h1>
          <p class="hero-subtitle">Zenith Capital Labは2018年の設立以来、現在まで継続して運営されています。</p>
        </div>
      </div>
    </section>

    <!-- 2. 公司介绍 + 关键数据 -->
    <section class="intro">
      <div class="container intro-inner">
        <div class="intro-grid">
          <div class="intro-text">
            <div class="intro-body">
              <p>
               「リサーチドリブン」「リスク優先」「長期的価値」を核心理念として一貫して重視しています。
              </p>
              <p>
                Zenith Capital Labは2018年の設立以来、日本株式およびデジタル資産市場のリサーチに特化し、データ分析、マクロ経済研究、リスク管理を基盤として、長期的なトラッキング、定量分析およびオンチェーンリサーチを通じて、投資家に対しより専門的かつ客観的で先見性のあるリサーチサポートを提供しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Our Leadership -->
    <section class="leadership">
      <div class="container leadership-inner">
        <header class="section-head">
          <p class="eyebrow">基本概念</p>
        </header>

       <div class="pillars-grid">
        <article class="pillar-card" v-for="(p, i) in leadership" :key="i">
          <div class="content">
            <div class="top_c">
              <h3 class="pillar-card-title">{{ p.title }}</h3>
              <p class="subtitle">{{ p.subtitle }}</p>
            </div>
            <div class="btm_c">
              <p class="pillar-card-desc">{{ p.description }}</p>
            </div>
          </div>
        </article>
      </div>
      </div>
    </section>

    <!-- 4. Culture -->
    <!-- <section class="culture">
      <div class="container culture-inner">
        <div class="culture-grid">
          <div class="culture-text">
            <p class="eyebrow eyebrow-light">Culture</p>
            <h2 class="culture-title">Working at StepStone</h2>
            <p class="culture-body">
              Our culture is built on curiosity, collaboration, and a commitment
              to creating innovative solutions. We empower our professionals
              with the resources and support to act swiftly and decisively.
            </p>
            <RouterLink class="btn btn-solid" to="/current-opportunities">
              Explore careers
            </RouterLink>
          </div>
          <div class="culture-mark" aria-hidden="true">
            <span class="culture-mark-line"></span>
            <span class="culture-mark-num">04</span>
          </div>
        </div>
      </div>
    </section> -->

    <!-- 5. Corporate Citizenship -->
    <section class="citizenship">
      <div class="container citizenship-inner">
        <header class="section-head">
          <p class="eyebrow">コアポジショニング</p>
        </header>

        <div class="cit-grid">
          <article
            class="cit-card"
            v-for="(item, i) in citizenship"
            :key="i"
          >
          <div class="top_c">
            <h3 class="cit-title">{{ item.title }}</h3>
          </div>
          <div class="bottom_c">
            <p class="cit-desc">{{ item.description }}</p>
          </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ===== 通用：眉标、标题、按钮 ===== */
.eyebrow {
  font-family: var(--font-sans);
  font-size:24px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #445460;
  margin-bottom: var(--space-md);
}

.eyebrow-light {
  color: #6fa8dc;
}

.section-head {
  max-width: 760px;
  margin: 0 auto var(--space-2xl);
  text-align: center;
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(1.875rem, 4vw, 2.75rem);
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: -0.01em;
  margin-bottom: 0;
}

.section-lede {
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--color-text-light);
  margin-top: var(--space-md);
  margin-bottom: 0;
}

.btn {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 14px 32px;
  border: 1px solid transparent;
  transition: background-color 0.25s ease, color 0.25s ease,
    border-color 0.25s ease, transform 0.25s ease;
}

.btn-outline {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background: transparent;
}

.btn-outline:hover {
  background: var(--color-primary);
  color: #ffffff;
}

.btn-solid {
  color: #ffffff;
  background: var(--color-accent);
}

.btn-solid:hover {
  background: #ffffff;
  color: var(--color-primary);
}

.link-arrow {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-accent);
}

.link-arrow::after {
  content: '\2192';
  margin-left: 10px;
  transition: transform 0.25s ease;
}

.link-arrow:hover {
  color: var(--color-primary);
}

.link-arrow:hover::after {
  transform: translateX(4px);
}

/* ===== 1. Hero ===== */
.hero {
  position: relative;
  width: 100%;
  min-height: 90vh;
  /* display: flex;
  align-items: flex-end; */
  overflow: hidden;
  background: var(--color-primary-dark);
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transform: scale(1.05);
  animation: heroZoom 18s ease-out forwards;
}

@keyframes heroZoom {
  to {
    transform: scale(1);
  }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(15, 26, 38, 0.55) 0%,
    rgba(15, 26, 38, 0.78) 100%
  );
}

.hero-inner {
  position: relative;
  z-index: 2;
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-3xl);
  background: #191f23cc;
  width: 730px;
  height: 270px;
  margin-top:260px;
  border-radius: 4px;
}

.hero-eyebrow {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #6fa8dc;
  margin-bottom: var(--space-md);
  opacity: 0;
  transform: translateY(16px);
  animation: heroRise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 0.15s;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: normal;
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: #daff96;
  margin-bottom: var(--space-md);
  opacity: 0;
  transform: translateY(24px);
  animation: heroRise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 0.3s;
}

.hero-subtitle {
  font-size: clamp(1.0625rem, 2vw, 1.375rem);
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: 0;
  max-width: 620px;
  opacity: 0;
  transform: translateY(20px);
  animation: heroRise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 0.5s;
}

@keyframes heroRise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== 2. 公司介绍 + 关键数据 ===== */
.intro {
  background: var(--color-bg);
  padding: var(--space-2xl) 0;
}

.intro-inner {
  max-width: var(--container-max);
  background: #daff96;
  padding: 30px 10px;
  border-right: 10px solid #445460;
}

.intro-grid {
}

.intro-title {
  font-family: var(--font-serif);
  font-size: clamp(1.875rem, 4vw, 2.75rem);
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: -0.01em;
  margin-bottom: var(--space-lg);
}

.intro-body {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--color-text);
}

.intro-body p {
  margin-bottom: var(--space-md);
}

.intro-body p:last-child {
  color: var(--color-text-light);
  margin-bottom: 0;
}

.intro-media {
  position: relative;
}

.intro-img {
  width: 100%;
  height: 100%;
  min-height: 360px;
  object-fit: cover;
  filter: grayscale(8%);
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  margin-top: var(--space-3xl);
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-2xl);
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1;
  color: var(--color-primary);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-sm);
}

.stat-label {
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-light);
}

/* ===== 3. Our Leadership ===== */
.leadership {
  background: var(--color-bg-alt);
  padding: var(--space-3xl) 0;
}

.leadership-inner {
  max-width: var(--container-max);
}

.leaders-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl) var(--space-lg);
}

.leader-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease;
}

.leader-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(15, 26, 38, 0.12);
}

.leader-photo {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: var(--color-bg-alt);
}

.leader-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.leader-card:hover .leader-img {
  transform: scale(1.04);
}

.leader-info {
  padding: var(--space-lg) var(--space-lg) var(--space-xl);
  border-top: 2px solid var(--color-accent);
}

.leader-name {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-primary);
  margin-bottom: var(--space-xs);
}

.leader-title {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-text-light);
  margin-bottom: 0;
}

.leadership-cta {
  margin-top: var(--space-2xl);
  text-align: center;
}

/* ===== 4. Culture ===== */
.culture {
  background: var(--color-primary);
  color: #ffffff;
  padding: var(--space-3xl) 0;
  position: relative;
  overflow: hidden;
}

.culture-inner {
  max-width: var(--container-max);
}

.culture-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-2xl);
  align-items: center;
}

.culture-title {
  font-family: var(--font-serif);
  font-size: clamp(1.875rem, 4vw, 2.75rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
  margin-bottom: var(--space-lg);
}

.culture-body {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.82);
  max-width: 640px;
  margin-bottom: var(--space-xl);
}

.culture-mark {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-md);
}

.culture-mark-line {
  display: block;
  width: 1px;
  height: 80px;
  background: rgba(255, 255, 255, 0.4);
}

.culture-mark-num {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 0.05em;
}

/* ===== 5. Corporate Citizenship ===== */
.citizenship {
  background: var(--color-bg);
  padding: var(--space-3xl) 0;
}

.citizenship-inner {
  max-width: var(--container-max);
}

.cit-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.cit-card {
  position: relative;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease, border-top-color 0.3s ease;
}

.cit-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(15, 26, 38, 0.12);
  border-top-color: var(--color-primary);
}

.cit-index {
  font-family: var(--font-serif);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: 0.05em;
  margin-bottom: var(--space-md);
}

.cit-title {
  font-family: var(--font-serif);
  font-size: 1.3125rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-primary);
  margin-bottom: var(--space-md);
}

.cit-desc {
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--color-text-light);
  margin-bottom: 0;
}

.citizenship-cta {
  margin-top: var(--space-2xl);
  text-align: center;
}

/* ===== 平板 768px - 1023px ===== */
@media (max-width: 1023px) {
  .intro {
    padding: var(--space-2xl) 0;
  }
  .intro-grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
  .intro-img {
    min-height: 280px;
  }
  .stats {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg) var(--space-xl);
    margin-top: var(--space-2xl);
    padding-top: var(--space-xl);
  }
  .leadership,
  .culture,
  .citizenship {
    padding: var(--space-2xl) 0;
  }
  .leaders-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg) var(--space-md);
  }
  .section-head {
    margin-bottom: var(--space-xl);
  }
  .culture-grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
  .culture-mark {
    display: none;
  }
  .cit-grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
}

/* ===== 移动 < 768px ===== */
@media (max-width: 767px) {
  .hero {
    min-height: 80vh;
  }
  .hero-inner {
    padding-top: var(--space-2xl);
    padding-bottom: var(--space-2xl);
    width: 90%;
    margin-top: 300px;
  }
  .container  {
    max-width: 98%;
  }
  .hero-overlay {
    background: linear-gradient(
      180deg,
      rgba(15, 26, 38, 0.5) 0%,
      rgba(15, 26, 38, 0.85) 100%
    );
  }
  .stats {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
    margin-top: var(--space-xl);
  }
  .stat-value {
    font-size: 2rem;
  }
  .leaders-grid {
    grid-template-columns: 1fr;
  }
  .leader-info {
    padding: var(--space-md);
  }
  .btn {
    display: block;
    width: 100%;
    text-align: center;
  }
  .culture-body {
    margin-bottom: var(--space-lg);
  }
}
</style>
<style lang="scss" scoped>
.pillars-grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.pillar-card {
  width: 49%;
  margin-bottom: 20px;
  position: relative;
  background: var(--color-bg);
  padding: var(--space-xl) var(--space-lg) var(--space-lg);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
  box-shadow 0.3s ease, border-color 0.3s ease;
}

.pillar-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(15, 26, 38, 0.12);
  border-top-color: var(--color-primary);
}

.pillar-index {
  font-family: var(--font-serif);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: 0.05em;
  margin-bottom: var(--space-md);
}

.pillar-card-title {
  font-size: 32px;
  line-height: 1.3;
  font-weight: normal;
  font-family: sans-serif;
  color: #daff96;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: var(--space-md);
}

.pillar-card-desc {
  font-size: 16px;
  line-height: 1.65;
  color: #445460;
  margin-bottom: 0;
  font-weight: 500;
}
.pillar-card {
  height: 440px;
  background: url("@/assets/pillars/access.jpg") no-repeat center;
  background-size: 100% 100%;
  padding: 0;
  &:nth-child(2) {
    background-image: url("@/assets/pillars/insight.jpeg");
  }
   &:nth-child(3) {
    background-image: url("@/assets/pillars/expertise.jpg");
  }
   &:nth-child(4) {
    background-image: url("@/assets/pillars/partnership.jpg");
  }
  .content {
    padding-left: 230px;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    flex-direction: column;
    .top_c {
      width: 100%;
      height: 208px;
      background: #191f23cc;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .subtitle {
        font-size: 16px;
        line-height: 1.65;
        color: #daff96;
        margin-bottom: 0;
        font-weight: 500;
        padding: 0px 10px;
      }
    }
    .btm_c {
      background: #f2eff1;
      width: 100%;
      flex: 1;
      padding: 30px;
      position: relative;
      &::before {
        content: "";
        width: 100%;
        height: 14px;
        background: #daff96;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}
.cit-grid {
  .top_c {
    width:100%;
    height: 192px;
    display: flex;
    align-items: center;
    background: #191f23cc;
    h3 {
      font-size: 20px;
      text-align: center;
      color: #daff96;
      width: 100%;
    }
    
  }
  .bottom_c {
      border-top: 16px solid #daff96;
      height: 208px;
      background: #f2eff1;
      padding: 20px;
      color: #445460;
      font-weight: 500;
    }
}
@media (max-width: 767px) {
  .pillars-grid {
    flex-direction: column;
    .pillar-card {
      width: 100%;
      height: 400px;
      .content {
        padding-left: 0;
        padding-top: 100px;
        .top_c {
          .pillar-card-title {
            padding-top: 20px;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
