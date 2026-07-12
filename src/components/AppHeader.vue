<script setup>
/*
 * 顶部导航组件
 * - 桌面端（≥1024px）：固定顶部，hover 显示 mega menu 下拉面板
 * - 移动端（<1024px）：汉堡按钮 + 全屏抽屉菜单
 */
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { navMenu, topLinks, megaMenuGroups } from '@/data/navigation'
import Logo from "@/assets/logo.svg"

const route = useRoute()
const router = useRouter()

/* 桌面端：当前 hover 的菜单项索引（-1 表示无） */
const openMegaIndex = ref(-1)
const scrolled = ref(false)

/* 移动端：抽屉开关 + 子菜单展开状态 */
const mobileOpen = ref(false)
const mobileExpanded = ref({}) // key: label, value: boolean

/* 滚动监听：滚动后加阴影 */
function handleScroll() {
  scrolled.value = window.scrollY > 4
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

/* 当前路由高亮判断 */
function isActive(to) {
  if (!to) return false
  // 精确匹配，或当前路径以该路径为前缀（子路由也算）
  return route.path === to || route.path.startsWith(to + '/')
}

/* What We Do 的三列分组（mega menu 专用） */
const whatWeDoGroups = megaMenuGroups

/* 桌面端 hover 控制 */
function openMega(i) {
  openMegaIndex.value = i
}
function closeMega() {
  openMegaIndex.value = -1
}

/* 移动端：切换抽屉 */
function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
  // 锁定背景滚动
  document.body.style.overflow = mobileOpen.value ? 'hidden' : ''
}
function closeMobile() {
  mobileOpen.value = false
  document.body.style.overflow = ''
}

/* 移动端：切换子菜单展开 */
function toggleMobileChild(label) {
  mobileExpanded.value[label] = !mobileExpanded.value[label]
}

/* 路由切换时自动关闭移动菜单 */
watch(
  () => route.fullPath,
  () => {
    closeMobile()
  }
)

router.afterEach(() => {
  closeMobile()
})

/* 是否含子项 */
const hasChildren = (item) => Array.isArray(item.children) && item.children.length > 0
</script>

