import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface Props { dark?: boolean }

export default function TestimonialCarousel({ dark = false }: Props) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const shouldReduce = useReducedMotion()
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrent(c => (c + 1) % TESTIMONIALS.length)
    }, 5000)
  }

  useEffect(() => {
    if (!shouldReduce) startAutoPlay()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [shouldReduce])

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (!shouldReduce) startAutoPlay()
  }

  const prev = () => go((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => go((current + 1) % TESTIMONIALS.length)

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 50 }),
    center: { opacity: 1, x: 0 },
    exit:  (d: number) => ({ opacity: 0, x: d * -50 }),
  }

  const t = TESTIMONIALS[current]

  return (
    <div className="relative max-w-2xl mx-auto select-none">
      <div className={cn(
        'rounded-4xl p-8 md:p-10 min-h-[220px]',
        dark
          ? 'bg-white/8 border border-white/12 backdrop-blur-sm'
          : 'bg-white border border-parchment-dark shadow-brand'
      )}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={shouldReduce ? {} : variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: 'easeOut' }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className={cn('fill-gold text-gold')} aria-hidden="true" />
              ))}
            </div>

            <blockquote className={cn(
              'text-base md:text-lg leading-relaxed mb-6 italic',
              dark ? 'text-slate-200' : 'text-slate-700'
            )}>
              "{t.content}"
            </blockquote>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold text-ink flex items-center justify-center font-bold text-sm font-sora shrink-0">
                {t.initials}
              </div>
              <div>
                <p className={cn('font-semibold text-sm', dark ? 'text-white' : 'text-slate-900')}>{t.name}</p>
                <p className={cn('text-xs mt-0.5', dark ? 'text-slate-400' : 'text-slate-500')}>{t.title}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className={cn(
            'w-9 h-9 rounded-full border flex items-center justify-center transition-colors',
            dark
              ? 'border-white/20 text-white/60 hover:bg-gold hover:border-gold hover:text-navy'
              : 'border-parchment-dark bg-white hover:bg-navy hover:border-navy hover:text-white text-slate-500'
          )}
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                i === current
                  ? 'bg-gold w-6'
                  : dark ? 'bg-white/25 hover:bg-white/40 w-2' : 'bg-slate-300 hover:bg-slate-400 w-2'
              )}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className={cn(
            'w-9 h-9 rounded-full border flex items-center justify-center transition-colors',
            dark
              ? 'border-white/20 text-white/60 hover:bg-gold hover:border-gold hover:text-navy'
              : 'border-parchment-dark bg-white hover:bg-navy hover:border-navy hover:text-white text-slate-500'
          )}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}
