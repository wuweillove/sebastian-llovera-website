'use client'

import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Project } from '@/types'
import { useRef } from 'react'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [7.5, -7.5])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-7.5, 7.5])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <Link href={`/projects/${project.slug}`} className="cursor-image group block">
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ 
          delay: index * 0.15, 
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative overflow-hidden rounded-2xl bg-foreground/5 backdrop-blur-sm will-change-transform project-card"
      >
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-foreground/10">
          <motion.div
            className="w-full h-full relative"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Image with distortion effects */}
            <motion.div
              className="w-full h-full bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5"
              style={{
                backgroundImage: project.image ? `url(${project.image})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              whileHover={{
                filter: 'contrast(1.1) saturate(1.2)',
              }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.4 }}
            />

            {/* Hover effect overlay */}
            <motion.div
              className="absolute inset-0 bg-accent/10 mix-blend-overlay"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>

        {/* Content */}
        <motion.div 
          className="p-8"
          style={{ transform: 'translateZ(50px)' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h3
              className="text-fluid-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
            
            <motion.p 
              className="text-muted text-fluid-sm mb-6 leading-relaxed"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {project.description}
            </motion.p>
          </motion.div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(250, 250, 250, 0.15)' 
                }}
                className="text-xs px-3 py-1.5 bg-foreground/10 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* View project indicator */}
          <motion.div
            className="absolute bottom-8 right-8 flex items-center gap-2 text-sm text-muted"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span>View Project</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Card border glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,107,107,0.1), transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 0%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.article>
    </Link>
  )
}