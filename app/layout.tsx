import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MinimalNavigation } from '@/components/navigation/MinimalNavigation'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sebastian Llovera | Visual Artist',
  description: 'Portfolio of Sebastian Llovera - Venezuelan visual artist working at the intersection of traditional art and digital technologies.',
  keywords: ['visual art', 'contemporary art', 'digital art', 'installation', 'MFA', 'artist'],
  authors: [{ name: 'Sebastian Llovera' }],
  creator: 'Sebastian Llovera',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0a] text-neutral-100 antialiased">
        <MinimalNavigation />
        {children}
      </body>
    </html>
  )
}