<template>
  <header class="app-header" :class="{ 'is-scrolled': scrolled }">
    <div class="header-inner">
      <div class="top_box">
        <div class="top_con container">
          <!-- 桌面端右侧 topLinks -->
          <nav class="top-links" aria-label="上部リンク">
            <router-link
              v-for="link in topLinks"
              :key="link.to"
              :to="link.to"
              class="top-link"
              :class="{ active: isActive(link.to) }"
            >
              {{ link.label }}
            </router-link>
          </nav>
        </div>
      </div>
      <div class="bottom_box">
        <div class="bottom_co container">
          <!-- Logo -->
          <router-link to="/" class="logo" aria-label="StepStone ホーム">
           <img :src="Logo" alt="">
          </router-link>
    
          <!-- 桌面端主菜单 -->
          <nav class="main-nav" @mouseleave="closeMega">
            <ul class="nav-list">
              <li
                v-for="(item, i) in navMenu"
                :key="item.label"
                class="nav-item"
                @mouseenter="openMega(i)"
              >
                <router-link
                  :to="item.to"
                  class="nav-link"
                  :class="{ active: isActive(item.to) }"
                >
                  {{ item.label }}
                </router-link>
    
                <!-- What We Do: 三列 mega menu -->
                <div
                  v-if="item.label === '私たちの事業' && openMegaIndex === i"
                  class="mega-panel mega-panel--grid"
                >
                  <div class="mega-col" v-for="group in whatWeDoGroups" :key="group.title">
                    <h4 class="mega-col-title">{{ group.title }}</h4>
                    <ul class="mega-sub-list">
                      <li v-for="sub in group.items" :key="sub.to">
                        <router-link
                          :to="sub.to"
                          class="mega-sub-link"
                          :class="{ active: isActive(sub.to) }"
                        >
                          {{ sub.label }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
    
                <!-- 其他含子项: 单列下拉 -->
                <div
                  v-else-if="hasChildren(item) && openMegaIndex === i"
                  class="mega-panel mega-panel--single"
                >
                  <ul class="mega-sub-list">
                    <li v-for="sub in item.children" :key="sub.to">
                      <router-link
                        :to="sub.to"
                        class="mega-sub-link"
                        :class="{ active: isActive(sub.to) }"
                      >
                        {{ sub.label }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link to="/contact-us" class="concact-link">
                  お問い合わせ
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- 移动端汉堡按钮 -->
    </div>
    <div class="mobile_con">
      <router-link to="/" class="logo" aria-label="StepStone ホーム">
        <img :src="Logo" alt="">
      </router-link>
      <button
        class="hamburger"
        :class="{ 'is-open': mobileOpen }"
        :aria-expanded="mobileOpen"
        aria-label="メニューを切り替え"
        @click="toggleMobile"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <!-- 移动端抽屉菜单 -->
    <transition name="drawer-fade">
      <div v-if="mobileOpen" class="mobile-overlay" @click="closeMobile">
        <transition name="drawer-slide">
          <div
            v-if="mobileOpen"
            class="mobile-drawer"
            @click.stop
            role="dialog"
            aria-modal="true"
            aria-label="モバイルナビゲーション"
          >
            <div class="drawer-header">
              <router-link to="/" class="logo" @click="closeMobile">
                <span class="logo-mark" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                    <rect x="2" y="2" width="11" height="11" rx="1" fill="currentColor" />
                    <rect x="15" y="2" width="11" height="11" rx="1" fill="currentColor" opacity="0.55" />
                    <rect x="2" y="15" width="11" height="11" rx="1" fill="currentColor" opacity="0.55" />
                    <rect x="15" y="15" width="11" height="11" rx="1" fill="currentColor" opacity="0.3" />
                  </svg>
                </span>
                <span class="logo-text">STEPSTONE</span>
              </router-link>
              <button class="drawer-close" aria-label="メニューを閉じる" @click="closeMobile">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
              </button>
            </div>

            <nav class="drawer-nav">
              <ul class="drawer-list">
                <li v-for="item in navMenu" :key="item.label" class="drawer-item">
                  <div class="drawer-item-row">
                    <router-link
                      :to="item.to"
                      class="drawer-link"
                      :class="{ active: isActive(item.to) }"
                    >
                      {{ item.label }}
                    </router-link>
                    <button
                      v-if="hasChildren(item)"
                      class="drawer-toggle"
                      :class="{ 'is-open': mobileExpanded[item.label] }"
                      :aria-label="`${item.label} のサブメニューを切り替え`"
                      @click="toggleMobileChild(item.label)"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </div>

                  <transition name="submenu">
                    <ul v-if="hasChildren(item) && mobileExpanded[item.label]" class="drawer-sub-list">
                      <li v-for="sub in item.children" :key="sub.to">
                        <router-link
                          :to="sub.to"
                          class="drawer-sub-link"
                          :class="{ active: isActive(sub.to) }"
                        >
                          {{ sub.label }}
                        </router-link>
                      </li>
                    </ul>
                  </transition>
                </li>
              </ul>

              <div class="drawer-top-links">
                <router-link
                  v-for="link in topLinks"
                  :key="link.to"
                  :to="link.to"
                  class="drawer-top-link"
                  :class="{ active: isActive(link.to) }"
                >
                  {{ link.label }}
                </router-link>
              </div>
            </nav>
          </div>
        </transition>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.app-header {
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  /* height: var(--header-height); */
  /* background: var(--color-bg); */
  /* border-bottom: 1px solid var(--color-border); */
  z-index: 100;
  transition: box-shadow 0.25s ease;
}

.app-header.is-scrolled {
  box-shadow: 0 2px 12px rgba(15, 26, 38, 0.08);
}

.header-inner {
  /* display: flex; */
  align-items: center;
  height: 100%;
  gap: var(--space-md);
}

/* ===== Logo ===== */
.logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-primary);
  flex-shrink: 0;
  transition: opacity 0.2s ease;
}

.logo:hover {
  color: var(--color-primary);
  opacity: 0.85;
}

.logo-mark {
  display: inline-flex;
  color: var(--color-primary);
}

.logo-text {
  /* font-family: var(--font-serif); */
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.01em;
}

/* ===== 桌面主菜单 ===== */
.main-nav {
  /* flex: 1; */
  display: flex;
  justify-content: center;
  height: 82px;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.nav-item {
  position: relative;
}

.nav-link {
  display: inline-block;
  padding: 8px 4px;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #fff;
  position: relative;
  transition: color 0.2s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: #00b289;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.25s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #00b289;
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}

/* ===== Mega menu 面板 ===== */
.mega-panel {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  box-shadow: 0 12px 32px rgba(15, 26, 38, 0.12);
  padding: var(--space-lg) var(--space-xl);
  min-width: 220px;
  animation: megaIn 0.18s ease;
}

@keyframes megaIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mega-panel--single {
  border-radius: 4px;
}

.mega-panel--grid {
  /* 三列 mega menu：左对齐于触发项，宽到能容纳三列 */
  width: 720px;
  max-width: calc(100vw - 48px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
  left: 0;
}

.mega-col-title {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-light);
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--color-border);
}

