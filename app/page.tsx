import { AnimatedHero } from '@/components/animations/AnimatedHero'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedHero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}