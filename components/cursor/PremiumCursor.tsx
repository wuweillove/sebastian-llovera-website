'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

type CursorState = 'default' | 'hover' | 'button' | 'image' | 'text'

interface CursorConfig {
  size: number
  text: string
  mixBlend: boolean
}

const cursorConfigs: Record<CursorState, CursorConfig> = {
  default: { size: 12, text: '', mixBlend: true },
  hover: { size: 60, text: 'View', mixBlend: false },
  button: { size: 70, text: 'Click', mixBlend: false },
  image: { size: 80, text: 'Explore', mixBlend: false },
  text: { size: 8, text: '', mixBlend: true },
}

export function PremiumCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [cursorState, setCursorState] = useState<CursorState>('default')
  const [isMobile, setIsMobile] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
    }
    checkMobile()

    if (isMobile) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const updateCursorState = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Check for data attributes first
      const cursorType = target.getAttribute('data-cursor')
      if (cursorType) {
        setCursorState(cursorType as CursorState)
        return
      }

      // Check for element types
      if (target.tagName === 'BUTTON' || target.closest('button') || target.classList.contains('cursor-button')) {
        setCursorState('button')
      } else if (target.tagName === 'A' || target.closest('a') || target.classList.contains('cursor-link')) {
        setCursorState('hover')
      } else if (target.tagName === 'IMG' || target.closest('[data-cursor="image"]') || target.classList.contains('cursor-image')) {
        setCursorState('image')
      } else if (
        target.tagName === 'P' ||
        target.tagName === 'H1' ||
        target.tagName === 'H2' ||
        target.tagName === 'H3' ||
        target.classList.contains('cursor-text')
      ) {
        setCursorState('text')
      } else {
        setCursorState('default')
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', updateCursorState)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', updateCursorState)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [cursorX, cursorY, isMobile])

  if (isMobile) return null

  const config = cursorConfigs[cursorState]

  return (
    <>
      {/* Main circular cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        {/* Cursor circle */}
        <motion.div
          className={`rounded-full flex items-center justify-center ${
            config.mixBlend ? 'bg-foreground mix-blend-difference' : 'bg-accent/80 backdrop-blur-sm'
          }`}
          animate={{
            width: config.size,
            height: config.size,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <AnimatePresence mode="wait">
            {config.text && (
              <motion.span
                key={config.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="text-[10px] font-bold text-background uppercase tracking-wider"
              >
                {config.text}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Outer ring for certain states */}
        {(cursorState === 'hover' || cursorState === 'button' || cursorState === 'image') && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-accent/50"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 1 }}
            exit={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>

      {/* Cursor trail dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-accent rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible && cursorState !== 'default' ? 0.6 : 0,
        }}
      />
    </>
  )
}