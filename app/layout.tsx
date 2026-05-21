import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Trusted Mortgage & Real Estate Leads | The Prime Infotech',
  description:
    'The Prime Infotech connects lenders, brokers, and real estate professionals with high-intent, TCPA-compliant mortgage and real estate leads across Canada.',
  keywords: 'mortgage leads, real estate leads, home financing, refinance leads, Canada loan leads',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
