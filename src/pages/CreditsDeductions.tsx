import { motion } from 'framer-motion'
import {
  ExternalLink, Users, Briefcase, DollarSign, Baby, Zap,
  BookOpen, Heart, Car, Home, Building2, Gift, TrendingUp, Star,
} from 'lucide-react'
import Section, { SectionItem } from '@/components/Section'

const BASE = 'https://www.irs.gov'

// ─── Data ────────────────────────────────────────────────────────────────────

const INFO_FOR = [
  {
    icon: Users,
    label: 'Individuals',
    description: 'For you and your family',
    badge: 'Personal',
    badgeColor: 'text-indigo-600 bg-indigo-50',
    href: `${BASE}/credits-and-deductions-for-individuals`,
  },
  {
    icon: Briefcase,
    label: 'Businesses & Self-Employed',
    description: 'Standard mileage and other information',
    badge: 'Business',
    badgeColor: 'text-purple-600 bg-purple-50',
    href: `${BASE}/credits-deductions/businesses`,
  },
]

const POPULAR = [
  {
    icon: DollarSign,
    label: 'Earned Income Credit (EITC)',
    description: 'A tax credit for workers who earn low to moderate income.',
    badge: 'Popular',
    href: `${BASE}/credits-deductions/individuals/earned-income-tax-credit-eitc`,
  },
  {
    icon: Baby,
    label: 'Child Tax Credit',
    description: 'Reduce your tax bill for each qualifying child in your household.',
    badge: 'Popular',
    href: `${BASE}/credits-deductions/individuals/child-tax-credit`,
  },
  {
    icon: Zap,
    label: 'Clean Energy & Vehicle Credits',
    description: 'Credits for electric vehicles, solar panels, and home energy upgrades.',
    badge: 'Popular',
    href: `${BASE}/credits-deductions/clean-vehicle-and-energy-credits`,
  },
  {
    icon: Star,
    label: 'Standard Deduction',
    description: 'Find out how much your standard deduction is for your filing status.',
    badge: 'Popular',
    href: `${BASE}/help/ita/how-much-is-my-standard-deduction`,
  },
  {
    icon: TrendingUp,
    label: 'Retirement Plans',
    description: 'Tax benefits for contributing to IRAs, 401(k)s, and other retirement plans.',
    badge: 'Popular',
    href: `${BASE}/retirement-plans`,
  },
]

const FAMILY = [
  {
    icon: Gift,
    label: 'Tax Benefits Eligibility Chart',
    description: 'At-a-glance chart of tax benefits for families and individuals.',
    href: `${BASE}/credits-deductions/individuals/earned-income-tax-credit/tax-benefits-eligibility-chart-for-families-and-individuals-at-a-glance`,
  },
  {
    icon: BookOpen,
    label: 'Education Credits',
    description: 'American Opportunity Credit (AOTC) and Lifetime Learning Credit (LLC).',
    href: `${BASE}/credits-deductions/individuals/education-credits-aotc-and-llc`,
  },
  {
    icon: Heart,
    label: 'Adoption Credit',
    description: 'A nonrefundable credit for qualifying adoption expenses.',
    href: `${BASE}/credits-deductions/individuals/adoption-credit`,
  },
]

const ENERGY = [
  {
    icon: Car,
    label: 'Clean Vehicle Credits',
    description: 'Credits for new and used clean vehicles under the Inflation Reduction Act.',
    href: `${BASE}/clean-vehicle-tax-credits`,
  },
  {
    icon: Home,
    label: 'Home Energy Tax Credits',
    description: 'Credits for energy-efficient home improvements and residential clean energy.',
    href: `${BASE}/credits-deductions/home-energy-tax-credits`,
  },
  {
    icon: Zap,
    label: 'Elective Pay & Transferability',
    description: 'Learn how businesses can receive payments for clean energy credits.',
    href: `${BASE}/credits-deductions/elective-pay-and-transferability`,
  },
]

const BUSINESS_CREDITS = [
  {
    icon: Building2,
    label: 'Employee Retention Credit',
    description: 'A refundable tax credit for businesses that kept employees during COVID-19.',
    href: `${BASE}/coronavirus/employee-retention-credit`,
  },
  {
    icon: Users,
    label: 'Work Opportunity Tax Credit',
    description: 'A federal credit for hiring individuals from certain target groups.',
    href: `${BASE}/businesses/small-businesses-self-employed/work-opportunity-tax-credit`,
  },
  {
    icon: TrendingUp,
    label: 'Opportunity Zones',
    description: 'Tax incentives for investing in low-income community development projects.',
    href: `${BASE}/credits-deductions/businesses/opportunity-zones`,
  },
]

// ─── Card Component ───────────────────────────────────────────────────────────

