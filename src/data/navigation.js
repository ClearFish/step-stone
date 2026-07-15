/*
 * 顶部导航数据
 * - navMenu: 主菜单（桌面端 mega menu + 移动端抽屉菜单共用）
 * - topLinks: 顶部右侧小字链接
 * - megaMenuGroups: What We Do 下拉按三列分组（Asset Classes / Strategies / Solutions）
 */

export const navMenu = [
  {
    label: '私たちについて',
    to: '/who-we-are',
    children: [
      { label: '私たちについて', to: '/who-we-are' },
      { label:'私たちのチーム',to:'/who-we-are/our-team'},
      { label: '企業市民活動', to: '/who-we-are/corporate-citizenship' },
    ]
  },
  {
    label: '私たちの事業',
    to: '/what-we-do',
    children: [
      { label: 'プライベートエクイティ', to: '/what-we-do/asset-classes/private-equity' },
      { label: 'ベンチャーキャピタルおよびグロースエクイティ', to: '/what-we-do/asset-classes/venture-and-growth-equity' },
      { label: '民間債務', to: '/what-we-do/asset-classes/private-debt' },
      { label: '不動産', to: '/what-we-do/asset-classes/real-estate' },
      // infrastructure
      { label: 'インフラおよび実物資産', to: '/what-we-do/asset-classes/infrastructure' },
      { label: 'ファンド投資', to: '/what-we-do/strategies/fund-investments' },
      { label: 'セカンダリー', to: '/what-we-do/strategies/secondaries' },
      { label: '共同投資', to: '/what-we-do/strategies/co-investments' },
      { label: '直接投資', to: '/what-we-do/strategies/direct-investments' },
      { label: 'アドバイザリーサービス', to: '/what-we-do/solutions-services/advisory-services' },
      { label: '資産運用', to: '/what-we-do/solutions-services/asset-management' },
      { label: 'データ分析', to: '/what-we-do/solutions-services/data-analytics' },
      // { label: 'プライベートウェルスソリューション', to: '/what-we-do/solutions-services/private-wealth-solutions' }
    ]
  },
  {
    label: '私たちの視点',
    to: '/how-we-think',
    children: [
      { label: '製品', to: '/how-we-think?categoryType=products' },
      { label: 'ニュース', to: '/how-we-think?categoryType=Firm news' },
      { label: '市場調査', to: '/how-we-think?categoryType=market research' },
      { label: 'ビデオ', to: '/how-we-think?categoryType=video'},
      { label:'方針および年次報告書',to:'/how-we-think/policies-annual-reports'},
      { label:'アカデミー',to:'/how-we-think?categoryType=stepstone-academy'},
    ]
  }
]

export const topLinks = [
  { label: 'プライベートウェルス', to: '/current-opportunities' },
  { label: '投資家向けツール', to: '/contact-us' },
  { label: '採用情報', to: '/offices' },
  { label: 'ゼネラルパートナー', to: '/offices' },
  { label: '株主情報', to: '/shareholders' },
]

/*
 * What We Do 的 mega menu 分组配置
 * 用于桌面端下拉面板的三列布局
 */
export const megaMenuGroups = [
  {
    title: '資産クラス',
    items: [
      { label: 'プライベートエクイティ', to: '/what-we-do/asset-classes/private-equity' },
      { label: 'ベンチャーキャピタルおよびグロースエクイティ', to: '/what-we-do/asset-classes/venture-and-growth-equity' },
      { label: '民間債務', to: '/what-we-do/asset-classes/private-debt' },
      { label: '不動産', to: '/what-we-do/asset-classes/real-estate' },
      { label: 'インフラおよび実物資産', to: '/what-we-do/asset-classes/infrastructure' },
    ]
  },
  {
    title: '戦略',
    items: [
      { label: 'ファンド投資', to: '/what-we-do/strategies/fund-investments' },
      { label: 'セカンダリー', to: '/what-we-do/strategies/secondaries' },
      { label: '共同投資', to: '/what-we-do/strategies/co-investments' },
      { label: '直接投資', to: '/what-we-do/strategies/direct-investments' }
    ]
  },
  {
    title: 'ソリューションとサービス',
    items: [
      { label: 'アドバイザリーサービス', to: '/what-we-do/solutions-services/advisory-services' },
      { label: '資産運用', to: '/what-we-do/solutions-services/asset-management' },
      { label: 'データ分析', to: '/what-we-do/solutions-services/data-analytics' },
      // { label: 'プライベートウェルスソリューション', to: '/what-we-do/solutions-services/private-wealth-solutions' }
    ]
  }
]
