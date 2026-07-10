<script setup>
/*
 * "Developments defining our world" 资讯区
 * 分类 Tab 筛选 + 三列卡片网格，computed 按当前 Tab 过滤
 */
import { ref, computed } from 'vue'
import { insights } from '@/data/home'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import bg1 from "@/assets/insight/bg1.png"
import bg2 from "@/assets/insight/bg2.png"
import bg3 from "@/assets/insight/bg3.png"
import bg4 from "@/assets/insight/bg4.png"
import bg5 from "@/assets/insight/bg5.png"
import bg6 from "@/assets/insight/bg6.jpg"
import bg7 from "@/assets/insight/bg7.png"



const activeTab = ref('All')

const filteredInsights = computed(() => {
  if (activeTab.value === 'All') return insights
  return insights.filter((item) => item.category === activeTab.value)
})
const slides = ref([
  {
    title: '市場調査',
    desc: '見出しのその先へ: ドイツのプライベートエクイティ',
    img: bg1
  },
  {
    title: '企業ニュース',
    desc: 'StepStone Group、米国の新たな確定拠出年金事業を率いる責任者として Taylor Benson を採用',
    img: bg2
  },
  {
    title: '市場調査',
    desc: 'スペシャルティクレジット入門',
    img: bg3
  },
  {
    title: '企業ニュース',
    desc: 'StepStone、LSEG の Digital Markets Infrastructure（DMI）上で Evergreen 戦略を開始',
    img: bg4
  },
  {
    title: '市場調査',
    desc: 'RPM 第59回 | 希少性、専門性、承継から読み解く英国プライベートエクイティの優位性',
    img: bg5
  },
  {
    title: 'ポッドキャスト',
    desc: 'プライベートマーケットへの配分を実行するための実践的フレームワーク',
    img: bg6
  },
  {
    title: '市場調査',
    desc: 'AI時代のベンチャーキャピタル: 巨人と GPU の肩の上に立つ',
    img: bg7
  },
])

const swiperModules = [Navigation, Pagination]
const isMobile = ref(window.innerWidth <= 767)
</script>

<template>
  <section class="insights">
    <div class="left">
      <p class="title">世界を形づくる変化</p>
      <ul>
        <li>業界アップデート</li>
        <li>市場調査</li>
        <li>規制・コンプライアンス</li>
      </ul>
      <router-link to="/how-we-think" class="concact-link">私たちの視点</router-link>
    </div>
    <div class="right">
        <Swiper 
          class="swiper-container" 
          :modules="swiperModules"
          direction="horizontal"
          :slides-per-view="isMobile ? 1 : 3"
          :space-between="isMobile ? 0 : 30"
          >
          <SwiperSlide v-for="(slide, i) in slides" :key="i">
            <div class="content">
              <img :src="slide.img" alt=""> 
              <div class="top_c">
                <h3 class="insight-card-title">{{ slide.title }}</h3>
              </div>
              <div class="btm_c">
                <p class="insight-card-desc">{{ slide.desc }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.insights {
  padding: 30px 0;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  min-height: 500px;
  background-image: linear-gradient(90deg, #2f3a42 0, #2f3a42 50%, #fff 0, #fff);
  padding-left: calc(100% - 1700px);
  .left {
    padding-left: 48px;
    padding-right: 48px;
    width: 580px;
    flex-shrink: 0;
    .title {
      font-size: 30px;
      font-weight: normal;
      color:#daff96;
      margin-bottom: 24px;
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
    .concact-link {
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
        &:hover{
          background: #445460;
          color: #fff;
        }
      }
  }
  .right {
    flex: 1;
    .swiper-container {
      width: 100%;
      height: 400px;
      .swiper-slide {
        width: 416px !important;
        height: 100%;
        background: #f2eff1;
        cursor: pointer;
        .top_c {
          padding: 20px;
          box-sizing: border-box;
          h3 {
            padding: 8px 12px;
            background: #00b289;
            color: #fff;
            width: fit-content;
            font-size: 18px;
            &:hover {
              background: #445460;
            }
          }
        }
        .btm_c {
          padding: 0 20px;
          box-sizing: border-box;
          p {
            font-size: 16px;
            color: #445460;
            font-weight: 600;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .insights {
    background: #2f3a42 ;
    flex-direction: column;
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
      margin-top: 20px;
      padding: 0 30px;
      .swiper-container {
        height: 360px;
        .swiper-slide {
          width: 100% !important;
        }
      }
    }
  }
}
</style>
