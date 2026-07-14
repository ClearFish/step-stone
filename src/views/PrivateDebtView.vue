<template>
    <div class="main">
        <section class="hero">
            <div class="hero-bg" aria-hidden="true"></div>
            <div class="top_c">
                <div class="hero-inner container">
                    <h1 class="hero-title">プライベートデット</h1>
                    <p class="hero-subtitle">
                        流動性の低い債券市場に対応する柔軟なソリューション。
                    </p>
                </div>
                <div class="hero-inner other_c">
                    <div class="hero-title">ポッドキャスト</div>
                    <p class="hero-subtitle">スペシャルティクレジット入門</p>
                </div>
            </div>
        </section>
        <div class="middle_content">
            <div class="left">
                <p class="word">私たちのプライベートデットチームは、グローバルプラットフォームを活用し、企業向け、不動産、インフラ、各種クレジット領域にわたる案件機会を捉え、クライアントのニーズと目標に合わせたポートフォリオ構築を支援します。</p>
            </div>
            <div class="left right">
                <div class="word">
                    <div class="top">
                        <p class="label">$</p>
                        <p class="value">72</p>
                        <p class="lab">B</p>
                    </div>
                    <p class="title">受託資本総額</p>
                    <p class="subtitle">2026年3月31日時点</p>
                </div>
            </div>
        </div>
        <div class="setps_con">
            <div class="content">
                <p class="title">StepStone Private Debt</p>
                <ul>
                    <li>重要な資産クラスとしてのプライベートデットの台頭と広がり</li>
                    <li>ポートフォリオにおけるその役割</li>
                    <li>私たちの中核的な強み</li>
                </ul>
            </div>
        </div>
        <div class="word_con other_word">
            <div class="content">
                <div class="left first_left">
                    <div class="word">
                        <p class="title">私たちのプライベートデットチーム</p>
                        <p class="cont">私たちの経験豊富なプロフェッショナルは、1990年代からこの資産クラスに投資を行い、複数のクレジットサイクルを通じて実績を積み重ねてきました。</p>
                        <div class="btn">チームを見る</div>
                    </div>
                </div>
                <div class="left right">
                    <div class="word">
                        <div class="top">
                            <p class="value">75</p>
                            <p class="label">+</p>
                        </div>
                        <p class="title">投資プロフェッショナル</p>
                        <p class="subtitle">2026年3月31日時点</p>
                        <p class="other">グローバルな展開力とローカルな視点、そして深いセクター専門性を兼ね備えています。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="word_c">
            <div class="content">
                <div class="left">
                    <p class="title">市場全体をカバーする戦略</p>
                    <p class="subt_title">私たちの柔軟で適応力のあるソリューションは、流動性の低い債券から流動性の高い債券までを対象とし、個別運用口座、アドバイザリー口座、特化型合同ファンドを通じて最適化されたアクセスを可能にします。</p>
                    <ul>
                        <li>クライアントにとっての機会を的確に捉える広い視野</li>
                        <li>知見あるチームとネットワークが、従来不透明とされてきた資産クラスにより高い透明性をもたらします</li>
                    </ul>
                </div>
                <div class="left right">
                    <p class="title">カスタムポートフォリオのための専門的カバレッジ</p>
                    <p class="subt_title">企業向け、不動産、インフラデット、各種クレジット分野における相対取引に注力し、資本保全と魅力的な利回り創出を両立するソリューションを構築します。</p>
                    <p class="subt_title">私たちは、資産クラス、資本構成、投資アプローチのバランスを取りながら、最適化されたポートフォリオを構築・運用します。</p>
                </div>
            </div>
        </div>
        <div class="center_bg">
            <div class="content">
                <p class="title">責任ある投資</p>
                <p class="subtitle">クライアントの ESG 優先事項を当社のデューデリジェンスおよびモニタリングプロセスに統合することは、プライベートデット投資商品を構築するうえで重要な考慮要素です。</p>
                <div class="btn">詳しく見る</div>
            </div>
        </div>
        <div class="car_box partner_box btm_con">
            <p class="title">私たちの視点</p>
            <p class="subtitle">経験と専門的知見が、プライベートデット市場に対する私たちの包括的な視野を形づくります。</p>
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
            background-image: url('@/assets/privatebet/banner.jpg');
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
