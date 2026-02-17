'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function MinimalNavigation() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.98)']
  )

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-[100] px-8 md:px-16 py-6 md:py-8 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between max-w-[1800px] mx-auto">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ letterSpacing: '0.05em' }}
            transition={{ duration: 0.3 }}
            className="text-base md:text-lg font-light tracking-tight text-neutral-100"
          >
            Sebastian Llovera
          </motion.div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 md:gap-12">
          {[{ name: 'Work', href: '/work' }, { name: 'About', href: '/about' }].map(item => (
            <Link key={item.name} href={item.href} className="relative group">
              <motion.span
                className={`text-sm md:text-base font-light tracking-tight transition-colors duration-300 ${
                  pathname === item.href ? 'text-neutral-100' : 'text-neutral-500 group-hover:text-neutral-300'
                }`}
              >
                {item.name}
              </motion.span>
              {pathname === item.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-neutral-400"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}