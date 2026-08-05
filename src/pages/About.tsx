import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, MapPin, ArrowRight, Target, Award } from 'lucide-react'
import Section, { SectionItem } from '@/components/Section'
import AnimatedCounter from '@/components/AnimatedCounter'
import { ABOUT_BENEFITS, SITE } from '@/lib/constants'

export default function About() {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative mesh-bg py-28 overflow-hidden" aria-label="About hero">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="hero-blob absolute top-[-10%] right-[0%] w-[450px] h-[450px] rounded-full bg-gold/15" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-bold tracking-widest text-gold uppercase mb-5">
            About Taxagon
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold font-sora text-ink leading-[1.08] mb-6"
          >
            Expert Tax Representation{' '}
            <em className="not-italic text-gold">You Can Trust</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Headquartered in Austin, Texas, Taxagon provides comprehensive tax compliance and strategic planning for{' '}
            <strong className="text-ink">
              <AnimatedCounter to={2500} suffix="+" /> clients
            </strong>{' '}
            across the United States and overseas.
          </motion.p>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="inline-flex flex-wrap items-center justify-center gap-6 bg-white/70 backdrop-blur border border-white/60 rounded-4xl px-8 py-5 shadow-sm"
          >
            {[
              { val: 2500, suf: '+', label: 'Clients Served' },
              { val: 98, suf: '%', label: 'Satisfaction Rate' },
              { val: 50, suf: '+', label: 'States Covered' },
            ].map(({ val, suf, label }) => (
              <div key={label} className="text-center px-3">
                <div className="text-2xl font-bold font-sora text-ink">
                  <AnimatedCounter to={val} suffix={suf} />
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MISSION BANNER ── */}
      <section className="bg-navy py-20 relative overflow-hidden" aria-label="Mission">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] rounded-full bg-gold/8" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-1 rounded-full bg-gold mx-auto mb-8" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-white mb-5 leading-tight">
              Build lasting legacies of wealth and opportunity
            </h2>
            <p className="text-indigo-100 leading-relaxed text-lg">
              At Taxagon, we're building products and services to help you invest not just in yourself but also in your communities — all towards building lasting legacies of wealth and opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-24 bg-white" aria-label="Benefits">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <SectionItem className="text-center mb-14">
              <p className="text-xs font-bold tracking-widest text-gold uppercase mb-4">What You Get</p>
              <h2 className="text-4xl font-bold font-sora text-ink">
                Benefits with <em className="not-italic text-gold">Taxagon</em>
              </h2>
            </SectionItem>
            <SectionItem>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {ABOUT_BENEFITS.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 p-4 bg-parchment rounded-3xl hover:bg-warm-tint transition-colors"
                  >
                    <CheckCircle2 size={17} className="text-green-success shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-700 text-sm leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </SectionItem>
          </Section>
        </div>
      </section>

      {/* ── OUR MISSION TWO-COL ── */}
      <section className="py-24 bg-parchment" aria-label="Our mission">
        <div className="max-w-5xl mx-auto px-6">
          <Section className="grid md:grid-cols-2 gap-14 items-start">
            <SectionItem>
              <p className="text-xs font-bold tracking-widest text-gold uppercase mb-4">Our Mission</p>
              <h2 className="text-3xl font-bold font-sora text-ink mb-5 leading-tight">
                Precision, Compliance, and Proactive Strategy
              </h2>
              <blockquote className="pull-quote">
                At Taxagon, we believe tax preparation is more than just data entry. It's about precision, compliance, and proactive strategy. Our team works year-round to ensure our clients understand their tax obligations while identifying opportunities for significant savings.
              </blockquote>
              <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                From first-time filers to high-net-worth individuals, from simple W-2 returns to complex multi-entity, cross-border, and crypto-heavy situations — we bring the same level of care to every engagement.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Target, label: 'Precision' },
                  { icon: Award, label: 'Excellence' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-white border border-parchment-dark rounded-2xl px-4 py-2.5 shadow-sm">
                    <Icon size={15} className="text-gold" aria-hidden="true" />
                    <span className="font-semibold text-ink text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </SectionItem>
            <SectionItem>
              <div className="bg-navy rounded-4xl p-8 text-white shadow-brand">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={15} className="text-gold" aria-hidden="true" />
                  <span className="text-slate-300 text-xs font-semibold tracking-widest uppercase">Head Office</span>
                </div>
                <h3 className="text-xl font-bold font-sora text-white mb-0.5">{SITE.city}</h3>
                <p className="text-gold text-sm font-semibold mb-5">{SITE.office}</p>
                <div className="bg-white/8 rounded-2xl p-5 space-y-2 mb-6">
                  <p className="text-slate-300 text-sm">555 Round Rock W Dr e225</p>
                  <p className="text-slate-300 text-sm">Round Rock, TX 78681, USA</p>
                  <div className="border-t border-white/10 pt-3 mt-3 space-y-2">
                    <p className="text-slate-400 text-sm">{SITE.phone}</p>
                    <p className="text-slate-400 text-sm">{SITE.email}</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-gold text-ink font-bold py-3.5 rounded-full hover:bg-gold-light transition-colors text-sm btn-shine"
                >
                  Contact Our Team
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </SectionItem>
          </Section>
        </div>
      </section>
    </div>
  )
}
