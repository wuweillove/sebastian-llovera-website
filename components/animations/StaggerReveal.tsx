'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface StaggerRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
}

export function StaggerReveal({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
}: StaggerRevealProps) {
  const childrenArray = Array.isArray(children) ? children : [children]

  return (
    <div className={cn(className)}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            delay: delay + index * staggerDelay,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}