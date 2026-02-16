'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { AnimatedText } from '@/components/animations/AnimatedText'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { TextReveal } from '@/components/animations/TextReveal'
import { Project } from '@/types'
import { useRef } from 'react'

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link href="/projects" className="magnetic cursor-link inline-block mb-12">
          <motion.div
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-muted hover:text-foreground transition-colors duration-300"
          >
            <motion.span
              animate={{ x: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              ←
            </motion.span>
            <span>Back to Projects</span>
          </motion.div>
        </Link>

        {/* Header */}
        <div className="mb-fluid-lg">
          <AnimatedText
            text={project.title}
            as="h1"
            className="text-fluid-4xl font-bold mb-6 tracking-tight"
          />

          <RevealOnScroll>
            <p className="text-fluid-lg text-muted mb-8 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </RevealOnScroll>

          {/* Meta Info */}
          <RevealOnScroll delay={0.2}>
            <div className="flex flex-wrap gap-6 text-sm mb-8">
              <div>
                <span className="text-muted uppercase tracking-widest block mb-2">Year</span>
                <span className="font-medium">{project.year}</span>
              </div>
              <div>
                <span className="text-muted uppercase tracking-widest block mb-2">Role</span>
                <span className="font-medium">Design & Development</span>
              </div>
              <div>
                <span className="text-muted uppercase tracking-widest block mb-2">Client</span>
                <span className="font-medium">Personal Project</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Tags */}
          <RevealOnScroll delay={0.3}>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    borderColor: 'rgba(255, 107, 107, 0.3)'
                  }}
                  className="px-4 py-2 bg-foreground/10 border border-foreground/20 rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Hero Image with Parallax */}
        <div ref={ref} className="mb-fluid-lg">
          <RevealOnScroll>
            <motion.div 
              style={{ y, opacity }}
              className="relative aspect-video rounded-3xl overflow-hidden bg-foreground/10 will-change-transform"
            >
              <motion.div 
                className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {project.image && (
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
          </RevealOnScroll>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-5 gap-12 mb-fluid-lg">
          <div className="md:col-span-3">
            <RevealOnScroll>
              <h2 className="text-fluid-2xl font-bold mb-6 tracking-tight">Overview</h2>
              <TextReveal>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>{project.longDescription || project.description}</p>
                  <p>
                    This project showcases the implementation of modern web technologies
                    combined with sophisticated design principles. Every interaction and
                    animation was carefully crafted to provide an exceptional user experience.
                  </p>
                  <p>
                    The result is a fluid, engaging platform that demonstrates the power
                    of contemporary web development when paired with thoughtful design.
                  </p>
                </div>
              </TextReveal>
            </RevealOnScroll>
          </div>

          <div className="md:col-span-2">
            <RevealOnScroll delay={0.2}>
              <div className="sticky top-32">
                <h3 className="text-fluid-xl font-bold mb-6 tracking-tight">Technologies</h3>
                <ul className="space-y-3">
                  {project.tags.map((tag, i) => (
                    <motion.li
                      key={tag}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-3 text-muted group cursor-default"
                    >
                      <motion.span 
                        className="w-2 h-2 bg-accent rounded-full"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="group-hover:text-foreground transition-colors duration-300">
                        {tag}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-foreground/10">
                  <h3 className="text-fluid-xl font-bold mb-6 tracking-tight">Features</h3>
                  <ul className="space-y-3 text-sm text-muted">
                    {[
                      'Responsive Design',
                      'Fluid Animations',
                      'Performance Optimized',
                      'Accessibility First',
                      'SEO Optimized',
                    ].map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-3 group cursor-default"
                      >
                        <span className="text-accent group-hover:scale-125 transition-transform duration-300">✓</span>
                        <span className="group-hover:text-foreground transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Gallery */}
        <div className="space-y-12 mb-fluid-lg">
          {[1, 2, 3].map((i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <motion.div 
                className="relative aspect-video rounded-3xl overflow-hidden bg-foreground/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/5" />
                <motion.div
                  className="absolute inset-0 bg-accent/10 mix-blend-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Next Project CTA */}
        <RevealOnScroll delay={0.4}>
          <div className="text-center py-20 border-t border-foreground/10">
            <p className="text-muted mb-8 uppercase tracking-widest text-sm">Next Project</p>
            <Link href="/projects" className="magnetic cursor-link group">
              <motion.h3 
                className="text-fluid-2xl font-bold group-hover:text-accent transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                View More Projects →
              </motion.h3>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}