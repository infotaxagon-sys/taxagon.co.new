import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  stagger?: number
  id?: string
  as?: 'section' | 'div' | 'article'
}

const container = (stagger: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: 0,
    },
  },
})

export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export default function Section({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  id,
  as: Tag = 'section',
}: SectionProps) {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return (
      <Tag id={id} className={cn('w-full', className)}>
        {children}
      </Tag>
    )
  }

  return (
    <Tag id={id}>
      <motion.div
        className={cn('w-full', className)}
        variants={container(stagger)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </Tag>
  )
}

export function SectionItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const shouldReduce = useReducedMotion()
  if (shouldReduce) return <div className={className}>{children}</div>
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}
