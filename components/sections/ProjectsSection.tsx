'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { AnimatedText } from '@/components/animations/AnimatedText'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { projects } from '@/lib/projects'

export function ProjectsSection() {
  const featuredProjects = projects.slice(0, 2)

  return (
    <section className="py-fluid-xl px-6 md:px-12 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-fluid-md">
          <RevealOnScroll>
            <AnimatedText
              text="Featured Projects"
              as="h2"
              className="text-fluid-3xl font-bold mb-6 tracking-tight"
            />
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.2}>
            <motion.p
              className="text-fluid-lg text-muted max-w-2xl leading-relaxed"
            >
              Selected works showcasing contemporary design, sophisticated
              animations, and cutting-edge technologies
            </motion.p>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <RevealOnScroll delay={0.4}>
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/projects"
                className="magnetic cursor-button group inline-flex items-center gap-3 px-8 py-4 border-2 border-foreground/20 rounded-full font-medium transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5"
              >
                <span>View All Projects</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}