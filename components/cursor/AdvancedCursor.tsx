'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type CursorState = 'default' | 'hover' | 'text' | 'image' | 'button'

export function AdvancedCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [cursorState, setCursorState] = useState<CursorState>('default')
  const [isPressed, setIsPressed] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const trailX = useMotionValue(-100)
  const trailY = useMotionValue(-100)
  
  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 }
  const trailSpringConfig = { damping: 35, stiffness: 150, mass: 0.8 }
  
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  const trailXSpring = useSpring(trailX, trailSpringConfig)
  const trailYSpring = useSpring(trailY, trailSpringConfig)

  // Magnetic effect state
  const [magnetTarget, setMagnetTarget] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      
      // Check for magnetic elements
      const target = e.target as HTMLElement
      const magnetic = target.closest('[data-magnetic]')
      
      if (magnetic) {
        const rect = magnetic.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distance = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
        )
        
        if (distance < 100) {
          const strength = 0.3
          const magnetX = centerX + (x - centerX) * (1 - strength)
          const magnetY = centerY + (y - centerY) * (1 - strength)
          cursorX.set(magnetX)
          cursorY.set(magnetY)
        } else {
          cursorX.set(x)
          cursorY.set(y)
        }
      } else {
        cursorX.set(x)
        cursorY.set(y)
      }
      
      trailX.set(x)
      trailY.set(y)
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsPressed(true)
    const handleMouseUp = () => setIsPressed(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      if (target.tagName === 'BUTTON' || target.closest('button') || target.getAttribute('data-cursor') === 'button') {
        setCursorState('button')
      } else if (target.tagName === 'A' || target.closest('a')) {
        setCursorState('hover')
      } else if (target.tagName === 'IMG' || target.closest('[data-cursor="image"]')) {
        setCursorState('image')
      } else if (
        target.tagName === 'P' ||
        target.tagName === 'H1' ||
        target.tagName === 'H2' ||
        target.tagName === 'H3' ||
        target.tagName === 'SPAN' ||
        target.getAttribute('data-cursor') === 'text'
      ) {
        setCursorState('text')
      } else {
        setCursorState('default')
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [cursorX, cursorY, trailX, trailY])

  const getCursorSize = () => {
    switch (cursorState) {
      case 'hover':
        return { width: 60, height: 60 }
      case 'button':
        return { width: 70, height: 70 }
      case 'image':
        return { width: 80, height: 80 }
      case 'text':
        return { width: 8, height: 40 }
      default:
        return { width: 16, height: 16 }
    }
  }

  const size = getCursorSize()

  return (
    <>
      {/* Cursor trail */}
      <motion.div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: trailXSpring,
          y: trailYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 0.3 : 0,
          scale: isPressed ? 0.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-20 h-20 border-2 border-foreground/20 rounded-full" />
      </motion.div>

      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          width: size.width,
          height: size.height,
          scale: isPressed ? 0.8 : 1,
          borderRadius: cursorState === 'text' ? '4px' : '50%',
        }}
        transition={{ 
          duration: 0.2,
          ease: 'easeOut',
        }}
      >
        <motion.div
          className="w-full h-full rounded-full"
          animate={{
            backgroundColor: cursorState === 'hover' || cursorState === 'button' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 1)',
            border: cursorState === 'image' ? '2px solid rgba(255, 255, 255, 0.5)' : '0px solid transparent',
          }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Inner dot for certain states */}
        {(cursorState === 'hover' || cursorState === 'button') && (
          <motion.div
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-foreground rounded-full"
            style={{ translateX: '-50%', translateY: '-50%' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          />
        )}
      </motion.div>
    </>
  )
}