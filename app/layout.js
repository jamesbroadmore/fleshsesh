import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import AgeGateway from '@/components/AgeGateway'

export const metadata = {
  title: 'FLESHSESH - Creator-First Adult Ecosystem',
  description: 'Autonomy, safety, and scale — without compromising identity or control.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.fleshsesh.com'),
  openGraph: {
    siteName: 'FLESHSESH',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <AgeGateway>
          {children}
        </AgeGateway>
        <Toaster />
      </body>
    </html>
  )
}
