'use client'

import { ImmersiveProjectViewer } from '@/components/projects/ImmersiveProjectViewer'
import { projects } from '@/lib/projects'

export default function WorkPage() {
  return <ImmersiveProjectViewer projects={projects} />
}