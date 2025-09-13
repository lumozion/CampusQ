import './globals.css'
import { Inter } from 'next/font/google'
import ThemeToggle from '@/components/ThemeToggle'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CampusQ - Smart Campus Queue Management',
  description: 'Efficient queue management for campus services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full flex flex-col`}>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  )
}