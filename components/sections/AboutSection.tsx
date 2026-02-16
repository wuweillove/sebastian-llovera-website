'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { TextReveal } from '@/components/animations/TextReveal'

export function AboutSection() {
  return (
    <section className="py-fluid-xl px-6 md:px-12 bg-gradient-to-b from-foreground/5 to-transparent relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <RevealOnScroll>
          <h2 className="text-fluid-3xl font-bold mb-fluid-md tracking-tight">
            Crafting Digital Experiences
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <motion.p
            className="text-fluid-lg text-muted leading-relaxed mb-12"
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            I specialize in creating contemporary web experiences that push the
            boundaries of design and interaction. With a focus on fluid
            animations and sophisticated user interfaces, I bring visions to
            life using cutting-edge technologies.
          </motion.p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-12 mb-fluid-lg">
          {[
            { label: 'Years Experience', value: '5+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Happy Clients', value: '30+' },
          ].map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={0.2 + i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-foreground/5 backdrop-blur-sm border border-foreground/10 hover:border-foreground/20 transition-all duration-300"
              >
                <TextReveal delay={0.3 + i * 0.1}>
                  <div className="text-fluid-3xl font-bold mb-2 bg-gradient-to-br from-foreground to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                </TextReveal>
                <div className="text-muted text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.5}>
          <div className="flex flex-wrap gap-4 justify-center">
            {['Next.js', 'TypeScript', 'Framer Motion', 'TailwindCSS', 'GSAP', 'Three.js'].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.05 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'rgba(255, 107, 107, 0.1)',
                  borderColor: 'rgba(255, 107, 107, 0.3)'
                }}
                className="px-5 py-2.5 rounded-full border border-foreground/20 text-sm font-medium backdrop-blur-sm transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}