'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/types'
import { HoverImage } from '@/components/ui/HoverImage'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  hasNext: boolean
  hasPrev: boolean
}

export function ProjectModal({
  project,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: ProjectModalProps) {
  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && hasNext) onNext()
      if (e.key === 'ArrowLeft' && hasPrev) onPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, hasNext, hasPrev, onClose, onNext, onPrev])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 z-[201] overflow-y-auto"
          >
            {/* Navigation Controls - Top Left */}
            <div className="fixed top-6 md:top-12 left-6 md:left-12 z-[202] flex items-center gap-4">
              {/* Previous Button */}
              <motion.button
                onClick={onPrev}
                disabled={!hasPrev}
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
                data-cursor="button"
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  hasPrev 
                    ? 'border-foreground/30 hover:border-foreground text-foreground hover:bg-foreground/10' 
                    : 'border-foreground/10 text-foreground/20 cursor-not-allowed'
                }`}
                aria-label="Previous project"
              >
                <span className="text-lg md:text-xl">←</span>
              </motion.button>

              {/* Close Button */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                data-cursor="button"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-foreground/30 hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all duration-300"
                aria-label="Close modal"
              >
                <span className="text-lg md:text-xl">✕</span>
              </motion.button>

              {/* Next Button */}
              <motion.button
                onClick={onNext}
                disabled={!hasNext}
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.9 }}
                data-cursor="button"
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  hasNext 
                    ? 'border-foreground/30 hover:border-foreground text-foreground hover:bg-foreground/10' 
                    : 'border-foreground/10 text-foreground/20 cursor-not-allowed'
                }`}
                aria-label="Next project"
              >
                <span className="text-lg md:text-xl">→</span>
              </motion.button>
            </div>

            {/* Modal Content */}
            <div className="min-h-screen px-6 md:px-12 py-24 md:py-32">
              <div className="max-w-6xl mx-auto">
                {/* Project Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-12 md:mb-16"
                >
                  <motion.div className="mb-4">
                    <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted">
                      {project.year}
                    </span>
                  </motion.div>
                  <h1 className="text-fluid-3xl md:text-fluid-5xl font-bold mb-6 md:mb-8 tracking-tight">
                    {project.title}
                  </h1>
                  <p className="text-fluid-base md:text-fluid-xl text-muted leading-relaxed max-w-3xl">
                    {project.longDescription || project.description}
                  </p>
                </motion.div>

                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="mb-12 md:mb-16"
                >
                  <HoverImage
                    src={project.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600'}
                    alt={project.title}
                    className="aspect-video md:aspect-[16/9] rounded-2xl"
                  />
                </motion.div>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="md:col-span-2"
                  >
                    <h2 className="text-fluid-lg md:text-fluid-xl font-bold mb-4 tracking-tight">About</h2>
                    <p className="text-muted leading-relaxed">
                      {project.longDescription || project.description}
                      <br /><br />
                      This project demonstrates contemporary web design principles,
                      sophisticated animations, and cutting-edge technologies to create
                      an exceptional user experience.
                    </p>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <h3 className="text-fluid-lg md:text-fluid-xl font-bold mb-4 tracking-tight">Technologies</h3>
                    <ul className="space-y-2">
                      {project.tags.map((tag) => (
                        <li key={tag} className="flex items-center gap-3 text-muted text-sm">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Additional Images Gallery */}
                <div className="space-y-8 md:space-y-12">
                  {[1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                    >
                      <HoverImage
                        src={`https://images.unsplash.com/photo-${1618005182384 + i * 10000}-a83a8bd57fbe?w=1600`}
                        alt={`${project.title} detail ${i}`}
                        className="aspect-video rounded-2xl"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}