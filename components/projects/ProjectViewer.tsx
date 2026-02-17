'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Project } from '@/types'

interface ProjectViewerProps {
  projects: Project[]
  initialIndex?: number
}

export function ProjectViewer({ projects, initialIndex = 0 }: ProjectViewerProps) {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const currentProject = projects[currentIndex]
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < projects.length - 1

  const goNext = () => {
    if (hasNext) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const goPrev = () => {
    if (hasPrev) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  // Keyboard navigation - Arrow keys for horizontal navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goNext()
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev()
      else if (e.key === 'Escape') router.push('/')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  // Mouse wheel navigation - horizontal scrolling
  useEffect(() => {
    let timeout: NodeJS.Timeout
    let isScrolling = false

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return
      
      isScrolling = true
      // Support both vertical scroll wheel and horizontal trackpad gestures
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      if (delta > 0) goNext()
      else if (delta < 0) goPrev()

      timeout = setTimeout(() => {
        isScrolling = false
      }, 600)
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (timeout) clearTimeout(timeout)
    }
  }, [currentIndex])

  return (
    <div className="fixed inset-0 bg-black flex flex-col">
      {/* Navigation Arrows - Fixed on Sides for horizontal navigation */}
      {hasPrev && (
        <motion.button
          onClick={goPrev}
          whileHover={{ backgroundColor: '#00D9FF', color: '#000000', scale: 1.1 }}
          className="fixed left-[40px] top-1/2 -translate-y-1/2 z-[100] w-[50px] h-[50px] flex items-center justify-center text-[24px] rounded-full border transition-all duration-300 max-[768px]:left-[20px]"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            color: '#FFFFFF',
          }}
        >
          ←
        </motion.button>
      )}

      {hasNext && (
        <motion.button
          onClick={goNext}
          whileHover={{ backgroundColor: '#00D9FF', color: '#000000', scale: 1.1 }}
          className="fixed right-[40px] top-1/2 -translate-y-1/2 z-[100] w-[50px] h-[50px] flex items-center justify-center text-[24px] rounded-full border transition-all duration-300 max-[768px]:right-[20px]"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            color: '#FFFFFF',
          }}
        >
          →
        </motion.button>
      )}

      {/* Close Button */}
      <motion.button
        onClick={() => router.push('/')}
        whileHover={{ 
          backgroundColor: '#00D9FF',
          color: '#000000',
          rotate: 90 
        }}
        className="fixed top-[40px] right-[60px] z-[100] w-[50px] h-[50px] flex items-center justify-center text-[24px] rounded-full border transition-all duration-300 max-[768px]:top-[30px] max-[768px]:right-[30px]"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderColor: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#FFFFFF',
        }}
      >
        ✕
      </motion.button>

      {/* Project Progress Indicator */}
      <div className="fixed top-[40px] left-1/2 -translate-x-1/2 z-[100] flex items-center gap-[8px] max-[768px]:top-[30px]">
        {projects.map((_, index) => (
          <motion.div
            key={index}
            className="h-[2px] cursor-pointer"
            style={{
              width: index === currentIndex ? '40px' : '20px',
              backgroundColor: index === currentIndex ? '#00D9FF' : 'rgba(255, 255, 255, 0.3)',
            }}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ backgroundColor: '#00D9FF' }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Horizontal Scrollable Content */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden pt-[100px] pb-[60px] max-[768px]:pt-[80px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="h-full flex items-center px-[60px] max-[768px]:px-[30px]"
          >
            <div className="flex items-center gap-[60px] max-w-none max-[768px]:flex-col max-[768px]:items-start">
              {/* Main Image - Large and centered */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src={currentProject.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600'}
                  alt={currentProject.title}
                  className="block max-[768px]:w-full"
                  style={{
                    width: 'auto',
                    maxWidth: '55vw',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                  }}
                />
              </motion.div>

              {/* Project Info - Side by side with image */}
              <motion.div
                className="flex-shrink-0 max-w-[400px] max-[768px]:max-w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Year */}
                <div 
                  className="text-[14px] uppercase tracking-[2px] mb-[20px]"
                  style={{ color: '#00D9FF' }}
                >
                  {currentProject.year}
                </div>

                {/* Title */}
                <h1 
                  className="text-[42px] max-[768px]:text-[32px] font-bold mb-[20px] text-white"
                  style={{ letterSpacing: '-2px' }}
                >
                  {currentProject.title}
                </h1>

                {/* Description */}
                <p 
                  className="text-[16px] mb-[40px]"
                  style={{
                    color: '#bbbbbb',
                    lineHeight: '1.7',
                  }}
                >
                  {currentProject.longDescription || currentProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-[8px] mb-[40px]">
                  {currentProject.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-[12px] py-[6px] text-[11px] uppercase tracking-[1px] rounded-full"
                      style={{
                        backgroundColor: 'rgba(0, 217, 255, 0.1)',
                        color: '#00D9FF',
                        border: '1px solid rgba(0, 217, 255, 0.3)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <motion.button
                  onClick={() => router.push(`/projects/${currentProject.slug}`)}
                  whileHover={{ backgroundColor: '#00D9FF', color: '#000000' }}
                  className="px-[24px] py-[12px] text-[13px] uppercase tracking-[1px] rounded-full border transition-all duration-300"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: '#00D9FF',
                    color: '#00D9FF',
                  }}
                >
                  View Details
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
