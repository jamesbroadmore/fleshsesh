'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WaitlistCTA from '@/components/WaitlistCTA'
import { Badge } from '@/components/ui/badge'
import { Shield, CheckCircle2, MapPin, Star, Calendar, Lock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const DirectoryPage = () => {
  const features = [
    { icon: <Shield className="w-6 h-6" />, title: 'Verified Profiles', description: 'All companions verified for authenticity and safety' },
    { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Consent-First', description: 'Built on principles of consent and mutual respect' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Location-Based', description: 'Find verified companions in your area' },
    { icon: <Star className="w-6 h-6" />, title: 'Review System', description: 'Transparent reviews from verified clients' },
    { icon: <Calendar className="w-6 h-6" />, title: 'Booking Management', description: 'Easy scheduling and booking system' },
    { icon: <Lock className="w-6 h-6" />, title: 'Privacy Protection', description: 'Discretion and privacy for all parties' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">COMING SOON</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Escort <span className="text-pink">Directory</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Verified, consent-driven companion directory launching progressively.
            A safe, respectful platform connecting professionals with clients.
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="text-pink font-semibold">18+ only.</span> All services comply with local laws and regulations.
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
            <p className="text-xl text-muted-foreground">Be the first to know when we launch</p>
          </div>
          <WaitlistCTA productName="Escort Directory" />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DirectoryPage
