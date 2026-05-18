import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Star, ExternalLink, Shield, Zap, Users, Globe, Lock, TrendingUp, UserCheck, FileText, Briefcase } from 'lucide-react'
import Section, { SectionItem } from '@/components/Section'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { HOME_FEATURES, SITE } from '@/lib/constants'

const ICON_MAP: Record<string, React.ElementType> = {
  'user-check': UserCheck,
  'file-text': FileText,
  'briefcase': Briefcase,
  'globe': Globe,
  'shield-check': Shield,
  'trending-up': TrendingUp,
}

const HEADLINE_WORDS = ['Smart', 'Tax', 'Plan,', 'Filing,']
const HEADLINE_ACCENT = ['Planning', '& Account', 'Support']

export default function Home() {
  const shouldReduce = useReducedMotion()

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO (editorial centered) ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center mesh-bg overflow-hidden" aria-label="Hero">
        {/* Background blobs */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="hero-blob absolute top-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full bg-navy/10" />
          <div className="hero-blob-2 absolute bottom-[0%] left-[-8%] w-[500px] h-[500px] rounded-full bg-gold/15" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-navy/10 rounded-full px-4 py-1.5 text-xs font-semibold text-navy mb-8 shadow-sm"
          >
            <CheckCircle2 size={13} className="text-green-success" aria-hidden="true" />
            IRS Registered · Austin, Texas · 6,500+ clients served
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sora leading-[1.06] text-navy mb-8 tracking-tight">
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4"
                initial={shouldReduce ? {} : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            {HEADLINE_ACCENT.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4 text-gold italic"
                initial={shouldReduce ? {} : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + (HEADLINE_WORDS.length + i) * 0.08, duration: 0.5, ease: 'easeOut' }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-slate-600 text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Taxagon helps individuals, families, self-employed professionals, and businesses file accurately, stay compliant, and plan ahead for savings.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-bold px-8 py-4 rounded-full transition-all btn-shine shadow-brand text-base"
            >
              Get Started Today
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-navy/15 hover:border-gold hover:text-navy text-slate-700 font-semibold px-8 py-4 rounded-full transition-all text-base shadow-sm"
            >
              View All Pricing
            </Link>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="inline-flex flex-wrap items-center justify-center gap-6 bg-white/70 backdrop-blur border border-white/60 rounded-3xl px-8 py-4 shadow-sm"
          >
            {[['6,500+', 'Clients Served'], ['98%', 'Satisfaction Rate'], ['15+', 'Years Experience'], ['50+', 'States Covered']].map(([num, label]) => (
              <div key={label} className="text-center px-2">
                <div className="text-xl font-bold font-sora text-navy">{num}</div>
                <div className="text-xs text-slate-500 mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── EDITORIAL INTRO ── */}
      <section className="bg-parchment py-24" aria-label="About Taxagon">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Section>
            <SectionItem>
              <p className="text-xs font-bold tracking-widest text-gold uppercase mb-5">Why Taxagon</p>
              <h2 className="text-4xl md:text-5xl font-bold font-sora text-navy leading-tight mb-6">
                Your tax situation deserves more than{' '}
                <em className="not-italic text-gold">basic filing</em>
              </h2>
              <blockquote className="pull-quote text-left">
                Whether you're a W-2 employee, freelancer with 1099s, multi-state remote worker, rental property owner, RSU holder, crypto trader, small business, or navigating FBAR/FATCA cross-border obligations — Taxagon delivers expert-driven tax support tailored exactly to you.
              </blockquote>
              <Link
                to="/services/individual"
                className="inline-flex items-center gap-1.5 text-navy font-semibold hover:text-gold transition-colors text-sm mt-2"
              >
                Explore all services <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </SectionItem>
          </Section>
        </div>
      </section>

      {/* ── FEATURES (editorial 2-col) ── */}
      <section className="bg-white py-24" aria-label="Features">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <SectionItem className="text-center mb-16">
              <p className="text-xs font-bold tracking-widest text-gold uppercase mb-4">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-bold font-sora text-navy">
                Everything you need, in one place
              </h2>
            </SectionItem>
            <div className="grid md:grid-cols-2 gap-6">
              {HOME_FEATURES.map((feature, i) => {
                const Icon = ICON_MAP[feature.icon] || Shield
                return (
                  <SectionItem key={feature.title}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.015 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                      className="flex gap-5 p-7 bg-parchment rounded-4xl border border-parchment-dark hover:border-gold/30 hover:shadow-brand transition-all group"
                    >
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        className="w-12 h-12 rounded-2xl bg-navy flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors"
                      >
                        <Icon size={20} className="text-white" aria-hidden="true" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-navy font-sora mb-1.5 group-hover:text-gold transition-colors">{feature.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  </SectionItem>
                )
              })}
            </div>
          </Section>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-navy py-24 relative overflow-hidden" aria-label="Testimonials">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-gold/8" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-white/4" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <Section>
            <SectionItem className="text-center mb-12">
              <p className="text-xs font-bold tracking-widest text-gold uppercase mb-4">Client Testimonials</p>
              <h2 className="text-3xl md:text-4xl font-bold font-sora text-white mb-5">
                What our clients say about{' '}
                <em className="not-italic text-gold">Taxagon</em>
              </h2>
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={14} className="fill-gold text-gold" aria-hidden="true" />
                ))}
                <span className="text-white font-bold text-sm ml-1">5.0</span>
                <span className="text-white/60 text-sm">· Google Verified</span>
              </div>
            </SectionItem>
            <SectionItem>
              <TestimonialCarousel dark />
            </SectionItem>
            <SectionItem className="text-center mt-8">
              <a
                href="https://www.google.com/search?q=Taxagon+Austin+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gold font-semibold hover:underline text-sm"
              >
                Read all verified reviews on Google
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </SectionItem>
          </Section>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 bg-parchment" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Section>
            <SectionItem>
              <div className="w-16 h-16 rounded-3xl bg-navy mx-auto mb-8 flex items-center justify-center shadow-brand">
                <span className="text-white font-bold text-2xl font-sora">T</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-sora text-navy mb-5 leading-tight">
                Ready to optimize your taxes?
              </h2>
              <p className="text-slate-500 mb-10 text-lg leading-relaxed max-w-xl mx-auto">
                Join 6,500+ clients who trust Taxagon for accurate, expert-driven tax support — from simple returns to complex cross-border filings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-navy text-white font-bold px-9 py-4 rounded-full hover:bg-navy-dark transition-all btn-shine shadow-brand text-base"
                >
                  Get Started Today
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 border-2 border-navy/20 hover:border-gold text-navy font-bold px-9 py-4 rounded-full transition-all text-base"
                >
                  View Pricing
                </Link>
              </div>
            </SectionItem>
          </Section>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-20 bg-white border-t border-parchment-dark" aria-label="Newsletter">
        <div className="max-w-3xl mx-auto px-6">
          <Section>
            <SectionItem className="text-center mb-8">
              <h2 className="text-3xl font-bold font-sora text-navy mb-3">Stay ahead of tax season</h2>
              <p className="text-slate-500 leading-relaxed">
                Expert tips, deadline reminders, and savings strategies — delivered to your inbox.
              </p>
            </SectionItem>
            <SectionItem>
              <form
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                onSubmit={e => { e.preventDefault(); alert('Thanks for subscribing!') }}
                aria-label="Newsletter subscription"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  aria-label="Email for newsletter"
                  className="flex-1 border border-parchment-dark rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors bg-parchment"
                />
                <button
                  type="submit"
                  className="bg-navy hover:bg-navy-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors btn-shine whitespace-nowrap text-sm"
                >
                  Subscribe
                </button>
              </form>
            </SectionItem>
          </Section>
        </div>
      </section>

      {/* ── ONLINE RESOURCES ── */}
      <section className="py-24 bg-parchment" aria-label="Online resources">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <SectionItem className="text-center mb-14">
              <p className="text-xs font-bold tracking-widest text-gold uppercase mb-4">Online Resources</p>
              <h2 className="text-3xl md:text-4xl font-bold font-sora text-navy">
                Fast access to official tax tools
              </h2>
            </SectionItem>
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {[
                {
                  icon: TrendingUp,
                  title: 'Federal Refund Status',
                  desc: "Check where your federal refund is directly on the IRS's official portal.",
                  href: 'https://www.irs.gov/refunds',
                  badge: 'IRS Official',
                },
                {
                  icon: Globe,
                  title: 'State Portal Links',
                  desc: 'Find your state tax agency for refund tracking and payment options.',
                  href: 'https://www.taxadmin.org/state-tax-agencies',
                  badge: 'All States',
                },
                {
                  icon: Lock,
                  title: 'IRS Direct Pay',
                  desc: 'Make secure federal tax payments directly — no fees, no card required.',
                  href: 'https://www.irs.gov/payments/direct-pay',
                  badge: 'Secure & Free',
                },
              ].map(({ icon: Icon, title, desc, href, badge }) => (
                <SectionItem key={title}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-4 p-6 bg-white rounded-4xl border border-parchment-dark hover:border-gold/40 hover:shadow-brand transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-parchment group-hover:bg-navy flex items-center justify-center transition-colors">
                        <Icon size={18} className="text-navy group-hover:text-white transition-colors" aria-hidden="true" />
                      </div>
                      <span className="text-xs bg-green-success/10 text-green-success font-semibold px-2 py-0.5 rounded-full">{badge}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-1.5 group-hover:text-gold transition-colors">{title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </a>
                </SectionItem>
              ))}
            </div>
            <SectionItem className="text-center">
              <Link
                to="/tax-tools"
                className="inline-flex items-center gap-1.5 text-navy font-semibold hover:text-gold transition-colors"
              >
                View Full Tax Tools Center
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </SectionItem>
          </Section>
        </div>
      </section>

      {/* ── CLIENT PORTAL STRIP ── */}
      <section className="py-10 bg-navy/5 border-t border-parchment-dark" aria-label="Client portal">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Lock size={16} className="text-navy" aria-hidden="true" />
            <p className="text-slate-600 text-sm">Existing client? Access your documents and returns.</p>
          </div>
          <a
            href={SITE.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all btn-shine"
          >
            Open Client Portal
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>
      </section>

    </div>
  )
}
