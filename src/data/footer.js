/*
 * 页脚导航数据
 * - footerNav: 4 列导航链接组（What We Do / Who We Are / Quick Links / Legal）
 * - socialLinks: 社交媒体外部链接
 * - companyBlurb: 公司简介一句话
 *
 * Legal 与社交链接用 external: true 标记，渲染为 <a target="_blank">
 * 内部路由链接用 to 字段，渲染为 <router-link>
 */

export const companyBlurb =
  'Zenith Capital Lab は、世界でも有数の洗練された投資家に対して、カスタマイズされた投資およびアドバイザリーソリューションを提供することに注力する、グローバルなプライベートマーケット投資会社です。'

export const footerNav = [
  {
    title: '私たちの事業',
    links: [
      { label: 'プライベートエクイティ', to: '/what-we-do/asset-classes/private-equity' },
      { label: '不動産', to: '/what-we-do/asset-classes/real-estate' },
      { label: 'インフラストラクチャー', to: '/what-we-do/asset-classes/infrastructure' },
      { label: 'プライベートデット', to: '/what-we-do/asset-classes/private-debt' },
      { label: 'セカンダリー', to: '/what-we-do/strategies/secondaries' },
      { label: '共同投資', to: '/what-we-do/strategies/co-investments' }
    ]
  },
  {
    title: '私たちについて',
    links: [
      { label: '私たちについて', to: '/who-we-are' },
      { label:'私たちのチーム',to:'/who-we-are/our-team'},
      { label: '企業市民活動', to: '/who-we-are/corporate-citizenship' },
    ]
  },
  {
    title: '資産クラス',
    links: [
      { label: 'プライベートエクイティ', to: '/what-we-do/asset-classes/private-equity' },
      { label: 'ベンチャーキャピタルおよびグロースエクイティ', to: '/what-we-do/asset-classes/venture-and-growth-equity' },
      { label: '民間債務', to: '/what-we-do/asset-classes/private-debt' },
      { label: '不動産', to: '/what-we-do/asset-classes/real-estate' },
      { label: 'インフラおよび実物資産', to: '/what-we-do/asset-classes/infrastructure' },
    ]
  },
  {
    title: '戦略',
    links: [
      { label: 'ファンド投資', to: '/what-we-do/strategies/fund-investments' },
      { label: 'セカンダリー', to: '/what-we-do/strategies/secondaries' },
      { label: '共同投資', to: '/what-we-do/strategies/co-investments' },
      { label: '直接投資', to: '/what-we-do/strategies/direct-investments' }
    ]
  }
]

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/stepstone-group/',
    external: true,
    icon: 'linkedin'
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/StepStoneGroup',
    external: true,
    icon: 'twitter'
  }
]
