'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode, useState, useEffect } from 'react'

interface PageTransitionEffectProps {
  children: ReactNode
}

export function PageTransitionEffect({ children }: PageTransitionEffectProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 1000)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {/* Transition overlay */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`transition-${i}`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.76, 0, 0.24, 1],
                }}
                style={{
                  originY: 0,
                  left: `${i * 20}%`,
                  width: '20%',
                }}
                className="fixed inset-y-0 z-[9998] bg-foreground"
              />
            ))}
            
            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
            >
              <div className="text-background text-2xl font-bold tracking-wider">
                {pathname === '/' ? 'HOME' : pathname.substring(1).toUpperCase()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Page content with staggered entry */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}