'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Star, Calendar, Award } from 'lucide-react'

const ModelsPage = () => {
  const featuredModels = [
    { name: 'Professional Model 1', specialty: 'Cam & Content', rating: 5.0, bookings: 120 },
    { name: 'Professional Model 2', specialty: 'Events & Shoots', rating: 4.9, bookings: 95 },
    { name: 'Professional Model 3', specialty: 'Brand Ambassador', rating: 5.0, bookings: 150 },
    { name: 'Professional Model 4', specialty: 'Cam Specialist', rating: 4.8, bookings: 80 }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">
            Talent Management
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-pink">SINORGY</span>Models
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professional talent management, brand partnerships, and booking services
            for verified adult content creators.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-pink hover:bg-pink-600 text-white glow-pink">
              <Users className="mr-2 w-5 h-5" />
              View Talent
            </Button>
            <Button size="lg" variant="outline" className="border-pink text-pink hover:bg-pink hover:text-white">
              Book a Model
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Talent</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredModels.map((model, index) => (
              <Card key={index} className="hover:border-pink transition-all duration-300 hover:glow-pink">
                <div className="aspect-square bg-gradient-to-br from-pink/20 to-purple-900/20 relative flex items-center justify-center">
                  <Users className="w-16 h-16 text-pink opacity-50" />
                  <Badge className="absolute top-3 right-3 bg-pink/90 text-white">
                    <Star className="w-3 h-3 inline mr-1" />
                    {model.rating}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{model.name}</CardTitle>
                  <CardDescription>{model.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {model.bookings} bookings
                  </div>
                  <Button className="w-full bg-pink hover:bg-pink-600 text-white">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Talent Management</h3>
              <p className="text-muted-foreground">
                Professional representation and career guidance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Brand Partnerships</h3>
              <p className="text-muted-foreground">
                Connect with brands for collaborations and sponsorships
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink/10 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Booking Platform</h3>
              <p className="text-muted-foreground">
                Easy scheduling and booking management system
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ModelsPage
