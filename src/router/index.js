import { createRouter, createWebHistory } from 'vue-router'
import PlaceholderView from '@/views/PlaceholderView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/what-we-do',
    name: 'what-we-do',
    component: () => import('@/views/WhatWeDoView.vue')
  },
  // What We Do 子路由
  {
    path: '/what-we-do/asset-classes/private-equity',
    name: 'what-we-do-private-equity',
    component: () => import('@/views/PrivateEquityView.vue'),
    meta: { title: 'Private Equity', parent: 'What We Do' }
  },
  {
    path: '/what-we-do/asset-classes/venture-and-growth-equity',
    name: 'what-we-do-venture-and-growth-equity',
    component: () => import('@/views/VentureAndGrowthEquityView.vue'),
    meta: { title: 'Venture and Growth Equity', parent: 'What We Do' }
  },
  {
    path: '/what-we-do/asset-classes/infrastructure',
    name: 'what-we-do-infrastructure',
    component: () => import('@/views/InfrastructureView.vue'),
    meta: { title: 'Infrastructure', parent: 'What We Do' }
  },
  {
    path: '/what-we-do/asset-classes/private-debt',
    name: 'what-we-do-private-debt',
    component: () => import('@/views/PrivateDebtView.vue'),
    meta: { title: 'Private Debt', parent: 'What We Do' }
  },
  {
    path: '/what-we-do/asset-classes/real-estate',
    name: 'what-we-do-real-estate',
    component: () => import('@/views/RealEstateView.vue'),
    meta: { title: 'Real Estate', parent: 'What We Do' }
  },
  {
    path: '/what-we-do/strategies/fund-investments',
    name: 'what-we-do-fund-investments',
    component: () => import('@/views/FundInvestmentsView.vue'),
    meta: { title: 'Fund Investments', parent: 'What We Do' }
  },
  {
    path: '/what-we-do/strategies/secondaries',
    name: 'what-we-do-secondaries',
    component: () => import('@/views/SecondariesView.vue'),
    meta: { title: 'Secondaries', parent: 'What We Do' }
  },
  {
    path: '/what-we-do/strategies/co-investments',
    name: 'what-we-do-co-investments',
    component: () => import('@/views/CoInvestmentsView.vue'),
    meta: { title: 'Co-Investments', parent: 'What We Do' }
  },
  {
    path: '/what-we-do/strategies/direct-investments',
    name: 'what-we-do-direct-investments',
    component: () => import('@/views/DirectInvestmentsView.vue'),
    meta: { title: 'Direct Investments', parent: 'What We Do' }
  },
  {
    path: '/what-we-do/solutions-services/advisory-services',
    name: 'what-we-do-advisory-services',
    component: () => import('@/views/AdvisoryServicesView.vue'),
    meta: { title: 'Advisory Services', parent: 'What We Do' }
  },
  {
    path: '/what-we-do/solutions-services/asset-management',
    name: 'what-we-do-asset-management',
    component: () => import('@/views/AssetManagementView.vue'),
    meta: { title: 'Asset Management', parent: 'What We Do' }
  },
  {
    path: '/what-we-do/solutions-services/data-analytics',
    name: 'what-we-do-data-analytics',
    component: () => import('@/views/DataAnalyticsView.vue'), 
    meta: { title: 'Data Analytics', parent: 'What We Do' }
  },
  {
    path: '/what-we-do/solutions-services/private-wealth-solutions',
    name: 'what-we-do-private-wealth-solutions',
    component: PlaceholderView,
    meta: { title: 'Private Wealth Solutions', parent: 'What We Do' }
  },
  {
    path: '/who-we-are',
    name: 'who-we-are',
    component: () => import('@/views/WhoWeAreView.vue')
  },
  // Who We Are 子路由
  {
    path: '/who-we-are/our-team',
    name: 'who-we-are-our-team',
    component: () => import('@/views/OurTeamView.vue'),
    meta: { title: 'Our Team', parent: 'Who We Are' }
  },
  {
    path: '/who-we-are/working-at-stepstone-culture',
    name: 'who-we-are-culture',
    component: PlaceholderView,
    meta: { title: 'Working at StepStone', parent: 'Who We Are' }
  },
  {
    path: '/who-we-are/corporate-citizenship',
    name: 'who-we-are-corporate-citizenship',
    component:  () => import('@/views/CorporateCitizenshipView.vue'),
    meta: { title: 'Corporate Citizenship', parent: 'Who We Are' }
  },
  {
    path: '/how-we-think',
    name: 'how-we-think',
    component: () => import('@/views/HowWeThinkView.vue')
  },
  // How We Think 子路由
  {
    path: '/how-we-think/podcasts',
    name: 'how-we-think-podcasts',
    component: PlaceholderView,
    meta: { title: 'Podcasts', parent: 'How We Think' }
  },
  {
    path: '/how-we-think/videos',
    name: 'how-we-think-videos',
    component: PlaceholderView,
    meta: { title: 'Videos', parent: 'How We Think' }
  },
  {
    path: '/how-we-think/culture-community',
    name: 'how-we-think-culture-community',
    component: PlaceholderView,
    meta: { title: 'Culture & Community', parent: 'How We Think' }
  },
  {
    path: '/how-we-think/policies-annual-reports',
    name: 'how-we-think-policies-annual-reports',
    component: () => import('@/views/PoliciesAnnualReportsView.vue'),
    meta: { title: 'Policies & Annual Reports', parent: 'How We Think' }
  },
  {
    path: '/news-events',
    name: 'news-events',
    component: () => import('@/views/NewsEventsView.vue')
  },
  {
    path: '/shareholders',
    name: 'shareholders',
    component: () => import('@/views/ShareholdersView.vue')
  },
  {
    path: '/offices',
    name: 'offices',
    component: () => import('@/views/OfficesView.vue')
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('@/views/ContactUsView.vue')
  },
  {
    path: '/current-opportunities',
    name: 'current-opportunities',
    component: () => import('@/views/CurrentOpportunitiesView.vue')
  },
  {
    path: '/current-opportunities/frequently-asked-questions',
    name: 'current-opportunities-faq',
    component: PlaceholderView,
    meta: { title: 'Frequently Asked Questions', parent: 'Current Opportunities' }
  },
  // 兜底：未匹配路由回到首页
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
