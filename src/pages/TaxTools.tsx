import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, ExternalLink, Search, User, CreditCard, Wallet, Building2, MapPin, Car, Zap, Globe } from 'lucide-react'
import Section, { SectionItem } from '@/components/Section'
import { TAX_TOOL_RESOURCES } from '@/lib/constants'

const ICON_MAP: Record<string, React.ElementType> = {
  'search': Search,
  'user': User,
  'credit-card': CreditCard,
  'wallet': Wallet,
  'building-2': Building2,
  'map-pin': MapPin,
  'car': Car,
  'zap': Zap,
  'globe': Globe,
}

export default function TaxTools() {
  const { section } = useParams()

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="mesh-bg py-24 relative overflow-hidden" aria-label="Tax tools hero">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="hero-blob absolute top-[-10%] right-[5%] w-[400px] h-[400px] rounded-full bg-indigo-deep/8" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-bold tracking-widest text-indigo-deep uppercase mb-4">
            Refund & Payment Center
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-sora text-slate-900 leading-tight mb-5"
          >
            Tax Tools &{' '}
            <em className="not-italic text-indigo-deep">Refund Tracking</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            Official resources for federal and state tax tracking, payments, and account data.
          </motion.p>
        </div>
      </section>

      {/* ── SECURITY NOTE ── */}
      <div className="bg-amber-50 border-y border-amber-200 py-4" role="note" aria-label="Security notice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3">
          <Shield size={18} className="text-amber-600 shrink-0" aria-hidden="true" />
          <p className="text-amber-800 text-sm">
            <strong>Security Note:</strong> All links below point to official government or IRS-approved websites. Taxagon does not collect your credentials. Always verify you are on an official <code className="bg-amber-100 px-1 rounded text-xs">.gov</code> domain before logging in.
          </p>
        </div>
      </div>

      {/* ── RESOURCE CARDS ── */}
      <section className="py-20 bg-white" aria-label="Tax tools resources">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <SectionItem className="mb-10">
              <h2 className="text-2xl font-bold font-sora text-slate-900 mb-1">Federal Resources</h2>
              <p className="text-slate-500 text-sm">Direct links to IRS and official federal tax tools.</p>
            </SectionItem>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {TAX_TOOL_RESOURCES.filter(r => r.anchor !== 'state-payment' && r.anchor !== 'state-refund').map((resource, i) => {
                const Icon = ICON_MAP[resource.icon] || Search
                const isHighlighted = section && resource.anchor === section
                return (
                  <SectionItem key={resource.title}>
                    <motion.a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      id={resource.anchor}
                      className="flex flex-col gap-4 p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-deep/40 hover:shadow-card transition-all group h-full"
                      aria-label={`${resource.title} — opens official external site`}
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="w-11 h-11 rounded-xl bg-sky-tint group-hover:bg-indigo-deep flex items-center justify-center transition-colors">
                          <Icon size={18} className="text-indigo-deep group-hover:text-white transition-colors" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-semibold bg-green-success/10 text-green-success px-2 py-0.5 rounded-full">{resource.badge}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 group-hover:text-indigo-deep transition-colors mb-1.5">{resource.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{resource.description}</p>
                      </div>
                      <div className="flex items-center gap-1 text-indigo-deep text-xs font-semibold">
                        Visit Official Site <ExternalLink size={12} aria-hidden="true" />
                      </div>
                    </motion.a>
                  </SectionItem>
                )
              })}
            </div>

            {/* State resources */}
            <SectionItem className="mb-6">
              <h2 className="text-2xl font-bold font-sora text-slate-900 mb-1">State Resources</h2>
              <p className="text-slate-500 text-sm">Ohio, Pennsylvania, and all-state tax agency links.</p>
            </SectionItem>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {TAX_TOOL_RESOURCES.filter(r => r.anchor === 'state-payment' || r.anchor === 'state-refund').map((resource) => {
                const Icon = ICON_MAP[resource.icon] || MapPin
                return (
                  <SectionItem key={resource.title}>
                    <motion.a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="flex flex-col gap-4 p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-deep/40 hover:shadow-card transition-all group h-full"
                    >
                      <div className="flex items-start justify-between">
                        <div className="w-11 h-11 rounded-xl bg-sky-tint group-hover:bg-indigo-deep flex items-center justify-center transition-colors">
                          <Icon size={18} className="text-indigo-deep group-hover:text-white transition-colors" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-semibold bg-blue-electric/10 text-blue-electric px-2 py-0.5 rounded-full">{resource.badge}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 group-hover:text-indigo-deep transition-colors mb-1.5">{resource.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{resource.description}</p>
                      </div>
                      <div className="flex items-center gap-1 text-indigo-deep text-xs font-semibold">
                        Visit Official Site <ExternalLink size={12} aria-hidden="true" />
                      </div>
                    </motion.a>
                  </SectionItem>
                )
              })}

              {/* State finder CTA */}
              <SectionItem>
                <div className="p-6 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 hover:border-indigo-deep transition-colors flex flex-col gap-4 h-full">
                  <div className="w-11 h-11 rounded-xl bg-indigo-deep/10 flex items-center justify-center">
                    <Globe size={18} className="text-indigo-deep" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-1.5">Find Your State Tax Agency</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Search for your state's tax department for refund status and payment options.</p>
                  </div>
                  <a
                    href="https://www.taxadmin.org/state-tax-agencies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-indigo-deep text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-indigo-deep-dark transition-colors btn-shine"
                  >
                    Find State Tax Agency <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
              </SectionItem>
            </div>
          </Section>
        </div>
      </section>
    </div>
  )
}
