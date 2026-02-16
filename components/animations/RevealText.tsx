'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  type?: 'word' | 'line' | 'char'
}

export function RevealText({
  text,
  className,
  delay = 0,
  duration = 0.05,
  type = 'word',
}: RevealTextProps) {
  const items = type === 'char' ? text.split('') : text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={cn('overflow-hidden', className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="flex flex-wrap">
        {items.map((item, index) => (
          <motion.span
            variants={child}
            key={index}
            className="inline-block"
            style={{ marginRight: type === 'char' ? '0' : '0.3em' }}
          >
            {item}{type === 'char' ? '' : ' '}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}