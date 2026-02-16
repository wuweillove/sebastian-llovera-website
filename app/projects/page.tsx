'use client'

import { motion } from 'framer-motion'
import { ProjectGallery } from '@/components/projects/ProjectGallery'
import { AnimatedText } from '@/components/animations/AnimatedText'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { projects } from '@/lib/projects'
import { useState } from 'react'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const categories = ['all', 'web', 'mobile', 'design']

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-fluid-lg">
          <AnimatedText
            text="Selected Works"
            as="h1"
            className="text-fluid-4xl font-bold mb-6 tracking-tight"
          />
          <RevealOnScroll>
            <motion.p
              className="text-fluid-lg text-muted max-w-2xl leading-relaxed"
            >
              A curated collection of projects showcasing contemporary design,
              fluid animations, and cutting-edge web technologies.
            </motion.p>
          </RevealOnScroll>
        </div>

        {/* Filter Buttons */}
        <RevealOnScroll delay={0.2}>
          <div className="flex flex-wrap gap-4 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`magnetic cursor-button px-6 py-3 rounded-full font-medium uppercase tracking-wider text-sm transition-all duration-300 ${
                  filter === category
                    ? 'bg-foreground text-background shadow-[0_10px_30px_rgba(250,250,250,0.2)]'
                    : 'border-2 border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5'
                }`}
              >
                {category}
                {filter === category && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-foreground rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Stats */}
        <RevealOnScroll delay={0.3}>
          <div className="grid grid-cols-3 gap-6 mb-16 max-w-2xl">
            {[
              { label: 'Projects', value: projects.length },
              { label: 'Technologies', value: '15+' },
              { label: 'Years', value: '5+' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-foreground/5 border border-foreground/10 hover:border-foreground/20 transition-all duration-300"
              >
                <div className="text-fluid-2xl font-bold bg-gradient-to-br from-foreground to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Projects Grid */}
        <ProjectGallery projects={projects} />

        {/* CTA */}
        <RevealOnScroll delay={0.5}>
          <div className="mt-20 text-center p-12 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
            <h3 className="text-fluid-2xl font-bold mb-6 tracking-tight">
              Have a project in mind?
            </h3>
            <p className="text-fluid-base text-muted mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary together.
            </p>
            <motion.a
              href="mailto:hello@sebastianllovera.com"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="magnetic cursor-button inline-block px-10 py-4 bg-foreground text-background rounded-full font-medium transition-all duration-300 hover:shadow-[0_10px_40px_rgba(250,250,250,0.2)]"
            >
              Start a Conversation
            </motion.a>
          </div>
        </RevealOnScroll>
      </motion.div>
    </div>
  )
}