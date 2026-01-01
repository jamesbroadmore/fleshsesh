'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WaitlistCTA from '@/components/WaitlistCTA'
import { Badge } from '@/components/ui/badge'
import { Lock, Shield, Eye, UserX, Fingerprint, Key } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const BrowserPage = () => {
  const features = [
    { icon: <UserX className="w-6 h-6" />, title: 'Persona Isolation', description: 'Keep work and personal identities completely separate' },
    { icon: <Shield className="w-6 h-6" />, title: 'Ban Prevention', description: 'Advanced fingerprinting protection to avoid platform bans' },
    { icon: <Lock className="w-6 h-6" />, title: 'Encrypted Storage', description: 'All browsing data encrypted locally on your device' },
    { icon: <Key className="w-6 h-6" />, title: 'VPN Integration', description: 'Built-in VPN for anonymous browsing' },
    { icon: <Eye className="w-6 h-6" />, title: 'Tracker Blocking', description: 'Block trackers and protect your privacy' },
    { icon: <Fingerprint className="w-6 h-6" />, title: 'Anti-Fingerprinting', description: 'Prevent websites from tracking you across sessions' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">COMING SOON</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-pink">FLESHSESH</span> Browser
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Persona-isolated browsing built to reduce bans and identity leakage.
            Browse safely with complete separation between your personal and professional lives.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="hover:border-pink transition-all duration-300">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Join the <span className="text-pink">Waitlist</span></h2>
            <p className="text-xl text-muted-foreground">Get early access when we launch</p>
          </div>
          <WaitlistCTA productName="FLESHSESH Browser" />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BrowserPage
