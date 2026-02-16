'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedText } from '@/components/animations/AnimatedText'
import { useRef } from 'react'

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <AnimatedText
          text="Contemporary Design"
          className="text-fluid-4xl md:text-[clamp(3rem,8vw,8rem)] font-bold mb-6 leading-tight"
          staggerDelay={0.05}
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-fluid-lg text-muted max-w-2xl mx-auto mb-12"
        >
          Crafting fluid web experiences with sophisticated animations and
          cutting-edge technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <a
            href="/projects"
            className="cursor-hover px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform"
          >
            View Work
          </a>
          <a
            href="/about"
            className="cursor-hover px-8 py-4 border border-foreground/20 rounded-full font-medium hover:border-foreground/40 hover:scale-105 transition-all"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-foreground/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}