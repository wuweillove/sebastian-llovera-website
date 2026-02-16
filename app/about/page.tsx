'use client'

import { motion } from 'framer-motion'
import { AnimatedText } from '@/components/animations/AnimatedText'
import { ScrollTrigger } from '@/components/animations/ScrollTrigger'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText
            text="About"
            className="text-fluid-4xl font-bold mb-fluid-md"
          />
        </motion.div>

        <ScrollTrigger>
          <div className="space-y-8 text-fluid-lg leading-relaxed">
            <p className="text-foreground/90">
              Sebastian Llovera is a contemporary designer and developer
              specializing in creating fluid, engaging web experiences that
              push the boundaries of modern design.
            </p>
            
            <p className="text-foreground/80">
              With a focus on sophisticated animations, thoughtful
              interactions, and cutting-edge technologies, I craft digital
              experiences that are both beautiful and functional.
            </p>

            <p className="text-foreground/80">
              My work combines the latest web technologies—Next.js,
              TailwindCSS, and Framer Motion—with a keen eye for design
              details and user experience.
            </p>
          </div>
        </ScrollTrigger>

        <ScrollTrigger delay={0.2}>
          <div className="mt-fluid-lg">
            <h2 className="text-fluid-2xl font-bold mb-8">Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Design',
                  skills: ['UI/UX Design', 'Visual Design', 'Animation Design', 'Brand Identity'],
                },
                {
                  title: 'Development',
                  skills: ['Next.js & React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
                },
              ].map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="space-y-4"
                >
                  <h3 className="text-fluid-xl font-semibold">{category.title}</h3>
                  <ul className="space-y-2 text-muted">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  )
}