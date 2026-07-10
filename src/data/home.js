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
    label: '受託資本総額',
    note: '2025年9月30日時点',
    description: '現在、2,090億ドルの運用資産を受託しています。'
  },
  {
    value: '31',
    label: 'グローバル拠点数',
    note: '',
    description:
      'クライアントにとって特に重要な市場を、包括的なカバレッジと現地視点で捉えます。'
  },
  {
    value: '1,240+',
    label: '専門人材',
    note: '2025年9月30日時点',
    description:
      '私たちは好奇心と協働精神を持ち、常に深い知見に基づく革新的なソリューションの創出を追求しています。'
  }
]

export const pillars = [
  {
    title: 'アクセス: あらゆる市場へ、あらゆる可能性へ',
    description:
      '私たちはあらゆるセクター、戦略、地域に存在し、優れたアイデアが生まれる最前線に身を置いています。より多くの選択肢、より高度なカスタマイズ、そして可能性を引き出す多様な手段を提供します。'
  },
  {
    title: 'インサイト: より深く見て、より遠くへ',
    description:
      '私たちのデータ重視の姿勢は、プライベートマーケット全体にわたる豊富な知見を捉えます。そのインサイトは、全体像と精緻さを兼ね備えた視点を提供し、より明確な進路と確信ある意思決定を支えます。'
  },
  {
    title: '専門性: 見極め、始動し、革新する',
    description:
      '私たちのプロフェッショナルは、迅速かつ的確に行動するために必要なリソースと支援を備えています。深い専門知識と特化領域の強みを生かし、最適な戦略とソリューションを生み出します。'
  },
  {
    title: 'パートナーシップ: 共有し、見通し、共に解決する',
    description:
      '投資家やGPとの強固なネットワーク全体で知識と専門性をオープンに共有し結びつけることで、あらゆる課題と機会に向き合う新たな解決策を見出し、育てていきます。'
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
