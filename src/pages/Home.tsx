import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  motion, useReducedMotion, useScroll, useTransform,
  useMotionValue, useSpring, useInView, animate,
} from 'framer-motion'
import {
  ArrowRight, CheckCircle2, Star, ExternalLink, Shield, Globe, Lock,
  TrendingUp, UserCheck, FileText, Briefcase, Building2, Upload,
  ClipboardCheck, Send, Sparkles, BadgeCheck,
} from 'lucide-react'
import Section, { SectionItem } from '@/components/Section'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { SITE } from '@/lib/constants'

const easeOut = [0.16, 1, 0.3, 1] as const

/* ── What we do — dominant feature + supporting grid ── */
const CROSS_BORDER = {
  tag: 'Our specialty',
  title: 'Cross-border & NRI tax',
  desc: 'FBAR, FATCA, foreign income and Indian/NRI filings — handled by specialists who do this every day. The complexity most firms send away is our core.',
}

const CAPABILITIES = [
  { icon: UserCheck, title: 'Individuals & families', desc: 'W-2, multi-state, RSUs, crypto, rental income.' },
  { icon: Briefcase, title: 'Self-employed & 1099', desc: 'Freelancers, contractors, and side income.' },
  { icon: Building2, title: 'Business & entities', desc: 'LLCs, partnerships, S-corps and C-corps.' },
  { icon: FileText, title: 'Bookkeeping & CFO', desc: 'Clean books and outsourced CFO support, monthly.' },
  { icon: TrendingUp, title: 'Year-round planning', desc: 'Strategy beyond filing season, so you owe less.' },
]

const STEPS = [
  { n: '01', icon: Upload, title: 'Upload your documents', desc: 'Drop your W-2s, 1099s, and statements into the secure portal. Ten minutes, from your couch.' },
  { n: '02', icon: ClipboardCheck, title: 'A specialist reviews', desc: 'A licensed preparer builds your return, hunts every credit, and flags what you missed last year.' },
  { n: '03', icon: Send, title: 'Approve & we file', desc: 'You review a clear draft, ask questions, approve — we e-file federal and every state you owe.' },
]

const CHECKLIST = [
  { label: 'W-2 income', state: 'done' },
  { label: '1099-NEC · self-employment', state: 'done' },
  { label: 'Multi-state · TX · CA', state: 'done' },
  { label: 'FBAR · foreign accounts', state: 'review' },
]

const IMG = {
  team: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
}

const riseProps = (reduce: boolean | null, delay = 0) =>
  reduce
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: easeOut, delay },
      }

/* Count-up number that animates once when scrolled into view */
function CountUp({ value, prefix = '' }: { value: number; prefix?: string }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (reduce) { setDisplay(value); return }
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.2,
      ease: easeOut,
      onUpdate: v => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, reduce])

  return <span ref={ref}>{prefix}{display.toLocaleString('en-US')}</span>
}

