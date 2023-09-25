import './globals.css'
import './icons.css'

import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import Footer from './components/footer'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Clarifion',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={manrope.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
