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
        <footer className='relative flex justify-center items-center p-4'>
          <span className='text-slate-100 absolute top-0'>Desarrollado por
            <a className='ml-1 text-red-600 hover:text-red-700'
              href="https://zapataezequiel.netlify.app/" target='_blank' rel='noreferrer'>
              Ezequiel Zapata
            </a>
          </span>
        </footer>

      </body>
    </html>
  )
}
