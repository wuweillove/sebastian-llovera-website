'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { AnimatedText } from '@/components/animations/AnimatedText'
import { useRef } from 'react'

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Smooth spring physics for parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Multiple parallax layers with different speeds
  const y1 = useTransform(smoothProgress, [0, 1], ['0%', '30%'])
  const y2 = useTransform(smoothProgress, [0, 1], ['0%', '50%'])
  const y3 = useTransform(smoothProgress, [0, 1], ['0%', '80%'])
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.6, 0])
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.1])
  const blur = useTransform(smoothProgress, [0, 1], [0, 10])

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden will-change-transform"
    >
      {/* Background layers with parallax */}
      <div className="absolute inset-0">
        {/* Layer 1 - Slowest */}
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent"
        />
        
        {/* Layer 2 - Medium */}
        <motion.div
          style={{ y: y2, opacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,107,0.1),transparent_50%)]"
        />

        {/* Layer 3 - Fastest */}
        <motion.div
          style={{ y: y3, opacity, filter: `blur(${blur}px)` }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"
        />
      </div>

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: y2, opacity, scale }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <AnimatedText
            text="Contemporary Design"
            className="text-fluid-4xl md:text-[clamp(3rem,8vw,8rem)] font-bold mb-6 leading-[0.95] tracking-tight"
            staggerDelay={0.04}
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-fluid-lg text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting fluid web experiences with sophisticated animations and
          cutting-edge technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="magnetic cursor-button px-8 py-4 bg-foreground text-background rounded-full font-medium transition-all duration-300 hover:shadow-[0_10px_40px_rgba(250,250,250,0.2)]"
          >
            View Work
          </motion.a>
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="magnetic cursor-button px-8 py-4 border-2 border-foreground/20 rounded-full font-medium transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5"
          >
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2 backdrop-blur-sm"
        >
          <motion.div 
            className="w-1 h-2 bg-foreground/30 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
        <motion.p 
          className="text-xs text-muted mt-3 uppercase tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          Scroll
        </motion.p>
      </motion.div>
    </section>
  )
}