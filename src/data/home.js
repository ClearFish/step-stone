/*
 * 首页数据
 * - stats: 关键数据统计（三列）
 * - pillars: "Designed to deliver more" 四大支柱
 * - insights: 资讯卡片，image 取自 public/images/insights/ 下真实存在的文件
 *   link 保留原站完整 URL
 */

export const stats = [
  {
    value: '$771B',
    label: 'Total capital responsibility',
    note: 'As of 9/30/2025',
    description: 'Currently entrusted with $209B assets under management.'
  },
  {
    value: '31',
    label: 'Offices worldwide',
    note: '',
    description:
      'Comprehensive coverage and a local point of view of all the markets that matter most to our clients.'
  },
  {
    value: '1,240+',
    label: 'Empowered experts',
    note: 'As of 9/30/2025',
    description:
      "We're curious, collaborative and constantly looking to create informed, innovative solutions."
  }
]

export const pillars = [
  {
    title: 'Access: go anywhere, do anything',
    description:
      "We're in every sector, strategy, and territory, right where the brightest ideas are generated, offering more options, more customized solutions, more ways to tap into all the possibilities."
  },
  {
    title: 'Insight: look deeper, go farther',
    description:
      'Our focus on data captures a wealth of intelligence across the private markets; these insights provide views both panoramic and precise — informing clearer paths and more confident decisions.'
  },
  {
    title: 'Expertise: identify, initiate, innovate',
    description:
      'Our professionals are empowered with the resources and support they need to act swiftly and decisively, tapping into deep expertise and specialization to create the best possible strategies and solutions.'
  },
  {
    title: 'Partnership: share, see, solve together',
    description:
      'By openly exchanging and combining knowledge and expertise throughout our potent network of investors and general partners, we find and foster new, different ways to address each challenge and opportunity.'
  }
]

export const insights = [
  {
    category: 'Whitepapers',
    title: 'Dual-use technology: Rewriting the rules of engagement',
    image: '/images/insights/2026-01-Magnificent-7-across-markets-1.png',
    link: 'https://www.stepstonegroup.com/insights/dual-use-technology-rewriting-the-rules-of-engagement/'
  },
  {
    category: 'Market insights',
    title: 'Revisiting the growth equity market opportunity',
    image: '/images/insights/2021-growth-equity-tnail-387x387-1.png',
    link: 'https://www.stepstonegroup.com/insights/revisiting-the-growth-equity-market-opportunity/'
  },
  {
    category: 'Whitepapers',
    title: 'Diversifying your Asia exposure: India private equity',
    image:
      '/images/insights/20250417-Japan-private-equity-whitepaper-cover-images.png',
    link: 'https://www.stepstonegroup.com/insights/diversifying-your-asia-exposure-india-private-equity/'
  },
  {
    category: 'Whitepapers',
    title: 'Implications of Trump 2.0 on the private markets',
    image: '/images/insights/Latin-america-elections_387x387.jpg',
    link: 'https://www.stepstonegroup.com/insights/implications-of-trump-2-0-on-the-private-markets/'
  },
  {
    category: 'Market insights',
    title: 'Trends in corporate direct lending 2H24',
    image:
      '/images/insights/20240109-PD-snapshot-1_Direct-lending-attractive-risk-adjusted-returns.png',
    link: 'https://www.stepstonegroup.com/insights/trends-in-corporate-direct-lending-2h24/'
  },
  {
    category: 'Industry updates',
    title:
      'StepStone Group completes fundraising for fifth private equity secondaries program',
    image: '/images/insights/20200929-SREP-Press-Release-Thumbnail.png',
    link: 'https://www.stepstonegroup.com/news-events/stepstone-group-completes-fundraising-for-fifth-private-equity-secondaries-program/'
  }
]
