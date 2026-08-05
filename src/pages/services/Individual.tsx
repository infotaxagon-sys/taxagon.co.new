import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Section, { SectionItem } from '@/components/Section'

const COVERAGE = [
  'W-2 employee tax returns',
  'Schedule C business income',
  'RSU and ESPP reporting',
  'Rental property income',
  'Child tax credit & education credits',
  'NRI Passport Renewals & Consular Services',
  'Extension filing',
  '1099-NEC / self-employment income',
  'Stock sales / Form 1099-B',
  'Crypto transactions',
  'Mortgage interest & itemized deductions',
  'W-7 assistance / ITIN Support',
  'Amendment filing',
  'Multi-state tax returns',
]

const WHY = [
  {
    num: '01',
    title: 'RSU, ESPP & Stock Expertise',
    desc: 'Proactive guidance on RSU, ESPP, and Stock reporting to avoid overpayment and minimize your tax burden.',
  },
  {
    num: '02',
    title: 'Remote Worker Specialists',
    desc: 'Expert analysis of multi-state filing requirements for digital nomads and remote workers across state lines.',
  },
  {
    num: '03',
    title: 'Crypto-Savvy Team',
    desc: 'Dedicated support for crypto enthusiasts with complex gain/loss situations, DeFi, staking, and NFT transactions.',
  },
]

export default function Individual() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="mesh-bg py-24 relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-[-10%] right-[0%] w-[400px] h-[400px] rounded-full bg-indigo-deep/8 hero-blob pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-bold tracking-widest text-indigo-deep uppercase mb-4">Services</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-sora text-slate-900 leading-tight mb-5"
          >
            Individual Tax Filing{' '}
            <em className="not-italic text-indigo-deep">Services</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed mb-8"
          >
            Taxagon provides federal and state tax preparation for individuals, families, students, employees, contractors, investors, and high-income professionals.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-deep hover:bg-indigo-deep-dark text-white font-bold px-7 py-3.5 rounded-xl transition-all btn-shine shadow-brand">
              Get Started <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-indigo-deep hover:text-indigo-deep text-slate-700 font-semibold px-7 py-3.5 rounded-xl transition-all shadow-sm">
              View Pricing
            </Link>
          </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="rounded-3xl overflow-hidden shadow-brand aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=75" alt="Tax advisor helping a client review their individual filing" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE COVERAGE */}
      <section className="py-20 bg-white" aria-label="Coverage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section className="grid md:grid-cols-2 gap-12 items-start">
            <SectionItem>
              <h2 className="text-3xl font-bold font-sora text-slate-900 mb-8">Comprehensive Coverage</h2>
              <div className="grid gap-3">
                {COVERAGE.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-green-success shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </SectionItem>
            <SectionItem>
              {/* Pricing card */}
              <div className="bg-sky-tint border border-indigo-deep/15 rounded-3xl p-8 sticky top-28">
                <h3 className="text-xl font-bold font-sora text-slate-900 mb-2">Pricing & Value</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold font-sora text-indigo-deep">$99</span>
                  <span className="text-slate-500 text-sm">starting price</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  Start your individual tax filing today. Pricing starts at $99 for simple federal + state filing. Final pricing depends on your tax situation, number of forms, states, schedules, and complexity.
                </p>
                <Link to="/pricing" className="inline-flex items-center gap-1.5 text-indigo-deep font-semibold text-sm hover:underline mb-6 block">
                  See Detailed Pricing →
                </Link>
                <div className="space-y-2">
                  {['No hidden fees', 'Draft review before e-filing', '256-bit secure document portal', 'Year-round support'].map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-green-success" aria-hidden="true" />
                      <span className="text-slate-700 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="mt-6 w-full flex items-center justify-center gap-2 bg-indigo-deep hover:bg-indigo-deep-dark text-white font-bold py-3.5 rounded-xl transition-all btn-shine shadow-sm">
                  Start Filing Now <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </SectionItem>
          </Section>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-slate-50" aria-label="Why choose Taxagon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <SectionItem className="text-center mb-12">
              <h2 className="text-3xl font-bold font-sora text-slate-900">Why Choose Us?</h2>
            </SectionItem>
            <div className="grid md:grid-cols-3 gap-6">
              {WHY.map(item => (
                <SectionItem key={item.num}>
                  <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-card h-full">
                    <div className="text-4xl font-bold font-sora text-indigo-deep/20 mb-4">{item.num}</div>
                    <h3 className="font-bold text-slate-900 font-sora mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </SectionItem>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-deep" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-sora text-white mb-4">Start Filing with Taxagon</h2>
          <p className="text-indigo-100 mb-8">Secure, professional individual tax filing from $99. No hidden fees.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-deep font-bold px-8 py-4 rounded-xl hover:bg-sky-tint transition-all btn-shine">
            Get Started Today <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  )
}
