<template>
    <div class="main">
        <section class="hero">
            <div class="hero-bg" aria-hidden="true"></div>
            <div class="top_c">
                <div class="hero-inner container">
                    <h1 class="hero-title">ベンチャーキャピタルとグロースエクイティ</h1>
                    <p class="hero-subtitle">
                        より良い世界を築くためのイノベーションを支援します。
                    </p>
                </div>
                <div class="hero-inner other_c">
                    <div class="hero-title">ポッドキャスト</div>
                    <p class="hero-subtitle">RPM 第60回 | 変化するベンチャー投資の景色: 流動性、選別性、そしてセカンダリー</p>
                </div>
            </div>
        </section>
        <div class="middle_content">
            <div class="left">
                <p class="word">私たちの使命は、未来を形づくるベンチャーマネージャーや起業家に対し、付加価値を提供するライフサイクル全体のパートナーとして寄り添うことです。プライマリー投資、直接投資、セカンダリー投資を通じて、シードからグロースエクイティまでを網羅する統合プログラムにより、私たちは世界でも最大級かつ最も活発なベンチャーキャピタル・グロースエクイティ投資家の一つとなっています。</p>
            </div>
            <div class="right">
                <div class="top">
                    <p class="value">26</p>
                    <p class="label">+</p>
                </div>
                <p class="con">年の投資実績</p>
            </div>
        </div>
        <div class="word_con other_word">
            <div class="content">
                <div class="left first_left">
                    <div class="word">
                        <p class="title">経験豊富なチーム</p>
                        <p class="cont">私たちは業界でも屈指の厚みを持つ、ベンチャーキャピタルおよびグロースエクイティ専任チームの一つです。投資委員会は、主要なイノベーション拠点を幅広くカバーするグローバルチームと、独自のデータ・テクノロジープラットフォームによって支えられています。</p>
                        <div class="btn">チームを見る</div>
                    </div>
                </div>
                <div class="left right">
                    <div class="word">
                        <div class="top">
                            <p class="label">~</p>
                            <p class="value">85</p>
                        </div>
                        <p class="title">投資プロフェッショナル</p>
                        <p class="subtitle">2026年3月31日時点</p>
                        <p class="other">ベンチャーキャピタルとグロース領域に特化した、世界最大級かつ経験豊富なチームの一つとして、地理的に多様な視点を提供します。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="setps_con">
            <div class="content">
                <p class="title">StepStone の投資優位性</p>
                <ul>
                    <li>なぜセカンダリー投資と共同投資が重要であり、クライアントにどのような利益をもたらすのか</li>
                    <li>当社のプラットフォームを差別化する要素</li>
                    <li>どのように投資上の優位性を維持しているのか</li>
                </ul>
            </div>
        </div>
        <div class="btm_con platform">
            <p class="title">相互補完的な VC・グロースプラットフォーム</p>
            <p class="subtitle">私たちは、あらゆるステージのベンチャーファンド、アーリーおよびグロースステージ企業、マネージャーと並走する投資、そしてセカンダリー機会に投資しています。それぞれの投資が相互に知見をもたらし、強力なデータを蓄積するとともに、ベンチャーマネージャーや創業者とのパートナーシップを強化します。</p>
            <div class="card_box">
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
        </div>
         <div class="word_con other_word">
            <div class="content">
                <div class="left first_left">
                    <div class="word">
                        <p class="title">ポートフォリオ・インパクト</p>
                        <p class="cont">StepStone の専任ポートフォリオ・インパクトチームは、顧客、提携先、人材、資金調達先の紹介や事業開発支援を通じて、GP やポートフォリオ企業に具体的な価値を提供し、私たちの資本の差別化を実現しています。</p>
                    </div>
                </div>
                <div class="left right">
                    <div class="word">
                        <div class="top">
                            <p class="value">2,725</p>
                            <p class="label">+</p>
                        </div>
                        <p class="title">戦略的コネクション</p>
                        <p class="subtitle">2026年3月31日時点</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="car_box partner_box btm_con">
            <p class="title">私たちの視点</p>
            <p class="subtitle">現在および将来の市場ダイナミクスに対する私たちの見方をご覧ください。</p>
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
import icon1 from "@/assets/venture/bg1.jpg"
import icon2 from "@/assets/venture/bg2.jpg"
import icon3 from "@/assets/venture/bg3.jpg"

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
    kicker: 'プライマリー',
    title: '私たちは、明確に差別化された優れたファンドマネージャーを見極め、実質的なアクセスを確保しています。複数の地域と業界にまたがり、実績ある企業から新興のシード、アーリーステージ、グロースエクイティ企業まで支援しています。',
    icon: icon1
  },
  {
    kicker: '直接投資',
    title: '深いリレーションシップと豊富なデータ資産を活用し、基盤となるマネージャーネットワークに支えられながら、アーリーおよびグロースステージの企業に投資しています。',
    icon: icon2,
  },
  {
    kicker: 'セカンダリー',
    title: '私たちは、LP持分、ストリップセール、LPテンダー、コンティニュエーションファンド、ダイレクトセカンダリーを対象とする柔軟なアプローチを採用しています。プライマリーファンド投資や直接投資を通じて得られる情報優位性により、幅広い機会を効果的にデューデリジェンスし、適切に価格付けし、構造化することが可能です。',
    icon: icon3,
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
            background-image: url('@/assets/venture/banner.jpg');
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
            width: 766px;
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
                p {
                    margin-bottom: 0;
                }
                .value {
                    font-size: 80px;
                }
                .label {
                    font-size: 24px;
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
        margin-top: 50px;
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
                    font-size: 24px;
                    font-weight: 400;
                    color: #445460;
                    line-height: 42px;
                }
            }
        }
    }
    .center_bg {
        width: 100%;
        height: 765px;
        background: url('@/assets/privateequity/center.jpg') no-repeat center center/cover;
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
}
@media (max-width: 767px){
    .main {
        .hero {
            min-height: 96vh;
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
    }
}
</style>
