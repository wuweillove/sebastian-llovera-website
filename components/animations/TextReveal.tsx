'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ 
          delay, 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}