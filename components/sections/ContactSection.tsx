'use client'

import { motion } from 'framer-motion'
import { ScrollTrigger } from '@/components/animations/ScrollTrigger'

export function ContactSection() {
  return (
    <section className="py-fluid-xl px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollTrigger>
          <h2 className="text-fluid-3xl font-bold mb-6">
            Let's Create Something Amazing
          </h2>
        </ScrollTrigger>

        <ScrollTrigger delay={0.1}>
          <p className="text-fluid-lg text-muted mb-12">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </ScrollTrigger>

        <ScrollTrigger delay={0.2}>
          <motion.a
            href="mailto:hello@sebastianllovera.com"
            whileHover={{ scale: 1.05 }}
            className="cursor-hover inline-block px-12 py-5 bg-foreground text-background rounded-full font-medium text-fluid-base"
          >
            Get In Touch
          </motion.a>
        </ScrollTrigger>

        <ScrollTrigger delay={0.3}>
          <div className="mt-16 flex justify-center gap-8">
            {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ y: -2 }}
                className="cursor-hover text-muted hover:text-foreground transition-colors text-sm"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </ScrollTrigger>
      </div>
    </section>
  )
}