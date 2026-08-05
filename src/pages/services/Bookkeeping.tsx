import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Section, { SectionItem } from '@/components/Section'

const COVERAGE = [
  'Monthly bookkeeping and reconciliation',
  'Chart of accounts setup and optimization',
  'Accounts payable and receivable tracking',
  'Bank and credit card reconciliation',
  'Monthly financial statements (P&L, Balance Sheet)',
  'Cash flow monitoring and reporting',
  'Expense categorization and classification',
  'Payroll processing coordination',
  'Vendor 1099-NEC preparation',
  'QuickBooks Online / Xero setup and management',
  'Outsourced CFO advisory — budgeting & forecasting',
  'Tax-ready books for seamless annual filing',
]

const WHY = [
  { num: '01', title: 'Tax-Integrated Bookkeeping', desc: 'Our bookkeepers coordinate directly with our tax team — so your books are always ready for filing, no scrambling at year-end.' },
  { num: '02', title: 'Real-Time Financial Clarity', desc: 'Monthly reports give you a clear view of profitability, cash flow, and expense patterns so you can make informed business decisions.' },
  { num: '03', title: 'Scalable CFO Support', desc: 'From startup to growth-stage, our Outsourced CFO services provide the financial leadership you need without the full-time cost.' },
]

const PACKAGES = [
  { label: 'Starter', price: 'From $199/mo', desc: 'Up to 100 transactions · Monthly reconciliation · P&L + Balance Sheet' },
  { label: 'Growth', price: 'From $499/mo', desc: 'Up to 300 transactions · AP/AR tracking · Payroll coordination' },
  { label: 'CFO+', price: 'Custom', desc: 'Unlimited transactions · Forecasting · Board-ready reports · CFO advisory' },
]

export default function Bookkeeping() {
  return (
    <div className="overflow-x-hidden">
      <section className="mesh-bg py-24 relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-[-10%] right-[0%] w-[400px] h-[400px] rounded-full bg-indigo-deep/8 hero-blob pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-bold tracking-widest text-indigo-deep uppercase mb-4">Services</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold font-sora text-slate-900 leading-tight mb-5">
            Bookkeeping &{' '}
            <em className="not-italic text-indigo-deep">Outsourced CFO</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-600 text-lg leading-relaxed mb-8">
            Professional monthly bookkeeping and strategic CFO services for small businesses and growing companies — giving you clean books and clear financial visibility all year long.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-deep hover:bg-indigo-deep-dark text-white font-bold px-7 py-3.5 rounded-xl transition-all btn-shine shadow-brand">
              Get a Custom Quote <ArrowRight size={15} aria-hidden="true" />
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
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=75" alt="Monthly financial dashboard and reports on a laptop" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <SectionItem className="text-center mb-10">
              <h2 className="text-2xl font-bold font-sora text-slate-900">Monthly Packages</h2>
            </SectionItem>
            <div className="grid md:grid-cols-3 gap-6">
              {PACKAGES.map((pkg, i) => (
                <SectionItem key={pkg.label}>
                  <div className={`rounded-2xl p-7 border h-full ${i === 1 ? 'bg-indigo-deep border-indigo-deep text-white' : 'bg-white border-slate-200'} shadow-card`}>
                    <h3 className={`font-bold font-sora text-lg mb-1 ${i === 1 ? 'text-white' : 'text-slate-900'}`}>{pkg.label}</h3>
                    <div className={`text-2xl font-bold font-sora mb-3 ${i === 1 ? 'text-amber-gold' : 'text-indigo-deep'}`}>{pkg.price}</div>
                    <p className={`text-sm leading-relaxed ${i === 1 ? 'text-indigo-100' : 'text-slate-500'}`}>{pkg.desc}</p>
                  </div>
                </SectionItem>
              ))}
            </div>
          </Section>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section className="grid md:grid-cols-2 gap-12 items-start">
            <SectionItem>
              <h2 className="text-3xl font-bold font-sora text-slate-900 mb-8">What's Included</h2>
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
                <h3 className="text-xl font-bold font-sora text-slate-900 mb-2">Why Choose Us?</h3>
                {WHY.map(item => (
                  <div key={item.num} className="py-4 border-b border-slate-200 last:border-0">
                    <div className="text-2xl font-bold font-sora text-indigo-deep/25 mb-1">{item.num}</div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
                <Link to="/contact" className="mt-6 w-full flex items-center justify-center gap-2 bg-indigo-deep hover:bg-indigo-deep-dark text-white font-bold py-3.5 rounded-xl transition-all btn-shine shadow-sm">
                  Get Started Today <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </SectionItem>
          </Section>
        </div>
      </section>

      <section className="py-16 bg-indigo-deep">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-sora text-white mb-4">Start Filing with Taxagon</h2>
          <p className="text-indigo-100 mb-8">Clean books, clear financials, and tax-ready records — every month.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-deep font-bold px-8 py-4 rounded-xl hover:bg-sky-tint transition-all btn-shine">
            Get a Custom Bookkeeping Quote <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  )
}
