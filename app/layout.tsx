import './globals.css'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import ThemeToggle from '@/components/ThemeToggle'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

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
    <html lang="en" className="h-full dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${montserrat.className} min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}