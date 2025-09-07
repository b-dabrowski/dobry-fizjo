import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dobry Fizjo - Profesjonalna Fizjoterapia i Rehabilitacja w Białymstoku',
  description: 'Przywracanie mobilności i komfortu życia poprzez profesjonalną fizjoterapię, rehabilitację ortopedyczną i usługi terapeutyczne.',
  keywords: 'rehabilitacja, fizjoterapia, ortopedia, terapia, powrót do zdrowia, masaż',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
