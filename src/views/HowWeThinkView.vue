<script setup>
/*
 * How We Think 观点洞察页
 * 复刻 StepStone Group /how-we-think/ 页面
 * 区块：内联 PageHero / 文章列表（分类 Tab + 卡片网格）/ Podcasts & Videos
 */
import { ref, computed } from 'vue'
import { articles } from '@/data/howWeThink'

/* 分类筛选 Tab：All + 各分类 */
const tabs = [
  'すべて',
  'マーケット・インサイト',
  'ホワイトペーパー',
  '業界アップデート',
  '規制・コンプライアンス',
  '私たちの視点'
]

const activeTab = ref('すべて')

const filteredArticles = computed(() => {
  if (activeTab.value === 'すべて') return articles
  return articles.filter((item) => item.category === activeTab.value)
})

/* Podcasts & Videos 区块链接 */
const podcastLink = '/how-we-think/podcasts'
const videoLink = '/how-we-think/videos'
</script>

<template>
  <main class="hwt">
    <!-- 1. PageHero（内联） -->
    <section class="hero">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="top_c">
        <div class="hero-inner container">
          <h1 class="hero-title">私たちの視点</h1>
          <p class="hero-subtitle">
            プライベート・マーケットをより深く理解し、その可能性を最大限に引き出すための洞察と視点。
          </p>
        </div>
        <div class="hero-inner other_c">
          <div class="hero-title">ポッドキャスト</div>
          <p class="hero-subtitle">
            RPM 第61回 | トップ・クオータイルの先へ: ディール単位のベンチマーキングがプライベート・マーケット投資家にもたらす価値
          </p>
        </div>
      </div>
    </section>

    <!-- 2. 文章列表区块 -->
    <section class="articles">
      <div class="container articles-inner">
        <!-- 分类筛选 Tab 栏 -->
        <div class="tabs" role="tablist" aria-label="記事カテゴリー">
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

        <!-- 文章卡片网格 -->
        <transition name="grid-fade" mode="out-in">
          <div
            v-if="filteredArticles.length"
            class="articles-grid"
            :key="activeTab"
          >
            <a
              v-for="item in filteredArticles"
              :key="item.id"
              :href="item.link"
              class="article-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="article-media">
                <img :src="item.image" :alt="item.title" loading="lazy" />
              </div>
              <div class="article-body">
                <div class="btn">{{ item.category }}</div>
                <h3 class="article-title">{{ item.title }}</h3>
              </div>
            </a>
          </div>
          <p v-else class="articles-empty" :key="`empty-${activeTab}`">
            このカテゴリーの記事はまだありません。しばらくしてから再度ご確認ください。
          </p>
        </transition>
      </div>
    </section>

    <!-- 3. Podcasts & Videos 区块 -->
    <!-- <section class="media">
      <div class="container media-inner">
        <header class="media-head">
          <h2 class="media-title">ポッドキャストと動画</h2>
        </header>

        <div class="media-grid">
          <a :href="podcastLink" class="media-card">
            <span class="media-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <rect
                  x="20"
                  y="6"
                  width="8"
                  height="22"
                  rx="4"
                  fill="currentColor"
                />
                <path
                  d="M14 22a10 10 0 0 0 20 0"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
                <path
                  d="M24 32v8M16 42h16"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <div class="media-card-body">
              <h3 class="media-card-title">StepStone ポッドキャスト</h3>
              <p class="media-card-text">
                当社の投資プロフェッショナルとの対話を通じて、プライベート・
                マーケットを形づくるトレンド、データ、意思決定をひも解きます。
              </p>
              <span class="media-card-link">
                今すぐ聴く
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
          </a>
          <a :href="videoLink" class="media-card">
            <span class="media-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <rect
                  x="5"
                  y="9"
                  width="38"
                  height="30"
                  rx="4"
                  stroke="currentColor"
                  stroke-width="2.5"
                />
                <path
                  d="M21 19.5v9l8-4.5-8-4.5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <div class="media-card-body">
              <h3 class="media-card-title">StepStone 動画</h3>
              <p class="media-card-text">
                市場見通しから詳細な解説まで、当社の専門家が複雑なプライベート・
                マーケットのテーマをわかりやすく解説します。
              </p>
              <span class="media-card-link">
                今すぐ見る
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
          </a>
        </div>
      </div>
    </section> -->
  </main>
</template>

<style scoped>
.hwt {
  width: 100%;
}

/* ===== 1. PageHero ===== */
.hero {
  position: relative;
  width: 100%;
  min-height: 65vh;
  display: flex;
  overflow: hidden;
  background: var(--color-primary-dark);
}
.top_c {
  max-width: var(--container-max);
  margin: 0 auto;
  display: flex;
  gap: 40px;
  margin-top: 160px;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('/images/hero/GettyImages-544690378.jpg');
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

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(15, 26, 38, 0.78) 0%,
    rgba(15, 26, 38, 0.86) 100%
  );
}

.hero-inner {
  position: relative;
  z-index: 2;
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  max-width: var(--container-max);
  background: #191f23cc;
  width: 530px;
  height: 270px;
  
}

.hero-title {
  color: #daff96;
  font-family: var(--font-serif);
  font-size: 40px;
  font-weight: normal;
  line-height: 1.1;
  letter-spacing: -0.01em;
  margin-bottom: var(--space-md);
  opacity: 0;
  transform: translateY(24px);
  animation: heroRise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 0.2s;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.88);
  font-size: clamp(1.0625rem, 2vw, 1.375rem);
  line-height: 1.5;
  max-width: 640px;
  margin-bottom: 0;
  opacity: 0;
  transform: translateY(20px);
  animation: heroRise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 0.45s;
}

