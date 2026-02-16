'use client'

import { motion } from 'framer-motion'
import { RevealText } from '@/components/animations/RevealText'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { AnimatedLink } from '@/components/ui/AnimatedLink'
import { ParallaxSection } from '@/components/animations/ParallaxSection'

const socialLinks = [
  { title: 'GitHub', href: '#' },
  { title: 'LinkedIn', href: '#' },
  { title: 'Twitter', href: '#' },
  { title: 'Instagram', href: '#' },
]

export function ContactSection() {
  return (
    <section className="py-fluid-2xl px-6 md:px-12 relative overflow-hidden">
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 107, 0.05) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <ParallaxSection speed={0.2} className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-fluid-sm uppercase tracking-widest text-muted font-medium">
            Get In Touch
          </span>
        </motion.div>

        <RevealText
          text="Let's Create Something Amazing"
          className="text-fluid-4xl font-bold mb-8 tracking-tight"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-fluid-lg text-muted mb-12 leading-relaxed max-w-2xl mx-auto"
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <MagneticButton
            href="mailto:hello@sebastianllovera.com"
            className="bg-foreground text-background border-2 border-foreground text-fluid-base px-12 py-5"
            strength={0.4}
          >
            Start a Conversation
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex justify-center gap-8 flex-wrap mb-12"
        >
          {socialLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
            >
              <AnimatedLink
                href={link.href}
                className="text-muted hover:text-foreground transition-colors text-sm uppercase tracking-wider"
              >
                {link.title}
              </AnimatedLink>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a
            href="mailto:hello@sebastianllovera.com"
            className="text-fluid-sm text-muted hover:text-foreground transition-colors"
          >
            hello@sebastianllovera.com
          </a>
        </motion.div>
      </ParallaxSection>
    </section>
  )
}