'use client'

import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Project } from '@/types'
import { ImageDistortion } from '@/components/ui/ImageDistortion'
import { useRef } from 'react'

interface AdvancedProjectCardProps {
  project: Project
  index: number
}

export function AdvancedProjectCard({ project, index }: AdvancedProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [7, -7])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-7, 7])

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
    <Link href={`/projects/${project.slug}`} className="block group">
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ 
          delay: index * 0.15, 
          duration: 0.8,
          ease: [0.33, 1, 0.68, 1],
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative overflow-hidden rounded-2xl bg-foreground/5 backdrop-blur-sm perspective-1000"
      >
        {/* Image Container with distortion */}
        <div className="relative aspect-[16/10] overflow-hidden bg-foreground/10">
          <ImageDistortion
            src={project.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800'}
            alt={project.title}
            className="w-full h-full"
          />
          
          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Content */}
        <div className="p-8" style={{ transform: 'translateZ(50px)' }}>
          <motion.div
            className="flex items-start justify-between mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
          >
            <div>
              <motion.h3
                className="text-fluid-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300"
                whileHover={{ letterSpacing: '0.02em' }}
              >
                {project.title}
              </motion.h3>
              <span className="text-xs uppercase tracking-wider text-muted">
                {project.year}
              </span>
            </div>
          </motion.div>

          <motion.p
            className="text-muted text-fluid-sm mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
          >
            {project.description}
          </motion.p>
          
          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
          >
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 + 0.4 + i * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                className="text-xs px-3 py-1.5 bg-foreground/10 rounded-full border border-foreground/10 transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Hover shine effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            transform: 'translateX(-100%)',
          }}
          whileHover={{
            transform: 'translateX(100%)',
            transition: { duration: 0.6, ease: 'easeInOut' },
          }}
        />
      </motion.article>
    </Link>
  )
}