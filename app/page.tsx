'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 md:px-16 py-32">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-8 block font-light">
              Visual Artist & Digital Practitioner
            </span>
            <h1 className="text-[clamp(3rem,10vw,8rem)] font-light mb-12 tracking-tight leading-[0.95] text-neutral-100">
              Sebastian
              <br />
              Llovera
            </h1>
            <p className="text-lg md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-16 font-light">
              Creating contemporary art at the intersection of
              physical and digital realms
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link href="/work">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-12 py-4 border border-neutral-600 rounded-full text-sm uppercase tracking-[0.2em] text-neutral-300 hover:border-neutral-400 hover:text-neutral-100 transition-all duration-300 font-light"
                >
                  View Work
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-6 block font-light">
              Selected Work
            </span>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-light tracking-tight text-neutral-100 mb-6">
              Recent Projects
            </h2>
          </motion.div>

          <div className="space-y-32">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-150px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href="/work" className="block group">
                  <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                    <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                      <motion.div
                        className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-900"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img
                          src={project.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200'}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                    <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="space-y-4">
                        <span className="text-xs uppercase tracking-[0.3em] text-neutral-600 font-light">
                          {project.year}
                        </span>
                        <h3 className="text-[clamp(1.5rem,4vw,3rem)] font-light tracking-tight leading-tight text-neutral-100 group-hover:text-neutral-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-neutral-400 leading-relaxed font-light">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-4">
                          {project.tags.slice(0, 3).map(tag => (
                            <span
                              key={tag}
                              className="text-xs px-4 py-2 border border-neutral-800 rounded-full text-neutral-500 font-light"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mt-32"
          >
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-4 bg-neutral-100 text-neutral-900 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all duration-300 font-medium"
              >
                View All Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-8 md:px-16 border-t border-neutral-900">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[clamp(2rem,6vw,5rem)] font-light mb-12 tracking-tight leading-tight text-neutral-100">
              Let's Collaborate
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
              Available for commissions, collaborations, and exhibitions.
            </p>
            <a href="mailto:hello@sebastianllovera.com">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-4 border border-neutral-600 rounded-full text-sm uppercase tracking-[0.2em] text-neutral-300 hover:border-neutral-400 hover:text-neutral-100 transition-all duration-300 font-light"
              >
                Get In Touch
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}