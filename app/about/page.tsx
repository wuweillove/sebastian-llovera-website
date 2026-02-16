'use client'

import { motion } from 'framer-motion'
import { AnimatedText } from '@/components/animations/AnimatedText'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { TextReveal } from '@/components/animations/TextReveal'
import { LetterReveal } from '@/components/animations/LetterReveal'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <AnimatedText
            text="About"
            as="h1"
            className="text-fluid-4xl font-bold mb-4 tracking-tight"
          />
          <div className="w-20 h-1 bg-accent mb-fluid-md" />
        </motion.div>

        {/* Introduction */}
        <RevealOnScroll>
          <div className="space-y-6 text-fluid-lg leading-relaxed mb-fluid-lg">
            <TextReveal>
              <p className="text-foreground/90">
                Sebastian Llovera is a contemporary designer and developer
                specializing in creating fluid, engaging web experiences that
                push the boundaries of modern design.
              </p>
            </TextReveal>
            
            <TextReveal delay={0.1}>
              <p className="text-foreground/80">
                With a focus on sophisticated animations, thoughtful
                interactions, and cutting-edge technologies, I craft digital
                experiences that are both beautiful and functional.
              </p>
            </TextReveal>

            <TextReveal delay={0.2}>
              <p className="text-foreground/80">
                My work combines the latest web technologies—Next.js,
                TailwindCSS, and Framer Motion—with a keen eye for design
                details and user experience.
              </p>
            </TextReveal>
          </div>
        </RevealOnScroll>

        {/* Expertise Section */}
        <RevealOnScroll delay={0.3}>
          <div className="mb-fluid-lg">
            <h2 className="text-fluid-2xl font-bold mb-12 tracking-tight">
              <LetterReveal text="Expertise" />
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: 'Design',
                  skills: [
                    'UI/UX Design',
                    'Visual Design',
                    'Animation Design',
                    'Brand Identity',
                    'Design Systems',
                    'Prototyping',
                  ],
                },
                {
                  title: 'Development',
                  skills: [
                    'Next.js & React',
                    'TypeScript',
                    'TailwindCSS',
                    'Framer Motion',
                    'GSAP',
                    'Three.js',
                  ],
                },
              ].map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: i * 0.15, 
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="space-y-6 p-8 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-foreground/20 transition-all duration-300"
                >
                  <h3 className="text-fluid-xl font-semibold tracking-tight">{category.title}</h3>
                  <ul className="space-y-4">
                    {category.skills.map((skill, j) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (i * 0.15) + (j * 0.05) + 0.2 }}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-3 text-muted cursor-default group"
                      >
                        <motion.span 
                          className="w-2 h-2 bg-accent rounded-full"
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="group-hover:text-foreground transition-colors duration-300">{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Philosophy Section */}
        <RevealOnScroll delay={0.4}>
          <div className="mb-fluid-lg p-12 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
            <h2 className="text-fluid-2xl font-bold mb-8 tracking-tight">
              <LetterReveal text="Design Philosophy" delay={0.1} />
            </h2>
            <div className="space-y-6 text-fluid-base leading-relaxed text-foreground/80">
              <TextReveal delay={0.2}>
                <p>
                  I believe great design is invisible—it should feel natural and effortless.
                  Every interaction, every animation, every detail should serve a purpose
                  and enhance the user's journey.
                </p>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p>
                  By combining cutting-edge technology with timeless design principles,
                  I create experiences that are not only visually stunning but also
                  highly functional and accessible to all users.
                </p>
              </TextReveal>
            </div>
          </div>
        </RevealOnScroll>

        {/* CTA */}
        <RevealOnScroll delay={0.5}>
          <div className="text-center pt-12 border-t border-foreground/10">
            <motion.p
              className="text-fluid-lg text-muted mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Interested in working together?
            </motion.p>
            <motion.a
              href="mailto:hello@sebastianllovera.com"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="magnetic cursor-button inline-block px-10 py-4 bg-foreground text-background rounded-full font-medium transition-all duration-300 hover:shadow-[0_10px_40px_rgba(250,250,250,0.2)]"
            >
              Let's Talk
            </motion.a>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}