function CreditCard({
  icon: Icon, label, description, href, badge, badgeColor, delay = 0,
}: {
  icon: React.ElementType; label: string; description: string; href: string;
  badge?: string; badgeColor?: string; delay?: number
}) {
  return (
    <SectionItem>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        style={{ animationDelay: `${delay}ms` }}
        className="flex flex-col gap-4 p-6 rounded-2xl border border-slate-200 bg-white hover:border-navy/40 hover:shadow-brand transition-all group h-full"
        aria-label={`${label} — opens IRS official site`}
      >
        <div className="flex items-start justify-between">
          <div className="w-11 h-11 rounded-xl bg-parchment group-hover:bg-navy flex items-center justify-center transition-colors shrink-0">
            <Icon size={18} className="text-ink group-hover:text-white transition-colors" aria-hidden="true" />
          </div>
          {badge && (
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badgeColor ?? 'text-green-600 bg-green-50'}`}>
              {badge}
            </span>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-slate-900 group-hover:text-navy transition-colors mb-1.5 text-sm leading-snug">
            {label}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="flex items-center gap-1.5 text-ink text-xs font-semibold">
          Visit IRS.gov <ExternalLink size={12} aria-hidden="true" />
        </div>
      </motion.a>
    </SectionItem>
  )
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <SectionItem className="mb-7">
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 rounded-full bg-gold" aria-hidden="true" />
        <div>
          <p className="text-xs font-bold tracking-widest text-gold uppercase">{label}</p>
          <h2 className="text-xl font-bold font-sora text-ink">{title}</h2>
        </div>
      </div>
    </SectionItem>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CreditsDeductions() {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="mesh-bg py-24 relative overflow-hidden" aria-label="Credits and Deductions hero">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="hero-blob absolute top-[-10%] right-[0%] w-[420px] h-[420px] rounded-full bg-gold/12" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-xs font-bold tracking-widest text-gold uppercase mb-4">
            IRS Center
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-sora text-ink leading-tight mb-5"
          >
            Credits &{' '}
            <em className="not-italic text-gold">Deductions</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto"
          >
            Official IRS resources for every tax credit and deduction — for individuals, families, and businesses.
          </motion.p>
        </div>
      </section>

      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* ── Information For ── */}
          <Section>
            <SectionHeading label="Start Here" title="Information For..." />
            <div className="grid sm:grid-cols-2 gap-5">
              {INFO_FOR.map((item, i) => (
                <CreditCard key={item.label} {...item} delay={i * 60} />
              ))}
            </div>
          </Section>

          {/* ── Popular ── */}
          <Section>
            <SectionHeading label="Most Searched" title="Popular Credits & Deductions" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {POPULAR.map((item, i) => (
                <CreditCard
                  key={item.label} {...item}
                  badgeColor="text-amber-600 bg-amber-50"
                  delay={i * 60}
                />
              ))}
            </div>
          </Section>

          {/* ── Family, Dependents & Students ── */}
          <Section>
            <SectionHeading label="Family & Education" title="Family, Dependents & Students" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FAMILY.map((item, i) => (
                <CreditCard
                  key={item.label} {...item}
                  badge="Family"
                  badgeColor="text-pink-600 bg-pink-50"
                  delay={i * 60}
                />
              ))}
            </div>
          </Section>

          {/* ── Inflation Reduction Act ── */}
          <Section>
            <SectionHeading label="Inflation Reduction Act" title="Clean Energy & Vehicle Credits" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ENERGY.map((item, i) => (
                <CreditCard
                  key={item.label} {...item}
                  badge="Green Credits"
                  badgeColor="text-green-600 bg-green-50"
                  delay={i * 60}
                />
              ))}
            </div>
          </Section>

          {/* ── Business Credits ── */}
          <Section>
            <SectionHeading label="Employers & Businesses" title="Employment & Business Credits" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {BUSINESS_CREDITS.map((item, i) => (
                <CreditCard
                  key={item.label} {...item}
                  badge="Business"
                  badgeColor="text-purple-600 bg-purple-50"
                  delay={i * 60}
                />
              ))}
            </div>
          </Section>

          {/* ── Bottom CTA ── */}
          <Section>
            <SectionItem>
              <div className="bg-navy rounded-4xl p-8 sm:p-10 text-center">
                <p className="text-xs font-bold tracking-widest text-gold uppercase mb-3">Need Help Claiming Credits?</p>
                <h2 className="text-2xl font-bold font-sora text-white mb-3">
                  Let Taxagon Maximize Your Deductions
                </h2>
                <p className="text-indigo-200 text-sm mb-7 max-w-lg mx-auto">
                  Our CPAs identify every credit and deduction you qualify for — from EITC to clean energy credits to business deductions.
                </p>
                <a
                  href="/get-started"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ink font-bold px-8 py-3.5 rounded-full transition-all btn-shine text-sm"
                >
                  Get Started Today
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </SectionItem>
          </Section>

        </div>
      </div>
    </div>
  )
}
