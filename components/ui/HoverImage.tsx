'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface HoverImageProps {
  src: string
  alt: string
  className?: string
}

export function HoverImage({ src, alt, className }: HoverImageProps) {
  return (
    <div className={cn('relative overflow-hidden rounded-2xl', className)} data-cursor="image">
      <motion.div
        className="relative w-full h-full"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          whileHover={{
            filter: 'contrast(1.1) saturate(1.2) brightness(1.05)',
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"
          initial={{ opacity: 0.4 }}
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.4 }}
        />

        {/* Accent overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-accent/10 mix-blend-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 border-2 border-accent/0 rounded-2xl"
          whileHover={{ borderColor: 'rgba(255, 107, 107, 0.3)' }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  )
}