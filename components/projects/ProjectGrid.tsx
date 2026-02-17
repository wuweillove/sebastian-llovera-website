'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/types'
import { ProjectModal } from './ProjectModal'
import { HoverImage } from '@/components/ui/HoverImage'

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const openProject = (project: Project, index: number) => {
    setSelectedProject(project)
    setSelectedIndex(index)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  const nextProject = () => {
    if (selectedIndex < projects.length - 1) {
      const nextIndex = selectedIndex + 1
      setSelectedIndex(nextIndex)
      setSelectedProject(projects[nextIndex])
    }
  }

  const prevProject = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1
      setSelectedIndex(prevIndex)
      setSelectedProject(projects[prevIndex])
    }
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
              delay: index * 0.1, 
              duration: 0.6,
              ease: [0.33, 1, 0.68, 1]
            }}
            onClick={() => openProject(project, index)}
            className="cursor-pointer group"
            data-cursor="image"
          >
            {/* Project Image */}
            <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <img
                  src={project.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800'}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>

            {/* Project Info */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-fluid-base md:text-fluid-lg font-bold group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="text-xs text-muted">{project.year}</span>
              </div>
              <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={closeProject}
        onNext={nextProject}
        onPrev={prevProject}
        hasNext={selectedIndex < projects.length - 1}
        hasPrev={selectedIndex > 0}
      />
    </>
  )
}