import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Gift, Star, MessageSquare } from 'lucide-react'
import Section, { SectionItem } from '@/components/Section'
import { PRICING_TABLE, SITE } from '@/lib/constants'

export default function Pricing() {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="mesh-bg py-28 relative overflow-hidden" aria-label="Pricing hero">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="hero-blob absolute top-[-10%] right-[5%] w-[400px] h-[400px] rounded-full bg-gold/15" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-bold tracking-widest text-gold uppercase mb-5">
            Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold font-sora text-navy leading-[1.08] mb-5"
          >
            Transparent,{' '}
            <em className="not-italic text-gold">Value-Based</em>{' '}
            Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-xl leading-relaxed max-w-xl mx-auto"
          >
            We provide precise tax expertise with clear, upfront pricing models. No hidden fees, just professional compliance and strategy.
          </motion.p>
        </div>
      </section>

      {/* ── REFERRAL CARD ── */}
      <div className="bg-white py-8 border-b border-parchment-dark">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-5 bg-gradient-to-r from-amber-50 to-yellow-50 border border-gold/25 rounded-4xl p-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-gold flex items-center justify-center shrink-0">
              <Gift size={20} className="text-white" aria-hidden="true" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs font-bold tracking-widest text-gold uppercase mb-1">Exclusive Offer</p>
              <h3 className="text-lg font-bold font-sora text-navy">Refer a Friend &amp; Earn $20</h3>
              <p className="text-slate-500 text-sm">For every friend who files with Taxagon, you earn a $20 referral bonus — no limit.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-bold px-6 py-3 rounded-full transition-all btn-shine text-sm whitespace-nowrap"
            >
              Join Program <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── TIERS ── */}
      <section className="py-24 bg-white" aria-label="Pricing tiers">
        <div className="max-w-5xl mx-auto px-6">
          <Section className="grid md:grid-cols-2 gap-7 items-stretch">

            {/* Essential */}
            <SectionItem>
              <div className="border-2 border-parchment-dark rounded-4xl p-9 h-full flex flex-col hover:border-gold/40 hover:shadow-brand transition-all">
                <div className="mb-7">
                  <span className="text-xs font-bold tracking-widest text-gold uppercase">Essential Filing</span>
                  <h2 className="text-2xl font-bold font-sora text-navy mt-1.5 mb-2">Individual Primary</h2>
                  <p className="text-slate-500 text-sm">Comprehensive support for standard federal and state filings</p>
                </div>
                <div className="mb-8">
                  <span className="text-xs text-slate-400 block mb-1">Starting at</span>
                  <div className="text-6xl font-bold font-sora text-navy leading-none">$89</div>
                  <p className="text-slate-400 text-sm mt-1.5">federal + state filing</p>
                </div>
                <ul className="space-y-3.5 mb-9 flex-1">
                  {[
                    'Standard Deduction Analysis',
                    'Digital Draft Review & Sign-off',
                    '256-bit Secure Document Portal',
                    'Post-Filing Audit Support Info',
                    'Year-round email support',
                    'Multi-state filing available',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-green-success shrink-0" aria-hidden="true" />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 border-2 border-navy text-navy font-bold py-4 rounded-full hover:bg-navy hover:text-white transition-all btn-shine text-sm"
                >
                  Start Your Filing
                </Link>
              </div>
            </SectionItem>

            {/* Advanced */}
            <SectionItem>
              <div className="animated-border rounded-4xl p-9 h-full flex flex-col bg-navy shadow-brand">
                <div className="mb-7">
                  <span className="text-xs font-bold tracking-widest text-gold uppercase">Advanced Compliance</span>
                  <h2 className="text-2xl font-bold font-sora text-white mt-1.5 mb-2">Tailored Solutions</h2>
                  <p className="text-blue-200 text-sm">Expert handling of complex business and international tax requirements</p>
                </div>
                <div className="space-y-3 mb-8 flex-1">
                  {[
                    { label: 'Business (1065 / 1120S / 1120)', value: 'CUSTOM QUOTE' },
                    { label: 'Cross-Border (FBAR / FATCA)', value: 'PER ACCOUNT' },
                    { label: 'Crypto & High Volume Gains', value: 'VOLUME BASED' },
                    { label: 'NRI / Indian Tax Returns', value: 'CUSTOM QUOTE' },
                    { label: 'Bookkeeping / Outsourced CFO', value: 'MONTHLY PKG' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between py-2.5 border-b border-white/8 last:border-0">
                      <span className="text-blue-100 text-sm">{label}</span>
                      <span className="text-gold font-bold text-xs tracking-wider bg-white/10 px-2.5 py-1 rounded-xl">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white/8 rounded-2xl p-3.5 mb-7">
                  <div className="flex gap-2">
                    <Star size={13} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-blue-100 text-xs leading-relaxed">
                      * All advanced services include a preliminary strategy session to ensure accuracy before official engagement.
                    </p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-gold text-navy font-bold py-4 rounded-full hover:bg-gold-light transition-all btn-shine text-sm"
                >
                  Request a Consultation
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </SectionItem>
          </Section>
        </div>
      </section>

      {/* ── FEE SCHEDULE ── */}
      <section className="py-24 bg-parchment" aria-label="Service fee schedule">
        <div className="max-w-3xl mx-auto px-6">
          <Section>
            <SectionItem className="text-center mb-12">
              <p className="text-xs font-bold tracking-widest text-gold uppercase mb-4">Baseline Guide</p>
              <h2 className="text-3xl font-bold font-sora text-navy">Service Fee Schedule</h2>
              <p className="text-slate-500 mt-2 text-sm">Final pricing determined after reviewing your specific situation.</p>
            </SectionItem>
            <SectionItem>
              <div className="bg-white rounded-4xl border border-parchment-dark overflow-hidden shadow-card">
                <table className="w-full text-left" aria-label="Pricing fee schedule">
                  <thead>
                    <tr className="bg-navy">
                      <th className="px-6 py-4 text-white font-semibold text-sm">Service</th>
                      <th className="px-6 py-4 text-white font-semibold text-sm text-right">Pricing Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING_TABLE.map((row, i) => (
                      <tr key={row.service} className={i % 2 === 0 ? 'bg-white' : 'bg-parchment'}>
                        <td className="px-6 py-4 text-slate-700 text-sm">{row.service}</td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-navy font-semibold text-sm">{row.basis}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionItem>
            <SectionItem className="mt-10 text-center">
              <p className="text-slate-500 text-sm mb-5">
                Speak to a lead accountant for a custom quote tailored to your situation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-bold px-8 py-4 rounded-full transition-all btn-shine shadow-brand"
              >
                <MessageSquare size={16} aria-hidden="true" />
                Book Strategy Session
              </Link>
            </SectionItem>
          </Section>
        </div>
      </section>

      <section className="py-10 bg-white border-t border-parchment-dark" aria-label="Client portal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm mb-2">Already a client?</p>
          <a
            href={SITE.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-navy font-semibold hover:text-gold transition-colors text-sm"
          >
            Access your Client Portal →
          </a>
        </div>
      </section>
    </div>
  )
}
