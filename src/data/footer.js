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
  'StepStone Groupは、世界でも有数の洗練された投資家に対して、カスタマイズされた投資およびアドバイザリーソリューションを提供することに注力する、グローバルなプライベートマーケット投資会社です。'

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
      { label: 'チーム紹介', to: '/who-we-are/our-team' },
      { label: 'カルチャー', to: '/who-we-are/working-at-stepstone-culture' },
      { label: '企業市民活動', to: '/who-we-are/corporate-citizenship' },
      { label: 'ニュースとイベント', to: '/news-events' }
    ]
  },
  {
    title: 'クイックリンク',
    links: [
      { label: '拠点一覧', to: '/offices' },
      { label: 'お問い合わせ', to: '/contact-us' },
      { label: '現在の機会', to: '/current-opportunities' },
      { label: '株主情報', to: '/shareholders' }
    ]
  },
  {
    title: '法務情報',
    links: [
      {
        label: 'データプライバシーポリシー',
        href: 'https://www.stepstonegroup.com/data-privacy-policy/',
        external: true
      },
      {
        label: '利用規約',
        href: 'https://www.stepstonegroup.com/terms-of-use/',
        external: true
      },
      {
        label: 'アクセシビリティに関する声明',
        href: 'https://www.stepstonegroup.com/accessibility-statement/',
        external: true
      },
      {
        label: '現代奴隷制に関する声明',
        href: 'https://www.stepstonegroup.com/modern-slavery-and-human-trafficking-statement/',
        external: true
      },
      {
        label: 'SFDR',
        href: 'https://www.stepstonegroup.com/sfdr/',
        external: true
      }
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
