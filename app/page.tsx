import { AnimatedHero } from '@/components/animations/AnimatedHero'
import { WorkPreviewSection } from '@/components/sections/WorkPreviewSection'
import { PremiumAboutSection } from '@/components/sections/PremiumAboutSection'
import { PremiumContactSection } from '@/components/sections/PremiumContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedHero />
      <WorkPreviewSection />
      <PremiumAboutSection />
      <PremiumContactSection />
    </main>
  )
}