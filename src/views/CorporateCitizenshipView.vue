<template>
    <div class="mai">
         <section class="hero">
            <div class="hero-bg" aria-hidden="true"></div>
            <div class="top_c">
                <div class="hero-inner container">
                <h1 class="hero-title">StepStoneにおける責任</h1>
                <p class="hero-subtitle">
                    企業の持続可能性と責任ある投資に取り組んでいます。
                </p>
                </div>
                <div class="hero-inner other_c">
                <div class="hero-title">市場調査</div>
                <p class="hero-subtitle">
                    ネイチャークレジット: プライベートマーケット資本を自然へ解き放つ
                </p>
                </div>
            </div>
        </section>
         <section class="overview">
            <div class="container overview-inner">
                <div class="overview-text">
                <p>
                   プライベートマーケットにおける主要なアロケーターの一社として、私たちは企業の持続可能性に関して、クライアント、従業員、株主の皆さまに対する大きな責任を認識しています。より良い意思決定、より良い投資、そして優れた業務遂行を促進することで、現実社会に前向きな成果をもたらすことを目指しています。
                </p>
               
                </div>
            </div>
        </section>
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
        <div class="center_bg">
            <div class="content">
                <p class="title">責任ある投資</p>
                <p class="subtitle">私たちは、引受対象の投資において重要な責任投資の観点を考慮することで、クライアントの資本を守り、そのポートフォリオのレジリエンスを高めることを目指しています。</p>
                <div class="btn">詳しく見る</div>
            </div>
        </div>
        <div class="car_box">
            <p class="title">レポーティング</p>
            <p class="subtitle">ベストプラクティスに沿って、当社のレポートとポリシーは、多岐にわたるESG課題にどのように向き合っているかについての見解を提供します。</p>
            <div class="lists_box">
                <div class="list_item" v-for="(item,index) in carLists" :key="index">
                    <div class="top">
                        <p class="title_c">{{item.title}}</p>
                    </div>
                    <div class="btm">
                        <p class="content">{{item.content}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="car_box partner_box">
            <p class="title">私たちのパートナー</p>
            <p class="subtitle">私たちは、協働学習とベストプラクティスの実践促進に取り組む実務家や非営利団体の拡大するネットワークを支援しています。</p>
            
            <div class="partner_list">
                <div class="partner_item" v-for="(item,index) in partnerLists" :key="index">
                    <img :src="item" alt="" class="partner_bg">
                </div>
            </div>
        </div>
        <div class="car_box partner_box btm_con">
             <p class="title">私たちの視点</p>
            <p class="subtitle">コミュニティへの貢献を通じて、StepStone の事業全体にわたるリサーチとインサイトをご覧ください。</p>
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
        <div class="btm_des">
            <p class="word">StepStone は、デューデリジェンスの過程において、あらゆる重要なリスクおよび商業上の考慮事項に対応するため、ESG の観点を統合しています。StepStone は、各クライアントのポートフォリオがその投資目的に沿うよう設計される中で、ポートフォリオ価値の保全、リスクの軽減、価値向上の実現に注力しています。この目的の一環として、StepStone は、口座に明示的な指定がある場合や、クライアントがポートフォリオにそのような制限を明確に設けた場合を除き、特定のセクターを自動的に除外したり、特定の ESG 指標を満たす投資先のみに限定したりはしません。StepStone は、可能な限り厳格なデューデリジェンスを実施することで、クライアントに競争力あるリスク調整後リターンをもたらす商業的成果を提供し、クライアントの目的と要件の実現に努めています。</p>
        </div>
    </div>
</template>
<script  setup>
import {ref} from "vue"
import Icon1 from "@/assets/citizen/icon1.jpg"
import Icon2 from "@/assets/citizen/icon2.jpg"
import Icon3 from "@/assets/citizen/icon3.jpg"
import P1 from "@/assets/citizen/p-1.png"
import P2 from "@/assets/citizen/p-2.png"
import P3 from "@/assets/citizen/p-3.png"
import P4 from "@/assets/citizen/p-4.png"
import P5 from "@/assets/citizen/p-5.png"
import P6 from "@/assets/citizen/p-6.png"
import P7 from "@/assets/citizen/p-7.png"
import P8 from "@/assets/citizen/p-8.png"
import P9 from "@/assets/citizen/p-9.png"
import P10 from "@/assets/citizen/p-10.png"
import P11 from "@/assets/citizen/p-11.png"
import P12 from "@/assets/citizen/p-12.jpg"
import P13 from "@/assets/citizen/p-13.png"
import P14 from "@/assets/citizen/p-14.png"
import P15 from "@/assets/citizen/p-15.avif"

import BTM1 from "@/assets/citizen/btm1.jpg"
import BTM2 from "@/assets/citizen/btm2.jpg"
import BTM3 from "@/assets/citizen/btm3.png"
const sections = ref([
    {
        kicker: 'カルチャー',
        title: 'StepStone は、創造性、透明性、信頼を礎として設立されました。これらの原則は、クライアントへのより良いサービスを可能にするだけでなく、私たちが誇りを持てる企業文化の土台にもなっています。従業員、パートナー、ベンダーのすべてに「あなたは大切な存在である」と伝える文化があってこそ、これが実現します。',
        icon: Icon1
    },
    {
        kicker: '慈善活動',
        title: '私たちのフィランソロピーへの取り組みは、投資実務を導くのと同じく、広い視野と緻密な分析に基づいています。企業寄付プログラムでは、世界規模で実質的な変化をもたらす団体を見極めて支援し、寄付マッチングプログラムでは、従業員にとって重要な社会課題と私たちを結びつけています。',
        icon: Icon2,
    },
    {
        kicker: '社会への貢献',
        title: '私たちは、すべての従業員が暮らし働く地域社会に恩返しをし、前向きな影響を与えることを奨励しています。Volunteer Time Off プログラムを通じて、従業員が地域の大切な活動を支援できるよう後押ししています。',
        icon: Icon3,
    }
])
const carLists = ref([
    {
        title:'2025年 責任投資レポート',
        content:'本レポートでは、2025年1月1日から2025年12月31日までの StepStone Group の責任投資（RI）活動の主な内容を紹介しています。これは当該期間における RI 活動の包括的な記述または完全な説明ではありません。'
    },
    {
        title:'現代奴隷制に関する声明',
        content:'私たちが現代奴隷制および人身取引を容認しない立場は、「人は大切である」という一つのシンプルな信念に基づいています。この原則は、事業運営、従業員の教育と待遇、そしてクライアントやベンダーとの関わり方すべてを導いています。'
    },
    {
        title:'EU SFDR 開示',
        content:'当社の EU SFDR 開示では、持続可能性要因をどのように考慮し、持続可能性リスクを投資判断のプロセスおよび手続きにどのように統合しているかを示しています。'
    },
    {
        title:'気候方針',
        content:'StepStone は、投資プロセスのあらゆる段階および社内業務全体において、気候変動に関する考慮事項を統合するよう努めています。'
    },
    {
        title:'責任投資ポリシー',
        content:'投資プロセスと社内業務の双方に ESG 要因を十分に統合することが、クライアントにとって長期的なリスク調整後リターンの向上につながると私たちは考えています。'
    },
    {
        title:'スチュワードシップ方針',
        content:'StepStone は、特に影響力のある持分保有や長期保有が一般的であるプライベートマーケットにおいて、効果的なスチュワードシップ活動がリスク調整後リターンの最大化に重要な役割を果たすと認識しています。'
    },
    {
        title:'人的資本ポリシー',
        content:'人的資本は、当社にとって最も重要な資産である「人」に関わる領域です。この分野での成功は、成果に基づく個人および企業全体の目標達成にとって極めて重要です。'
    },
    {
        title:'カリフォルニア州 AB 1305 開示',
        content:'当社のカリフォルニア州自主的炭素市場に関する開示では、カーボンフットプリント算定プロセス、カーボンニュートラルに関する主張、そして当該年度に購入したオフセットプロジェクトの透明性について説明しています。'
    },
])

const partnerLists = ref([
    P1,
    P2,
    P3,
    P4,
    P5,
    P6,
    P7,
    P8,
    P9,
    P10,
    P11,
    P12,
    P13,
    P14,
    P15,
])

const btmLists = ref([
    {
        btn:'市場調査',
        content:'境界を超える投資: 宇宙と深海',
        img:BTM1
    },
    {
        btn:'市場調査',
        content:'ネイチャークレジット: プライベートマーケット資本を自然へ解き放つ',
        img:BTM2
    },
    {
        btn:'市場調査',
        content:'パワープレイ: データセンターと AI・エネルギーの結節点',
        img:BTM3
    }
])
</script>
<style lang="scss" scoped>
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
  background-image: url('@/assets/citizen/banner.jpg');
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

.other_c {
  background: #191f23;
  padding: 20px;
  margin-top: 40px;
  margin-left: 40px;
  width: 400px;
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
.center_bg {
    width: 100%;
    height: 765px;
    background: url('@/assets/citizen/center_bg.jpg') no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
        width:1060px;
        height: 382px;
        background: #2f3a42d9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .title {
            color: #daff96;
            font-size: 36px;
        }
        .subtitle {
            color: #fff;
            width: 742px;
            text-align: center;
            font-size: 26px;
            font-weight: 500;
        } 
        .btn {
            position: relative;
            padding: 6px 18px;
            font-size: 22px;
            color: var(--color-text-light);
            white-space: nowrap;
            transition: color 0.2s ease;
             background: #daff96;
            color: #445460;
            cursor: pointer;
            &:hover {
                background: #445460;
                color: #fff;
            }
        }
    }   
}
.car_box {
    margin-top:20px;
    .title {
        text-align: center;
        font-size: 42px;
        color: #445460;
        max-width: var(--container-max);
        margin: 0 auto;
    }
    .subtitle {
        max-width: var(--container-max);
        margin: 0 auto;
        margin-top: 16px;
        text-align: center;
        font-size: 20px;
        color: #445460;
    }
    .lists_box {
        max-width: var(--container-max);
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 1%;
        margin-top: 26px;
        .list_item {
            width: 32%;
            margin-bottom: 1%;
            .top {
                padding: 10px 20px;
                background: #445460;
                display: flex;
                align-items: center;
                color: #daff96;
                font-size: 24px;
                height: 88px;
                box-sizing: border-box;
                line-height: 32px;
            }
            .btm {
                width: 100%;
                height: 196px;
                background: #f2eff1;
                padding: 16px;
                font-size: 16px;
                color: #445460;
            }
        }
    }
}
.partner_box {
    .subtitle {
        width: 860px;
    }
    .partner_list {
        max-width: var(--container-max);
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        .partner_item {
            width: 20%;
            max-height: 180px;
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 90%;
                height: auto;
                max-height: 180px;
            }
        }
    }
}
.btm_con {
    max-width: var(--container-max);
    margin: 0 auto;
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
.btm_des {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px 0;
    .word {
        font-size: 20px;
        line-height: 32px;
        color: #445460;
        font-style: italic;
    }
}
@media (max-width: 767px) {
  .hero {
    min-height: 96vh;
  }
  .hero-inner {
    padding-top: var(--space-2xl);
    padding-bottom: var(--space-xl);
  }
  .top_c {
    display:block;
    margin-top: 240px;
    width: 100%;
  }
  .hero-inner {
    width: 98%;
  }
  .hero-title {
    font-size: 28px;
  }
  .hero-subtitle {
    max-width: none;
    padding: 0 10px;
  }
  .other_c {
    width: 98%;
    margin-left: 0;
    margin-top: 0;
    margin: 0 auto;
    margin-top: 10px;
  }
  .center_bg {
    height: 425px;
    .content {
        width: 96%;
        .title {
            font-size: 24px;
        }
        .subtitle {
            font-size: 14px;
            width: 100%;
            padding: 0 10px;
        }
        .btn {
            font-size: 18px;
        }
    }
  }
  .car_box {
    .title {
        font-size: 24px;
    }
    .subtitle {
        font-size: 16px;
    }
    .lists_box {
        flex-direction: column;
        align-items: center;
        width: 98%;
        .list_item {
            width: 100%;
            margin-block: 10px;
        }
    }
  }
  .partner_box  {
    .subtitle {
        width:90%;
    }
    .lists {
        flex-direction: column;
        align-items: center;
        width: 98%;
        margin: 0 auto;
        .btm_item {
            width: 100%;
            margin-block: 10px;
        }
    }
  }
  .btm_des {
    width: 96%;
    margin: 0 auto;
    .word {
        font-size: 16px;
    }
  }
}
</style>
<style lang="scss" scoped>
.overview {
    background: #f2eff1;
    padding: var(--space-3xl) 0;
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
}
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
