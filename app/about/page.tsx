'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-8 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-6 block font-light">
            About
          </span>
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-light mb-12 tracking-tight leading-[1.1] text-neutral-100">
            Visual Artist &
            <br />
            Digital Practitioner
          </h1>
        </motion.div>

        {/* Bio */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="md:col-span-8"
          >
            <div className="text-lg md:text-xl text-neutral-400 leading-relaxed space-y-6 font-light">
              <p>
                Sebastian Llovera is a Venezuelan visual artist working at the intersection
                of traditional art practices and contemporary digital technologies. His work
                explores themes of identity, memory, and technological mediation.
              </p>
              <p>
                With an MFA from the University of Michigan Stamps School of Art & Design,
                Sebastian's practice encompasses installation, digital media, and hybrid
                forms that challenge conventional boundaries between physical and virtual spaces.
              </p>
              <p>
                His work has been exhibited internationally and supported by residency programs
                focused on emerging technologies and contemporary art practices.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:col-span-4"
          >
            <div className="space-y-12">
              {/* Education */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-4 font-light">Education</h3>
                <ul className="space-y-3 text-neutral-300 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-600 mt-1">✦</span>
                    <span>MFA, University of Michigan Stamps School of Art & Design</span>
                  </li>
                </ul>
              </div>

              {/* Selected Exhibitions */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-4 font-light">Selected Exhibitions</h3>
                <ul className="space-y-3 text-neutral-300 font-light text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-600 mt-1">✦</span>
                    <span>Contemporary Art Fair, 2024</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-600 mt-1">✦</span>
                    <span>Digital Futures Exhibition, 2023</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-600 mt-1">✦</span>
                    <span>MFA Thesis Exhibition, 2023</span>
                  </li>
                </ul>
              </div>

              {/* Recognition */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-4 font-light">Recognition</h3>
                <ul className="space-y-3 text-neutral-300 font-light text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-600 mt-1">✦</span>
                    <span>Artist Residency Program, 2024</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-600 mt-1">✦</span>
                    <span>Emerging Artist Grant, 2023</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="border-t border-neutral-800 pt-12"
        >
          <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-8 font-light">Contact</h3>
          <div className="text-neutral-300 font-light space-y-4">
            <p>
              <a href="mailto:hello@sebastianllovera.com" className="hover:text-neutral-100 transition-colors">
                hello@sebastianllovera.com
              </a>
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-neutral-100 transition-colors">Instagram</a>
              <a href="#" className="hover:text-neutral-100 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-neutral-100 transition-colors">GitHub</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}