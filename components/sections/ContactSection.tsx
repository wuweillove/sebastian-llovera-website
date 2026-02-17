'use client'

import { motion } from 'framer-motion'

export function ContactSection() {
  return (
    <section 
      className="py-[100px] px-[60px] max-[768px]:px-[30px] border-t"
      style={{ borderColor: '#222222' }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-[60px]">
          {/* Column 1 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[11px] uppercase tracking-[2px] mb-[20px]" style={{ color: '#666666' }}>
              Contact
            </h3>
            <a 
              href="mailto:hello@sebastianllovera.com"
              className="block text-[18px] mb-[12px] transition-colors duration-300"
              style={{ color: '#00D9FF' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#00D9FF'}
            >
              hello@sebastianllovera.com
            </a>
          </motion.div>

          {/* Column 2 - Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h3 className="text-[11px] uppercase tracking-[2px] mb-[20px]" style={{ color: '#666666' }}>
              Follow
            </h3>
            <div className="space-y-[12px]">
              {['Instagram', 'LinkedIn', 'GitHub'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="block text-[16px] transition-colors duration-300"
                  style={{ color: '#999999', lineHeight: '1.6' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#999999'}
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 3 - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-[11px] uppercase tracking-[2px] mb-[20px]" style={{ color: '#666666' }}>
              Location
            </h3>
            <p className="text-[16px]" style={{ color: '#999999', lineHeight: '1.6' }}>
              Based between
              <br />
              Venezuela & United States
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-[80px] text-center text-[13px]" 
          style={{ color: '#666666' }}
        >
          © {new Date().getFullYear()} Sebastian Llovera. All rights reserved.
        </motion.div>
      </div>
    </section>
  )
}