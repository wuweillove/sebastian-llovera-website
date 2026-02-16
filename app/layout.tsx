import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CustomCursor } from '@/components/cursor/CustomCursor'
import { Navigation } from '@/components/navigation/Navigation'
import { PageTransition } from '@/components/animations/PageTransition'
import { SmoothScroll } from '@/components/animations/SmoothScroll'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sebastian Llovera | Contemporary Design & Development',
  description: 'Portfolio of Sebastian Llovera - Contemporary web design and development featuring fluid animations and cutting-edge technologies.',
  keywords: ['design', 'development', 'portfolio', 'next.js', 'web design'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        <SmoothScroll>
          <CustomCursor />
          <Navigation />
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  )
}