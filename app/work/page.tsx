'use client'

import { motion } from 'framer-motion'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import { WordByWordReveal } from '@/components/animations/WordByWordReveal'
import { projects } from '@/lib/projects'

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted font-medium">
              Portfolio
            </span>
          </motion.div>

          <WordByWordReveal
            text="All Work"
            className="text-fluid-3xl md:text-fluid-5xl font-bold mb-6 md:mb-8 tracking-tight"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-fluid-base md:text-fluid-lg text-muted max-w-2xl leading-relaxed"
          >
            A comprehensive collection showcasing contemporary design,
            sophisticated animations, and technical excellence.
          </motion.p>
        </div>

        {/* Project Grid with Modal System */}
        <ProjectGrid projects={projects} />
      </div>
    </div>
  )
}