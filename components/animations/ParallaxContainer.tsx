'use client'

import { ReactNode, useRef, CSSProperties } from 'react'
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'

interface ParallaxContainerProps {
  children: ReactNode
  speed?: number
  className?: string
  style?: CSSProperties
  enableScale?: boolean
  enableRotate?: boolean
  enableOpacity?: boolean
}

export function ParallaxContainer({
  children,
  speed = 0.5,
  className = '',
  style = {},
  enableScale = false,
  enableRotate = false,
  enableOpacity = false,
}: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Smooth spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Transform values
  const y = useTransform(smoothProgress, [0, 1], [speed * 100, speed * -100])
  const scale = enableScale 
    ? useTransform(smoothProgress, [0, 0.5, 1], [0.98, 1.02, 0.98])
    : 1
  const rotate = enableRotate 
    ? useTransform(smoothProgress, [0, 1], [-2, 2])
    : 0
  const opacity = enableOpacity 
    ? useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5])
    : 1

  return (
    <motion.div
      ref={ref}
      style={{ 
        y, 
        scale, 
        rotate, 
        opacity,
        willChange: 'transform',
        ...style 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}