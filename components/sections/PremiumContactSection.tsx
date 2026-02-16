'use client'

import { motion } from 'framer-motion'
import { WordByWordReveal } from '@/components/animations/WordByWordReveal'
import { TextReveal } from '@/components/animations/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ParallaxContainer } from '@/components/animations/ParallaxContainer'

const socialLinks = [
  { title: 'GitHub', href: '#', icon: 'GH' },
  { title: 'LinkedIn', href: '#', icon: 'LI' },
  { title: 'Twitter', href: '#', icon: 'TW' },
  { title: 'Instagram', href: '#', icon: 'IG' },
]

export function PremiumContactSection() {
  return (
    <section className="py-fluid-2xl px-6 md:px-12 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 107, 0.08) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <ParallaxContainer speed={0.2} className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-fluid-sm uppercase tracking-[0.2em] text-muted font-medium">
            Get In Touch
          </span>
        </motion.div>

        <WordByWordReveal
          text="Let's Create Something Amazing"
          className="text-fluid-4xl font-bold mb-8 tracking-tight"
        />

        <TextReveal delay={0.3}>
          <p className="text-fluid-lg text-muted mb-12 leading-relaxed max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </TextReveal>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <MagneticButton
            href="mailto:hello@sebastianllovera.com"
            className="bg-foreground text-background border-2 border-foreground text-fluid-base px-12 py-5 shadow-[0_10px_40px_rgba(250,250,250,0.1)] hover:shadow-[0_20px_60px_rgba(250,250,250,0.2)]"
            strength={0.5}
          >
            Start a Conversation
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex justify-center gap-6 flex-wrap mb-12"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.05 }}
              data-cursor="hover"
              className="group relative"
            >
              <motion.div
                className="w-12 h-12 rounded-full border-2 border-foreground/20 flex items-center justify-center text-sm font-bold group-hover:border-accent/50 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {link.icon}
              </motion.div>
              <span className="sr-only">{link.title}</span>
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background rounded-lg text-xs whitespace-nowrap pointer-events-none"
              >
                {link.title}
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.a
            href="mailto:hello@sebastianllovera.com"
            whileHover={{ letterSpacing: '0.05em', scale: 1.05 }}
            data-cursor="hover"
            className="text-fluid-sm text-muted hover:text-foreground transition-all duration-300"
          >
            hello@sebastianllovera.com
          </motion.a>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-32 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-12"
        />
      </ParallaxContainer>
    </section>
  )
}