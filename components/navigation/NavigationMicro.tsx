'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface NavOverlayProps {
  isOpen: boolean
  onClose: () => void
}

function NavOverlay({ isOpen, onClose }: NavOverlayProps) {
  const menuItems = [
    { title: 'Home', href: '/', number: '01' },
    { title: 'Work', href: '/work', number: '02' },
    { title: 'About', href: '/about', number: '03' },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: 'circle(0% at 100% 0%)' }}
          animate={{ clipPath: 'circle(150% at 100% 0%)' }}
          exit={{ clipPath: 'circle(0% at 100% 0%)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[90] bg-gradient-to-br from-accent via-accent/95 to-background"
          onClick={onClose}
        >
          <div className="h-full flex flex-col items-center justify-center px-6">
            <nav className="mb-16">
              <ul className="space-y-8">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                    transition={{ 
                      delay: 0.3 + index * 0.1, 
                      duration: 0.6,
                      ease: [0.33, 1, 0.68, 1]
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        e.stopPropagation()
                        onClose()
                      }}
                      data-cursor="hover"
                      className="group flex items-center gap-8"
                    >
                      <motion.span
                        className="text-background/50 text-3xl font-light"
                        whileHover={{ x: 10, color: 'rgba(10, 10, 10, 1)' }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.number}
                      </motion.span>
                      <div className="relative">
                        <motion.span
                          whileHover={{ x: 20 }}
                          transition={{ duration: 0.3 }}
                          className="text-fluid-3xl md:text-[clamp(3rem,6vw,6rem)] font-bold text-background block"
                        >
                          {item.title}
                        </motion.span>
                        <motion.span
                          className="absolute bottom-0 left-0 h-1 bg-background"
                          initial={{ width: 0 }}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                        />
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="text-background/70 text-sm uppercase tracking-[0.2em]"
            >
              hello@sebastianllovera.com
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function NavigationMicro() {
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
        className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-6 transition-shadow duration-300 ${
          isScrolled ? 'shadow-lg shadow-background/20' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" data-cursor="hover">
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="text-2xl font-bold tracking-tight relative group"
            >
              <span className="relative z-10">SL</span>
              <motion.span
                className="absolute inset-0 bg-accent/20 blur-xl -z-10 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center gap-8"
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
                  className="text-sm uppercase tracking-[0.15em] text-muted group-hover:text-foreground transition-colors duration-300"
                >
                  {item.name}
                </motion.span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-accent"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                />
              </Link>
            ))}
          </motion.div>

          {/* Hamburger menu */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor="button"
            className="relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-full border border-foreground/10 hover:border-foreground/30 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 7 : 0,
                scaleX: isOpen ? 1 : 0.7,
              }}
              transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="w-6 h-[2px] bg-foreground origin-center"
            />
            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
                scaleX: isOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="w-6 h-[2px] bg-foreground"
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -7 : 0,
                scaleX: isOpen ? 1 : 0.7,
              }}
              transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="w-6 h-[2px] bg-foreground origin-center"
            />
          </motion.button>
        </div>
      </motion.nav>

      <NavOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}