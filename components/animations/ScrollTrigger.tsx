'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ScrollTriggerProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function ScrollTrigger({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: ScrollTriggerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay, duration, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}