/* ══════════ HERO ══════════ */
function HeroSection() {
  const reduce = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)

  // Scroll-linked parallax (decorative layers + display card only)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, 90])
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -70])
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -48])

  // Pointer-tilt on the return card (desktop, non-reduced-motion)
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const rotateX = useSpring(tiltX, { stiffness: 120, damping: 14 })
  const rotateY = useSpring(tiltY, { stiffness: 120, damping: 14 })

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    tiltY.set(px * 9)
    tiltX.set(-py * 9)
  }
  const resetTilt = () => { tiltX.set(0); tiltY.set(0) }

  return (
    <section ref={heroRef} className="relative mesh-bg overflow-hidden" aria-label="Hero">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <motion.div style={reduce ? undefined : { y: blobY1 }} className="hero-blob absolute -top-40 -right-24 w-[560px] h-[560px] rounded-full bg-navy/12" />
        <motion.div style={reduce ? undefined : { y: blobY2 }} className="hero-blob-2 absolute -bottom-40 -left-24 w-[460px] h-[460px] rounded-full bg-gold/18" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-start">

          {/* Left column — message */}
          <div className="max-w-3xl lg:max-w-none">

        {/* Badge */}
        <motion.div
          {...riseProps(reduce, 0)}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-navy/10 rounded-full px-3.5 py-1.5 text-xs font-semibold text-navy mb-7 shadow-sm"
        >
          <CheckCircle2 size={13} className="text-green-success" aria-hidden="true" />
          IRS-registered · Austin, TX · 2,500+ returns filed
        </motion.div>

        {/* Full-width headline */}
        <motion.h1
          {...riseProps(reduce, 0.08)}
          className="font-sora font-bold text-navy tracking-tight leading-[1.03] text-[clamp(2.5rem,6vw,4.5rem)] text-balance"
        >
          <span className="block">File with confidence.</span>
          <span className="relative inline-block mt-1">
            <span className="relative z-10">Save with strategy.</span>
            <motion.span
              aria-hidden="true"
              className="absolute left-0 right-0 bottom-1.5 h-3.5 md:h-5 bg-gold/45 rounded-sm -z-0 origin-left"
              initial={reduce ? {} : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.7, ease: easeOut }}
            />
          </span>
        </motion.h1>

            {/* Supporting */}
            <div className="max-w-xl mt-7 lg:mt-9">

            <motion.p
              {...riseProps(reduce, 0.16)}
              className="text-slate-600 text-lg leading-relaxed mb-9 max-w-lg text-pretty"
            >
              Expert-led tax filing, planning, and bookkeeping — from simple W-2 returns to
              multi-state, business, and cross-border FBAR/FATCA filings. Real preparers, not a chatbot.
            </motion.p>

            <motion.div {...riseProps(reduce, 0.24)} className="flex flex-col sm:flex-row gap-3.5">
              <Link
                to="/get-started"
                className="group inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-bold px-7 py-4 rounded-full transition-colors btn-shine shadow-brand"
              >
                Start your return
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-white border border-navy/15 hover:border-gold text-navy font-semibold px-7 py-4 rounded-full transition-colors shadow-sm"
              >
                See pricing
              </Link>
            </motion.div>

            {/* Trust / low-friction cues */}
            <motion.div {...riseProps(reduce, 0.3)} className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5"><Lock size={13} className="text-navy" aria-hidden="true" /> Bank-level 256-bit encryption</span>
              <span className="inline-flex items-center gap-1.5"><Shield size={13} className="text-navy" aria-hidden="true" /> No payment until you approve</span>
            </motion.div>

            {/* Social proof row */}
            <motion.div {...riseProps(reduce, 0.36)} className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-2.5" aria-hidden="true">
                {[
                  ['SR', 'bg-navy'], ['JM', 'bg-gold-dark'], ['AK', 'bg-navy-mid'], ['+', 'bg-slate-700'],
                ].map(([t, bg]) => (
                  <div key={t} className={`w-9 h-9 rounded-full ${bg} ring-2 ring-parchment flex items-center justify-center text-[11px] font-bold text-white`}>
                    {t}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} size={13} className="fill-gold text-gold" aria-hidden="true" />
                  ))}
                  <span className="text-navy font-bold text-sm ml-1">5.0</span>
                </div>
                <p className="text-slate-500 text-xs mt-0.5">Google-verified across 2,500+ clients</p>
              </div>
            </motion.div>
            </div>
          </div>

          {/* Right column — return-summary artifact (parallax + tilt) */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            style={reduce ? undefined : { y: cardY }}
            className="relative w-full max-w-sm mx-auto lg:mx-0 lg:mt-2 [perspective:1400px]"
          >
            <motion.div
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              style={reduce ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative rounded-[1.5rem] bg-white shadow-brand border border-navy/5 p-5 sm:p-6"
            >
              {/* Floating accent chip (pops forward in 3D) */}
              <motion.div
                initial={reduce ? {} : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.6 }}
                style={reduce ? undefined : { transform: 'translateZ(55px)' }}
                className="absolute -top-6 left-5 bg-navy text-white rounded-2xl shadow-brand px-4 py-2.5 flex items-center gap-2.5 max-w-[210px]"
              >
                <Sparkles size={16} className="text-gold shrink-0" aria-hidden="true" />
                <p className="text-xs leading-snug">Every credit checked — <span className="font-semibold">automatically</span></p>
              </motion.div>

              <div className="flex items-center justify-between mb-6" style={reduce ? undefined : { transform: 'translateZ(30px)' }}>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">2024 Return</p>
                  <p className="font-sora font-bold text-navy text-lg leading-tight">Federal + State</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark bg-gold/12 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-dark animate-pulse" /> In review
                </span>
              </div>

              {/* Refund figure */}
              <div className="rounded-2xl bg-parchment p-4 mb-4" style={reduce ? undefined : { transform: 'translateZ(24px)' }}>
                <p className="text-xs text-slate-500 mb-1">Estimated refund</p>
                <div className="flex items-end gap-2 flex-wrap">
                  <span className="font-sora font-bold text-navy text-3xl tracking-tight tabular-nums">
                    <CountUp value={4820} prefix="$" />
                  </span>
                  <span className="inline-flex items-center gap-1 text-green-success text-xs font-semibold mb-1.5">
                    <TrendingUp size={13} aria-hidden="true" /> +$1,240 vs. last year
                  </span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-navy/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-navy"
                    initial={reduce ? {} : { width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: easeOut, delay: 0.3 }}
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-2">Filing 85% complete</p>
              </div>

              {/* Checklist */}
              <ul className="space-y-2.5" style={reduce ? undefined : { transform: 'translateZ(16px)' }}>
                {CHECKLIST.map(item => (
                  <li key={item.label} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{item.label}</span>
                    {item.state === 'done' ? (
                      <span className="inline-flex items-center gap-1 text-green-success font-medium text-xs">
                        <CheckCircle2 size={14} aria-hidden="true" /> Verified
                      </span>
                    ) : (
                      <span className="text-gold-dark font-medium text-xs">Reviewing</span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2.5 mt-6 pt-5 border-t border-parchment-dark">
                <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center text-[11px] font-bold text-white">CP</div>
                <p className="text-xs text-slate-500">Reviewed by a <span className="font-semibold text-navy">licensed CPA</span></p>
                <BadgeCheck size={16} className="text-gold-dark ml-auto" aria-hidden="true" />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const reduce = useReducedMotion()

  return (
    <div className="overflow-x-hidden">

      <HeroSection />

      {/* ══════════ CREDENTIAL STRIP ══════════ */}
      <section className="bg-navy text-white/80 py-5" aria-label="Credentials">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
          {['IRS e-file authorized', 'FBAR & FATCA', 'All 50 states', 'LLC · S-Corp · 1120', 'ITIN / W-7', 'Year-round support'].map((c, i) => (
            <span key={c} className="inline-flex items-center gap-2">
              {i !== 0 && <span className="w-1 h-1 rounded-full bg-gold/70 hidden sm:inline-block" aria-hidden="true" />}
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ══════════ WHAT WE DO — bento ══════════ */}
      <section className="bg-parchment py-24" aria-label="What we do">
        <div className="max-w-7xl mx-auto px-6">
          <Section>
            <SectionItem className="max-w-2xl mb-14">
              <h2 className="font-sora font-bold text-navy text-4xl md:text-5xl leading-[1.08] tracking-tight text-balance">
                One team for every corner of your taxes
              </h2>
              <p className="text-slate-600 text-lg mt-5 leading-relaxed text-pretty">
                Most situations aren't simple — a side gig, a move across states, equity comp, an account overseas.
                We handle the messy parts other firms turn away.
              </p>
            </SectionItem>

            {/* Dominant feature banner */}
            <SectionItem>
              <div className="group relative overflow-hidden rounded-4xl bg-navy text-white shadow-brand mb-5">
                <div aria-hidden="true" className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-gold/15 blur-3xl" />
                <div aria-hidden="true" className="absolute -left-10 -bottom-24 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
                <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 p-8 sm:p-10 lg:p-12 items-center">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy bg-gold rounded-full px-3 py-1 mb-5">
                      {CROSS_BORDER.tag}
                    </span>
                    <h3 className="font-sora font-bold text-3xl sm:text-4xl mb-4 leading-[1.1] text-balance">{CROSS_BORDER.title}</h3>
                    <p className="text-white/70 leading-relaxed max-w-lg text-pretty">{CROSS_BORDER.desc}</p>
                    <Link
                      to="/services/fbar"
                      className="inline-flex items-center gap-1.5 text-gold font-semibold mt-7 hover:gap-2.5 transition-all"
                    >
                      Explore cross-border services <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                  <ul className="grid gap-2.5 lg:justify-self-end">
                    {['FBAR (FinCEN 114)', 'FATCA · Form 8938', 'Foreign income & credits', 'Indian / NRI filings', 'ITIN / W-7 support'].map(item => (
                      <li key={item} className="flex items-center gap-2.5 bg-white/8 border border-white/10 rounded-xl px-4 py-2.5 text-sm">
                        <CheckCircle2 size={15} className="text-gold shrink-0" aria-hidden="true" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionItem>

            {/* Supporting capabilities */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CAPABILITIES.map(cap => {
                const Icon = cap.icon
                return (
                  <SectionItem key={cap.title}>
                    <motion.div
                      whileHover={reduce ? {} : { y: -4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                      className="group h-full rounded-4xl bg-white border border-parchment-dark p-6 hover:border-gold/40 hover:shadow-card transition-colors"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-parchment group-hover:bg-navy flex items-center justify-center mb-4 transition-colors">
                        <Icon size={19} className="text-navy group-hover:text-white transition-colors" aria-hidden="true" />
                      </div>
                      <h3 className="font-sora font-bold text-navy mb-1.5">{cap.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
                    </motion.div>
                  </SectionItem>
                )
              })}
            </div>
          </Section>
        </div>
      </section>

      {/* ══════════ HOW IT WORKS ══════════ */}
      <section className="bg-white py-24 relative overflow-hidden" aria-label="How it works">
        <div className="max-w-7xl mx-auto px-6">
          <Section>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-12 lg:gap-16 items-start">
              <SectionItem className="md:sticky md:top-28">
                <p className="text-sm font-semibold text-gold-dark mb-3">How it works</p>
                <h2 className="font-sora font-bold text-navy text-4xl md:text-5xl leading-[1.08] tracking-tight text-balance">
                  From shoebox to filed in three steps
                </h2>
                <p className="text-slate-600 text-lg mt-5 leading-relaxed text-pretty">
                  No offices, no waiting rooms. Everything happens in a secure portal, on your schedule.
                </p>
                <Link
                  to="/get-started"
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors btn-shine shadow-brand mt-8"
                >
                  Get started <ArrowRight size={16} aria-hidden="true" />
                </Link>

                {/* Avg. turnaround stat — concrete proof, not decoration */}
                <div className="hidden md:flex items-center gap-5 mt-10 rounded-3xl bg-parchment border border-parchment-dark p-6">
                  <div className="font-sora font-bold text-navy text-5xl tracking-tight tabular-nums leading-none">
                    48<span className="text-2xl text-gold-dark">hrs</span>
                  </div>
                  <div className="border-l border-parchment-dark pl-5">
                    <p className="font-semibold text-navy text-sm">Average draft turnaround</p>
                    <p className="text-slate-500 text-sm mt-0.5">from upload to a return ready for your review</p>
                  </div>
                </div>
              </SectionItem>

              <div className="space-y-4">
                {STEPS.map(step => {
                  const Icon = step.icon
                  return (
                    <SectionItem key={step.n}>
                      <div className="group flex gap-5 sm:gap-6 rounded-3xl border border-parchment-dark p-6 sm:p-7 hover:border-navy/20 hover:bg-parchment/50 transition-colors">
                        <div className="shrink-0 flex flex-col items-center">
                          <span className="font-sora font-bold text-navy/25 text-2xl tabular-nums">{step.n}</span>
                          <div className="w-11 h-11 mt-3 rounded-2xl bg-navy group-hover:bg-gold flex items-center justify-center transition-colors">
                            <Icon size={19} className="text-white group-hover:text-navy transition-colors" aria-hidden="true" />
                          </div>
                        </div>
                        <div className="pt-1">
                          <h3 className="font-sora font-bold text-navy text-xl mb-2">{step.title}</h3>
                          <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </SectionItem>
                  )
                })}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ══════════ REAL PREPARERS ══════════ */}
      <section className="bg-parchment py-24" aria-label="Our team">
        <div className="max-w-7xl mx-auto px-6">
          <Section>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <SectionItem>
                <div className="relative rounded-4xl overflow-hidden shadow-brand aspect-[4/3]">
                  <img
                    src={IMG.team}
                    alt="Taxagon preparers reviewing returns together at the Austin office"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-white/90 backdrop-blur rounded-2xl px-4 py-3 shadow-card">
                    <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
                      <BadgeCheck size={20} className="text-gold" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-sora font-bold text-navy leading-tight text-sm">Licensed CPAs & EAs</p>
                      <p className="text-xs text-slate-500">on every return</p>
                    </div>
                  </div>
                </div>
              </SectionItem>

              <SectionItem>
                <h2 className="font-sora font-bold text-navy text-4xl md:text-5xl leading-[1.08] tracking-tight text-balance">
                  Real preparers behind every return
                </h2>
                <p className="text-slate-600 text-lg mt-5 leading-relaxed text-pretty">
                  You're not filing alone, and you're not talking to a bot. A licensed professional builds
                  your return, answers your questions, and stands behind the numbers if the IRS ever asks.
                </p>
                <ul className="mt-8 space-y-3.5">
                  {[
                    'Licensed CPAs and Enrolled Agents',
                    'Cross-border & NRI specialists on staff',
                    'Year-round support — not just in April',
                  ].map(point => (
                    <li key={point} className="flex items-center gap-3 text-slate-700">
                      <span className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={15} className="text-gold-dark" aria-hidden="true" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-navy font-semibold mt-8 hover:text-gold-dark transition-colors"
                >
                  Meet the team <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </SectionItem>
            </div>
          </Section>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="bg-navy py-24 relative overflow-hidden" aria-label="Testimonials">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-gold/8 blur-3xl" />
          <div className="absolute -bottom-24 left-0 w-[320px] h-[320px] rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <Section>
            <SectionItem className="text-center mb-12">
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={14} className="fill-gold text-gold" aria-hidden="true" />
                ))}
                <span className="text-white font-bold text-sm ml-1">5.0</span>
                <span className="text-white/60 text-sm">· Google Verified</span>
              </div>
              <h2 className="font-sora font-bold text-white text-3xl md:text-4xl leading-tight text-balance">
                Clients who stopped dreading tax season
              </h2>
            </SectionItem>
            <SectionItem>
              <TestimonialCarousel dark />
            </SectionItem>
            <SectionItem className="text-center mt-10">
              <a
                href="https://www.google.com/search?q=Taxagon+Austin+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gold font-semibold hover:gap-2.5 transition-all text-sm"
              >
                Read all verified reviews <ArrowRight size={14} aria-hidden="true" />
              </a>
            </SectionItem>
          </Section>
        </div>
      </section>

      {/* ══════════ IRS RESOURCES ══════════ */}
      <section className="bg-parchment py-24" aria-label="Online resources">
        <div className="max-w-7xl mx-auto px-6">
          <Section>
            <SectionItem className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <h2 className="font-sora font-bold text-navy text-3xl md:text-4xl leading-tight tracking-tight max-w-md text-balance">
                Official tax tools, one click away
              </h2>
              <Link
                to="/tax-tools"
                className="inline-flex items-center gap-1.5 text-navy font-semibold hover:text-gold-dark transition-colors"
              >
                Full tax tools center <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </SectionItem>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: TrendingUp, title: 'Federal refund status', desc: "Track your federal refund on the IRS's official portal.", href: 'https://www.irs.gov/refunds', badge: 'IRS Official' },
                { icon: Globe, title: 'State portal links', desc: 'Find your state agency for refunds and payments.', href: 'https://www.taxadmin.org/state-tax-agencies', badge: 'All States' },
                { icon: Lock, title: 'IRS Direct Pay', desc: 'Pay federal taxes from your bank — no fees, no card.', href: 'https://www.irs.gov/payments/direct-pay', badge: 'Secure & Free' },
              ].map(({ icon: Icon, title, desc, href, badge }) => (
                <SectionItem key={title}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col gap-4 p-6 bg-white rounded-4xl border border-parchment-dark hover:border-gold/40 hover:shadow-card transition-colors group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-parchment group-hover:bg-navy flex items-center justify-center transition-colors">
                        <Icon size={18} className="text-navy group-hover:text-white transition-colors" aria-hidden="true" />
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs bg-green-success/10 text-green-success font-semibold px-2.5 py-0.5 rounded-full">
                        <Shield size={11} aria-hidden="true" /> {badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-sora font-bold text-navy mb-1.5 group-hover:text-gold-dark transition-colors flex items-center gap-1.5">
                        {title} <ExternalLink size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </a>
                </SectionItem>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-white py-24" aria-label="Call to action">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-16 sm:px-16 sm:py-20 text-center shadow-brand">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -right-10 w-[360px] h-[360px] rounded-full bg-gold/15 blur-3xl" />
              <div className="absolute -bottom-24 -left-10 w-[320px] h-[320px] rounded-full bg-white/5 blur-3xl" />
            </div>
            <Section className="relative">
              <SectionItem>
                <h2 className="font-sora font-bold text-white text-4xl md:text-5xl leading-[1.08] tracking-tight max-w-2xl mx-auto text-balance">
                  Ready to keep more of what you earn?
                </h2>
                <p className="text-white/70 text-lg mt-5 mb-10 max-w-xl mx-auto leading-relaxed text-pretty">
                  Join 6,500+ people who trust Taxagon — from a first 1040 to complex cross-border filings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/get-started"
                    className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold px-9 py-4 rounded-full transition-colors btn-shine"
                  >
                    Start your return <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-gold text-white hover:text-gold font-semibold px-9 py-4 rounded-full transition-colors"
                  >
                    View pricing
                  </Link>
                </div>
              </SectionItem>
            </Section>
          </div>
        </div>
      </section>

      {/* ══════════ NEWSLETTER ══════════ */}
      <section className="py-20 bg-parchment border-t border-parchment-dark" aria-label="Newsletter">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="font-sora font-bold text-navy text-2xl md:text-3xl mb-2">Stay ahead of tax season</h2>
            <p className="text-slate-500 leading-relaxed">Deadline reminders and savings strategies — a few times a year, never spam.</p>
          </div>
          <form
            className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
            onSubmit={e => { e.preventDefault(); alert('Thanks for subscribing!') }}
            aria-label="Newsletter subscription"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Email for newsletter"
              className="flex-1 md:w-72 border border-parchment-dark rounded-full px-5 py-3.5 text-sm bg-white focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-colors"
            />
            <button
              type="submit"
              className="bg-navy hover:bg-navy-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors btn-shine whitespace-nowrap text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ══════════ CLIENT PORTAL ══════════ */}
      <section className="py-8 bg-navy/5 border-t border-parchment-dark" aria-label="Client portal">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Lock size={16} className="text-navy" aria-hidden="true" />
            <p className="text-slate-600 text-sm">Existing client? Access your documents and returns.</p>
          </div>
          <a
            href={SITE.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-bold text-sm px-6 py-2.5 rounded-full transition-colors btn-shine"
          >
            Open client portal <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>
      </section>

    </div>
  )
}
