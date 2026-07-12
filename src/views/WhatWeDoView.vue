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
import { ref } from 'vue'
import PageHero from '@/components/common/PageHero.vue'
import Icon1 from "@/assets/wedo/icon1.jpg"
import Icon2 from "@/assets/wedo/icon2.jpg"
import Icon3 from "@/assets/wedo/icon3.jpg"

import btm1 from "@/assets/wedo/btm1.png"
import btm2 from "@/assets/wedo/btm2.png"
import btm3 from "@/assets/wedo/btm3.png"


/* PageHero 背景图取自 asset-classes 目录的真实文件 */
const heroBackground = '/images/asset-classes/Asset_Classes_Banner_GettyImages-112624706_medium.jpeg'

/* 三个卡片区块统一配置：theme 控制背景（alt=浅灰 / light=白底） */
const sections = [
  {
    kicker: '資産運用',
    title: '魅力的な投資機会への卓越したアクセス、深いセクター専門性、そしてあらゆる資産クラスと戦略にまたがる比類のないリーチ。これらの強みを通じて、私たちは真にオーダーメイドのプライベート・マーケット・プログラムとパートナーシップを構築し、付加価値を創出します。',
    icon: Icon1
  },
  {
    kicker: 'アドバイザリー・サービス',
    title: '私たちは各投資ポートフォリオの戦略立案、設計、構築を行い、さまざまな要素や特性についてお客様と緊密に連携しながら、それぞれのお客様固有の目標に適合し、重点を置いたカスタマイズ型のアドバイザリー・ソリューションを提供します。',
    icon: Icon2,
  },
  {
    kicker: 'データとアナリティクス',
    title: '当社の市場をリードする独自の調査・レポーティング・プラットフォーム「SPI by StepStone」は、案件単位で比類のないパフォーマンス分析とオペレーションに関するインサイトを提供します。これにポートフォリオ・アナリティクス＆レポーティング・チームの知見を組み合わせることで、プライベート・マーケットを鋭く把握し、配分判断、リスク管理、そしてポートフォリオのモニタリングと予測能力を強化します。',
    icon: Icon3,
  }
]
const btmLists = ref([
  {
    btn:'ポッドキャスト',
    img:btm1,
    content:'RPM 第61回 | トップ・クオータイルの先へ: ディール単位のベンチマーキングがプライベート・マーケット投資家にもたらす価値'
  },
   {
    btn:'企業ニュース',
    img:btm2,
    content:'StepStoneとPitchBook、プライベート・マーケット向けディール単位ベンチマーキング・ソリューションを開始'
  },
   {
    btn:'ポッドキャスト',
    img:btm3,
    content:'RPM 第60回 | 変化するベンチャー投資環境: 流動性、選別性、そしてセカンダリー'
  }
])
</script>

<template>
  <div class="what-we-do">
    <!-- 1. PageHero -->
    <PageHero
      title="私たちの事業内容"
      subtitle="プライベート市場全体にわたるカスタマイズされた投資ソリューション"
      :background-image="heroBackground"
    />

    <!-- 2. 总览介绍 -->
    <section class="overview">
      <div class="container overview-inner">
        <h2 class="overview-title">
          プライベート・マーケット投資への包括的なアプローチ
        </h2>
        <div class="overview-text">
          <p>
            Zenith Capital Labは、高度な専門性とグローバルな展開力を結集し、お客様の
            プライベート・マーケット・ポートフォリオの構築と運用を支援します。
            当社は、プライベート・エクイティ、不動産、インフラストラクチャー、
            プライベート・デットという4つの中核資産クラスに投資し、ファンド投資、
            セカンダリー投資、共同投資、ダイレクト投資という4つの相互補完的な
            戦略を通じて資本を配分しています。
          </p>
          <p>
            投資にとどまらず、当社はアドバイザリー・サービス、裁量型資産運用、
            独自のデータおよびアナリティクス、ならびにプライベート・ウェルス向け
            ソリューションを提供しています。あらゆる機能を組み合わせることで、
            各お客様の目標に合わせたカスタマイズされたソリューションを実現します。
          </p>
        </div>
      </div>
    </section>

    <!-- 3-5. 三个卡片区块（统一渲染） -->
    <div class="car_con">
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
        </div>
        <img :src="section.icon" alt="" class="icon_bg">
      </section>
    </div>
    <div class="center_con">
      <p class="main_ttile">市場の可能性をさらに引き出すモデル</p>
      <div class="content">
        <div class="left first_left">
          <div class="word">
            <p class="title">優れたディールフロー</p>
            <p class="cont">GPおよびLPのエコシステムにおける当社の中核的な立ち位置と、思慮深く洞察力に富んだアプローチにより、主要なファンド・マネージャーとの強固なパートナーシップが生まれています。これにより、魅力的なファンド投資、共同投資、セカンダリー投資の豊富な機会へ優先的にアクセスできます。この充実したパイプラインを通じて、より選択的に投資機会を追求し、リターンの向上と、マネージャーおよびお客様との関係強化を実現します。</p>
          </div>
        </div>
         <div class="left right">
          <div class="word">
            <p class="title">より鋭いデューデリジェンス</p>
            <p class="cont">当社のアドバイザリー業務は、複雑かつ進化し続けるファンド・マネージャーの全体像を読み解き、より良い意思決定につながるマクロとミクロの視点を提供します。さらに、ファンド投資、セカンダリー投資、共同投資の各事業が生み出す相乗効果により、デューデリジェンス上の重要な観点が明らかになります。これを当社のデータおよびアナリティクス基盤と組み合わせることで、チームとパートナーに対して、より高い明確性と実践的な指針をもたらします。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p class="title">私たちの視点</p>
      <p class="subtitle">複雑さを明確にする: プライベート・マーケットの世界を見通す視点。</p>
      <div class="lists">
        <div class="btm_item" v-for="(item, index) in btmLists" :key="index">
          <img :src="item.img" alt="">
          <div class="bottom_c">
            <div class="btn">{{ item.btn }}</div>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ===== 总览介绍 ===== */
