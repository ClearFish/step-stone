<script setup>
/*
 * 页脚组件
 * - 顶部：左侧 Logo + 公司简介；右侧 4 列导航链接组
 * - 底部条：左侧版权（动态年份）；右侧社交图标
 * - 内部链接用 <router-link>，外部链接（external:true）用 <a target="_blank">
 */
import { computed } from 'vue'
import { footerNav, socialLinks, companyBlurb } from '@/data/footer'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="app-footer">
    <div class="footer-top container">
      <!-- 左侧：Logo + 公司简介 -->
      <div class="footer-brand">
        <router-link to="/" class="footer-logo" aria-label="StepStone home">
          <span class="logo-mark" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="2" y="2" width="11" height="11" rx="1" fill="currentColor" />
              <rect x="15" y="2" width="11" height="11" rx="1" fill="currentColor" opacity="0.55" />
              <rect x="2" y="15" width="11" height="11" rx="1" fill="currentColor" opacity="0.55" />
              <rect x="15" y="15" width="11" height="11" rx="1" fill="currentColor" opacity="0.3" />
            </svg>
          </span>
          <span class="logo-text">StepStone</span>
        </router-link>
        <p class="footer-blurb">{{ companyBlurb }}</p>
      </div>

      <!-- 右侧：4 列导航 -->
      <nav class="footer-nav" aria-label="Footer">
        <div class="footer-col" v-for="col in footerNav" :key="col.title">
          <h4 class="footer-col-title">{{ col.title }}</h4>
          <ul class="footer-link-list">
            <li v-for="link in col.links" :key="link.label">
              <router-link
                v-if="!link.external && link.to"
                :to="link.to"
                class="footer-link"
              >
                {{ link.label }}
              </router-link>
              <a
                v-else
                :href="link.href"
                class="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <!-- 底部条 -->
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p class="copyright">&copy; {{ currentYear }} StepStone Group Inc.</p>
        <div class="social-links">
          <a
            v-for="s in socialLinks"
            :key="s.label"
            :href="s.href"
            class="social-link"
            :aria-label="s.label"
            target="_blank"
            rel="noopener noreferrer"
          >
            <!-- LinkedIn SVG -->
            <svg v-if="s.icon === 'linkedin'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
            <!-- Twitter / X SVG -->
            <svg v-else-if="s.icon === 'twitter'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.658l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: var(--color-primary-dark);
  color: #ffffff;
  margin-top: auto;
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-2xl);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-xl);
}

/* ===== 左侧品牌区 ===== */
.footer-brand {
  max-width: 360px;
}

.footer-logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  margin-bottom: var(--space-md);
  transition: opacity 0.2s ease;
}

.footer-logo:hover {
  color: #ffffff;
  opacity: 0.85;
}

.logo-mark {
  display: inline-flex;
  color: #ffffff;
}

.logo-text {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
}

.footer-blurb {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9375rem;
  line-height: 1.7;
  margin-bottom: 0;
}

/* ===== 右侧 4 列 ===== */
.footer-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.footer-col-title {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #ffffff;
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.footer-link-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-link {
  display: inline-block;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #ffffff;
}

/* ===== 底部条 ===== */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: var(--space-md) 0;
}

.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}

.copyright {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0;
}

.social-links {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.social-link:hover {
  color: #ffffff;
  border-color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
}

/* ===== 响应式 ===== */
@media (max-width: 1023px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
  .footer-brand {
    max-width: none;
  }
  .footer-nav {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .footer-nav {
    grid-template-columns: 1fr;
  }
  .footer-bottom-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
  }
}
</style>
