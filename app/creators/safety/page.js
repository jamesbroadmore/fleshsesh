'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Lock, Eye, Bell, Phone, FileText } from 'lucide-react'

const SafetyPage = () => {
  const safetyFeatures = [
    { icon: <Shield className="w-6 h-6" />, title: 'Identity Protection', description: 'Keep your personal identity separate from your work persona' },
    { icon: <Lock className="w-6 h-6" />, title: 'Secure Payments', description: 'Safe and anonymous payment processing' },
    { icon: <Eye className="w-6 h-6" />, title: 'Content Control', description: 'Full control over who sees your content' },
    { icon: <Bell className="w-6 h-6" />, title: 'Safety Alerts', description: 'Real-time notifications for suspicious activity' },
    { icon: <Phone className="w-6 h-6" />, title: '24/7 Support', description: 'Round-the-clock support team for emergencies' },
    { icon: <FileText className="w-6 h-6" />, title: 'Legal Resources', description: 'Access to legal guidance and resources' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">Creator Safety</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your <span className="text-pink">Safety</span> First
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive safety features and guidelines to protect creators.
            Your well-being is our top priority.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Safety Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {safetyFeatures.map((feature, index) => (
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

          <Card className="border-pink/20 bg-card/50">
            <CardHeader>
              <CardTitle className="text-2xl">Safety Guidelines</CardTitle>
              <CardDescription>Essential safety practices for all creators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-pink">1. Protect Your Identity</h3>
                <p className="text-muted-foreground">Use a stage name and keep personal details private. Never share your real address or personal contact information.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-pink">2. Screen Your Clients</h3>
                <p className="text-muted-foreground">Use our verification tools to vet potential clients before accepting bookings or private sessions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-pink">3. Set Clear Boundaries</h3>
                <p className="text-muted-foreground">Clearly communicate your limits and never feel pressured to do anything you're uncomfortable with.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-pink">4. Trust Your Instincts</h3>
                <p className="text-muted-foreground">If something feels wrong, it probably is. Report suspicious behavior immediately.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-pink">5. Use Our Safety Features</h3>
                <p className="text-muted-foreground">Enable all available safety features including location masking, identity protection, and alert systems.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SafetyPage
