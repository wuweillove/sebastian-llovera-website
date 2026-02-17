'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { WordByWordReveal } from '@/components/animations/WordByWordReveal'
import { TextReveal } from '@/components/animations/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { HoverImage } from '@/components/ui/HoverImage'
import { projects } from '@/lib/projects'

export function FullScreenProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const featuredProjects = projects.slice(0, 3)
  const activeProject = featuredProjects[activeIndex]

  return (
    <section className="min-h-screen py-fluid-xl px-6 md:px-12 relative overflow-hidden flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-fluid-sm uppercase tracking-[0.2em] text-muted font-medium">
              Selected Works
            </span>
          </motion.div>
          
          <WordByWordReveal
            text="Featured Projects"
            className="text-fluid-4xl font-bold mb-8 tracking-tight"
          />
        </div>

        {/* Full-screen project display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="grid md:grid-cols-2 gap-12 items-center min-h-[60vh]"
          >
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative aspect-[4/3]"
            >
              <HoverImage
                src={activeProject.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200'}
                alt={activeProject.title}
                className="w-full h-full rounded-2xl"
              />
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <span className="text-sm uppercase tracking-[0.2em] text-muted mb-4 block">
                  {activeProject.year}
                </span>
                <h3 className="text-fluid-3xl font-bold mb-4 tracking-tight">
                  {activeProject.title}
                </h3>
              </div>

              <p className="text-fluid-base text-muted leading-relaxed">
                {activeProject.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {activeProject.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-foreground/10 border border-foreground/20 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link href={`/projects/${activeProject.slug}`} data-cursor="button">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center gap-3 text-accent hover:text-accent/80 transition-colors pt-4"
                >
                  <span className="font-medium">View Project</span>
                  <span>→</span>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Project navigation */}
        <div className="flex items-center justify-between mt-16">
          <div className="flex gap-3">
            {featuredProjects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-accent w-12' 
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
                aria-label={`View project ${index + 1}`}
              />
            ))}
          </div>

          <MagneticButton
            href="/work"
            className="border-2 border-foreground/20 hover:border-foreground/40 text-sm px-6 py-3"
          >
            View All Work
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}