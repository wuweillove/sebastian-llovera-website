import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Sebastian Llovera | Visual Artist',
  description: 'Visual artist working at the intersection of art and technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-black text-white" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
        <Header />
        {children}
      </body>
    </html>
  )
}