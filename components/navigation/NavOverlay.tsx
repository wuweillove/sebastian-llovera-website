'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface NavOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { title: 'Home', href: '/', number: '01' },
  { title: 'Projects', href: '/projects', number: '02' },
  { title: 'About', href: '/about', number: '03' },
]

const socialLinks = [
  { title: 'GitHub', href: 'https://github.com' },
  { title: 'LinkedIn', href: 'https://linkedin.com' },
  { title: 'Twitter', href: 'https://twitter.com' },
  { title: 'Instagram', href: 'https://instagram.com' },
]

export function NavOverlay({ isOpen, onClose }: NavOverlayProps) {
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
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-2xl"
            onClick={onClose}
          />

          {/* Content */}
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 bg-gradient-to-br from-background via-background to-accent/5"
          >
            <div className="h-full flex flex-col items-center justify-center px-6 py-20 overflow-y-auto">
              {/* Main Menu Items */}
              <nav className="mb-16">
                <ul className="space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="magnetic cursor-link group flex items-center gap-8"
                      >
                        <motion.span
                          className="text-muted text-2xl font-light"
                          whileHover={{ x: 10, color: '#ff6b6b' }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.number}
                        </motion.span>
                        <motion.div
                          whileHover={{ x: 20 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="relative"
                        >
                          <span className="text-fluid-3xl md:text-[clamp(3rem,6vw,6rem)] font-bold text-center group-hover:text-accent transition-colors duration-300 block">
                            {item.title}
                          </span>
                          <motion.span
                            className="absolute bottom-0 left-0 h-1 bg-accent"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                          />
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="w-64 h-px bg-foreground/20 mb-12"
              />

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="grid grid-cols-2 md:flex gap-6 md:gap-12 mb-12"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                    whileHover={{ y: -5, color: '#ff6b6b' }}
                    className="magnetic cursor-link text-sm text-muted hover:text-foreground transition-colors duration-300 uppercase tracking-wider"
                  >
                    {link.title}
                  </motion.a>
                ))}
              </motion.div>

              {/* Contact Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-center"
              >
                <p className="text-xs text-muted uppercase tracking-widest mb-3">Get in touch</p>
                <motion.a
                  href="mailto:hello@sebastianllovera.com"
                  whileHover={{ scale: 1.05, color: '#ff6b6b' }}
                  className="magnetic cursor-link text-fluid-base md:text-xl text-foreground hover:text-accent transition-colors duration-300"
                >
                  hello@sebastianllovera.com
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}