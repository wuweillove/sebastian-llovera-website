'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AdvancedProjectCard } from '@/components/projects/AdvancedProjectCard'
import { RevealText } from '@/components/animations/RevealText'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { projects } from '@/lib/projects'

export function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="py-fluid-2xl px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-fluid-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-fluid-sm uppercase tracking-widest text-muted font-medium">
              Selected Works
            </span>
          </motion.div>
          
          <RevealText
            text="Featured Projects"
            className="text-fluid-4xl font-bold mb-8 tracking-tight"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-fluid-lg text-muted max-w-2xl leading-relaxed"
          >
            A curated collection of projects showcasing contemporary design,
            sophisticated animations, and technical excellence
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <AdvancedProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <MagneticButton
            href="/projects"
            className="border-2 border-foreground/20 hover:border-foreground/40"
          >
            View All Projects
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}