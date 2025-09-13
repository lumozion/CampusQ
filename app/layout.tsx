import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat'
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
      <body className={`${montserrat.className} h-full flex flex-col bg-slate-900`}>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}