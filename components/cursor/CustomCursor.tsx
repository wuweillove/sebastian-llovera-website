'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type CursorState = 'default' | 'hover' | 'text' | 'image' | 'button'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [cursorState, setCursorState] = useState<CursorState>('default')
  const [cursorText, setCursorText] = useState('')
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Scale based on cursor state
  const scale = useTransform(() => {
    switch (cursorState) {
      case 'hover': return 1.5
      case 'text': return 0.8
      case 'image': return 2
      case 'button': return 1.3
      default: return 1
    }
  })

  useEffect(() => {
    let rafId: number
    let magneticTarget: HTMLElement | null = null

    const moveCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Magnetic effect for buttons and links
      if (target.classList.contains('magnetic') || 
          target.closest('.magnetic')) {
        const magneticEl = target.classList.contains('magnetic') 
          ? target 
          : target.closest('.magnetic') as HTMLElement
        
        if (magneticEl && magneticEl !== magneticTarget) {
          magneticTarget = magneticEl
          const rect = magneticEl.getBoundingClientRect()
          const centerX = rect.left + rect.width / 2
          const centerY = rect.top + rect.height / 2
          
          const distance = Math.sqrt(
            Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
          )
          
          if (distance < 100) {
            const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX)
            const pullStrength = Math.max(0, (100 - distance) / 100) * 20
            cursorX.set(centerX + Math.cos(angle) * pullStrength)
            cursorY.set(centerY + Math.sin(angle) * pullStrength)
            return
          }
        }
      } else {
        magneticTarget = null
      }

      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      if (target.tagName === 'BUTTON' || 
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-button')) {
        setCursorState('button')
        setCursorText(target.getAttribute('data-cursor-text') || 'Click')
      } else if (target.tagName === 'A' || target.classList.contains('cursor-link')) {
        setCursorState('hover')
        setCursorText('View')
      } else if (target.tagName === 'IMG' || 
                 target.classList.contains('cursor-image') ||
                 target.closest('.project-card')) {
        setCursorState('image')
        setCursorText('Explore')
      } else if (target.tagName === 'P' || 
                 target.tagName === 'H1' || 
                 target.tagName === 'H2' ||
                 target.tagName === 'H3' ||
                 target.classList.contains('cursor-text')) {
        setCursorState('text')
        setCursorText('')
      } else {
        setCursorState('default')
        setCursorText('')
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [cursorX, cursorY, cursorState])

  // Hide on mobile devices
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (isMobile) {
      setIsVisible(false)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Inner dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: cursorState === 'default' ? 1 : 0.3,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <div className="w-2 h-2 bg-foreground rounded-full mix-blend-difference" />
        </motion.div>

        {/* Outer ring */}
        <motion.div
          className="w-12 h-12 border-2 border-foreground/30 rounded-full mix-blend-difference flex items-center justify-center"
          animate={{
            scale: cursorState === 'image' ? 1.8 : cursorState === 'hover' || cursorState === 'button' ? 1.5 : 1,
            borderColor: cursorState === 'button' ? 'rgba(255, 107, 107, 0.5)' : 'rgba(250, 250, 250, 0.3)',
          }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-[10px] font-medium text-foreground mix-blend-difference uppercase tracking-wider"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>

        {/* Trailing effect */}
        <motion.div
          className="absolute inset-0 w-8 h-8 -m-2 bg-accent/20 rounded-full blur-xl"
          animate={{
            scale: cursorState === 'button' ? 2 : 0,
            opacity: cursorState === 'button' ? 0.6 : 0,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </motion.div>
    </>
  )
}