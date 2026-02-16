'use client'

import { motion } from 'framer-motion'
import { ScrollTrigger } from '@/components/animations/ScrollTrigger'

export function AboutSection() {
  return (
    <section className="py-fluid-xl px-6 md:px-12 bg-foreground/5">
      <div className="max-w-5xl mx-auto">
        <ScrollTrigger>
          <h2 className="text-fluid-3xl font-bold mb-fluid-md">
            Crafting Digital Experiences
          </h2>
        </ScrollTrigger>

        <ScrollTrigger delay={0.1}>
          <p className="text-fluid-lg text-muted leading-relaxed mb-8">
            I specialize in creating contemporary web experiences that push the
            boundaries of design and interaction. With a focus on fluid
            animations and sophisticated user interfaces, I bring visions to
            life using cutting-edge technologies.
          </p>
        </ScrollTrigger>

        <ScrollTrigger delay={0.2}>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Happy Clients', value: '30+' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-fluid-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollTrigger>
      </div>
    </section>
  )
}