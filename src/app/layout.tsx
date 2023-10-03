import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Zedtter',
  description: 'Clon de twitter'
}
export const dynamic = 'force-dynamic'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
