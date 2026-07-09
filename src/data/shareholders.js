/*
 * Shareholders 投资者关系页数据
 * 股价/财务数据为静态示例，仅用于页面展示
 * - stockInfo: 股票静态信息（含走势图示例数据点）
 * - financials: 关键数据卡片
 * - reports: 财务报告与 SEC 文件列表
 */

export const stockInfo = {
  symbol: 'STEP',
  exchange: 'Nasdaq Global Select Market',
  asOf: 'As of latest close — static example data',
  price: '$45.49',
  marketCap: '$5.5B',
  weekRange52: '$40.07 - $77.80',
  dividendYield: '3.3%',
  // 走势图示例数据点（近 18 个周期收盘价）
  chartPoints: [
    40.07, 42.1, 45.3, 48.0, 52.5, 49.8, 55.2, 60.1,
    58.4, 62.7, 68.3, 72.0, 77.8, 70.5, 65.2, 58.1, 50.6, 45.49
  ]
}

export const financials = [
  {
    value: '$1.78B',
    label: 'Revenue (TTM)'
  },
  {
    value: '$209B',
    label: 'Total AUM'
  },
  {
    value: '$771B',
    label: 'Total Capital Responsibility'
  },
  {
    value: '1,240+',
    label: 'Employees'
  }
]

export const reports = [
  {
    title: 'Q3 FY2025 Earnings Report',
    date: '2026-02-05',
    link: 'https://www.stepstonegroup.com/shareholders/'
  },
  {
    title: 'Q2 FY2025 Earnings Report',
    date: '2025-11-06',
    link: 'https://www.stepstonegroup.com/shareholders/'
  },
  {
    title: 'Q1 FY2025 Earnings Report',
    date: '2025-08-11',
    link: 'https://www.stepstonegroup.com/shareholders/'
  },
  {
    title: 'Annual Report 2024',
    date: '2025-06-13',
    link: 'https://www.stepstonegroup.com/shareholders/'
  },
  {
    title: '10-K Filing',
    date: '2025',
    link: 'https://www.stepstonegroup.com/shareholders/'
  }
]
