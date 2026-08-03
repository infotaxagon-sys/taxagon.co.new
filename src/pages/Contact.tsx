import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, MapPin, Calendar, Upload, ExternalLink } from 'lucide-react'
import Section, { SectionItem } from '@/components/Section'
import { SITE } from '@/lib/constants'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void
    }
  }
}

function openCalendly() {
  window.Calendly?.initPopupWidget({
    url: 'https://calendly.com/taxagon-info/30min?hide_gdpr_banner=1',
  })
}

export default function Contact() {
  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="mesh-bg py-24 relative overflow-hidden" aria-label="Contact hero">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="hero-blob absolute top-[-10%] right-[0%] w-[400px] h-[400px] rounded-full bg-indigo-deep/8" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-bold tracking-widest text-indigo-deep uppercase mb-4">
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-sora text-slate-900 leading-tight mb-5"
          >
            Contact <em className="not-italic text-indigo-deep">Taxagon</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            Have a question about tax filing, planning, bookkeeping, business taxes, or cross-border compliance? Our team is here to help.
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="py-20 bg-white" aria-label="Contact details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section className="grid lg:grid-cols-3 gap-8">
            {/* Contact channels */}
            <SectionItem className="lg:col-span-1 space-y-4">
              <h2 className="text-xl font-bold font-sora text-slate-900 mb-5">Get in Touch</h2>
              {[
                { icon: Phone, label: 'Call Now', value: SITE.phone, href: `tel:${SITE.phone}`, color: 'bg-indigo-50 text-indigo-600' },
                { icon: Mail, label: 'Email Us', value: SITE.email, href: `mailto:${SITE.email}`, color: 'bg-green-50 text-green-600' },
                { icon: MessageCircle, label: 'WhatsApp', value: SITE.whatsapp, href: `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}`, color: 'bg-emerald-50 text-emerald-600' },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-indigo-deep/30 hover:shadow-card transition-all group"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color} shrink-0`}>
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm group-hover:text-indigo-deep transition-colors">{label}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{value}</p>
                  </div>
                </a>
              ))}
            </SectionItem>

            {/* Quick actions */}
            <SectionItem className="lg:col-span-1 space-y-4">
              <h2 className="text-xl font-bold font-sora text-slate-900 mb-5">Quick Actions</h2>
              <div className="p-6 bg-indigo-deep rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar size={20} aria-hidden="true" />
                  <h3 className="font-bold font-sora">Book a Consultation</h3>
                </div>
                <p className="text-indigo-100 text-sm mb-4">Schedule a free strategy session with our tax experts.</p>
                <button
                  onClick={openCalendly}
                  className="inline-flex items-center gap-2 bg-white text-indigo-deep font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-sky-tint transition-colors btn-shine"
                >
                  Schedule Now
                </button>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Upload size={20} className="text-indigo-deep" aria-hidden="true" />
                  <h3 className="font-bold font-sora text-slate-900">Upload Documents</h3>
                </div>
                <p className="text-slate-500 text-sm mb-4">Securely send your tax files to our team via our client portal.</p>
                <a
                  href={SITE.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-deep text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-indigo-deep-dark transition-colors btn-shine"
                >
                  Open Portal
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </div>
            </SectionItem>

            {/* Office card */}
            <SectionItem className="lg:col-span-1">
              <h2 className="text-xl font-bold font-sora text-slate-900 mb-5">Head Office</h2>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-4">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={18} className="text-indigo-deep" aria-hidden="true" />
                  <span className="font-semibold text-slate-900 text-sm">{SITE.office}</span>
                </div>
                <address className="not-italic text-slate-600 text-sm leading-relaxed">
                  555 Round Rock W Dr e225<br />
                  Round Rock, TX 78681<br />
                  Austin, Texas, USA
                </address>
              </div>
              {/* Animated map placeholder */}
              <div className="rounded-2xl overflow-hidden h-40 bg-gradient-to-br from-sky-tint to-indigo-deep/10 border border-slate-200 flex items-center justify-center relative">
                <div aria-hidden="true" className="absolute inset-0 opacity-30"
                  style={{ background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231E2C8C\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat' }}
                />
                <div className="text-center">
                  <MapPin size={28} className="text-indigo-deep mx-auto mb-2" aria-hidden="true" />
                  <p className="text-indigo-deep font-semibold text-sm">Round Rock, TX</p>
                </div>
              </div>
            </SectionItem>
          </Section>
        </div>
      </section>
    </div>
  )
}
