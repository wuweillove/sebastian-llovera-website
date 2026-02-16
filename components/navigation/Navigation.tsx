'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { NavOverlay } from './NavOverlay'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="cursor-hover">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold"
            >
              SL
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['Projects', 'About'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="cursor-hover"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="text-sm uppercase tracking-wider text-muted hover:text-foreground transition-colors"
                >
                  {item}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-hover relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 6 : 0,
              }}
              className="w-6 h-0.5 bg-foreground transition-all"
            />
            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              className="w-6 h-0.5 bg-foreground transition-all"
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -6 : 0,
              }}
              className="w-6 h-0.5 bg-foreground transition-all"
            />
          </button>
        </div>
      </motion.nav>

      <NavOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}