@keyframes heroRise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 767px) {
  .hero {
    min-height: 92vh;
  }
  .hero-inner {
    padding-top: var(--space-2xl);
    padding-bottom: var(--space-xl);
  }
  .top_c {
    display:block;
  }
  .hero-inner {
    width: 98%;
  }
  .other_c {
    width: 98%;
    margin-left: 0;
    margin-top: 0;
  }
}

/* ===== 2. 文章列表 ===== */
.articles {
  background: var(--color-bg);
  padding: var(--space-3xl) 0;
}

.articles-inner {
  max-width: var(--container-max);
}

/* Tab 栏 */
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs) var(--space-lg);
  padding-bottom: var(--space-md);
  margin-bottom: var(--space-xl);
}

.tab {
  position: relative;
  padding: 6px 18px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-light);
  white-space: nowrap;
  transition: color 0.2s ease;
  background: #445460;
  color: #fff;
}



.tab:hover {
   background: #daff96;
  color: #445460;
}

.tab.active {
  background: #daff96;
  color: #445460;
  font-weight: 600;
}

.tab.active::after {
  transform: scaleX(1);
}

/* 卡片网格 */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl) var(--space-lg);
}

.article-card {
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
  color: inherit;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease, border-color 0.3s ease;
}

.article-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(15, 26, 38, 0.12);
  border-color: transparent;
  color: inherit;
}

.article-media {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--color-bg-alt);
  height: 208px;
}

.article-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.article-card:hover .article-media img {
  transform: scale(1.06);
}

.article-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 174px;
  background: #f2eff1;
  padding: var(--space-md) var(--space-md) var(--space-lg);
}

.article-category {
  font-family: var(--font-sans);
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  margin-bottom: var(--space-sm);
}

.article-title {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.35;
  color: #445460;
  margin-bottom: var(--space-sm);
  transition: color 0.2s ease;
}

.article-card:hover .article-title {
  color: var(--color-accent);
}

.article-meta {
  font-size: 0.8125rem;
  color: var(--color-text-light);
  margin-bottom: var(--space-md);
}

.article-readmore {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-accent);
}

.article-readmore svg {
  transition: transform 0.25s ease;
}

.article-card:hover .article-readmore svg {
  transform: translateX(3px);
}

.articles-empty {
  padding: var(--space-2xl) 0;
  text-align: center;
  color: var(--color-text-light);
  font-size: 0.9375rem;
}

/* 网格切换过渡 */
.grid-fade-enter-active,
.grid-fade-leave-active {
  transition: opacity 0.25s ease;
}
.grid-fade-enter-from,
.grid-fade-leave-to {
  opacity: 0;
}

/* ===== 3. Podcasts & Videos ===== */
.media {
  background: var(--color-bg-alt);
  padding: var(--space-3xl) 0;
}

.media-inner {
  max-width: var(--container-max);
}

.media-head {
  margin-bottom: var(--space-xl);
}

.media-title {
  font-family: var(--font-serif);
  font-size: clamp(1.875rem, 4vw, 2.75rem);
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: -0.01em;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
}

.media-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-md);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: var(--space-xl);
  color: inherit;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease, border-color 0.3s ease;
}

.media-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(15, 26, 38, 0.12);
  border-color: transparent;
  color: inherit;
}

.media-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #ffffff;
  flex-shrink: 0;
}

.media-icon svg {
  width: 32px;
  height: 32px;
}

.media-card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.media-card-title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
  transition: color 0.2s ease;
}

.media-card:hover .media-card-title {
  color: var(--color-accent);
}

.media-card-text {
  color: var(--color-text-light);
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: var(--space-lg);
}

.media-card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
}

.media-card-link svg {
  transition: transform 0.25s ease;
}

.media-card:hover .media-card-link svg {
  transform: translateX(3px);
}

/* ===== 响应式 ===== */
/* 平板：文章两列 */
@media (max-width: 1023px) {
  .articles {
    padding: var(--space-2xl) 0;
  }
  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
  .media {
    padding: var(--space-2xl) 0;
  }
}

/* 移动：文章单列，Tab 横向滚动 */
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
  .articles-grid {
    grid-template-columns: 1fr;
  }
  .media-grid {
    grid-template-columns: 1fr;
  }
  .media-card {
    padding: var(--space-lg);
  }
}
</style>
<style lang="scss" scoped>
.other_c {
  background: #191f23;
  padding: 20px;
  margin-top: 40px;
  margin-left: 40px;
  .hero-title {
    padding: 8px 12px;
    background: #445460;
    color: #fff;
    width: fit-content;
    font-size: 18px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      background: #daff96;
      color: #445460;
      font-weight: normal;
      font-size: 18px;
    }
  }
  .hero-subtitle {
    font-size: 16px;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
<style lang="scss" scoped>
.article-body {
  .btn {
    padding: 8px 12px;
    background: #00b289;
    color: #fff;
    width: fit-content;
    font-size: 18px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      background: #445460;
    }
  }
}
@media (max-width: 767px) {
  .top_c {
    margin-top: 240px;
  }
  .other_c {
    width: 98%;
    margin: 0 auto;
    margin-top: 20px;
  }
}
</style>
