import { AnimatedHero } from '@/components/animations/AnimatedHero'
import { PremiumProjectsSection } from '@/components/sections/PremiumProjectsSection'
import { PremiumAboutSection } from '@/components/sections/PremiumAboutSection'
import { PremiumContactSection } from '@/components/sections/PremiumContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedHero />
      <PremiumProjectsSection />
      <PremiumAboutSection />
      <PremiumContactSection />
    </main>
  )
}