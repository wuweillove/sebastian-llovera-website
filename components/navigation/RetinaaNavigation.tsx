'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function RetinaaNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.95)']
  )
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      style={{ 
        backgroundColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
      className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-6 transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg shadow-background/20' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" data-cursor="hover">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl md:text-2xl font-bold tracking-tight"
          >
            Sebastian Llovera
          </motion.div>
        </Link>

        {/* Navigation Links - Retinaa Style */}
        <motion.div 
          className="flex items-center gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {[{ name: 'Work', href: '/work' }, { name: 'About', href: '/about' }].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              data-cursor="hover"
              className="relative group"
            >
              <motion.span
                whileHover={{ y: -2 }}
                className={`text-sm md:text-base tracking-tight transition-colors duration-300 ${
                  pathname === item.href ? 'text-foreground' : 'text-muted hover:text-foreground'
                }`}
              >
                {item.name}
              </motion.span>
              {pathname === item.href && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  )
}