'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode, useState, useEffect } from 'react'

interface PremiumPageTransitionProps {
  children: ReactNode
}

export function PremiumPageTransition({ children }: PremiumPageTransitionProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 1200)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {/* Overlay transition curtain */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <>
            {/* Main overlay */}
            <motion.div
              key={`overlay-${pathname}`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.76, 0, 0.24, 1],
                scaleY: {
                  duration: 0.6,
                },
              }}
              style={{ originY: 0 }}
              className="fixed inset-0 z-[100] bg-gradient-to-br from-accent via-accent/90 to-background"
            >
              {/* Animated content during transition */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-center"
                >
                  <motion.div
                    className="w-16 h-16 border-4 border-background border-t-transparent rounded-full mx-auto mb-4"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="text-background font-medium uppercase tracking-widest text-sm"
                  >
                    {pathname === '/' ? 'Home' : pathname.substring(1).replace('-', ' ')}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Secondary overlay for depth */}
            <motion.div
              key={`overlay-bg-${pathname}`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{ originY: 0 }}
              className="fixed inset-0 z-[99] bg-background/50 backdrop-blur-xl"
            />
          </>
        )}
      </AnimatePresence>

      {/* Page content with staggered entrance */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}