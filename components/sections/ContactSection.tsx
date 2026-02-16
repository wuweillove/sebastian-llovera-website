'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { AnimatedText } from '@/components/animations/AnimatedText'

export function ContactSection() {
  return (
    <section className="py-fluid-xl px-6 md:px-12 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
        style={{ backgroundSize: '200% 200%' }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <RevealOnScroll>
          <AnimatedText
            text="Let's Create Something Amazing"
            as="h2"
            className="text-fluid-3xl font-bold mb-8 tracking-tight"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="text-fluid-lg text-muted mb-12 leading-relaxed max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <motion.a
            href="mailto:hello@sebastianllovera.com"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="magnetic cursor-button inline-block px-12 py-5 bg-foreground text-background rounded-full font-medium text-fluid-base shadow-[0_10px_40px_rgba(250,250,250,0.1)] hover:shadow-[0_20px_60px_rgba(250,250,250,0.2)] transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <div className="mt-20 pt-12 border-t border-foreground/10">
            <div className="flex justify-center gap-12 flex-wrap">
              {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social, i) => (
                <motion.a
                  key={social}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  whileHover={{ y: -3, color: '#ff6b6b' }}
                  className="magnetic cursor-link text-muted hover:text-foreground transition-colors duration-300 text-sm uppercase tracking-widest"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}