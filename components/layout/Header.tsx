'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <nav className="px-[60px] py-[40px] md:px-[60px] md:py-[40px] max-[768px]:px-[30px] max-[768px]:py-[30px] flex items-center justify-between">
        {/* Logo - Fixed to show full name */}
        <Link href="/">
          <motion.div
            whileHover={{ opacity: 0.7 }}
            className="uppercase text-[14px] font-semibold tracking-[1px] text-white whitespace-nowrap"
            style={{ 
              minWidth: 'fit-content',
              overflow: 'visible',
            }}
          >
            Sebastián Llovera
          </motion.div>
        </Link>

        {/* Navigation Links - Removed "logbook" label, adjusted spacing */}
        <div className="flex items-center gap-[50px] max-[768px]:gap-[30px]">
          {[{ name: 'WORK', href: '/work' }, { name: 'ABOUT', href: '/about' }].map(item => (
            <Link key={item.name} href={item.href}>
              <motion.div
                className="relative text-[13px] font-medium uppercase tracking-[1px] transition-colors duration-300"
                style={{ color: pathname === item.href ? '#00D9FF' : '#FFFFFF' }}
                whileHover={{ 
                  color: '#00D9FF',
                  y: -2 
                }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-[#00D9FF]"
                    initial={false}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
