<template>
    <div class="main">
        <section class="hero">
            <div class="hero-bg" aria-hidden="true"></div>
            <div class="top_c">
                <div class="hero-inner container">
                    <h1 class="hero-title">アドバイザリーサービス</h1>
                    <p class="hero-subtitle">
                        クライアントの戦略的および戦術的なポートフォリオ目標に応える柔軟なアプローチ。
                    </p>
                </div>
            </div>
        </section>
         <div class="word_con">
            <div class="content">
                <div class="left first_left">
                    <div class="word">
                        <p class="cont">アドバイザリーサービスは、長期的な戦略の明確さに短期的な戦術の柔軟性を組み合わせ、各投資家の期待リターン、流動性ニーズ、リスク許容度に応じた投資助言を提供します。グローバル投資ビジネス全体から得られる知見、独自のデータドリブンなソリューションによるデューデリジェンス上の優位性、そしてファンドマネージャーユニバースに対する深いカバレッジを通じて、当社のアドバイザリーサービスはクライアント目標の達成に必要な専門的ガイダンスを提供します。</p>
                    </div>
                </div>
                <div class="left right">
                    <div class="word">
                        <div class="top">
                            <p class="label">$</p>
                            <p class="value">652</p>
                            <p class="lab">B</p>
                        </div>
                        <p class="title">運用資産残高</p>
                        <p class="subtitle">2026年3月31日時点</p>
                    </div>
                    <div class="word">
                        <div class="top">
                            <p class="value">415</p>
                            <p class="lab">+</p>
                        </div>
                        <p class="title">投資プロフェッショナル</p>
                        <p class="subtitle">2026年3月31日時点</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="word_con other_word">
            <div class="content">
                <div class="left first_left">
                    <div class="word">
                        <p class="title">精緻なポートフォリオ設計</p>
                        <p class="cont">専任のポートフォリオマネジメントチームは、地域・セクター・戦略ごとの優先領域を示すヒートマップや、目標配分水準の達成・維持を支えるペーシングモデルなど、独自のツールとテクノロジーを活用して各クライアントのポートフォリオ設計を最適化します。</p>
                    </div>
                </div>
                <div class="left">
                    <div class="word">
                        <p class="title">オペレーショナル・デューデリジェンス</p>
                        <p class="cont">あらゆる投資機会には運営上のリスクが伴います。そのため私たちは、スポンサーの既存ポリシーや統制体制を厳格に検証し、現在の業界ベストプラクティスと照らして評価します。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="center_c">
            <p class="main_title">私たちの強み</p>
            <div class="content_con">
                <div class="item" v-for="(item, index) in sections" :key="index">
                    <div class="con">
                        <div class="top">
                            <p class="kicker">{{ item.kicker }}</p>
                        </div>
                        <div class="bottom">
                            <p class="title">{{ item.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="car_box partner_box btm_con">
            <p class="title">私たちの視点</p>
            <p class="subtitle">経験と専門的知見が、アドバイザリーサービス市場に対する私たちの包括的な視野を形づくります。</p>
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
<script setup>
import { ref } from 'vue'

import bg1 from "@/assets/venture/btm1.png"
import bg2 from "@/assets/venture/btm2.png"
import bg3 from "@/assets/venture/btm3.png"
const btmLists = ref([
    {
        img: bg1,
        btn: '市場調査',
        content: '見出しのその先へ: ドイツのプライベートエクイティ',
    },
    {
        img: bg2,
        btn: '市場調査',
        content: 'RPM 第59回 | 希少性、専門性、承継から読み解く英国プライベートエクイティの優位性',
    },
    {
        img: bg3,
        btn: '市場調査',
        content: 'すべてのプライベートエクイティ GP 主導案件が同じではない',
    },
])
const sections = [
  {
    kicker: '統合プラットフォーム',
    title: '運用の柔軟性と全資産クラスにわたる専門知見へのアクセスを可能にする強力なプラットフォームにより、当社の専任クライアントサービスチームは、個別のポートフォリオニーズと目標に応じて、単一または複数資産クラスのプライベートマーケットエクスポージャーを設計できます。',
   
  },
  {
    kicker: '持続する専門性',
    title: '当社の投資プロフェッショナルは、資産クラス、地域、投資戦略ごとに専門化されており、各クライアントの機会実現に必要なリサーチ、精緻なデューデリジェンス、分析を提供します。彼らは各クライアント専任のサービスチームの一員として、包括的な機能やカスタマイズされた支援を提供します。',
  },
  {
    kicker: '広範なソーシングと選別的アプローチ',
    title: '私たちは GP の世界に深く入り込み、毎年 5,700 件を超えるファンドマネージャーとの面談から知見を得ています。こうした関係がプライベートマーケット全体にわたる独自かつ強固な案件パイプラインを生み出し、その中から最良の機会を選び、クライアントごとのニーズに応じて機動的に実行します。',
  },
  {
    kicker:'強固なファンド分析',
    title:'専任のセクターカバレッジチームと、独自データベースおよびパフォーマンス報告システムによる厳格な分析を通じて、私たちは投資先と GP に関するより完全な全体像を把握します。'
  }
]
</script>
<style lang="scss" scoped>
.main {
    .hero {
        position: relative;
        width: 100%;
        min-height: 65vh;
        display: flex;
        overflow: hidden;
        background: var(--color-primary-dark);
        .hero-bg {
            position: absolute;
            inset: 0;
            background-image: url('@/assets/advisort/ad_banner.jpg');
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            transform: scale(1.04);
            animation: heroZoom 18s ease-out forwards;
        }
        .top_c {
            max-width: var(--container-max);
            margin: 0 auto;
            display: flex;
            gap: 40px;
            margin-top: 160px;
            .hero-inner {
                position: relative;
                z-index: 2;
                padding-top: var(--space-2xl);
                padding-bottom: var(--space-2xl);
                max-width: var(--container-max);
                background: #191f23cc;
                width: 530px;
                height: 270px;
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
        }
    }
    .middle_content {
        max-width: var(--container-max);
        margin: 0 auto;
        display: flex;
        gap: 40px;
        padding: 40px;
        background: #daff96;
        color: #2f3a42;
        display: flex;
        align-items: center;
        border-right: 10px solid #445460;
        margin-top: 30px;
        .left {
            width: 100%;
            font-size: 32px;
        }
        .right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .top {
                display: flex;
                justify-content: center;
                color: #2f3a42;
                align-items: flex-start;
                height: 132px;
                p {
                    margin-bottom: 0;
                }
                .value {
                    font-size: 80px;
                }
                .label {
                    height: 100%;
                    display: flex;
                    align-items: flex-start;
                    font-size: 50px;
                }
                .lab {
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    font-size: 50px;
                }
            }
            .con {
                font-size: 18px;
                margin-top:10px
            }
        }
    }
    .word_con {
        margin-top: 30px;
        background: linear-gradient(to right,#f2eff1 0,#f2eff1 50%,#daff96 50%,#daff96 100%);
        .content {
            display: flex;
            max-width: var(--container-max);
            margin: 0 auto;
            .left {
                width: 50%;
                padding:40px 24px;
                color: #2f3a42;
                font-size: 24px;
                display: flex;
                align-items: center;
            }
            .right {
                flex-direction: column;
                .word {
                    width: 100%;
                    .top {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        height: 132px;
                        color: #2f3a42;
                        .label {
                            height: 100%;
                            display: flex;
                            align-items: flex-start;
                            font-size:50px;
                        }
                        .value {
                            height: 100%;
                            display: flex;
                            align-items: center;
                            font-size:120px;
                        }
                        .lab {
                             height: 100%;
                            display: flex;
                            align-items: flex-end;
                            font-size:50px;
                        }
                    }
                    .title {
                        text-align: center;
                        font-size: 18px;
                        color: #2f3a42;
                        margin-bottom: 0;
                    }
                    .subtitle {
                        text-align: center;
                        font-size: 13px;
                        color: #2f3a42;
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
    .setps_con {
        max-width: var(--container-max);
        margin: 0 auto;
        margin-top: 30px;
        height: 540px;
        background: url("@/assets/privateequity/video_bg.jpg") no-repeat center center;
        background-size: cover;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(25, 31, 35, 0.8);
        }
        .content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;
            position: relative;
            z-index: 2;
            .title {
                font-size: 30px;
            }
            ul {
                li {
                    position: relative;
                    color: #fff;
                    font-size: 20px;
                    margin-bottom: 24px;
                    padding-left: 30px;
                    &:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 16px;
                    height: 12px;
                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' fill='none'%3E%3Cpath fill='%23fff' d='M13.594.625 5.375 8.844l-3-3.031c-.156-.125-.406-.125-.531 0l-.907.906c-.125.125-.125.375 0 .531l4.188 4.156a.36.36 0 0 0 .531 0l9.375-9.375c.125-.125.125-.375 0-.531l-.906-.875c-.125-.156-.375-.156-.531 0Z'/%3E%3C/svg%3E");
                    }
                }
            }
        }
    }
    
    .other_word {
        background: linear-gradient(to right,#445460 0,#445460 50%,#2f3a42 50%,#2f3a42 100%);
        margin-top: 0;
        .word {
            color: #fff;
            .title {
                font-size: 26px;
            }
            .btn {
                width: 160px;
                height: 48px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.25rem;
                font-weight: 500;
                color: #445460;
                background: #daff96;
                border-radius: 4px;
                margin: 0 auto;
                margin-top: 30px;
                cursor: pointer;
                &:hover{
                    background: #445460;
                    color: #fff;
                }
            }
        }
        .content {
            .right {
                .word {
                    .top {
                        color: #fff;
                    }
                    .title {
                        color: #fff;
                    }
                    .subtitle{
                        color: #fff;
                    }
                    .other {
                        font-size: 14px;
                        color: #fff;
                        text-align: center;
                        margin-top:10px
                    }
                }
            }
        }
    }
    .word_c {
        background: linear-gradient(to right,#fff 0,#fff 50%,#fff 50%,#fff 100%);
        margin-top: 50px;
        .content {
            max-width: var(--container-max);
            display: flex;
            justify-content: center;
            margin: 0 auto;
            .left {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 40px;
                box-sizing: border-box;
                .title {
                    color: #445460;
                    font-size: 36px;
                    text-align: center;
                }
                .subt_title {
                    font-size: 20px;
                    font-weight: 400;
                    color: #445460;
                    line-height: 42px;
                }
                ul {
                    li {
                        position: relative;
                        font-size: 20px;
                        font-weight: 400;
                        color: #445460;
                        line-height: 42px;
                        margin-bottom: 24px;
                        padding-left: 30px;
                        &:before {
                            content: "";
                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translateY(-50%);
                            width: 16px;
                            height: 12px;
                            background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' fill='none'%3E%3Cpath fill='%23191F23' d='M13.594.625 5.375 8.844l-3-3.031c-.156-.125-.406-.125-.531 0l-.907.906c-.125.125-.125.375 0 .531l4.188 4.156a.36.36 0 0 0 .531 0l9.375-9.375c.125-.125.125-.375 0-.531l-.906-.875c-.125-.156-.375-.156-.531 0Z'/%3E%3C/svg%3E");
                        }
                    }
                }
            }
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
    .btm_con {
        max-width: var(--container-max);
        margin: 0 auto;
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
    .bottom_c {
        padding: 40px;
        background: rgb(68, 84, 96);
        display: flex;
        flex-direction: column;
        .title {
            text-align: center;
            font-size: 42px;
            color: #fff;
            max-width: var(--container-max);
            margin: 0 auto;
        }
        .subttile {
            max-width: 800px;
            margin: 0 auto;
            margin-top: 16px;
            text-align: center;
            font-size: 20px;
            color: #fff;
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
                margin-top: 20px;
                &:hover {
                    background: #445460;
                    color: #fff;
                }
            }
    }
    .platform {
        margin-top: 30px;
        margin-bottom: 30px;
        .card_box {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
        }
          .card-section {
                width: 412px;
                height: 556px;
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
                        font-size: 32px;
                    }
                    .card-section-title {
                        display: block;
                        width: 100%;
                        height: calc(100% - 208px);
                        background: #f2eff1;
                        color: #445460;
                        padding: 0 20px;
                        padding-top: 40px;
                        line-height: 28px;
                        border-top: 14px solid #daff96;
                        font-size: 16px;
                    }
                }
            }
        }
    }
    .partner_box  {
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .center_c {
        width: 100%;
        margin-top: 30px;
        .main_title {
            text-align: center;
            font-size: 42px;
            color: #445460;
            max-width: var(--container-max);
            margin: 0 auto;
            margin-bottom: 30px;
        }
        .content_con {
            max-width: var(--container-max);
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            flex-wrap: wrap;
            .item {
                width: 628px;
                height: 456px;
                display: flex;
                justify-content: flex-end;
                background: url("@/assets/advisort/ad-sec1.jpg") no-repeat center;
                background-size: 100% 100%;
                margin-bottom: 30px;
                .con {
                    width: 446px;
                    height: 100%;
                }
                .top {
                    width: 100%;
                    height: 192px;
                    background: #191f23cc;
                    display: flex;
                    align-items: flex-end;
                    padding-bottom: 10px;
                    color: #daff96;
                    font-size: 30px;
                    padding-left: 10px;
                }
                .bottom {
                    width: 100%;
                    height: calc(100% - 192px);
                    background: #f2eff1;
                    color: #445460;
                    padding: 0 20px;
                    padding-top: 40px;
                    line-height: 28px;
                    border-top: 14px solid #daff96;
                    font-size: 16px;
                }
                &:nth-child(2) {
                     background: url("@/assets/advisort/ad-sec2.jpg") no-repeat center;
                    background-size: 100% 100%;
                }
                &:nth-child(3) {
                     background: url("@/assets/advisort/ad-sec3.jpg") no-repeat center;
                    background-size: 100% 100%;
                }
                &:nth-child(4) {
                     background: url("@/assets/advisort/ad-sec4.jpg") no-repeat center;
                    background-size: 100% 100%;
                }
            }
        }
    }
}
@media (max-width: 767px){
    .main {
        .hero {
            min-height: 76vh;
            .top_c {
                display: block;
                margin-top: 240px;
                width: 100%;
                .hero-inner  {
                    width: 98%;
                    padding-top: var(--space-2xl);
                    padding-bottom: var(--space-xl);
                }
                .other_c {
                    margin: 0 auto;
                    margin-top: 10px;
                }
            }
        }
        .word_con {
            background: linear-gradient(to bottom, #f2eff1 0, #f2eff1 50%, #daff96 50%, #daff96 100%);
            padding: 20px;
            box-sizing: border-box;
            .content {
                display:block;
                .left {
                    width: 100%;
                    margin: 0 auto;
                    font-size: 18px;
                    padding: 0;
                    margin-bottom: 60px;
                }
            }
        }
        .setps_con {
            .content {
                .title {
                    font-size: 20px;
                }
                ul {
                    li {
                        font-size: 16px;
                    }
                }
            }
        }
        .other_word {
             background: linear-gradient(to bottom, #445460  0, #445460  50%, #2f3a42   50%, #2f3a42   100%);
        }
        .word_c {
            .content {
                display: block;
                .left {
                    padding: 20px;
                    .title {
                        font-size: 20px;
                    }
                    .subt_title {
                        font-size: 16px;
                    }
                }
            }
        }
        .center_bg {
            height: 425px;
            .content {
                width: 90%;
                .title {
                    font-size: 20px;
                }
                .subtitle {
                    font-size: 14px;
                }
            }
        }
        .btm_con {
            margin-top: 20px;
            .title {
                font-size: 20px;
            }
            .subtitle {
                font-size: 16px;
            }
            .lists {
                display: block;
                width: 98%;
                margin: 0 auto;
                margin-top: 20px;
                .btm_item {
                    width: 100%;
                    margin-bottom: 10px;
                }
                .bottom_c {
                    margin-top: 0;
                }
            }
        }
        .bottom_c {
            .title {
                font-size: 20px;
            }
            .subttile {
                font-size: 16px;
            }
        }
        .middle_content {
            display: block;
            padding: 0;
            .left {
                padding: 20px;
                width: 100%;
                font-size: 16px;
            }
        }
        .platform {
            .card_box {
                display: block;
                width: 96%;
                margin: 0 auto;
                margin-top: 20px;
                .card-section {
                    width: 100%;
                    margin-bottom: 10px;
                    height: 362px;
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
        }
        .center_c {
            width: 100%;
            margin-top: 30px;
            .main_title {
                font-size: 24px;
                width: 100%;
            }
        .content_con {
            max-width: var(--container-max);
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            flex-wrap: wrap;
            padding: 0 10px;
            .item {
                width: 100%;
                height: 421px;
                display: flex;
                justify-content: flex-end;
                background: url("@/assets/advisort/sec1.jpg") no-repeat center;
                background-size: 100% 100%;
                margin-bottom: 30px;
                .con {
                    width: 446px;
                    height: 100%;
                }
                .top {
                    width: 100%;
                    height: 132px;
                    background: #191f23cc;
                    display: flex;
                    align-items: flex-end;
                    padding-bottom: 10px;
                    color: #daff96;
                    font-size: 30px;
                    padding-left: 10px;
                }
                .bottom {
                    width: 100%;
                    height: calc(100% - 132px);
                    background: #f2eff1;
                    color: #445460;
                    padding: 0 20px;
                    padding-top: 20px;
                    line-height: 28px;
                    border-top: 14px solid #daff96;
                    font-size: 16px;
                }
                &:nth-child(2) {
                     background: url("@/assets/advisort/sec2.jpg") no-repeat center;
                    background-size: 100% 100%;
                }
                &:nth-child(3) {
                     background: url("@/assets/advisort/sec3.jpg") no-repeat center;
                    background-size: 100% 100%;
                }
                &:nth-child(4) {
                     background: url("@/assets/advisort/sec4.jpg") no-repeat center;
                    background-size: 100% 100%;
                }
            }
        }
    }
    }
}
</style>
