'use client'

import { motion } from 'framer-motion'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import { WordByWordReveal } from '@/components/animations/WordByWordReveal'
import { TextReveal } from '@/components/animations/TextReveal'
import { projects } from '@/lib/projects'

export function RetinaaProjectsSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted font-medium">
              Selected Work
            </span>
          </motion.div>
          
          <WordByWordReveal
            text="Projects"
            className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6 md:mb-8 tracking-tight"
          />
          
          <TextReveal delay={0.3}>
            <p className="text-fluid-base md:text-fluid-lg text-muted max-w-2xl leading-relaxed">
              A collection of selected projects showcasing contemporary design
              and technical expertise
            </p>
          </TextReveal>
        </div>

        {/* Project Grid with Modal System */}
        <ProjectGrid projects={projects} />
      </div>
    </section>
  )
}