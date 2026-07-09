<script setup>
/*
 * Contact Us 页面
 * PageHero + 两栏布局：左侧纯前端表单（ref 管理状态，@submit.prevent）
 * 右侧联系信息。表单提交仅本地显示 Thank you 提示，不发请求。
 */
import { reactive, ref } from 'vue'
import PageHero from '@/components/common/PageHero.vue'

/* 表单状态 */
const form = reactive({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: ''
})

/* 提交后的感谢提示 */
const submitted = ref(false)

/* 右侧联系信息列表 */
const contactInfo = [
  {
    label: 'Headquarters',
    value: '277 Park Avenue, 45th Floor, New York, NY 10017',
    type: 'address'
  },
  {
    label: 'Telephone',
    value: '+1 212 351 6100',
    type: 'phone'
  },
  {
    label: 'General Inquiries',
    value: 'info@stepstonegroup.com',
    type: 'email'
  },
  {
    label: 'Shareholder Relations',
    value: 'shareholders@stepstonegroup.com',
    type: 'email'
  },
  {
    label: 'Media',
    value: 'StepStonePR@icrinc.com',
    type: 'email'
  }
]

/* 提交处理：阻止默认行为，仅切换提示状态 */
function handleSubmit() {
  submitted.value = true
}

/* 重置表单，允许再次填写 */
function resetForm() {
  form.name = ''
  form.email = ''
  form.company = ''
  form.subject = ''
  form.message = ''
  submitted.value = false
}
</script>

<template>
  <main class="page">
    <PageHero
      title="Contact Us"
      subtitle="Get in touch with StepStone Group"
      eyebrow="Contact"
    />

    <section class="contact-section">
      <div class="container contact-inner">
        <div class="contact-layout">
          <!-- 左侧：联系表单 -->
          <div class="contact-form-wrap">
            <h2 class="contact-block-title">Send us a message</h2>
            <p class="contact-block-intro">
              Complete the form below and a member of our team will get back to
              you shortly.
            </p>

            <!-- 感谢提示（提交后显示） -->
            <transition name="fade">
              <div v-if="submitted" class="thank-you" role="status">
                <div class="thank-you-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12.5l4.5 4.5L19 7"
                      stroke="currentColor"
                      stroke-width="2.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="thank-you-text">
                  <h3>Thank you</h3>
                  <p>
                    Your message has been received. We'll be in touch soon.
                  </p>
                </div>
                <button class="thank-you-reset" type="button" @click="resetForm">
                  Send another message
                </button>
              </div>
            </transition>

            <!-- 表单 -->
            <form v-if="!submitted" class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-row">
                <div class="form-field">
                  <label for="name">Name <span class="req">*</span></label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    autocomplete="name"
                    placeholder="Your full name"
                  />
                </div>
                <div class="form-field">
                  <label for="email">Email <span class="req">*</span></label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    autocomplete="email"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-field">
                  <label for="company">Company</label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    autocomplete="organization"
                    placeholder="Company name"
                  />
                </div>
                <div class="form-field">
                  <label for="subject">Subject <span class="req">*</span></label>
                  <input
                    id="subject"
                    v-model="form.subject"
                    type="text"
                    required
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div class="form-field">
                <label for="message">Message <span class="req">*</span></label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  required
                  placeholder="Tell us a bit more about your inquiry..."
                ></textarea>
              </div>

              <button type="submit" class="submit-btn">Send Message</button>
            </form>
          </div>

          <!-- 右侧：联系信息 -->
          <aside class="contact-info">
            <h2 class="contact-block-title">Contact details</h2>
            <p class="contact-block-intro">
              Reach the right team directly using the details below.
            </p>

            <ul class="info-list">
              <li v-for="item in contactInfo" :key="item.label" class="info-item">
                <span class="info-label">{{ item.label }}</span>
                <a
                  v-if="item.type === 'email'"
                  :href="`mailto:${item.value}`"
                  class="info-value"
                >{{ item.value }}</a>
                <a
                  v-else-if="item.type === 'phone'"
                  :href="`tel:${item.value.replace(/[^+\d]/g, '')}`"
                  class="info-value"
                >{{ item.value }}</a>
                <span v-else class="info-value">{{ item.value }}</span>
              </li>
            </ul>

            <div class="info-note">
              <span class="info-note-label">Looking for an office?</span>
              <router-link to="/offices" class="info-note-link">
                View all locations
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </router-link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page {
  width: 100%;
}

.contact-section {
  padding: var(--space-3xl) 0;
  background: var(--color-bg);
}

.contact-inner {
  max-width: var(--container-max);
}

.contact-layout {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--space-3xl);
  align-items: start;
}

.contact-block-title {
  font-family: var(--font-serif);
  font-size: 1.625rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
}

.contact-block-intro {
  font-size: 0.9375rem;
  color: var(--color-text-light);
  margin-bottom: var(--space-xl);
}

/* ===== 表单 ===== */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-field label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 6px;
}

.req {
  color: var(--color-accent);
}

.form-field input,
.form-field textarea {
  width: 100%;
  padding: 12px 14px;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  color: var(--color-text);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 2px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  resize: vertical;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: #9a9a9a;
}

.form-field input:focus,
.form-field textarea:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(0, 102, 179, 0.12);
}

.submit-btn {
  align-self: flex-start;
  padding: 14px 32px;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #ffffff;
  background: var(--color-accent);
  border: 1px solid var(--color-accent);
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.submit-btn:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

/* ===== Thank you 提示 ===== */
.thank-you {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding: var(--space-xl) var(--space-lg);
  background: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-accent);
}

.thank-you-icon {
  display: inline-flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: var(--color-accent);
  border-radius: 50%;
}

.thank-you-text h3 {
  font-family: var(--font-serif);
  font-size: 1.375rem;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.thank-you-text p {
  font-size: 0.9375rem;
  color: var(--color-text-light);
  margin: 0;
}

.thank-you-reset {
  align-self: flex-start;
  padding: 8px 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
  border-bottom: 1px solid var(--color-accent);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.thank-you-reset:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
}

/* ===== 右侧联系信息 ===== */
.contact-info {
  padding: var(--space-xl) var(--space-lg);
  background: var(--color-bg-alt);
  border: 1px solid var(--color-border);
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--color-border);
}

.info-item:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.info-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-light);
}

.info-value {
  font-size: 0.9375rem;
  line-height: 1.5;
  color: var(--color-text);
}

a.info-value:hover {
  color: var(--color-accent);
}

.info-note {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: var(--space-lg);
  border-top: 2px solid var(--color-primary);
}

.info-note-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary);
}

.info-note-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
}

.info-note-link svg {
  transition: transform 0.25s ease;
}

.info-note-link:hover svg {
  transform: translateX(3px);
}

/* ===== 过渡 ===== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ===== 平板：单列布局，表单两栏字段保持 ===== */
@media (max-width: 1023px) {
  .contact-section {
    padding: var(--space-2xl) 0;
  }
  .contact-layout {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }
}

/* ===== 移动：表单字段单列 ===== */
@media (max-width: 767px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
  .contact-info {
    padding: var(--space-lg);
  }
}
</style>
