<template>
    <div class="main">
        <section class="hero">
            <div class="hero-bg" aria-hidden="true"></div>
            <div class="top_c">
                <div class="hero-inner container">
                    <h1 class="hero-title">Our team: worldwide and world class</h1>
                   
                </div>
            </div>
        </section>
        <HumanIntro />
        <!-- <div class="container">
           <p class="main_title">Take the step: meet the team</p>
           <p class="sub_title">Get to know the people working every day to keep StepStone, our clients and partners a step ahead.</p>
           <div class="lists_box">
                <div class="list_item" v-for="item in lists" :key="item.title">
                    <p class="item_title">{{item.title}}</p>
                    <div class="childs_box">
                        <div class="child_item" v-for="child in item.childs" :key="child.label">{{child.label}}</div>
                    </div>
                </div>
           </div>
        </div> -->
    </div>
</template>
<script setup>
import {ref} from "vue"
import HumanIntro from "@/components/home/HumanIntro.vue"
const lists = [
    {
        title:'Asset classes',
        childs:[
            // {label:'Infrastructure & Real Assets',url:''},
            {label:'Private Debt',url:'/what-we-do/asset-classes/private-debt'},
            {label:'Private Equity',url:'/what-we-do/asset-classes/private-equity'},
            {label:'Real Estate',url:'/what-we-do/asset-classes/real-estate'},
            {label:'Venture Capital & Growth Equity',url:'/what-we-do/asset-classes/venture-and-growth-equity'}
        ]
    },
    {
        title:'Strategies',
        childs:[
            {label:'Co-Investments',url:'/what-we-do/strategies/co-investments'},
            {label:'Direct Investments',url:'/what-we-do/strategies/direct-investments'},
            {label:'Fund Investments',url:'/what-we-do/strategies/fund-investments'},
            {label:'Secondaries',url:'/what-we-do/strategies/secondaries'}
        ]
    },
    {
        title:'Teams',
        childs:[
            {label:'Data Analytics & Technology Solutions',url:'/what-we-do/solutions-services/data-analytics'},
            {label:'Finance, Tax & Accounting',url:''},
            {label:'Human Resources',url:''},
            {label:'Investment Operations',url:''},
            {label:'Investor Relations',url:''},
            {label:'Legal & Compliance',url:''},
            {label:'Marketing & Communications',url:''},
            {label:'Operational Due Diligence',url:''},
            {label:'Partners',url:''},
            {label:'Portfolio Analytics & Reporting',url:''},
            {label:'Private Wealth Solutions',url:''},
            {label:'Research & Investments',url:''},
            {label:'Responsible Investing',url:''},
        ]
    }
]
</script>

<style scoped lang="scss">
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
            background-image: url('@/assets/ourteam/banner.jpg');
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            transform: scale(1.04);
            animation: heroZoom 18s ease-out forwards;
            &:after {
                content: '';
                position: absolute;
                inset: 0;
                background: rgba(0, 0, 0, 0.5);
            }
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
    .container {
        margin-top: 30px;
        .main_title {
            text-align: center;
            font-size: 36px;
            color: #2f3a42;
            margin-bottom: 0;
        }
        .sub_title {
            text-align: center;
            font-size: 24px;
            color: #2f3a42;
            margin-bottom: 0;
            margin-top:16px;
        }
        .lists_box {
            display: flex;
            margin-top: 20px;
            .list_item {
                flex: 1;
                .item_title {
                    color: #445460;
                    font-size: 24px;
                    font-weight: 700;
                }
                .childs_box {
                    font-size: 16px;
                    color: #008566;
                    font-weight: 500;
                    .child_item {
                        cursor: pointer;
                        margin-bottom: 14px;
                    }

                }
            }
        }
    }
}
</style>
