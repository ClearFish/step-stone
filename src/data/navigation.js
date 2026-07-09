/*
 * 顶部导航数据
 * - navMenu: 主菜单（桌面端 mega menu + 移动端抽屉菜单共用）
 * - topLinks: 顶部右侧小字链接
 * - megaMenuGroups: What We Do 下拉按三列分组（Asset Classes / Strategies / Solutions）
 */

export const navMenu = [
  {
    label: 'What We Do',
    to: '/what-we-do',
    children: [
      { label: 'Private Equity', to: '/what-we-do/asset-classes/private-equity' },
      { label: 'Real Estate', to: '/what-we-do/asset-classes/real-estate' },
      { label: 'Infrastructure', to: '/what-we-do/asset-classes/infrastructure' },
      { label: 'Private Debt', to: '/what-we-do/asset-classes/private-debt' },
      { label: 'Fund Investments', to: '/what-we-do/strategies/fund-investments' },
      { label: 'Secondaries', to: '/what-we-do/strategies/secondaries' },
      { label: 'Co-Investments', to: '/what-we-do/strategies/co-investments' },
      { label: 'Direct Investments', to: '/what-we-do/strategies/direct-investments' },
      { label: 'Advisory Services', to: '/what-we-do/solutions-services/advisory-services' },
      { label: 'Asset Management', to: '/what-we-do/solutions-services/asset-management' },
      { label: 'Data Analytics', to: '/what-we-do/solutions-services/data-analytics' },
      { label: 'Private Wealth Solutions', to: '/what-we-do/solutions-services/private-wealth-solutions' }
    ]
  },
  {
    label: 'Who We Are',
    to: '/who-we-are',
    children: [
      { label: 'Our Team', to: '/who-we-are/our-team' },
      { label: 'Working at StepStone', to: '/who-we-are/working-at-stepstone-culture' },
      { label: 'Corporate Citizenship', to: '/who-we-are/corporate-citizenship' }
    ]
  },
  {
    label: 'How We Think',
    to: '/how-we-think',
    children: [
      { label: 'Podcasts', to: '/how-we-think/podcasts' },
      { label: 'Videos', to: '/how-we-think/videos' },
      { label: 'Culture & Community', to: '/how-we-think/culture-community' }
    ]
  }
]

export const topLinks = [
  { label: 'Private Wealth', to: '/current-opportunities' },
  { label: 'Investor Tools', to: '/contact-us' },
  { label: 'Careers', to: '/offices' },
  { label: 'General Partners', to: '/offices' },
  { label: 'Shareholders', to: '/shareholders' },
]

/*
 * What We Do 的 mega menu 分组配置
 * 用于桌面端下拉面板的三列布局
 */
export const megaMenuGroups = [
  {
    title: 'Asset Classes',
    items: [
      { label: 'Private Equity', to: '/what-we-do/asset-classes/private-equity' },
      { label: 'Real Estate', to: '/what-we-do/asset-classes/real-estate' },
      { label: 'Infrastructure', to: '/what-we-do/asset-classes/infrastructure' },
      { label: 'Private Debt', to: '/what-we-do/asset-classes/private-debt' }
    ]
  },
  {
    title: 'Strategies',
    items: [
      { label: 'Fund Investments', to: '/what-we-do/strategies/fund-investments' },
      { label: 'Secondaries', to: '/what-we-do/strategies/secondaries' },
      { label: 'Co-Investments', to: '/what-we-do/strategies/co-investments' },
      { label: 'Direct Investments', to: '/what-we-do/strategies/direct-investments' }
    ]
  },
  {
    title: 'Solutions & Services',
    items: [
      { label: 'Advisory Services', to: '/what-we-do/solutions-services/advisory-services' },
      { label: 'Asset Management', to: '/what-we-do/solutions-services/asset-management' },
      { label: 'Data Analytics', to: '/what-we-do/solutions-services/data-analytics' },
      { label: 'Private Wealth Solutions', to: '/what-we-do/solutions-services/private-wealth-solutions' }
    ]
  }
]
