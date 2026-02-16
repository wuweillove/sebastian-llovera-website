'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { RevealText } from '@/components/animations/RevealText'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ParallaxSection } from '@/components/animations/ParallaxSection'

export function AdvancedHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const blur = useTransform(scrollYProgress, [0, 1], [0, 10])

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y, opacity, filter: `blur(${blur}px)` }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-fluid-sm uppercase tracking-widest text-muted font-medium">
            Contemporary Design Studio
          </span>
        </motion.div>

        <RevealText
          text="Creating Digital Experiences"
          className="text-fluid-5xl md:text-[clamp(3rem,10vw,9rem)] font-bold mb-8 leading-extra-tight tracking-tighter"
          duration={0.08}
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-fluid-lg text-muted max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Crafting sophisticated web experiences with fluid animations,
          cutting-edge technologies, and meticulous attention to detail
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <MagneticButton
            href="/projects"
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted">Scroll</span>
          <motion.div
            className="w-[2px] h-12 bg-gradient-to-b from-muted to-transparent"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}