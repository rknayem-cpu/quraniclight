import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quranic Light - কোরানের আলো',
  description: 'The ultimate digital companion for Quranic verses, daily reminders, and spiritual growth. Discover the light of the Quran in a modern, user-friendly platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
