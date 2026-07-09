/*
 * What We Do 页面数据
 * - assetClasses: 四大资产类别
 * - strategies: 四种投资策略
 * - solutions: 四类解决方案与服务
 * image 取自 public/images/ 下真实存在的文件（asset-classes 与 insights 目录）
 */

export const assetClasses = [
  {
    title: 'Private Equity',
    description:
      'Buyouts, growth capital, and venture capital investments across diverse sectors and stages.',
    to: '/what-we-do/asset-classes/private-equity',
    image: '/images/insights/2021-growth-equity-tnail-387x387-1.png'
  },
  {
    title: 'Real Estate',
    description:
      'Commercial and residential real estate investments across global markets.',
    to: '/what-we-do/asset-classes/real-estate',
    image: '/images/insights/Real-Estate.jpg'
  },
  {
    title: 'Infrastructure',
    description:
      'Transport, energy, renewables, and digital infrastructure investments.',
    to: '/what-we-do/asset-classes/infrastructure',
    image: '/images/insights/Infra-101_Splash-page_web-version-1.png'
  },
  {
    title: 'Private Debt',
    description:
      'Mezzanine, venture debt, and senior loans providing credit solutions.',
    to: '/what-we-do/asset-classes/private-debt',
    image: '/images/insights/pd-paper-offering-overview-1.png'
  }
]

export const strategies = [
  {
    title: 'Fund Investments',
    description:
      'Primary commitments to third-party funds across all asset classes.',
    to: '/what-we-do/strategies/fund-investments',
    image: '/images/insights/PE-101-market-insight-1.png'
  },
  {
    title: 'Secondaries',
    description:
      'Acquiring existing fund interests on the secondary market.',
    to: '/what-we-do/strategies/secondaries',
    image: '/images/insights/2025-2-12-VC-Secondaries-whitepaper-images.png'
  },
  {
    title: 'Co-Investments',
    description: 'Direct investments alongside fund managers.',
    to: '/what-we-do/strategies/co-investments',
    image: '/images/insights/20240917-PE-co-invest-whitepaper-1.png'
  },
  {
    title: 'Direct Investments',
    description:
      'Direct equity and debt investments in portfolio companies.',
    to: '/what-we-do/strategies/direct-investments',
    image:
      '/images/insights/20240109-PD-snapshot-1_Direct-lending-attractive-risk-adjusted-returns.png'
  }
]

export const solutions = [
  {
    title: 'Advisory Services',
    description: 'Customized advisory and portfolio construction support.',
    to: '/what-we-do/solutions-services/advisory-services',
    image: '/images/insights/multi-asset-portfolios-feat.-387x387-1.jpg'
  },
  {
    title: 'Asset Management',
    description: 'Discretionary asset management across private markets.',
    to: '/what-we-do/solutions-services/asset-management',
    image: '/images/insights/Magnificent-7-webpage-graphic.png'
  },
  {
    title: 'Data Analytics',
    description:
      'Proprietary data and analytics powering informed decisions.',
    to: '/what-we-do/solutions-services/data-analytics',
    image: '/images/insights/Data-Insights_Components_PD-Paper_a-1.png'
  },
  {
    title: 'Private Wealth Solutions',
    description:
      'Private markets access for wealth managers and individual investors.',
    to: '/what-we-do/solutions-services/private-wealth-solutions',
    image: '/images/insights/WM-Awards-FINAL-.png'
  }
]
