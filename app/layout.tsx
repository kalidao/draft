import RootProvider from '@/app/root-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/siteConfig'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={cn(inter.className)}>
          <RootProvider>
            <Image src={'/cat.webp'} alt="catto" width={75} height={3} className="absolute bottom-0 z-50 animate-move" />
            {children}
          </RootProvider>
        </body>
    </html>
  )
}
