'use client'

import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Project } from '@/types'
import { useRef, useState } from 'react'
import { HoverImage } from '@/components/ui/HoverImage'

interface PremiumProjectCardProps {
  project: Project
  index: number
}

export function PremiumProjectCard({ project, index }: PremiumProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5])

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
    setIsHovered(false)
  }

  return (
    <Link 
      href={`/projects/${project.slug}`} 
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
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
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative overflow-hidden rounded-3xl bg-foreground/5 backdrop-blur-sm perspective-1000"
      >
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <HoverImage
            src={project.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800'}
            alt={project.title}
            className="w-full h-full"
          />
        </div>

        {/* Content with 3D transform */}
        <motion.div 
          className="p-8"
          style={{ transform: 'translateZ(50px)' }}
        >
          {/* Meta info */}
          <motion.div
            className="flex items-center justify-between mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              {project.year}
            </span>
            <motion.div
              className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span>View</span>
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                →
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-fluid-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300"
            whileHover={{ letterSpacing: '0.02em' }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-muted text-fluid-sm mb-6 leading-relaxed line-clamp-2"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {project.description}
          </motion.p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 + 0.4 + i * 0.05, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 107, 107, 0.1)',
                  borderColor: 'rgba(255, 107, 107, 0.3)',
                }}
                className="text-xs px-3 py-1.5 bg-foreground/10 border border-foreground/10 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,107,107,0.2), transparent)',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: isHovered ? ['0% 0%', '200% 0%'] : '0% 0%',
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: 'linear',
            }}
          />
        </motion.div>
      </motion.article>
    </Link>
  )
}