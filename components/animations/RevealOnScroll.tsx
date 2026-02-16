'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 50,
}: RevealOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0,
        y: 0,
      } : {}}
      transition={{ 
        delay, 
        duration: 0.7, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}