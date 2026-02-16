'use client'

import { motion } from 'framer-motion'
import { TextReveal } from '@/components/animations/TextReveal'
import { ParallaxContainer } from '@/components/animations/ParallaxContainer'
import { WordByWordReveal } from '@/components/animations/WordByWordReveal'

interface StatProps {
  label: string
  value: string
  index: number
}

function AnimatedStat({ label, value, index }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="text-center p-8 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-accent/30 transition-all duration-300 group cursor-default"
    >
      <motion.div 
        className="text-fluid-4xl font-bold mb-3 bg-gradient-to-br from-foreground via-foreground to-accent bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {value}
      </motion.div>
      <div className="text-muted text-sm uppercase tracking-[0.2em] group-hover:text-foreground transition-colors">
        {label}
      </div>
      
      {/* Animated underline */}
      <motion.div
        className="w-12 h-[2px] bg-accent mx-auto mt-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
      />
    </motion.div>
  )
}

export function PremiumAboutSection() {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
  ]

  const technologies = [
    'Next.js', 'React', 'TypeScript', 'TailwindCSS', 
    'Framer Motion', 'GSAP', 'Three.js', 'Node.js'
  ]

  return (
    <section className="py-fluid-2xl px-6 md:px-12 bg-gradient-to-b from-foreground/[0.02] to-transparent relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <ParallaxContainer speed={0.3} className="max-w-5xl mx-auto relative z-10">
        <div className="mb-fluid-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-fluid-sm uppercase tracking-[0.2em] text-muted font-medium">
              About
            </span>
          </motion.div>

          <WordByWordReveal
            text="Crafting Digital Experiences"
            className="text-fluid-4xl font-bold mb-fluid-md tracking-tight"
          />
        </div>

        {/* Bio */}
        <div className="space-y-6 text-fluid-lg leading-relaxed mb-fluid-lg">
          <TextReveal>
            <p className="text-foreground/90">
              I specialize in creating contemporary web experiences that push the
              boundaries of design and interaction. With a focus on fluid
              animations and sophisticated user interfaces, I bring digital visions to
              life using cutting-edge technologies.
            </p>
          </TextReveal>
          
          <TextReveal delay={0.2}>
            <p className="text-foreground/80">
              Every project is an opportunity to explore new techniques, refine my
              craft, and deliver exceptional results that exceed expectations.
            </p>
          </TextReveal>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-fluid-lg">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} {...stat} index={i} />
          ))}
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-fluid-xl font-bold mb-8 text-center tracking-tight">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  backgroundColor: 'rgba(255, 107, 107, 0.1)',
                  borderColor: 'rgba(255, 107, 107, 0.3)',
                }}
                className="px-6 py-3 rounded-full border border-foreground/20 text-sm font-medium backdrop-blur-sm transition-all duration-300 cursor-default group"
              >
                <span className="group-hover:text-accent transition-colors">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </ParallaxContainer>
    </section>
  )
}