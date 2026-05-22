import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  User, Mail, Phone, MapPin, ChevronRight, ChevronLeft,
  Building2, DollarSign, Globe, CheckCircle2, Briefcase,
  ArrowRight, Sparkles, TrendingUp, Bitcoin, Home as HomeIcon,
  FileText, Shield, Clock
} from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Schemas ────────────────────────────────────────────────────────────────

const step1Schema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  city: z.string().min(2, 'Please enter your city'),
  state: z.string().min(2, 'Please select a state'),
  referral: z.string().optional(),
})

const step2Schema = z.object({
  filingStatus: z.string().min(1, 'Please select your filing status'),
  incomeTypes: z.array(z.string()).min(1, 'Please select at least one income type'),
  businessType: z.string().optional(),
  hasForeignAccounts: z.string().min(1, 'Please select an option'),
  isNRI: z.string().min(1, 'Please select an option'),
  additionalNotes: z.string().optional(),
})

type Step1Data = z.infer<typeof step1Schema>
type Step2Data = z.infer<typeof step2Schema>

// ─── Constants ───────────────────────────────────────────────────────────────

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
  'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
  'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
  'Wisconsin','Wyoming',
]

const FILING_STATUSES = [
  { value: 'single', label: 'Single' },
  { value: 'married_joint', label: 'Married Filing Jointly' },
  { value: 'married_separate', label: 'Married Filing Separately' },
  { value: 'head_of_household', label: 'Head of Household' },
  { value: 'qualifying_widow', label: 'Qualifying Widow(er)' },
]

const INCOME_TYPES = [
  { value: 'w2', label: 'W-2 Employment', icon: Briefcase },
  { value: 'self_employed', label: 'Self-Employment / Freelance', icon: User },
  { value: 'business', label: 'Business Income', icon: Building2 },
  { value: 'rental', label: 'Rental Income', icon: HomeIcon },
  { value: 'investments', label: 'Investments / Capital Gains', icon: TrendingUp },
  { value: 'crypto', label: 'Cryptocurrency', icon: Bitcoin },
  { value: 'foreign', label: 'Foreign Income', icon: Globe },
  { value: 'retirement', label: 'Retirement / Pension / SSA', icon: Shield },
]

const BUSINESS_TYPES = [
  { value: 'sole_prop', label: 'Sole Proprietor (Schedule C)' },
  { value: 'partnership', label: 'Partnership (Form 1065)' },
  { value: 's_corp', label: 'S-Corporation (Form 1120S)' },
  { value: 'c_corp', label: 'C-Corporation (Form 1120)' },
  { value: 'llc', label: 'LLC (Single / Multi-Member)' },
]

const REFERRAL_OPTIONS = [
  'Google Search', 'Friend / Family Referral', 'LinkedIn', 'Facebook / Instagram',
  'Twitter / X', 'YouTube', 'Local Community', 'Other',
]

// ─── Step indicator ──────────────────────────────────────────────────────────

