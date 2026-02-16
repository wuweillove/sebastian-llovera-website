'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="cursor-hover group">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ y: -10 }}
        className="relative overflow-hidden rounded-2xl bg-foreground/5 backdrop-blur-sm"
      >
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-foreground/10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <div
              className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5"
              style={{
                backgroundImage: project.image
                  ? `url(${project.image})`
                  : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.h3
            className="text-fluid-xl font-bold mb-2 group-hover:text-accent transition-colors"
          >
            {project.title}
          </motion.h3>
          <p className="text-muted text-fluid-sm mb-4">{project.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-foreground/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  )
}