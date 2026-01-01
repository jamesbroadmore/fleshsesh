import './globals.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  title: 'FLESHSESH - Creator-First Adult Ecosystem',
  description: 'Autonomy, safety, and scale — without compromising identity or control.',
  metadataBase: new URL('https://www.fleshsesh.com'),
  openGraph: {
    siteName: 'FLESHSESH',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