function StepIndicator({ current }: { current: number }) {
  const steps = [
    { num: 1, label: 'Personal Details' },
    { num: 2, label: 'Tax Profile' },
    { num: 3, label: 'Confirmation' },
  ]
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((step, i) => (
        <div key={step.num} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={cn(
              'w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300',
              current > step.num
                ? 'bg-green-success text-white'
                : current === step.num
                ? 'bg-navy text-white shadow-lg shadow-navy/30'
                : 'bg-parchment-dark text-slate-400'
            )}>
              {current > step.num ? <CheckCircle2 size={16} /> : step.num}
            </div>
            <span className={cn(
              'text-xs mt-1.5 font-medium whitespace-nowrap hidden sm:block',
              current === step.num ? 'text-navy' : 'text-slate-400'
            )}>
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={cn(
              'h-0.5 w-16 sm:w-24 mx-2 mb-5 sm:mb-0 transition-all duration-500',
              current > step.num + 1 ? 'bg-green-success' : current > step.num ? 'bg-navy/40' : 'bg-parchment-dark'
            )} />
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Field wrapper ────────────────────────────────────────────────────────────

function Field({ label, error, children, required }: {
  label: string; error?: string; children: React.ReactNode; required?: boolean
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label}{required && <span className="text-gold ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass = "w-full px-4 py-3 rounded-xl border border-parchment-dark bg-white text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
const selectClass = "w-full px-4 py-3 rounded-xl border border-parchment-dark bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all appearance-none cursor-pointer"

// ─── Step 1: Personal Details ─────────────────────────────────────────────────

function Step1({ onNext }: { onNext: (data: Step1Data) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
  })
  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="First Name" error={errors.firstName?.message} required>
          <div className="relative">
            <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input {...register('firstName')} placeholder="John" className={cn(inputClass, 'pl-10')} />
          </div>
        </Field>
        <Field label="Last Name" error={errors.lastName?.message} required>
          <div className="relative">
            <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input {...register('lastName')} placeholder="Doe" className={cn(inputClass, 'pl-10')} />
          </div>
        </Field>
      </div>

      <Field label="Email Address" error={errors.email?.message} required>
        <div className="relative">
          <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input {...register('email')} type="email" placeholder="john@example.com" className={cn(inputClass, 'pl-10')} />
        </div>
      </Field>

      <Field label="Phone Number" error={errors.phone?.message} required>
        <div className="relative">
          <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input {...register('phone')} type="tel" placeholder="+1 (555) 000-0000" className={cn(inputClass, 'pl-10')} />
        </div>
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="City" error={errors.city?.message} required>
          <div className="relative">
            <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input {...register('city')} placeholder="Austin" className={cn(inputClass, 'pl-10')} />
          </div>
        </Field>
        <Field label="State" error={errors.state?.message} required>
          <div className="relative">
            <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" aria-hidden="true" />
            <select {...register('state')} className={cn(selectClass, 'pl-10')}>
              <option value="">Select state</option>
              {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </Field>
      </div>

      <Field label="How did you hear about us?" error={errors.referral?.message}>
        <select {...register('referral')} className={selectClass}>
          <option value="">Select an option</option>
          {REFERRAL_OPTIONS.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </Field>

      <div className="pt-2">
        <button type="submit" className="w-full flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-bold py-4 rounded-xl transition-all btn-shine shadow-sm text-sm">
          Continue to Tax Profile
          <ChevronRight size={16} />
        </button>
      </div>
    </form>
  )
}

// ─── Step 2: Tax Profile ─────────────────────────────────────────────────────

function Step2({ onNext, onBack }: { onNext: (data: Step2Data) => void; onBack: () => void }) {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: { incomeTypes: [] },
  })

  const selectedIncomes = watch('incomeTypes') ?? []
  const hasBusinessIncome = selectedIncomes.includes('business') || selectedIncomes.includes('self_employed')

  const toggleIncome = (value: string) => {
    const current = selectedIncomes
    if (current.includes(value)) {
      setValue('incomeTypes', current.filter(v => v !== value), { shouldValidate: true })
    } else {
      setValue('incomeTypes', [...current, value], { shouldValidate: true })
    }
  }

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-7">

      {/* Filing Status */}
      <Field label="Filing Status" error={errors.filingStatus?.message} required>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1">
          {FILING_STATUSES.map(fs => {
            const checked = watch('filingStatus') === fs.value
            return (
              <label
                key={fs.value}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all text-sm font-medium',
                  checked
                    ? 'border-navy bg-navy/5 text-navy'
                    : 'border-parchment-dark bg-white text-slate-600 hover:border-navy/30'
                )}
              >
                <input type="radio" {...register('filingStatus')} value={fs.value} className="sr-only" />
                <span className={cn('w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all',
                  checked ? 'border-navy' : 'border-slate-300'
                )}>
                  {checked && <span className="w-2 h-2 rounded-full bg-navy block" />}
                </span>
                {fs.label}
              </label>
            )
          })}
        </div>
      </Field>

      {/* Income Types */}
      <div>
        <p className="text-sm font-semibold text-slate-700 mb-1.5">
          Income Sources <span className="text-gold">*</span>
          <span className="text-slate-400 font-normal ml-1">(select all that apply)</span>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
          {INCOME_TYPES.map(({ value, label, icon: Icon }) => {
            const checked = selectedIncomes.includes(value)
            return (
              <button
                key={value}
                type="button"
                onClick={() => toggleIncome(value)}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all text-sm font-medium text-left',
                  checked
                    ? 'border-navy bg-navy/5 text-navy'
                    : 'border-parchment-dark bg-white text-slate-600 hover:border-navy/30 hover:bg-parchment'
                )}
              >
                <div className={cn(
                  'w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all',
                  checked ? 'bg-navy text-white' : 'bg-parchment text-slate-400'
                )}>
                  <Icon size={13} aria-hidden="true" />
                </div>
                {label}
              </button>
            )
          })}
        </div>
        {errors.incomeTypes && (
          <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
            {errors.incomeTypes.message}
          </p>
        )}
      </div>

      {/* Business Type — conditionally shown */}
      <AnimatePresence>
        {hasBusinessIncome && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <Field label="Business Entity Type" error={errors.businessType?.message}>
              <div className="relative">
                <Building2 size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" aria-hidden="true" />
                <select {...register('businessType')} className={cn(selectClass, 'pl-10')}>
                  <option value="">Select entity type</option>
                  {BUSINESS_TYPES.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
                </select>
              </div>
            </Field>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Foreign Accounts */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Foreign bank accounts or assets?" error={errors.hasForeignAccounts?.message} required>
          <div className="flex gap-2.5">
            {['Yes', 'No'].map(opt => {
              const val = opt.toLowerCase()
              const checked = watch('hasForeignAccounts') === val
              return (
                <label key={opt} className={cn(
                  'flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 cursor-pointer text-sm font-semibold transition-all',
                  checked ? 'border-navy bg-navy text-white' : 'border-parchment-dark text-slate-600 hover:border-navy/30'
                )}>
                  <input type="radio" {...register('hasForeignAccounts')} value={val} className="sr-only" />
                  {opt}
                </label>
              )
            })}
          </div>
        </Field>

        <Field label="Are you an NRI / non-US resident?" error={errors.isNRI?.message} required>
          <div className="flex gap-2.5">
            {['Yes', 'No'].map(opt => {
              const val = opt.toLowerCase()
              const checked = watch('isNRI') === val
              return (
                <label key={opt} className={cn(
                  'flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 cursor-pointer text-sm font-semibold transition-all',
                  checked ? 'border-navy bg-navy text-white' : 'border-parchment-dark text-slate-600 hover:border-navy/30'
                )}>
                  <input type="radio" {...register('isNRI')} value={val} className="sr-only" />
                  {opt}
                </label>
              )
            })}
          </div>
        </Field>
      </div>

      {/* Notes */}
      <Field label="Anything else we should know?" error={errors.additionalNotes?.message}>
        <textarea
          {...register('additionalNotes')}
          rows={3}
          placeholder="Crypto transactions, multi-state filing, prior year amendments, FBAR requirements…"
          className={cn(inputClass, 'resize-none')}
        />
      </Field>

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-4 rounded-xl border-2 border-parchment-dark text-slate-600 hover:border-navy/30 hover:text-navy font-semibold transition-all text-sm"
        >
          <ChevronLeft size={16} />
          Back
        </button>
        <button
          type="submit"
          className="flex-1 flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-bold py-4 rounded-xl transition-all btn-shine shadow-sm text-sm"
        >
          Submit My Details
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  )
}

