'use client'

import { ProjectViewer } from '@/components/projects/ProjectViewer'
import { projects } from '@/lib/projects'

export default function WorkPage() {
  return <ProjectViewer projects={projects} initialIndex={0} />
}