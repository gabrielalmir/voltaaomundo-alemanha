import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import '@/assets/css/bootstrap.min.css'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500'] })

export const metadata: Metadata = {
  title: 'Volta ao Mundo - Alemanha',
  description: 'Venha conhecer a magnífica Alemanha',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        {children}
        <script async src="/bootstrap/js/bootstrap.bundle.min.js" defer />
      </body>
    </html>
  )
}
