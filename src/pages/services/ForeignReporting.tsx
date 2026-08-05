import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Shield } from 'lucide-react'
import Section, { SectionItem } from '@/components/Section'

const COVERAGE = [
  'FBAR (FinCEN 114) preparation and filing',
  'FATCA compliance — Form 8938',
  'Foreign bank account reporting',
  'Foreign income exclusion (Form 2555)',
  'Foreign tax credit (Form 1116)',
  'Passive Foreign Investment Company (PFIC) reporting',
  'Form 3520 — Foreign gifts and trusts',
  'Form 5471 — Controlled foreign corporations',
  'Streamlined filing procedures for late filers',
  'Penalty abatement and IRS representation',
  'Dual-status tax returns',
  'Treaty-based return positions',
]

const WHY = [
  { num: '01', title: 'FBAR Penalty Prevention', desc: 'Willful FBAR violations carry penalties up to $100,000+. Our proactive approach keeps you fully compliant and protected.' },
  { num: '02', title: 'FATCA & Form 8938 Accuracy', desc: 'We meticulously analyze your foreign asset thresholds and reporting requirements to avoid costly misfilings.' },
  { num: '03', title: 'Late Filing Remediation', desc: 'Missed prior years? We guide you through Streamlined Domestic or Foreign Offshore procedures to come into compliance safely.' },
]

export default function ForeignReporting() {
  return (
    <div className="overflow-x-hidden">
      <section className="mesh-bg py-24 relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-[-10%] right-[0%] w-[400px] h-[400px] rounded-full bg-indigo-deep/8 hero-blob pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-bold tracking-widest text-indigo-deep uppercase mb-4">Services</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }} className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 text-xs font-semibold text-amber-700 mb-4">
            <Shield size={12} aria-hidden="true" /> Compliance-critical service
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold font-sora text-slate-900 leading-tight mb-5">
            FBAR & Foreign <em className="not-italic text-indigo-deep">Reporting Services</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-600 text-lg leading-relaxed mb-8">
            Expert preparation of FBAR (FinCEN 114), FATCA Form 8938, and all foreign asset reporting requirements to keep you penalty-free and compliant.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-deep hover:bg-indigo-deep-dark text-white font-bold px-7 py-3.5 rounded-xl transition-all btn-shine shadow-brand">
              Get FBAR Help <ArrowRight size={15} aria-hidden="true" />
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
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=75" alt="Earth at night showing connected cities across continents" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
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
              <div className="bg-sky-tint border border-indigo-deep/15 rounded-3xl p-8 sticky top-28">
                <h3 className="text-xl font-bold font-sora text-slate-900 mb-2">Pricing & Value</h3>
                <div className="text-2xl font-bold font-sora text-indigo-deep mb-4">Per Account / Per Form</div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  FBAR pricing is based on the number of foreign accounts reported. FATCA / Form 8938 pricing is based on asset details and complexity. A preliminary review is included at no cost before engagement.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-5">
                  <p className="text-amber-800 text-xs leading-relaxed">⚠️ FBAR deadline: April 15 (automatic extension to October 15). Missing the deadline carries significant civil penalties.</p>
                </div>
                <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-indigo-deep hover:bg-indigo-deep-dark text-white font-bold py-3.5 rounded-xl transition-all btn-shine shadow-sm">
                  Get a Free Review <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </SectionItem>
          </Section>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <SectionItem className="text-center mb-12"><h2 className="text-3xl font-bold font-sora text-slate-900">Why Choose Us?</h2></SectionItem>
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

      <section className="py-16 bg-indigo-deep">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-sora text-white mb-4">Start Filing with Taxagon</h2>
          <p className="text-indigo-100 mb-8">Don't risk FBAR or FATCA penalties. Our experts protect your compliance.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-deep font-bold px-8 py-4 rounded-xl hover:bg-sky-tint transition-all btn-shine">
            Contact Us Today <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  )
}
