'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/types'
import { HoverImage } from '@/components/ui/HoverImage'

interface FullScreenProjectShowcaseProps {
  projects: Project[]
}

export function FullScreenProjectShowcase({ projects }: FullScreenProjectShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [touchStart, setTouchStart] = useState(0)

  // Wheel/scroll navigation
  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      if (isScrolling) return

      setIsScrolling(true)

      if (e.deltaY > 0 && currentIndex < projects.length - 1) {
        setCurrentIndex((prev) => prev + 1)
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1)
      }

      timeout = setTimeout(() => {
        setIsScrolling(false)
      }, 1000)
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
  }, [currentIndex, isScrolling, projects.length])

  // Touch navigation for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientY
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < projects.length - 1) {
        setCurrentIndex((prev) => prev + 1)
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1)
      }
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentIndex < projects.length - 1) {
        setCurrentIndex((prev) => prev + 1)
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, projects.length])

  const currentProject = projects[currentIndex]

  return (
    <div 
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 overflow-hidden bg-background"
    >
      {/* Navigation header */}
      <div className="fixed top-20 md:top-32 left-4 md:left-12 z-20">
        <Link href="/" data-cursor="hover">
          <motion.div
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
          >
            <span>←</span>
            <span className="text-sm uppercase tracking-wider">Back</span>
          </motion.div>
        </Link>
      </div>

      {/* Project counter */}
      <motion.div 
        className="fixed top-20 md:top-32 right-4 md:right-12 z-20 text-sm font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-accent">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="text-muted mx-2">/</span>
        <span className="text-muted">{String(projects.length).padStart(2, '0')}</span>
      </motion.div>

      {/* Full-screen project display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="h-screen w-full flex items-center justify-center px-6 md:px-12 py-32 md:py-40"
        >
          <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative aspect-[4/3] md:aspect-[3/4] order-2 md:order-1"
            >
              <HoverImage
                src={currentProject.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200'}
                alt={currentProject.title}
                className="w-full h-full rounded-2xl"
              />
            </motion.div>

            {/* Project Info */}
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
                <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-3 md:mb-4 tracking-tight">
                  {currentProject.title}
                </h2>
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
                {currentProject.tags.slice(0, 5).map((tag, i) => (
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="pt-4 md:pt-8"
              >
                <Link 
                  href={`/projects/${currentProject.slug}`}
                  data-cursor="button"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 text-accent hover:text-accent/80 transition-colors"
                  >
                    <span className="font-medium text-sm md:text-base">View Full Project</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="fixed bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-accent w-8 md:w-12' 
                : 'bg-foreground/30 hover:bg-foreground/50 w-2'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-8 md:bottom-12 right-4 md:right-12 z-20 text-xs uppercase tracking-wider text-muted hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-end gap-2"
        >
          <span>Scroll</span>
          <div className="flex gap-1">
            <span>↑</span>
            <span>↓</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}