'use client'

import { motion } from 'framer-motion'
import { FullScreenProjectShowcase } from '@/components/projects/FullScreenProjectShowcase'
import { projects } from '@/lib/projects'

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <FullScreenProjectShowcase projects={projects} />
    </div>
  )
}