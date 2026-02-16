'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { AnimatedText } from '@/components/animations/AnimatedText'
import { projects } from '@/lib/projects'

export function ProjectsSection() {
  const featuredProjects = projects.slice(0, 2)

  return (
    <section className="py-fluid-xl px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-fluid-md">
          <AnimatedText
            text="Featured Projects"
            className="text-fluid-3xl font-bold mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-fluid-lg text-muted max-w-2xl"
          >
            Selected works showcasing contemporary design and fluid animations
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="cursor-hover inline-block px-8 py-4 border border-foreground/20 rounded-full font-medium hover:border-foreground/40 hover:scale-105 transition-all"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}