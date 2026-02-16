'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { PremiumProjectCard } from '@/components/projects/PremiumProjectCard'
import { WordByWordReveal } from '@/components/animations/WordByWordReveal'
import { TextReveal } from '@/components/animations/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { projects } from '@/lib/projects'

export function PremiumProjectsSection() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="py-fluid-2xl px-6 md:px-12 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-fluid-lg">
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
          
          <TextReveal delay={0.3}>
            <p className="text-fluid-lg text-muted max-w-2xl leading-relaxed">
              A curated collection of projects showcasing contemporary design,
              sophisticated animations, and technical excellence
            </p>
          </TextReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <PremiumProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <MagneticButton
            href="/projects"
            className="border-2 border-foreground/20 hover:border-foreground/40 bg-foreground/5"
          >
            <span className="flex items-center gap-3">
              View All Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}