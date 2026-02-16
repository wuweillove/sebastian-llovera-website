'use client'

import { ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
  scale?: boolean
  rotate?: boolean
  opacity?: boolean
}

export function ParallaxSection({
  children,
  speed = 0.5,
  className = '',
  scale = false,
  rotate = false,
  opacity = false,
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const y = useTransform(smoothProgress, [0, 1], [speed * 100, speed * -100])
  const scaleValue = scale ? useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]) : 1
  const rotateValue = rotate ? useTransform(smoothProgress, [0, 1], [-5, 5]) : 0
  const opacityValue = opacity ? useTransform(smoothProgress, [0, 0.5, 1], [0.5, 1, 0.5]) : 1

  return (
    <motion.div
      ref={ref}
      style={{ y, scale: scaleValue, rotate: rotateValue, opacity: opacityValue }}
      className={className}
    >
      {children}
    </motion.div>
  )
}