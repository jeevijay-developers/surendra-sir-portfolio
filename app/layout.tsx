import type { Metadata } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Surrender Rawal | Professional Vocalist | Ghazals, Classical & Sufi Music',
  description: 'Surrender Rawal is a professional vocalist specializing in Ghazals, Hindustani Classical, Semi-Classical, Sufi, and Bollywood music. Book performances for weddings, concerts, and events across India.',
  keywords: 'Surrender Rawal, ghazal singer, classical vocalist India, sufi music performer, bollywood singer, wedding singer, Indian classical music, professional vocalist',
  authors: [{ name: 'Surrender Rawal' }],
  creator: 'Surrender Rawal',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://surrenderrawal.com',
    title: 'Surrender Rawal | Professional Vocalist',
    description: 'Professional vocalist specializing in Ghazals, Classical, Semi-Classical, Sufi, and Bollywood music',
    siteName: 'Surrender Rawal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surrender Rawal | Professional Vocalist',
    description: 'Professional vocalist specializing in Ghazals, Classical, Semi-Classical, Sufi, and Bollywood music',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased dark">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
