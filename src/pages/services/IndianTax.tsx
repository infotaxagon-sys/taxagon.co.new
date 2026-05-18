import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Section, { SectionItem } from '@/components/Section'

const COVERAGE = [
  'Indian Income Tax Return (ITR) preparation',
  'US federal and state tax returns for NRIs',
  'DTAA (Double Tax Avoidance Agreement) analysis',
  'NRI residential status determination',
  'Foreign Asset Schedule (Schedule FA) in ITR',
  'India-sourced income reporting in US returns',
  'FBAR filing for Indian bank accounts',
  'FATCA Form 8938 for Indian financial assets',
  'RSU and ESPP income — dual-country reporting',
  'PF / EPF / PPF tax treatment in the US',
  'Rental income from Indian property',
  'Capital gains from Indian stocks/mutual funds',
  'Repatriation and remittance guidance',
  'TDS reconciliation and refund claims in India',
]

const WHY = [
  { num: '01', title: 'Dual-Country Expertise', desc: 'Our team understands both the US Internal Revenue Code and Indian Income Tax Act — a rare combination that eliminates costly errors.' },
  { num: '02', title: 'DTAA Optimization', desc: 'We analyze the US-India tax treaty to ensure you claim all available credits and exemptions, avoiding double taxation.' },
  { num: '03', title: 'End-to-End NRI Service', desc: 'From ITR filing in India to FBAR compliance in the US — we handle the full cross-border picture so you don\'t have to.' },
]

export default function IndianTax() {
  return (
    <div className="overflow-x-hidden">
      <section className="mesh-bg py-24 relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-[-10%] right-[0%] w-[400px] h-[400px] rounded-full bg-indigo-deep/8 hero-blob pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-bold tracking-widest text-indigo-deep uppercase mb-4">Services</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold font-sora text-slate-900 leading-tight mb-5">
            Indian Tax &{' '}
            <em className="not-italic text-indigo-deep">NRI Services</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-600 text-lg leading-relaxed mb-8">
            Specialized cross-border tax services for Non-Resident Indians (NRIs) — seamlessly coordinating US and Indian tax obligations under the DTAA to minimize your global tax liability.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex gap-3 flex-wrap">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-deep hover:bg-indigo-deep-dark text-white font-bold px-7 py-3.5 rounded-xl transition-all btn-shine shadow-brand">
              Book NRI Consultation <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </motion.div>
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
                <div className="text-2xl font-bold font-sora text-indigo-deep mb-4">Custom Quote</div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  NRI pricing is tailored based on the scope of your US and Indian filings, number of income sources, foreign assets, and treaty provisions. We begin with a free 30-minute strategy session.
                </p>
                <div className="bg-white rounded-xl p-4 mb-5 border border-slate-200">
                  <p className="text-slate-700 text-sm font-semibold mb-2">Includes:</p>
                  {['ITR filing (India)', 'US Federal + State returns', 'FBAR / FATCA compliance', 'DTAA treaty analysis'].map(f => (
                    <div key={f} className="flex items-center gap-2 py-1">
                      <CheckCircle2 size={13} className="text-green-success" aria-hidden="true" />
                      <span className="text-slate-600 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-indigo-deep hover:bg-indigo-deep-dark text-white font-bold py-3.5 rounded-xl transition-all btn-shine shadow-sm">
                  Get NRI Quote <ArrowRight size={14} aria-hidden="true" />
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
          <p className="text-blue-100 mb-8">Expert NRI cross-border tax compliance — US + India, seamlessly handled.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-deep font-bold px-8 py-4 rounded-xl hover:bg-sky-tint transition-all btn-shine">
            Book Your NRI Consultation <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  )
}
