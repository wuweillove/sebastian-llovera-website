'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { TextReveal } from './TextReveal'
import { WordByWordReveal } from './WordByWordReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'

export function AnimatedHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Smooth spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  // Multiple parallax layers
  const y1 = useTransform(smoothProgress, [0, 1], ['0%', '20%'])
  const y2 = useTransform(smoothProgress, [0, 1], ['0%', '40%'])
  const y3 = useTransform(smoothProgress, [0, 1], ['0%', '60%'])
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.5, 0])
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.95])
  const blur = useTransform(smoothProgress, [0, 1], [0, 10])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background layers */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent"
      />
      
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,107,0.15),transparent_50%)]"
      />

      <motion.div
        style={{ y: y3, opacity, filter: `blur(${blur}px)` }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"
      />

      {/* Animated noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Content with parallax */}
      <motion.div
        style={{ y: y2, opacity, scale }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-fluid-sm uppercase tracking-[0.2em] text-muted font-medium">
            Contemporary Design Studio
          </span>
        </motion.div>

        <WordByWordReveal
          text="Creating Digital Experiences"
          className="text-fluid-4xl md:text-[clamp(3rem,10vw,9rem)] font-bold mb-8 leading-[0.95] tracking-[-0.02em]"
        />
        
        <TextReveal delay={0.8}>
          <p className="text-fluid-lg text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            Crafting sophisticated web experiences with fluid animations,
            cutting-edge technologies, and meticulous attention to detail
          </p>
        </TextReveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <MagneticButton
            href="/work"
            className="bg-foreground text-background border-2 border-foreground"
          >
            Explore Work
          </MagneticButton>
          <MagneticButton
            href="/about"
            className="border-2 border-foreground/20 hover:border-foreground/40"
          >
            About Me
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted">Scroll</span>
          <motion.div
            className="w-[2px] h-16 bg-gradient-to-b from-muted to-transparent"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}