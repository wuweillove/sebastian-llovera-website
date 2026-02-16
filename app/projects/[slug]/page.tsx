'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import { ProjectDetail } from '@/components/projects/ProjectDetail'
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string }>
}

export default function ProjectPage({ params }: Props) {
  const { slug } = use(params)
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-32 pb-20"
    >
      <ProjectDetail project={project} />
    </motion.div>
  )
}