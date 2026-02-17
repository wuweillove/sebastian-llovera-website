'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/types'
import { useRouter } from 'next/navigation'

interface FullScreenProjectSliderProps {
  projects: Project[]
  initialIndex?: number
}

export function FullScreenProjectSlider({ projects, initialIndex = 0 }: FullScreenProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isScrolling, setIsScrolling] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const currentProject = projects[currentIndex]
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < projects.length - 1

  // Navigation functions
  const goToNext = () => {
    if (hasNext) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const goToPrev = () => {
    if (hasPrev) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const goToHome = () => {
    router.push('/')
  }

  // Mouse wheel navigation
  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      if (isScrolling) return
      setIsScrolling(true)

      if (e.deltaY > 0) {
        goToNext()
      } else if (e.deltaY < 0) {
        goToPrev()
      }

      timeout = setTimeout(() => {
        setIsScrolling(false)
      }, 800)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
      }
      if (timeout) clearTimeout(timeout)
    }
  }, [currentIndex, isScrolling])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        goToNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goToPrev()
      } else if (e.key === 'Escape') {
        goToHome()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientY
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext()
      } else {
        goToPrev()
      }
    }
  }

  return (
    <div 
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 bg-background overflow-hidden"
    >
      {/* Navigation Controls - Top Left (← ✖ →) */}
      <div className="fixed top-6 md:top-12 left-6 md:left-12 z-50 flex items-center gap-3 md:gap-4">
        {/* Previous Button */}
        <motion.button
          onClick={goToPrev}
          disabled={!hasPrev}
          whileHover={hasPrev ? { scale: 1.1, x: -3 } : {}}
          whileTap={hasPrev ? { scale: 0.9 } : {}}
          data-cursor="button"
          className={`w-11 h-11 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center text-lg md:text-xl transition-all duration-300 ${
            hasPrev
              ? 'border-foreground/30 hover:border-foreground text-foreground hover:bg-foreground/10 cursor-pointer'
              : 'border-foreground/10 text-foreground/20 cursor-not-allowed'
          }`}
          aria-label="Previous project"
        >
          <span>←</span>
        </motion.button>

        {/* Close Button */}
        <motion.button
          onClick={goToHome}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          data-cursor="button"
          className="w-11 h-11 md:w-14 md:h-14 rounded-full border-2 border-foreground/30 hover:border-accent hover:bg-accent/10 flex items-center justify-center text-lg md:text-xl transition-all duration-300"
          aria-label="Close and go home"
        >
          <span>✕</span>
        </motion.button>

        {/* Next Button */}
        <motion.button
          onClick={goToNext}
          disabled={!hasNext}
          whileHover={hasNext ? { scale: 1.1, x: 3 } : {}}
          whileTap={hasNext ? { scale: 0.9 } : {}}
          data-cursor="button"
          className={`w-11 h-11 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center text-lg md:text-xl transition-all duration-300 ${
            hasNext
              ? 'border-foreground/30 hover:border-foreground text-foreground hover:bg-foreground/10 cursor-pointer'
              : 'border-foreground/10 text-foreground/20 cursor-not-allowed'
          }`}
          aria-label="Next project"
        >
          <span>→</span>
        </motion.button>
      </div>

      {/* Project Counter - Top Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-6 md:top-12 right-6 md:right-12 z-50 text-sm md:text-base font-medium"
      >
        <span className="text-accent">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="text-muted mx-2">/</span>
        <span className="text-muted">{String(projects.length).padStart(2, '0')}</span>
      </motion.div>

      {/* Single Full-Screen Project Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="h-screen w-full flex items-center justify-center px-6 md:px-12"
        >
          <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Project Image - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative aspect-[3/4] md:aspect-[3/4] order-2 md:order-1"
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <motion.img
                  src={currentProject.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200'}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </motion.div>

            {/* Project Info - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4 md:space-y-6 order-1 md:order-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted mb-3 md:mb-4 block">
                  {currentProject.year}
                </span>
                <h1 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
                  {currentProject.title}
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-fluid-base md:text-fluid-lg text-muted leading-relaxed"
              >
                {currentProject.longDescription || currentProject.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-2 pt-2 md:pt-4"
              >
                {currentProject.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-foreground/10 border border-foreground/20 rounded-full text-xs md:text-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots - Bottom Center */}
      <div className="fixed bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-50 flex gap-2 md:gap-3">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-accent w-10 md:w-16'
                : 'bg-foreground/30 hover:bg-foreground/50 w-2'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Hint - Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-8 md:bottom-12 right-6 md:right-12 z-50 hidden md:flex flex-col items-end gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Navigate</span>
        <div className="flex gap-2 text-muted/50">
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            ↑
          </motion.span>
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
          >
            ↓
          </motion.span>
        </div>
      </motion.div>
    </div>
  )
}