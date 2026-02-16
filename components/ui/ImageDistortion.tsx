'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ImageDistortionProps {
  src: string
  alt: string
  className?: string
  objectFit?: 'cover' | 'contain'
}

export function ImageDistortion({
  src,
  alt,
  className,
  objectFit = 'cover',
}: ImageDistortionProps) {
  return (
    <motion.div
      className={cn('relative overflow-hidden', className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      data-cursor="image"
    >
      <motion.div
        className="relative w-full h-full"
        whileHover={{
          scale: 1.1,
        }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      >
        <motion.img
          src={src}
          alt={alt}
          className={cn(
            'w-full h-full',
            objectFit === 'cover' ? 'object-cover' : 'object-contain'
          )}
          style={{ willChange: 'transform, filter' }}
          whileHover={{
            filter: 'contrast(1.1) saturate(1.2)',
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Overlay gradient on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  )
}