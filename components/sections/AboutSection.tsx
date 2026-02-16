'use client'

import { motion } from 'framer-motion'
import { RevealText } from '@/components/animations/RevealText'
import { StaggeredFade } from '@/components/animations/StaggeredFade'
import { ParallaxSection } from '@/components/animations/ParallaxSection'

export function AboutSection() {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
  ]

  return (
    <section className="py-fluid-2xl px-6 md:px-12 bg-foreground/[0.02] relative overflow-hidden">
      <ParallaxSection speed={0.3} className="max-w-5xl mx-auto">
        <div className="mb-fluid-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-fluid-sm uppercase tracking-widest text-muted font-medium">
              About
            </span>
          </motion.div>

          <RevealText
            text="Crafting Digital Experiences"
            className="text-fluid-4xl font-bold mb-fluid-md tracking-tight"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-6 text-fluid-lg leading-relaxed mb-fluid-lg"
        >
          <p className="text-foreground/90">
            I specialize in creating contemporary web experiences that push the
            boundaries of design and interaction. With a focus on fluid
            animations and sophisticated user interfaces, I bring digital visions to
            life using cutting-edge technologies.
          </p>
          
          <p className="text-foreground/80">
            Every project is an opportunity to explore new techniques, refine my
            craft, and deliver exceptional results that exceed expectations.
          </p>
        </motion.div>

        <StaggeredFade className="grid md:grid-cols-3 gap-12" stagger={0.15}>
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center md:text-left">
              <motion.div 
                className="text-fluid-4xl font-bold mb-3 bg-gradient-to-br from-foreground to-foreground/50 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-muted text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </StaggeredFade>
      </ParallaxSection>
    </section>
  )
}