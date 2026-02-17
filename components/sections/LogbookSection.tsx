'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import { useMemo } from 'react'

export function LogbookSection() {
  // Extract all images from projects (excluding cover images)
  const allProjectImages = useMemo(() => {
    const images: Array<{
      src: string
      projectSlug: string
      projectTitle: string
      index: number
    }> = []
    
    projects.forEach(project => {
      if (project.images && project.images.length > 1) {
        // Skip the first image (cover) and take the rest
        project.images.slice(1).forEach((img, idx) => {
          images.push({
            src: img,
            projectSlug: project.slug,
            projectTitle: project.title,
            index: idx + 1
          })
        })
      }
    })
    
    return images
  }, [])

  return (
    <section className="py-[100px] px-[60px] max-[768px]:px-[30px] max-[768px]:py-[60px] bg-black">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[14px] uppercase tracking-[2px] mb-[60px] text-[#00D9FF]"
        >
          Archive
        </motion.h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] max-[768px]:gap-[12px]">
          {allProjectImages.map((item, index) => (
            <Link key={`${item.projectSlug}-${index}`} href={`/projects/${item.projectSlug}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square overflow-hidden relative group cursor-pointer rounded-[4px]"
              >
                <img
                  src={item.src}
                  alt={`${item.projectTitle} - Image ${item.index}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with project title */}
                <div 
                  className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-[15px]"
                >
                  <p className="text-white text-[13px] text-center font-medium tracking-[0.5px]">
                    {item.projectTitle}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
