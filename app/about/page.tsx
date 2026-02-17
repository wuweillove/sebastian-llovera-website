'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-[150px] pb-[100px] px-[60px] max-[768px]:px-[30px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-[80px]"
        >
          <div className="text-[11px] uppercase tracking-[3px] mb-[40px]" style={{ color: '#00D9FF' }}>
            About
          </div>
          <h1 
            className="text-[60px] max-[768px]:text-[40px] font-bold mb-[40px]"
            style={{ letterSpacing: '-2px', lineHeight: '1.1' }}
          >
            Visual Artist &
            <br />
            Creative Technologist
          </h1>
        </motion.div>

        {/* Bio Grid */}
        <div className="grid md:grid-cols-3 gap-[60px] mb-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="md:col-span-2"
          >
            <div className="text-[18px] space-y-[24px]" style={{ color: '#bbbbbb', lineHeight: '1.8' }}>
              <p>
                Sebastian Llovera is a Venezuelan visual artist whose practice exists at the
                intersection of traditional artistic methodologies and contemporary digital
                technologies. His work investigates themes of memory, identity, and the ways
                technology mediates human experience.
              </p>
              <p>
                With an MFA from the University of Michigan Stamps School of Art & Design,
                Sebastian creates immersive installations, digital compositions, and
                interactive experiences that challenge conventional boundaries between
                physical and virtual spaces.
              </p>
              <p>
                His work has been exhibited internationally and supported through various
                residency programs focused on emerging technologies and contemporary art practices.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-[50px]"
          >
            {/* Education */}
            <div>
              <h3 className="text-[11px] uppercase tracking-[2px] mb-[20px]" style={{ color: '#666666' }}>
                Education
              </h3>
              <div className="space-y-[12px] text-[16px]" style={{ color: '#999999', lineHeight: '1.6' }}>
                <div className="flex items-start gap-[12px]">
                  <span style={{ color: '#00D9FF' }}>✦</span>
                  <span>MFA, University of Michigan Stamps School of Art & Design</span>
                </div>
              </div>
            </div>

            {/* Selected Exhibitions */}
            <div>
              <h3 className="text-[11px] uppercase tracking-[2px] mb-[20px]" style={{ color: '#666666' }}>
                Selected Exhibitions
              </h3>
              <div className="space-y-[12px] text-[16px]" style={{ color: '#999999', lineHeight: '1.6' }}>
                <div className="flex items-start gap-[12px]">
                  <span style={{ color: '#00D9FF' }}>✦</span>
                  <span>Contemporary Art Fair, 2024</span>
                </div>
                <div className="flex items-start gap-[12px]">
                  <span style={{ color: '#00D9FF' }}>✦</span>
                  <span>Digital Futures Exhibition, 2023</span>
                </div>
                <div className="flex items-start gap-[12px]">
                  <span style={{ color: '#00D9FF' }}>✦</span>
                  <span>MFA Thesis Exhibition, 2023</span>
                </div>
              </div>
            </div>

            {/* Recognition */}
            <div>
              <h3 className="text-[11px] uppercase tracking-[2px] mb-[20px]" style={{ color: '#666666' }}>
                Recognition
              </h3>
              <div className="space-y-[12px] text-[16px]" style={{ color: '#999999', lineHeight: '1.6' }}>
                <div className="flex items-start gap-[12px]">
                  <span style={{ color: '#00D9FF' }}>✦</span>
                  <span>Artist Residency Program, 2024</span>
                </div>
                <div className="flex items-start gap-[12px]">
                  <span style={{ color: '#00D9FF' }}>✦</span>
                  <span>Emerging Artist Grant, 2023</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="border-t pt-[60px]"
          style={{ borderColor: '#222222' }}
        >
          <h3 className="text-[11px] uppercase tracking-[2px] mb-[30px]" style={{ color: '#666666' }}>
            Contact
          </h3>
          <div className="space-y-[20px]">
            <a 
              href="mailto:hello@sebastianllovera.com"
              className="block text-[18px] transition-colors duration-300"
              style={{ color: '#00D9FF' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#00D9FF'}
            >
              hello@sebastianllovera.com
            </a>
            <div className="flex gap-[30px] text-[16px]">
              {['Instagram', 'LinkedIn', 'GitHub'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="transition-colors duration-300"
                  style={{ color: '#00D9FF' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#00D9FF'}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}