// app/layout.tsx
import type { Metadata } from 'next'
import '../styles/globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Hope Training & Testing Center',
  description:
    'Hope TTC is a true International level training and testing center.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='w-full'>
        <div className='gradient scroll-smooth' />
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
