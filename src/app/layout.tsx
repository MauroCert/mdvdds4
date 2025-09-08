import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Michael D. Vaughan, DDS | Special Needs & Sedation Dentistry | Nashville, TN',
    template: '%s | Michael D. Vaughan, DDS',
  },
  description: 'Dr. Michael D. Vaughan provides specialized dental care for patients with special needs, neurodivergence, and dental anxiety. Offering sedation dentistry in Nashville, Tennessee.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning={true}>
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}