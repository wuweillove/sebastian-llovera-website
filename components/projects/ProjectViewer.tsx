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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'Escape') router.push('/')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  // Mouse wheel navigation
  useEffect(() => {
    let timeout: NodeJS.Timeout
    let isScrolling = false

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isScrolling) return
      
      isScrolling = true
      if (e.deltaY > 0) goNext()
      else if (e.deltaY < 0) goPrev()

      timeout = setTimeout(() => {
        isScrolling = false
      }, 800)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (timeout) clearTimeout(timeout)
    }
  }, [currentIndex])

  return (
    <div className="fixed inset-0 bg-black overflow-y-auto">
      {/* Navigation Arrows - Fixed on Sides */}
      {hasPrev && (
        <motion.button
          onClick={goPrev}
          whileHover={{ backgroundColor: '#00D9FF', color: '#000000' }}
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
          whileHover={{ backgroundColor: '#00D9FF', color: '#000000' }}
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

      {/* Project Content */}
      <div className="pt-[150px] pb-[100px] px-[60px] max-[768px]:pt-[120px] max-[768px]:px-[30px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-[900px] mx-auto"
          >
            {/* Year */}
            <div 
              className="text-[14px] uppercase tracking-[2px] mb-[30px]"
              style={{ color: '#00D9FF' }}
            >
              {currentProject.year}
            </div>

            {/* Title */}
            <h1 
              className="text-[48px] max-[768px]:text-[32px] font-bold mb-[15px] text-white"
              style={{ letterSpacing: '-2px' }}
            >
              {currentProject.title}
            </h1>

            {/* Main Image */}
            <div className="my-[40px]">
              <img
                src={currentProject.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600'}
                alt={currentProject.title}
                className="w-full block"
                style={{
                  maxHeight: '70vh',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Description */}
            <p 
              className="text-[18px] mb-[60px]"
              style={{
                color: '#bbbbbb',
                lineHeight: '1.8',
              }}
            >
              {currentProject.longDescription || currentProject.description}
            </p>

            {/* Overview Section */}
            <div className="mb-[60px]">
              <h2 
                className="text-[11px] uppercase tracking-[3px] mb-[30px]"
                style={{ color: '#666666' }}
              >
                Overview
              </h2>
              <p 
                className="text-[16px]"
                style={{
                  color: '#999999',
                  lineHeight: '1.6',
                }}
              >
                {currentProject.longDescription || currentProject.description}
              </p>
            </div>

            {/* Credits Section */}
            <div className="mb-[60px]">
              <h2 
                className="text-[11px] uppercase tracking-[3px] mb-[30px]"
                style={{ color: '#666666' }}
              >
                Credits
              </h2>
              <div className="space-y-[10px]">
                <div className="flex items-center gap-[12px] text-[16px]" style={{ color: '#999999' }}>
                  <span style={{ color: '#00D9FF' }}>✦</span>
                  Sebastian Llovera — Artist
                </div>
              </div>
            </div>

            {/* Medium & Technologies */}
            <div className="mb-[60px]">
              <h2 
                className="text-[11px] uppercase tracking-[3px] mb-[30px]"
                style={{ color: '#666666' }}
              >
                Medium & Technologies
              </h2>
              <div className="space-y-[10px]">
                {currentProject.tags.map(tag => (
                  <div key={tag} className="flex items-center gap-[12px] text-[16px]" style={{ color: '#999999' }}>
                    <span style={{ color: '#00D9FF' }}>✦</span>
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Images */}
            <div className="space-y-[40px]">
              {[1, 2].map(i => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={`https://images.unsplash.com/photo-${1618005182384 + i * 50000}-a83a8bd57fbe?w=1600`}
                    alt={`${currentProject.title} detail ${i}`}
                    className="w-full block"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}