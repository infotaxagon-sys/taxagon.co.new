import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Section, { SectionItem } from '@/components/Section'

const COVERAGE = [
  'S-Corporation returns (Form 1120-S)',
  'Partnership returns (Form 1065)',
  'C-Corporation returns (Form 1120)',
  'LLC tax classification and returns',
  'Schedule K-1 preparation for partners/shareholders',
  'Estimated quarterly tax payments',
  'Business deduction optimization',
  'Depreciation & Section 179 elections',
  'Payroll tax compliance & W-4 guidance',
  'Multi-state business returns',
  'Startup tax strategy & entity selection',
  'Year-round bookkeeping integration',
]

const WHY = [
  { num: '01', title: 'Entity-Specific Expertise', desc: 'Deep knowledge of LLCs, S-corps, C-corps, and partnerships — we match the strategy to your entity type.' },
  { num: '02', title: 'Deduction Maximization', desc: 'We proactively identify overlooked deductions including home office, vehicle, travel, R&D, and startup credits.' },
  { num: '03', title: 'Year-Round Partnership', desc: 'Business taxes are not seasonal. Our team partners with you throughout the year for planning and compliance.' },
]

export default function Business() {
  return (
    <div className="overflow-x-hidden">
      <section className="mesh-bg py-24 relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-[-10%] right-[0%] w-[400px] h-[400px] rounded-full bg-indigo-deep/8 hero-blob pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-bold tracking-widest text-indigo-deep uppercase mb-4">Services</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold font-sora text-slate-900 leading-tight mb-5">
            Business Tax <em className="not-italic text-indigo-deep">Services</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-600 text-lg leading-relaxed mb-8">
            Expert tax preparation and strategic planning for LLCs, partnerships, S-corporations, C-corporations, and small businesses of every size.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-deep hover:bg-indigo-deep-dark text-white font-bold px-7 py-3.5 rounded-xl transition-all btn-shine shadow-brand">
              Request a Quote <ArrowRight size={15} aria-hidden="true" />
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
                  Business tax pricing is based on entity type, number of shareholders/partners, complexity of books, and states. We provide a transparent quote after a free 30-minute strategy call.
                </p>
                <p className="text-slate-500 text-xs mb-6">Forms supported: 1065 · 1120S · 1120 · Schedule K-1</p>
                <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-indigo-deep hover:bg-indigo-deep-dark text-white font-bold py-3.5 rounded-xl transition-all btn-shine shadow-sm">
                  Request Custom Quote <ArrowRight size={14} aria-hidden="true" />
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
          <p className="text-indigo-100 mb-8">Business tax support tailored to your entity. Custom-quoted after a free consultation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-deep font-bold px-8 py-4 rounded-xl hover:bg-sky-tint transition-all btn-shine">
            Book a Free Strategy Session <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  )
}
