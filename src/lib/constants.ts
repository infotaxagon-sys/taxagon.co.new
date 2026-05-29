export const SITE = {
  name: 'Taxagon',
  tagline: 'Smart tax filing, accounting, bookkeeping, and tax planning support for individuals and businesses. Austin, Texas based expert team.',
  address: '555 Round Rock W Dr e225, Round Rock, TX 78681, USA',
  office: 'Park West Corporate Office',
  city: 'Austin, Texas',
  phone: '+1 737-381-2330',
  email: 'info@taxagon.co',
  whatsapp: '+91 996-3260-743',
  portalUrl: 'https://taxagon.clientportal.com/#/login',
  copyright: '© 2026 Taxagon. All rights reserved. Austin based Tax & Accounting compliance service.',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '#',
    dropdown: [
      { label: 'Individual Tax Filing', href: '/services/individual' },
      { label: 'Business Tax Services', href: '/services/business' },
      { label: 'FBAR & Foreign Reporting', href: '/services/fbar' },
      { label: 'Indian Tax / NRI Services', href: '/services/nri' },
      { label: 'Bookkeeping & CFO', href: '/services/bookkeeping' },
      { label: 'NRI Passport Renewals', href: '/services/passport' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'IRS Center',
    href: '/tax-tools',
    dropdown: [
      { label: 'Federal Refund Status', href: '/tax-tools/federal-refund' },
      { label: 'State Refund Status', href: '/tax-tools/state-refund' },
      { label: 'Make Federal Payment', href: '/tax-tools/federal-payment' },
      { label: 'State Tax Agencies', href: '/tax-tools/state-payment' },
      { label: 'Credits & Deductions', href: '/credits-deductions' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
  { label: 'About Us', href: '/about' },
]

export const FOOTER_SERVICES = [
  { label: 'Individual Tax Filing', href: '/services/individual' },
  { label: 'Business Tax Filing', href: '/services/business' },
  { label: 'Bookkeeping & CFO', href: '/services/bookkeeping' },
  { label: 'FBAR & FATCA', href: '/services/fbar' },
  { label: 'Indian Tax / NRI Services', href: '/services/nri' },
  { label: 'Pricing Plans', href: '/pricing' },
]

export const FOOTER_TAX_TOOLS = [
  { label: 'IRS Center', href: '/tax-tools' },
  { label: 'Federal Refund Status', href: '/tax-tools/federal-refund' },
  { label: 'IRS Online Account', href: '/tax-tools/federal-payment' },
  { label: 'Make Federal Payment', href: '/tax-tools/federal-payment' },
  { label: 'State Tax Agencies', href: '/tax-tools/state-payment' },
  { label: 'Book a Consultation', href: '/contact' },
]

export const TAX_TOOL_RESOURCES = [
  {
    title: 'Federal Refund Status',
    description: 'Check the status of your federal tax refund directly on the IRS website.',
    icon: 'search',
    href: 'https://www.irs.gov/refunds',
    badge: 'IRS Official',
    anchor: 'federal-refund',
  },
  {
    title: 'IRS Individual Account',
    description: 'Access your IRS online account to view tax records, payments, and more.',
    icon: 'user',
    href: 'https://www.irs.gov/payments/your-online-account',
    badge: 'Secure',
    anchor: 'federal-refund',
  },
  {
    title: 'IRS Direct Pay (Free)',
    description: 'Make federal tax payments directly from your bank account — no fees.',
    icon: 'credit-card',
    href: 'https://www.irs.gov/payments/direct-pay',
    badge: 'Free',
    anchor: 'federal-payment',
  },
  {
    title: 'Pay by Card',
    description: 'Pay your federal taxes using a debit or credit card through IRS-approved processors.',
    icon: 'wallet',
    href: 'https://www.irs.gov/payments/pay-your-taxes-by-debit-or-credit-card',
    badge: 'Card Accepted',
    anchor: 'federal-payment',
  },
  {
    title: 'IRS Business Account',
    description: 'Manage your business tax account, view balances, and make payments.',
    icon: 'building-2',
    href: 'https://www.irs.gov/businesses/small-businesses-self-employed/business-tax-account',
    badge: 'Business',
    anchor: 'federal-payment',
  },
  {
    title: 'Ohio Tax Portal',
    description: 'File and pay Ohio state taxes through the Ohio Department of Taxation.',
    icon: 'map-pin',
    href: 'https://tax.ohio.gov/',
    badge: 'Ohio',
    anchor: 'state-payment',
  },
  {
    title: 'PA Tax Services',
    description: 'Access Pennsylvania Department of Revenue for state tax filing and payments.',
    icon: 'map-pin',
    href: 'https://www.revenue.pa.gov/',
    badge: 'Pennsylvania',
    anchor: 'state-payment',
  },
  {
    title: 'Vehicle & EV Credits',
    description: 'Learn about federal clean vehicle credits under the Inflation Reduction Act.',
    icon: 'car',
    href: 'https://www.irs.gov/credits-deductions/credits-for-new-clean-vehicles-purchased-in-2023-or-after',
    badge: 'EV Credits',
    anchor: 'federal-refund',
  },
  {
    title: 'GIPS Motor Vehicle Credits',
    description: 'Access the IRS Green Income Producers System for motor vehicle credits.',
    icon: 'zap',
    href: 'https://www.irs.gov/credits-deductions/used-clean-vehicle-credit',
    badge: 'Green Credits',
    anchor: 'federal-refund',
  },
  {
    title: 'State Refund Finder',
    description: 'Find your state tax agency for refund status and payment information.',
    icon: 'globe',
    href: 'https://www.taxadmin.org/state-tax-agencies',
    badge: 'All States',
    anchor: 'state-refund',
  },
]

export const HOME_FEATURES = [
  {
    icon: 'user-check',
    title: 'Personalized Guidance',
    description: 'We review your documents carefully and guide you based on your tax situation.',
  },
  {
    icon: 'file-text',
    title: 'Federal & Multi-State Returns',
    description: 'We help with federal and multi-state tax return preparation.',
  },
  {
    icon: 'briefcase',
    title: 'Business Tax Support',
    description: 'Support for LLCs, partnerships, S corporations, and small businesses.',
  },
  {
    icon: 'globe',
    title: 'Foreign Reporting Help',
    description: 'FBAR, FATCA, foreign income, and Indian tax filing guidance.',
  },
  {
    icon: 'shield-check',
    title: 'Secure Online Process',
    description: 'Upload documents, review drafts, and communicate online with ease.',
  },
  {
    icon: 'trending-up',
    title: 'Year-Round Tax Planning',
    description: 'We help you think beyond filing season and plan ahead for savings.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Sandeep Rao',
    title: 'NRI Tech Professional',
    content: 'Taxagon made my FBAR and Indian tax filing completely stress-free. Their expertise in cross-border tax is unmatched. Highly recommended for any NRI!',
    rating: 5,
    initials: 'SR',
  },
  {
    name: 'Jennifer Miller',
    title: 'Small Business Owner',
    content: 'Our LLC taxes was the best decision. They found credits we had missed for years and handled our multi-state filing perfectly.',
    rating: 5,
    initials: 'JM',
  },
  {
    name: 'Arun Kumar',
    title: 'Software Engineer',
    content: 'I uploaded everything on a Sunday, and by Tuesday my return was ready for review. Fast, professional, and very helpful.',
    rating: 5,
    initials: 'AK',
  },
]

export const ABOUT_BENEFITS = [
  'Professional services at reasonable price',
  'Option to compare/know the summary at no cost in 24 hrs',
  'Round the clock Customer Support & assistance',
  'Personal care on Individual return',
  'File the return in Simple steps',
  'Professional Assistance (error free tax return)',
  'Free assistance for last 3 years tax returns',
  '100% data security',
  'Early bird discount for early registration',
  'Referral bonus ($20 for every friend)',
  'Payroll and W-4 assistance',
  'W-7 assistance',
  'FBAR and FATCA assistance',
  'Suggestion and representations to the IRS Query',
  'Advance tax planning',
]

export const PRICING_TABLE = [
  { service: 'Simple Federal + State Individual Return', basis: 'Starts at $89' },
  { service: 'Multi-State Return', basis: 'Based on complexity' },
  { service: '1099 / Self-Employment Return', basis: 'Based on forms' },
  { service: 'Stock / RSU / Crypto Reporting', basis: 'Based on transaction volume' },
  { service: 'Rental Property / Schedule E', basis: 'Based on property count' },
  { service: 'ITIN / W-7 Assistance', basis: 'Based on case' },
  { service: 'FBAR Filing', basis: 'Based on account count' },
  { service: 'FATCA / Form 8938', basis: 'Based on asset details' },
  { service: 'Business Return — 1065 / 1120S / 1120', basis: 'Based on entity and books' },
  { service: 'Bookkeeping / Outsourced CFO', basis: 'Monthly package available' },
]
