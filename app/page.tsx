import { AnimatedHero } from '@/components/animations/AnimatedHero'
import { RetinaaProjectsSection } from '@/components/sections/RetinaaProjectsSection'
import { PremiumAboutSection } from '@/components/sections/PremiumAboutSection'
import { PremiumContactSection } from '@/components/sections/PremiumContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedHero />
      <RetinaaProjectsSection />
      <PremiumAboutSection />
      <PremiumContactSection />
    </main>
  )
}