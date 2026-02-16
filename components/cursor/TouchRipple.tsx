'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Ripple {
  id: number
  x: number
  y: number
}

export function TouchRipple() {
  const [ripples, setRipples] = useState<Ripple[]>()

  useEffect(() => {
    let rippleId = 0

    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0]
      const newRipple: Ripple = {
        id: rippleId++,
        x: touch.clientX,
        y: touch.clientY,
      }

      setRipples((prev) => [...(prev || []), newRipple])

      setTimeout(() => {
        setRipples((prev) => prev?.filter((r) => r.id !== newRipple.id) || [])
      }, 800)
    }

    document.addEventListener('touchstart', handleTouch, { passive: true })

    return () => {
      document.removeEventListener('touchstart', handleTouch)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] md:hidden">
      <AnimatePresence>
        {ripples?.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute w-20 h-20 border-2 border-accent/50 rounded-full"
            initial={{
              x: ripple.x,
              y: ripple.y,
              scale: 0,
              opacity: 1,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              scale: 2,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}