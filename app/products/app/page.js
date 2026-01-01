'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WaitlistCTA from '@/components/WaitlistCTA'
import { Badge } from '@/components/ui/badge'
import { Smartphone, DollarSign, Calendar, Bell, Shield, BarChart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const AppPage = () => {
  const features = [
    { icon: <DollarSign className="w-6 h-6" />, title: 'Earnings Dashboard', description: 'Track income across all platforms in real-time' },
    { icon: <Calendar className="w-6 h-6" />, title: 'Schedule Management', description: 'Manage bookings, streams, and content calendar' },
    { icon: <Bell className="w-6 h-6" />, title: 'Safety Alerts', description: 'Real-time notifications for suspicious activity' },
    { icon: <BarChart className="w-6 h-6" />, title: 'Performance Analytics', description: 'Detailed insights into your business metrics' },
    { icon: <Shield className="w-6 h-6" />, title: 'Content Backup', description: 'Automatic backup of all your content to secure cloud' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile First', description: 'Optimized for on-the-go creator lifestyle' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">COMING SOON</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-pink">FLESHSESH</span> App
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your pocket command centre for managing earnings, schedule, and safety.
            Everything you need to run your creator business from anywhere.
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
            <p className="text-xl text-muted-foreground">Be notified when the app launches</p>
          </div>
          <WaitlistCTA productName="FLESHSESH App" />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AppPage
