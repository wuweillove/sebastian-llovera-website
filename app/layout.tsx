import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { PremiumCursor } from '@/components/cursor/PremiumCursor'
import { TouchRipple } from '@/components/cursor/TouchRipple'
import { Navigation } from '@/components/navigation/Navigation'
import { PremiumPageTransition } from '@/components/animations/PremiumPageTransition'
import { SmoothScroll } from '@/components/animations/SmoothScroll'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: 'Sebastian Llovera | Contemporary Design & Development',
  description: 'Portfolio of Sebastian Llovera - Contemporary web design and development featuring fluid animations and cutting-edge technologies.',
  keywords: ['design', 'development', 'portfolio', 'next.js', 'web design', 'framer motion', 'animations'],
  authors: [{ name: 'Sebastian Llovera' }],
  creator: 'Sebastian Llovera',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sebastian Llovera | Contemporary Design & Development',
    description: 'Portfolio showcasing contemporary web design and development',
    siteName: 'Sebastian Llovera Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sebastian Llovera | Contemporary Design & Development',
    description: 'Portfolio showcasing contemporary web design and development',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        <SmoothScroll>
          <PremiumCursor />
          <TouchRipple />
          <Navigation />
          <PremiumPageTransition>
            <main role="main" id="main-content">
              {children}
            </main>
          </PremiumPageTransition>
        </SmoothScroll>
        
        {/* Accessibility: Skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:rounded-lg"
        >
          Skip to main content
        </a>
      </body>
    </html>
  )
}