.mega-sub-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mega-sub-link {
  display: inline-block;
  padding: 6px 8px;
  font-size: 0.875rem;
  color: var(--color-text);
  border-radius: 3px;
  transition: color 0.15s ease, background-color 0.15s ease;
}

.mega-sub-link:hover {
  color: var(--color-accent);
  background: var(--color-bg-alt);
}

.mega-sub-link.active {
  color: var(--color-accent);
  font-weight: 600;
}

/* ===== topLinks ===== */
.top-links {
  display: flex;
  align-items: center;
  gap:30px;
  flex-shrink: 0;
}

.top-link {
  font-size: 0.8125rem;
  color:#fff;
  transition: color 0.2s ease;
}

.top-link:hover,
.top-link.active {
  color: #00b289;
}

/* ===== 汉堡按钮（移动端） ===== */
.hamburger {
  display: none;
  width: 32px;
  height: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #daff96;
  border-radius: 4px;
  transition: background 0.2s ease, color 0.2s ease;
}

.hamburger:hover {
  background: var(--color-bg-alt);
  color: var(--color-accent);
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: currentColor;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.hamburger.is-open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.is-open span:nth-child(2) {
  opacity: 0;
}
.hamburger.is-open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ===== 移动端抽屉 ===== */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 26, 38, 0.5);
  z-index: 200;
}

.mobile-drawer {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 420px;
  height: 100%;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.15);
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: var(--header-height);
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
}

.drawer-close {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  border-radius: 4px;
  transition: background 0.15s ease;
}

.drawer-close:hover {
  background: var(--color-bg-alt);
}

.drawer-nav {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: var(--space-md) 0;
}

.drawer-list {
  display: flex;
  flex-direction: column;
}

.drawer-item {
  border-bottom: 1px solid var(--color-border);
}

.drawer-item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.drawer-link {
  flex: 1;
  padding: var(--space-md) 0;
  font-size: 1.0625rem;
  font-weight: 500;
  color: var(--color-text);
  transition: color 0.2s ease;
}

.drawer-link:hover,
.drawer-link.active {
  color: var(--color-accent);
}

.drawer-toggle {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  border-radius: 4px;
  transition: transform 0.25s ease, background 0.2s ease, color 0.2s ease;
}

.drawer-toggle:hover {
  background: var(--color-bg-alt);
  color: var(--color-accent);
}

.drawer-toggle.is-open {
  transform: rotate(180deg);
}

.drawer-sub-list {
  padding: 0 20px var(--space-md) 32px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.drawer-sub-link {
  display: block;
  padding: 8px 0;
  font-size: 0.9375rem;
  color: var(--color-text-light);
}

.drawer-sub-link:hover,
.drawer-sub-link.active {
  color: var(--color-accent);
}

.drawer-top-links {
  margin-top: var(--space-lg);
  padding: var(--space-lg) 20px;
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.drawer-top-link {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  transition: color 0.2s ease;
}

.drawer-top-link:hover,
.drawer-top-link.active {
  color: var(--color-accent);
}

/* ===== 抽屉过渡 ===== */
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.25s ease;
}
.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
}

.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.drawer-slide-enter-from,
.drawer-slide-leave-to {
  transform: translateX(100%);
}

.submenu-enter-active,
.submenu-leave-active {
  transition: max-height 0.25s ease, opacity 0.2s ease;
  overflow: hidden;
}
.submenu-enter-from,
.submenu-leave-to {
  max-height: 0;
  opacity: 0;
}
.submenu-enter-to,
.submenu-leave-from {
  max-height: 600px;
  opacity: 1;
}

/* ===== 响应式：默认移动端，≥1024px 显示桌面 ===== */
@media (max-width: 1023px) {
  .main-nav,
  .top-links {
    display: none;
  }
  .mobile_con {
    display: flex;
  }
  .header-inner {
    justify-content: space-between;
  }
  .hamburger {
    display: flex;
  }
  .header-inner {
    display: none;
  }
  .mobile_con {
    /* background: #2f3a42; */
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
  .logo {
    width: 125px;
    height: 24px;
  }
}

@media (min-width: 1024px) {
  .mobile_con {
    display: none;
  }
  .hamburger {
    display: none;
  }
  .header-inner {
    display: block;
  }
}
</style>
<style lang="scss" scoped>
.top_box {
  background: #2f3a42;
  height: 40px;
}
.top_con {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
}
.bottom_box {
  background: linear-gradient(180deg, #191f23, #191f2300);
  height: 190px;
}
.bottom_co {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  width: 180px;
}
.concact-link {
  width: 140px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
  color: #fff;
  background: #191f23;
  border-radius: 4px;
  &:hover{
    background: #445460;
  }
}
</style>
