<script setup>
/*
 * "Designed to deliver more" 区块
 * 浅灰背景，居中标题 + 四大支柱卡片
 */
import { pillars } from '@/data/home'
</script>

<template>
  <section class="pillars">
    <div class="container pillars-inner">
      <header class="pillars-head">
        <h2 class="pillars-title">さらなる価値を届けるために設計された組織</h2>
        <p class="pillars-subtitle">
          私たちは、組織を構成する相互に関連したあらゆる要素を磨き上げ、
          クライアントがより多くの機会を見出し、到達し、実現できるようにしています。
        </p>

        <div class="btn">
          <router-link to="/what-we-do" class="concact-link">私たちの事業</router-link>
        </div>
      </header>

      <div class="pillars-grid">
        <article class="pillar-card" v-for="(p, i) in pillars" :key="i">
          <div class="content">
            <div class="top_c">
              <h3 class="pillar-card-title">{{ p.title }}</h3>
            </div>
            <div class="btm_c">
              <p class="pillar-card-desc">{{ p.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pillars {
  background: var(--color-bg-alt);
  padding: var(--space-3xl) 0;
}

.pillars-inner {
  max-width: var(--container-max);
}

.pillars-head {
  max-width: 760px;
  margin: 0 auto var(--space-2xl);
  text-align: center;
}

.pillars-title {
  /* font-family: var(--font-serif); */
  font-size: clamp(1.875rem, 4vw, 2.75rem);
  font-weight: normal;
  color: var(--color-primary);
  margin-bottom: var(--space-md);
  letter-spacing: -0.01em;
  font-family: sans-serif;
}

.pillars-subtitle {
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--color-text);
  margin-bottom: 0;
}

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
  padding-top: 100px;
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

/* ===== 平板：两列 ===== */
@media (max-width: 1023px) {
  .pillars {
    padding: var(--space-2xl) 0;
  }
  .pillars-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
  }
  .pillars-head {
    margin-bottom: var(--space-xl);
  }
}

/* ===== 移动：单列 ===== */
@media (max-width: 767px) {
  .pillars-grid {
    grid-template-columns: 1fr;
  }
  .pillar-card {
    padding: var(--space-lg);
  }
}
</style>
<style lang="scss" scoped>
.btn {
  margin-top: var(--space-md);
  .concact-link {
    color: #008566;
    font-weight: 500;
    position: relative;
    &::after {
      margin-left: .4375rem;
      display: inline-block;
      height: .875rem;
      width: .875rem;
      --tw-content: "";
      content: var(--tw-content);
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'%3E%3Cpath fill='%23008566' d='M5.596 1.838a.619.619 0 0 0-.235.498c0 .205.088.38.235.498l3.515 3.37H.703a.707.707 0 0 0-.498.204.686.686 0 0 0-.205.498v.938c0 .205.059.38.205.498.117.146.293.205.498.205h8.408l-3.515 3.369c-.147.146-.235.322-.235.498 0 .205.059.38.235.498l.644.645c.117.146.293.205.498.205a.686.686 0 0 0 .498-.205l5.684-5.684a.707.707 0 0 0 .205-.498c0-.176-.088-.352-.205-.498L7.236 1.193c-.146-.117-.322-.205-.498-.205a.707.707 0 0 0-.498.205l-.644.645Z'/%3E%3C/svg%3E");
    }
    &:hover {
      color: #445460;
      &::after {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'%3E%3Cpath fill='%23445460' d='M5.596 1.838a.619.619 0 0 0-.235.498c0 .205.088.38.235.498l3.515 3.37H.703a.707.707 0 0 0-.498.204.686.686 0 0 0-.205.498v.938c0 .205.059.38.205.498.117.146.293.205.498.205h8.408l-3.515 3.369c-.147.146-.235.322-.235.498 0 .205.059.38.235.498l.644.645c.117.146.293.205.498.205a.686.686 0 0 0 .498-.205l5.684-5.684a.707.707 0 0 0 .205-.498c0-.176-.088-.352-.205-.498L7.236 1.193c-.146-.117-.322-.205-.498-.205a.707.707 0 0 0-.498.205l-.644.645Z'/%3E%3C/svg%3E");
      }
    }
  }
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
