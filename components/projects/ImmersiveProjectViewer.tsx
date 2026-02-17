'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Project } from '@/types'
import { useRouter } from 'next/navigation'

interface ImmersiveProjectViewerProps {
  projects: Project[]
  initialIndex?: number
}

export function ImmersiveProjectViewer({ projects, initialIndex = 0 }: ImmersiveProjectViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const currentProject = projects[currentIndex]
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < projects.length - 1

  const navigate = (newDirection: number) => {
    setDirection(newDirection)
    if (newDirection > 0 && hasNext) {
      setCurrentIndex(prev => prev + 1)
    } else if (newDirection < 0 && hasPrev) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.98,
    }),
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') navigate(1)
      else if (e.key === 'ArrowLeft') navigate(-1)
      else if (e.key === 'Escape') router.push('/')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  return (
    <div ref={containerRef} className="fixed inset-0 bg-[#0a0a0a] overflow-hidden">
      {/* Navigation Bar - Minimal */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-6 md:py-8"
      >
        <div className="flex items-center justify-between max-w-[1800px] mx-auto">
          {/* Controls */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => navigate(-1)}
              disabled={!hasPrev}
              whileHover={hasPrev ? { x: -3 } : {}}
              className={`w-12 h-12 rounded-full border flex items-center justify-center text-lg transition-all ${
                hasPrev ? 'border-neutral-600 hover:border-neutral-400 text-neutral-400' : 'border-neutral-800 text-neutral-700 cursor-not-allowed'
              }`}
            >
              ←
            </motion.button>
            <motion.button
              onClick={() => router.push('/')}
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 rounded-full border border-neutral-600 hover:border-neutral-400 flex items-center justify-center text-lg transition-all"
            >
              ✕
            </motion.button>
            <motion.button
              onClick={() => navigate(1)}
              disabled={!hasNext}
              whileHover={hasNext ? { x: 3 } : {}}
              className={`w-12 h-12 rounded-full border flex items-center justify-center text-lg transition-all ${
                hasNext ? 'border-neutral-600 hover:border-neutral-400 text-neutral-400' : 'border-neutral-800 text-neutral-700 cursor-not-allowed'
              }`}
            >
              →
            </motion.button>
          </div>

          {/* Counter */}
          <div className="text-sm font-light tracking-wider text-neutral-500">
            {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </div>
        </div>
      </motion.div>

      {/* Project Content */}
      <div className="h-full overflow-y-auto pt-24 md:pt-32">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentProject.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
            className="px-8 md:px-16 pb-20"
          >
            <div className="max-w-[1400px] mx-auto">
              {/* Project Header */}
              <div className="mb-16 md:mb-24">
                <motion.div className="mb-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-neutral-600 font-light">
                    {currentProject.year}
                  </span>
                </motion.div>
                <h1 className="text-[clamp(2rem,6vw,5rem)] font-light mb-8 tracking-tight leading-[1.1] text-neutral-100">
                  {currentProject.title}
                </h1>
                <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl font-light">
                  {currentProject.longDescription || currentProject.description}
                </p>
              </div>

              {/* Hero Image */}
              <div className="mb-24">
                <motion.div 
                  className="aspect-[16/10] rounded-lg overflow-hidden bg-neutral-900"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={currentProject.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1800'}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Project Details Grid */}
              <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-24">
                {/* Overview */}
                <div className="md:col-span-8">
                  <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-8 font-light">Overview</h2>
                  <div className="text-neutral-300 leading-relaxed space-y-4 font-light text-base md:text-lg">
                    <p>{currentProject.longDescription || currentProject.description}</p>
                    <p>This project explores contemporary approaches to visual communication, combining traditional artistic sensibilities with cutting-edge digital technologies.</p>
                  </div>
                </div>

                {/* Details Sidebar */}
                <div className="md:col-span-4 space-y-12">
                  {/* Year & Medium */}
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-4 font-light">Year</h3>
                    <p className="text-neutral-300 font-light">{currentProject.year}</p>
                  </div>

                  {/* Technologies/Medium */}
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-4 font-light">Medium</h3>
                    <ul className="space-y-2">
                      {currentProject.tags.map(tag => (
                        <li key={tag} className="text-neutral-300 font-light flex items-center gap-3">
                          <span className="text-neutral-600">✦</span>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Credits */}
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-4 font-light">Credits</h3>
                    <ul className="space-y-2 text-neutral-300 font-light">
                      <li className="flex items-center gap-3">
                        <span className="text-neutral-600">✦</span>
                        Sebastian Llovera — Artist
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Images */}
              <div className="space-y-16">
                {[1, 2].map(i => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="aspect-video rounded-lg overflow-hidden bg-neutral-900"
                  >
                    <img
                      src={`https://images.unsplash.com/photo-${1618005182384 + i * 50000}-a83a8bd57fbe?w=1800`}
                      alt={`${currentProject.title} detail ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}