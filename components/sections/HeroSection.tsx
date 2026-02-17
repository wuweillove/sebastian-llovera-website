'use client'

import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section 
      className="h-screen flex items-center justify-center px-[40px] text-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="max-w-[1200px] w-full">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-[11px] uppercase tracking-[4px] mb-[30px]"
          style={{ color: '#00D9FF' }}
        >
          Visual Artist & Creative Technologist
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-bold mb-[30px] text-white"
          style={{
            fontSize: 'clamp(50px, 10vw, 100px)',
            letterSpacing: '-2px',
            lineHeight: '1.1',
          }}
        >
          Creating at the Intersection
          <br />
          of Art & Technology
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-[18px] md:text-[20px] mx-auto"
          style={{
            color: '#999999',
            lineHeight: '1.6',
            maxWidth: '700px',
          }}
        >
          Contemporary visual artist working with digital media, installation,
          and interactive experiences. Based between Venezuela and the United States.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-[50px]"
        >
          <Link href="/work">
            <motion.button
              whileHover={{ backgroundColor: '#00D9FF', color: '#000000' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="px-[40px] py-[16px] border rounded-full uppercase text-[13px] font-medium tracking-[1px] transition-all duration-300"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: '#FFFFFF',
              }}
            >
              View Work
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

import Link from 'next/link'