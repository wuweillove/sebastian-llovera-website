'use client'

import { FullScreenProjectSlider } from '@/components/projects/FullScreenProjectSlider'
import { projects } from '@/lib/projects'

export default function WorkPage() {
  return <FullScreenProjectSlider projects={projects} />
}