'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AnimatedText } from '@/components/animations/AnimatedText'
import { ScrollTrigger } from '@/components/animations/ScrollTrigger'
import { Project } from '@/types'

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link href="/projects" className="cursor-hover inline-block mb-12">
          <motion.div
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
          >
            <span>←</span>
            <span>Back to Projects</span>
          </motion.div>
        </Link>

        {/* Title */}
        <AnimatedText
          text={project.title}
          className="text-fluid-4xl font-bold mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-fluid-lg text-muted mb-12 max-w-3xl"
        >
          {project.description}
        </motion.p>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-fluid-lg"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-foreground/10 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Hero Image */}
        <ScrollTrigger>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-foreground/10 mb-fluid-lg">
            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5" />
          </div>
        </ScrollTrigger>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-fluid-md mb-fluid-lg">
          <ScrollTrigger delay={0.1}>
            <div>
              <h3 className="text-fluid-xl font-bold mb-4">Overview</h3>
              <p className="text-muted leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>
          </ScrollTrigger>

          <ScrollTrigger delay={0.2}>
            <div>
              <h3 className="text-fluid-xl font-bold mb-4">Technologies</h3>
              <ul className="space-y-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-3 text-muted">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollTrigger>
        </div>

        {/* Gallery */}
        <div className="space-y-8">
          {[1, 2].map((i) => (
            <ScrollTrigger key={i} delay={i * 0.1}>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-foreground/10">
                <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/5" />
              </div>
            </ScrollTrigger>
          ))}
        </div>
      </div>
    </div>
  )
}