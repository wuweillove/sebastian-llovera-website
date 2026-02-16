'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LetterRevealProps {
  text: string
  className?: string
  delay?: number
}

export function LetterReveal({ text, className, delay = 0 }: LetterRevealProps) {
  const letters = text.split('')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn('inline-block', className)}
      style={{ perspective: 1000 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ 
            transformOrigin: 'bottom',
            display: letter === ' ' ? 'inline' : 'inline-block',
            width: letter === ' ' ? '0.3em' : 'auto',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}