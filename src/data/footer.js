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
  'StepStone Group is a global private markets investment firm focused on providing customized investment and advisory solutions to some of the world\u2019s most sophisticated investors.'

export const footerNav = [
  {
    title: 'What We Do',
    links: [
      { label: 'Private Equity', to: '/what-we-do/asset-classes/private-equity' },
      { label: 'Real Estate', to: '/what-we-do/asset-classes/real-estate' },
      { label: 'Infrastructure', to: '/what-we-do/asset-classes/infrastructure' },
      { label: 'Private Debt', to: '/what-we-do/asset-classes/private-debt' },
      { label: 'Secondaries', to: '/what-we-do/strategies/secondaries' },
      { label: 'Co-Investments', to: '/what-we-do/strategies/co-investments' }
    ]
  },
  {
    title: 'Who We Are',
    links: [
      { label: 'Our Team', to: '/who-we-are/our-team' },
      { label: 'Culture', to: '/who-we-are/working-at-stepstone-culture' },
      { label: 'Corporate Citizenship', to: '/who-we-are/corporate-citizenship' },
      { label: 'News & Events', to: '/news-events' }
    ]
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Offices', to: '/offices' },
      { label: 'Contact Us', to: '/contact-us' },
      { label: 'Current Opportunities', to: '/current-opportunities' },
      { label: 'Shareholders', to: '/shareholders' }
    ]
  },
  {
    title: 'Legal',
    links: [
      {
        label: 'Data Privacy Policy',
        href: 'https://www.stepstonegroup.com/data-privacy-policy/',
        external: true
      },
      {
        label: 'Terms of Use',
        href: 'https://www.stepstonegroup.com/terms-of-use/',
        external: true
      },
      {
        label: 'Accessibility Statement',
        href: 'https://www.stepstonegroup.com/accessibility-statement/',
        external: true
      },
      {
        label: 'Modern Slavery Statement',
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
