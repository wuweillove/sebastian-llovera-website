import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AdvancedCursor } from '@/components/cursor/AdvancedCursor'
import { Navigation } from '@/components/navigation/Navigation'
import { PageTransitionEffect } from '@/components/animations/PageTransitionEffect'
import { SmoothScroll } from '@/components/animations/SmoothScroll'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'Sebastian Llovera | Contemporary Design & Development',
  description: 'Portfolio of Sebastian Llovera - Contemporary web design and development featuring fluid animations and cutting-edge technologies.',
  keywords: ['design', 'development', 'portfolio', 'next.js', 'web design', 'animation', 'interactive'],
  authors: [{ name: 'Sebastian Llovera' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-foreground antialiased overflow-x-hidden grain">
        <SmoothScroll>
          <AdvancedCursor />
          <Navigation />
          <PageTransitionEffect>
            {children}
          </PageTransitionEffect>
        </SmoothScroll>
      </body>
    </html>
  )
}