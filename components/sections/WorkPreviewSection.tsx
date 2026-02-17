'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { WordByWordReveal } from '@/components/animations/WordByWordReveal'
import { TextReveal } from '@/components/animations/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { projects } from '@/lib/projects'

export function WorkPreviewSection() {
  const featuredProject = projects[0]

  return (
    <section className="min-h-screen py-20 md:py-32 px-6 md:px-12 relative flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 md:mb-16">
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
            text="Featured Project"
            className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6 md:mb-8 tracking-tight"
          />
        </div>

        {/* Single Featured Project Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-16"
        >
          {/* Project Image */}
          <motion.div
            className="relative aspect-[4/3] md:aspect-[3/4] overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={featuredProject.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200'}
              alt={featuredProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>

          {/* Project Info */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted mb-3 md:mb-4 block">
                {featuredProject.year}
              </span>
              <h3 className="text-fluid-2xl md:text-fluid-3xl font-bold mb-3 md:mb-4 tracking-tight">
                {featuredProject.title}
              </h3>
            </div>

            <p className="text-fluid-base text-muted leading-relaxed">
              {featuredProject.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {featuredProject.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-foreground/10 border border-foreground/20 rounded-full text-xs md:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA to View All Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <MagneticButton
            href="/work"
            className="bg-foreground text-background border-2 border-foreground px-10 md:px-12 py-4 md:py-5"
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