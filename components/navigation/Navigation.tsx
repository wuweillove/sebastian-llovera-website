'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { NavOverlay } from './NavOverlay'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.8)']
  )
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
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
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          backgroundColor,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
        }}
        className={`fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 transition-all duration-300 ${
          isScrolled ? 'border-b border-foreground/10' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="magnetic cursor-link">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl md:text-2xl font-bold relative"
            >
              <span className="relative z-10">SL</span>
              <motion.span
                className="absolute inset-0 bg-accent/20 blur-xl -z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[{ name: 'Projects', href: '/projects' }, { name: 'About', href: '/about' }].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="magnetic cursor-link relative group"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="text-sm uppercase tracking-wider text-muted hover:text-foreground transition-colors duration-300"
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] bg-accent"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                  {pathname === item.href && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 h-[2px] w-full bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="magnetic cursor-button relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-full border border-foreground/20 hover:border-foreground/40 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 7 : 0,
                backgroundColor: isOpen ? '#ff6b6b' : '#fafafa',
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-5 h-0.5 rounded-full"
            />
            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
                scale: isOpen ? 0 : 1,
                backgroundColor: isOpen ? '#ff6b6b' : '#fafafa',
              }}
              transition={{ duration: 0.3 }}
              className="w-5 h-0.5 rounded-full"
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -7 : 0,
                backgroundColor: isOpen ? '#ff6b6b' : '#fafafa',
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-5 h-0.5 rounded-full"
            />
          </motion.button>
        </div>
      </motion.nav>

      <NavOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}