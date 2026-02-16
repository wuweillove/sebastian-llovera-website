'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface NavOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { title: 'Home', href: '/', delay: 0 },
  { title: 'Projects', href: '/projects', delay: 0.1 },
  { title: 'About', href: '/about', delay: 0.2 },
]

const socialLinks = [
  { title: 'GitHub', href: '#', delay: 0.3 },
  { title: 'LinkedIn', href: '#', delay: 0.35 },
  { title: 'Twitter', href: '#', delay: 0.4 },
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-30 bg-background"
        >
          <div className="h-full flex flex-col items-center justify-center px-6">
            {/* Main Menu Items */}
            <nav className="mb-16">
              <ul className="space-y-6">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: item.delay, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="cursor-hover"
                    >
                      <motion.div
                        whileHover={{ x: 10 }}
                        className="text-fluid-3xl font-bold text-center hover:text-accent transition-colors"
                      >
                        {item.title}
                      </motion.div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex gap-8"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: link.delay, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  className="text-sm text-muted hover:text-foreground transition-colors cursor-hover"
                >
                  {link.title}
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Email */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="mt-16"
            >
              <a
                href="mailto:hello@sebastianllovera.com"
                className="text-fluid-sm text-muted hover:text-foreground transition-colors cursor-hover"
              >
                hello@sebastianllovera.com
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}