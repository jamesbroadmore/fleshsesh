'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Handshake, TrendingUp, Globe, Award } from 'lucide-react'

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">Partnerships</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Partner with <span className="text-pink">FLESHSESH</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join us in building the future of creator-first adult content platforms.
            We're looking for partners who share our vision and values.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:border-pink transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-4">
                  <Handshake className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Technology Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Payment processors, hosting providers, security services, and infrastructure partners
                  who support the adult content industry.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:border-pink transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Brand Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Adult brands, pleasure tech companies, and creator tools looking to reach our creator
                  community through ethical partnerships.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:border-pink transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-4">
                  <Globe className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Platform Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Adult platforms and marketplaces interested in integrations, cross-promotion,
                  or white-label solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:border-pink transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Agency Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Talent agencies and management companies looking to provide better tools and
                  platforms for their creators.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="border-pink/20 bg-card/50">
            <CardHeader>
              <CardTitle className="text-2xl">Interested in Partnering?</CardTitle>
              <CardDescription>
                We're always looking for partners who share our commitment to creator autonomy, safety, and innovation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you're interested in exploring partnership opportunities, please reach out to our partnerships team.
                We review all partnership inquiries and respond within 5-7 business days.
              </p>
              <p className="text-pink font-semibold">
                Contact: partnerships@fleshsesh.com
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PartnersPage
