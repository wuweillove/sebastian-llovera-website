'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { NavOverlay } from './NavOverlay'
import { usePathname } from 'next/navigation'
import { AnimatedLink } from '@/components/ui/AnimatedLink'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
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

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        style={{ 
          backgroundColor,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
        }}
        className={`fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 transition-shadow duration-300 ${
          isScrolled ? 'shadow-lg shadow-background/20' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" data-magnetic>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold tracking-tight cursor-pointer"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                SL
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {[{ name: 'Work', href: '/projects' }, { name: 'About', href: '/about' }].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              >
                <AnimatedLink
                  href={item.href}
                  className="text-sm uppercase tracking-wider text-muted hover:text-foreground transition-colors"
                >
                  {item.name}
                </AnimatedLink>
              </motion.div>
            ))}
          </motion.div>

          {/* Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Toggle menu"
            data-magnetic
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 7 : 0,
                scaleX: isOpen ? 1 : 0.7,
              }}
              transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="w-6 h-[2px] bg-foreground origin-center group-hover:w-6 transition-all"
            />
            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
                scaleX: isOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="w-6 h-[2px] bg-foreground"
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -7 : 0,
                scaleX: isOpen ? 1 : 0.7,
              }}
              transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="w-6 h-[2px] bg-foreground origin-center group-hover:w-6 transition-all"
            />
          </motion.button>
        </div>
      </motion.nav>

      <NavOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}