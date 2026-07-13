<template>
    <div class="main">
        <section class="hero">
            <div class="hero-bg" aria-hidden="true"></div>
            <div class="top_c">
                <div class="hero-inner container">
                    <h1 class="hero-title">Private Equity and Venture Capital</h1>
                    <p class="hero-subtitle">
                        Designed to exceed expectations.
                    </p>
                </div>
                <div class="hero-inner other_c">
                    <div class="hero-title">市場調査</div>
                    <p class="hero-subtitle">Beneath the headlines: German private equity</p>
                </div>
            </div>
        </section>
        <div class="word_con">
            <div class="content">
                <div class="left first_left">
                    <div class="word">
                        <p class="cont">Backed by our global reach, we create custom client portfolios using a disciplined approach defined by extensive research and analytics, to source across the entire spectrum of private equity opportunities.</p>
                    </div>
                </div>
                <div class="left right">
                    <div class="word">
                        <div class="top">
                            <p class="label">$</p>
                            <p class="value">461</p>
                            <p class="lab">B</p>
                        </div>
                        <p class="title">Total capital responsibility</p>
                        <p class="subtitle">As of 3/31/2026</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="setps_con">
            <div class="content">
                <p class="title">The StepStone investment edge</p>
                <ul>
                    <li>Why secondaries and co-investments are critical, and how clients can benefit</li>
                    <li>What differentiates our platform</li>
                    <li>How we maintain our investment edge</li>
                </ul>
            </div>
        </div>
         <div class="word_con other_word">
            <div class="content">
                <div class="left first_left">
                    <div class="word">
                        <p class="title">Our investment team</p>
                        <p class="cont">Whether we are serving an advisory or an asset management client, we offer a single, integrated expert team that forms closely collaborative relationships with the foremost GPs and emerging managers.</p>
                        <div class="btn">Meet the team</div>
                    </div>
                </div>
                <div class="left right">
                    <div class="word">
                        <div class="top">
                            <p class="value">180</p>
                            <p class="label">+</p>
                        </div>
                        <p class="title">Total capital responsibility</p>
                        <p class="subtitle">As of 3/31/2026</p>
                        <p class="other">Delivering deep sector expertise and a vital global/local perspective.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="word_c">
            <div class="content">
                <div class="left">
                    <p class="title">Strategies that solve for all cycles</p>
                    <p class="subt_title">Being active across fund investments, secondaries, co-investments and direct investments allows us to customize solutions designed to perform when public markets are up and to offer less downside in leaner times.</p>
                </div>
                <div class="left right">
                    <p class="title">Sector focus: our specialty</p>
                    <p class="subt_title">Our investment team is organized into specialized units, giving investors a distinctively deeper level of insight, and greater access to managers throughout all private equity strategies and key investment geographies.</p>
                </div>
            </div>
        </div>
        <div class="center_bg">
            <div class="content">
                <p class="title">Venture Capital and Growth Equity</p>
                <p class="subtitle">Backing innovation to build a better world.</p>
                <div class="btn">詳しく見る</div>
            </div>
        </div>
        <div class="car_box partner_box btm_con">
             <p class="title">Our perspective</p>
            <p class="subtitle">An extensive view of the sector informed by expert insights and recent opinions.</p>
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
        <div class="bottom_c">
            <p class="title">Responsible Investment</p>
            <p class="subttile">Adopting a long-term outlook and incorporating ESG considerations helps us identify and invest in companies positioned for future growth and success.</p>
            <div class="btn">Learn more</div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import bg1 from "@/assets/insight/bg1.png"
import bg2 from "@/assets/insight/bg2.png"
import bg3 from "@/assets/insight/bg3.png"
const btmLists = ref([
    {
        img: bg1,
        btn: 'Market research',
        content: 'Beneath the headlines: German private equity',
    },
    {
        img: bg2,
        btn: 'Market research',
        content: 'RPM Ep. 59 | Finding an edge in UK private equity: Scarcity, specialism, and succession',
    },
    {
        img: bg3,
        btn: 'Market research',
        content: 'Not all private equity GP-leds are created equa',
    },
])
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
            background-image: url('@/assets/privateequity/banner.jpg');
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
    .word_con {
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
        align-items: center;
        margin-top: 40px;
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
            .content {
                display:block;
                .left {
                    width: 98%;
                    margin: 0 auto;
                    font-size: 18px;
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
    }
}
</style>