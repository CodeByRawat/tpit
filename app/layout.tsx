import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Trusted Loan Leads for Financial Companies | The Primeinfotech',
  description:
    'The Primeinfotech connects lenders with verified loan seekers across the USA and Canada, delivering quality leads from homebuyers, refinancers, and property buyers.',
  keywords: 'loan leads, home financing, refinance leads',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
