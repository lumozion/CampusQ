import './globals.css'
import { Montserrat } from 'next/font/google'

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
      <head />
      <body className={`${montserrat.className} min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100`}>
        {children}
      </body>
    </html>
  )
}