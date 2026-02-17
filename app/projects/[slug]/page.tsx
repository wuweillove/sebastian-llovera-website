'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import { useEffect, useState } from 'react'

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const project = projects.find(p => p.slug === params.slug)

  useEffect(() => {
    if (!project) {
      router.push('/')
    }
  }, [project, router])

  if (!project) {
    return null
  }

  const images = project.images || [project.image || '']
  const hasMultipleImages = images.length > 1

  const goToNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(prev => prev + 1)
    }
  }

  const goToPrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1)
    }
  }

  return (
    <div className="min-h-screen bg-black pt-[140px] pb-[100px] px-[60px] max-[768px]:px-[30px] max-[768px]:pt-[120px]">
      {/* Back Button */}
      <motion.button
        onClick={() => router.back()}
        whileHover={{ x: -5 }}
        className="mb-[40px] text-[13px] uppercase tracking-[1px] text-[#00D9FF] flex items-center gap-[10px]"
      >
        <span>←</span> Back
      </motion.button>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] max-[768px]:gap-[40px]">
          {/* Left Column - Images */}
          <div>
            {/* Main Image Display with Navigation */}
            <div className="relative mb-[20px]">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Image Navigation Arrows */}
              {hasMultipleImages && (
                <>
                  {currentImageIndex > 0 && (
                    <motion.button
                      onClick={goToPrevImage}
                      whileHover={{ scale: 1.1, backgroundColor: '#00D9FF', color: '#000000' }}
                      className="absolute left-[20px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full border text-white"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      ←
                    </motion.button>
                  )}
                  
                  {currentImageIndex < images.length - 1 && (
                    <motion.button
                      onClick={goToNextImage}
                      whileHover={{ scale: 1.1, backgroundColor: '#00D9FF', color: '#000000' }}
                      className="absolute right-[20px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full border text-white"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      →
                    </motion.button>
                  )}
                </>
              )}
            </div>

            {/* Thumbnail Gallery - Horizontal scroll */}
            {hasMultipleImages && (
              <div className="flex gap-[10px] overflow-x-auto pb-[10px]">
                {images.map((img, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    whileHover={{ scale: 1.05 }}
                    className="flex-shrink-0 w-[80px] h-[80px] overflow-hidden rounded-[4px]"
                    style={{
                      border: idx === currentImageIndex ? '2px solid #00D9FF' : '2px solid transparent',
                      opacity: idx === currentImageIndex ? 1 : 0.6,
                    }}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Project Info */}
          <div>
            {/* Year */}
            <div className="text-[14px] uppercase tracking-[2px] mb-[20px] text-[#00D9FF]">
              {project.year}
            </div>

            {/* Title */}
            <h1 className="text-[48px] max-[768px]:text-[36px] font-bold mb-[20px] text-white" style={{ letterSpacing: '-2px' }}>
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-[18px] mb-[40px] text-[#bbbbbb]" style={{ lineHeight: '1.8' }}>
              {project.longDescription || project.description}
            </p>

            {/* Details Grid */}
            <div className="space-y-[30px] mb-[40px]">
              {project.client && (
                <div>
                  <h3 className="text-[11px] uppercase tracking-[3px] mb-[10px] text-[#666666]">
                    Client
                  </h3>
                  <p className="text-[16px] text-[#999999]">{project.client}</p>
                </div>
              )}

              {project.role && (
                <div>
                  <h3 className="text-[11px] uppercase tracking-[3px] mb-[10px] text-[#666666]">
                    Role
                  </h3>
                  <p className="text-[16px] text-[#999999]">{project.role}</p>
                </div>
              )}

              <div>
                <h3 className="text-[11px] uppercase tracking-[3px] mb-[10px] text-[#666666]">
                  Medium & Technologies
                </h3>
                <div className="flex flex-wrap gap-[8px]">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-[12px] py-[6px] text-[11px] uppercase tracking-[1px] rounded-full"
                      style={{
                        backgroundColor: 'rgba(0, 217, 255, 0.1)',
                        color: '#00D9FF',
                        border: '1px solid rgba(0, 217, 255, 0.3)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation to other projects */}
            <div className="pt-[40px] border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
              <h3 className="text-[11px] uppercase tracking-[3px] mb-[20px] text-[#666666]">
                View All Projects
              </h3>
              <motion.button
                onClick={() => router.push('/work')}
                whileHover={{ backgroundColor: '#00D9FF', color: '#000000' }}
                className="px-[24px] py-[12px] text-[13px] uppercase tracking-[1px] rounded-full border transition-all duration-300"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: '#00D9FF',
                  color: '#00D9FF',
                }}
              >
                Browse Work
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
