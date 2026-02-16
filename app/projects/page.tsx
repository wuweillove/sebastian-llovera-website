'use client'

import { motion } from 'framer-motion'
import { ProjectGallery } from '@/components/projects/ProjectGallery'
import { AnimatedText } from '@/components/animations/AnimatedText'
import { projects } from '@/lib/projects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-fluid-lg">
          <AnimatedText
            text="Selected Works"
            className="text-fluid-4xl font-bold mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-fluid-lg text-muted max-w-2xl"
          >
            A curated collection of projects showcasing contemporary design,
            fluid animations, and cutting-edge web technologies.
          </motion.p>
        </div>

        <ProjectGallery projects={projects} />
      </motion.div>
    </div>
  )
}