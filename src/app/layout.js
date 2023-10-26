import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Makeup Lover || Professional Makeup Artist Showcasing Skills Over The Web',
  description: 'Passionate makeup enthusiast and skilled professional artist sharing expertise online. Embracing the digital realm to showcase the artistry, creativity, and beauty skills to a wider audience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
