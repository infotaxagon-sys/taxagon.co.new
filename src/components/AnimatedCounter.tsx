import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

interface AnimatedCounterProps {
  from?: number
  to: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({
  from = 0,
  to,
  suffix = '',
  prefix = '',
  duration = 1.5,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(from)
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  })
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(from)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    if (isInView) {
      if (shouldReduce) {
        setDisplay(to)
      } else {
        motionValue.set(to)
      }
    }
  }, [isInView, motionValue, to, shouldReduce])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (v) => {
      setDisplay(Math.round(v))
    })
    return unsubscribe
  }, [springValue])

  return (
    <span ref={ref} className={className}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  )
}
