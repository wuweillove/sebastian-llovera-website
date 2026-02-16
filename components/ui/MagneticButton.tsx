'use client'

import { useRef, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  strength?: number
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * strength, y: y * strength })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const Component = href ? motion.a : motion.button
  const props = href ? { href } : { onClick, type: 'button' as const }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
      data-magnetic
    >
      <Component
        {...props}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'relative inline-flex items-center justify-center overflow-hidden',
          'px-8 py-4 rounded-full font-medium transition-all duration-300',
          'will-change-transform',
          className
        )}
        data-cursor="button"
      >
        <motion.span
          className="relative z-10"
          initial={{ opacity: 1 }}
          whileHover={{ letterSpacing: '0.05em' }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.span>
        
        {/* Hover background effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/0"
          initial={{ x: '-100%' }}
          whileHover={{ x: '0%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </Component>
    </div>
  )
}