.overview {
  background: #f2eff1;
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
  font-size: 20px;
  font-weight: 700;
  color: #daff96;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: var(--space-sm);
}

.card-section-title {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: normal;
  line-height: 1.2;
  color: var(--color-primary);
  letter-spacing: -0.01em;
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
  .card-body {
    padding: var(--space-md);
  }
}
</style>
<style lang="scss" scoped>
.car_con {
  display: flex;
  justify-content: space-between;
  max-width: var(--container-max);
  margin: 40px auto;
  .card-section {
    width: 387px;
    height: 675px;
    position: relative;
    z-index: 2;
    padding: 0;
    .icon_bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }
    .card-section-inner {
      position: relative;
      z-index: 2;
      padding: 0;
      height: 100%;
      .card-section-head {
        width: 80%;
        margin-left: 20%;
        height: 100%;
        .card-section-kicker {
          display: block;
          width: 100%;
          height: 208px;
          background: #191f23cc;
          text-align: center;
          line-height: 208px;
          color: #daff96;
          margin-bottom: 0;
        }
        .card-section-title {
          display: block;
          width: 100%;
          height: calc(100% - 208px);
          background: #f2eff1;
          color: #445460;
          padding: 0 20px;
          padding-top: 40px;
          border-top: 14px solid #daff96;
        }
      }
    }
  }
}
.center_con {
  width: 100%;
  margin: 0 auto;
  .main_ttile {
    font-family: var(--font-serif);
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.01em;
    text-align: center;
    padding:  40px 0;
    margin-bottom: 0px;
    background: rgb(25, 31, 35);
    color: #ffffff;
  }
  .content {
    display: flex;
    .left {
      flex: 1;
      background-color: #445460;
      padding: 60px 0;
      .word {
        width: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #ffffff;
        .title {
          font-size: 42px;
        }
        .cont {
          font-size: 24px;
          width: 80%;
          line-height: 40px;
        }
      }
    }
    .first_left {
      display: flex;
      justify-content: flex-end;
    }
    .right {
      background: #2f3a42;
    }
  }
}
.bottom {
  max-width: var(--container-max);
  margin: 40px auto;
  .title {
    text-align: center;
    font-size: 42px;
  }
  .subtitle {
    text-align: center;
    font-size: 24px;
  }
  .lists {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    position: relative;
    .btm_item {
      width: 413px;
      img {
        width: 100%;
        height: 208px;
      }
      .bottom_c {
        width: 100%;
        height: 202px;
        background: #f2eff1;
        padding: 20px;
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
    }
  }
  
}
@media (max-width: 767px) {
  .car_con {
    display: block;
    .card-section {
      width: 96%;
      margin: 0 auto;
      margin-bottom: 16px;
      height: 334px;
      .card-section-inner {
        width: 100%;
        height: 100%;
        .card-section-head {
          width: 100%;
          margin-left: 0;
          .card-section-kicker {
            height: 130px;
            line-height: 130px;
          }
          .card-section-title {
            font-size: 14px;
            padding-top: 10px;
            height: calc(100% - 130px);
          }
        }
      }
    }
  }
  .center_con {
    .main_ttile {
      font-size: 28px;
      padding: 40px 20px;
    }
    .content {
      display: block;
      .left  {
        .word {
          .title {
            font-size: 26px;
          } 
          .cont {
            font-size: 20px;
            line-height: 28px;
          }
          .cont {
            width: 100%;
            padding: 0 10px;
          }
        }
      }
      .right {
        .word {
          width: 100%;
        }
      }
    }
  }
  .bottom {
    .title {
      font-size: 28px;
    }
    .subtitle {
      font-size: 20px;
    }
    .lists {
      display: block;
      padding: 0 10px;
      .btm_item {
        width: 100%;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
