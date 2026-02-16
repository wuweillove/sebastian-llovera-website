'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedLinkProps {
  href: string
  children: ReactNode
  className?: string
  underline?: boolean
}

export function AnimatedLink({
  href,
  children,
  className,
  underline = true,
}: AnimatedLinkProps) {
  return (
    <Link href={href} className={cn('relative inline-block group', className)}>
      <motion.span
        className="relative z-10"
        whileHover={{ letterSpacing: '0.02em' }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
      
      {underline && (
        <motion.span
          className="absolute bottom-0 left-0 h-[2px] bg-current"
          initial={{ width: '0%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        />
      )}
    </Link>
  )
}