// ─── Step 3: Confirmation ─────────────────────────────────────────────────────

function Step3({ firstName }: { firstName: string }) {
  return (
    <div className="text-center py-4">
      {/* Animated checkmark ring */}
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 14, stiffness: 200, delay: 0.1 }}
        className="relative w-24 h-24 mx-auto mb-8"
      >
        <div className="absolute inset-0 rounded-full bg-green-success/15 animate-ping" style={{ animationDuration: '2s' }} />
        <div className="relative w-24 h-24 rounded-full bg-green-success flex items-center justify-center shadow-lg shadow-green-success/30">
          <CheckCircle2 size={40} className="text-white" aria-hidden="true" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold font-sora text-navy mb-3">
          Thank you, {firstName}! 🎉
        </h2>
        <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-md mx-auto">
          We've received your details. A member of the Taxagon team will review your profile and send you a{' '}
          <strong className="text-navy">Canopy Client Portal invite</strong>{' '}
          to your email within <strong className="text-navy">1–2 business days</strong>.
        </p>

        {/* What to expect */}
        <div className="bg-parchment rounded-3xl p-6 mb-8 text-left max-w-sm mx-auto">
          <p className="text-xs font-bold tracking-widest text-gold uppercase mb-4">What Happens Next</p>
          <ul className="space-y-3.5">
            {[
              { icon: Mail, text: 'Check your inbox for a Canopy portal invite' },
              { icon: FileText, text: 'Upload your tax documents securely through the portal' },
              { icon: Clock, text: 'Your dedicated CPA will review and reach out within 48 hrs' },
              { icon: DollarSign, text: 'Receive a custom quote and begin filing' },
            ].map(({ icon: Icon, text }, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-navy flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={13} className="text-white" aria-hidden="true" />
                </div>
                <span className="text-slate-600 text-sm leading-snug">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sparkle note */}
        <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mb-8">
          <Sparkles size={13} className="text-gold" aria-hidden="true" />
          <span>Your information is encrypted and protected with 256-bit SSL</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all btn-shine text-sm"
          >
            Back to Home
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center gap-2 border-2 border-navy/20 text-navy hover:bg-warm-tint font-semibold px-8 py-3.5 rounded-xl transition-all text-sm"
          >
            View Pricing
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

// ─── Slide variants ───────────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -48 : 48 }),
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function GetStarted() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null)

  const goTo = (next: number) => {
    setDirection(next > step ? 1 : -1)
    setStep(next)
  }

  const handleStep1 = (data: Step1Data) => {
    setStep1Data(data)
    goTo(2)
  }

  const handleStep2 = (_data: Step2Data) => {
    goTo(3)
  }

  return (
    <div className="min-h-screen bg-parchment">

      {/* ── Hero strip ── */}
      <div className="mesh-bg py-16 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="hero-blob absolute top-[-20%] right-[0%] w-[400px] h-[400px] rounded-full bg-gold/10" />
        </div>
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-bold tracking-widest text-gold uppercase mb-4"
          >
            Get Started
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-sora text-navy leading-tight mb-3"
          >
            Let's Build Your{' '}
            <em className="not-italic text-gold">Tax Strategy</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base"
          >
            Complete the 2-step form below and we'll onboard you to your personal Canopy client portal.
          </motion.p>
        </div>
      </div>

      {/* ── Form card ── */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-24 -mt-6 relative z-10">
        <div className="bg-white rounded-4xl shadow-brand border border-parchment-dark/60 p-8 sm:p-10">

          {step < 3 && <StepIndicator current={step} />}

          {/* Animated step content */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              {step === 1 && (
                <>
                  <div className="mb-7">
                    <h2 className="text-xl font-bold font-sora text-navy mb-1">Personal Details</h2>
                    <p className="text-slate-500 text-sm">Tell us about yourself so we can set up your account.</p>
                  </div>
                  <Step1 onNext={handleStep1} />
                </>
              )}

              {step === 2 && (
                <>
                  <div className="mb-7">
                    <h2 className="text-xl font-bold font-sora text-navy mb-1">Your Tax Profile</h2>
                    <p className="text-slate-500 text-sm">Help us understand your tax situation so we can match you with the right CPA.</p>
                  </div>
                  <Step2
                    onNext={handleStep2}
                    onBack={() => goTo(1)}
                  />
                </>
              )}

              {step === 3 && (
                <Step3 firstName={step1Data?.firstName ?? 'there'} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Trust badges */}
        {step < 3 && (
          <div className="flex flex-wrap items-center justify-center gap-5 mt-8 text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><Shield size={13} className="text-green-success" /> 256-bit SSL encrypted</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-green-success" /> IRS Registered firm</span>
            <span className="flex items-center gap-1.5"><Globe size={13} className="text-green-success" /> Data never sold</span>
          </div>
        )}
      </div>
    </div>
  )
}
