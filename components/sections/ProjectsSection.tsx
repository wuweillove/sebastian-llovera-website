'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export function ProjectsSection() {
  return (
    <section className="py-[100px] px-[60px] max-[768px]:py-[80px] max-[768px]:px-[30px]">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[11px] uppercase tracking-[3px] mb-[60px]"
        style={{ color: '#00D9FF' }}
      >
        Selected Works
      </motion.div>

      {/* Projects - Vertically Stacked */}
      <div className="space-y-[60px]">
        {projects.map((project, index) => (
          <Link key={project.id} href={`/work?project=${index}`}>
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="cursor-pointer overflow-hidden group"
            >
              {/* Project Image */}
              <div className="overflow-hidden mb-[30px]">
                <motion.img
                  src={project.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600'}
                  alt={project.title}
                  className="w-full block"
                  style={{
                    filter: 'brightness(0.85)',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.6s ease',
                  }}
                  whileHover={{
                    scale: 1.03,
                    filter: 'brightness(1)',
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="py-[30px]">
                <h3 
                  className="text-[28px] md:text-[48px] font-semibold mb-[8px] text-white group-hover:text-[#00D9FF] transition-colors duration-300"
                  style={{ letterSpacing: '-0.5px' }}
                >
                  {project.title}
                </h3>
                <div 
                  className="text-[13px] uppercase tracking-[1px]"
                  style={{ color: '#00D9FF' }}
                >
                  {project.year}
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </section>
  )
}