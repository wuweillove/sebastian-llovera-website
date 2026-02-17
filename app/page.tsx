import { AnimatedHero } from '@/components/animations/AnimatedHero'
import { FullScreenProjectsSection } from '@/components/sections/FullScreenProjectsSection'
import { PremiumAboutSection } from '@/components/sections/PremiumAboutSection'
import { PremiumContactSection } from '@/components/sections/PremiumContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedHero />
      <FullScreenProjectsSection />
      <PremiumAboutSection />
      <PremiumContactSection />
    </main>
  )
}