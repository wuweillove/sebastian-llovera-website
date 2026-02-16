'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  staggerDelay = 0.04,
  as = 'div',
}: AnimatedTextProps) {
  const words = text.split(' ')
  const Component = motion[as] as any

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: staggerDelay, 
        delayChildren: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    },
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
      y: 30,
      filter: 'blur(10px)',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  }

  return (
    <Component
      style={{ 
        overflow: 'hidden', 
        display: 'flex', 
        flexWrap: 'wrap',
        willChange: 'transform, opacity'
      }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn(className)}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ 
            marginRight: '0.3em',
            display: 'inline-block',
            willChange: 'transform, opacity'
          }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  )
}