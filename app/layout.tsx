import './globals.css'
import { Inter } from 'next/font/google'
import ThemeToggle from '@/components/ThemeToggle'

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
      <body className={`${inter.className} h-full`}>
        {children}
        <ThemeToggle />
      </body>
    </html>
  )
}