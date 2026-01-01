'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Users, Shield, Target } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">About Us</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-pink">Mission</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            FLESHSESH is building a creator-first adult ecosystem that prioritizes autonomy, safety, and scale
            — without compromising identity or control.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:border-pink transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Creator Autonomy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We believe creators should have full control over their work, content, and business decisions.
                  No platform should dictate how you run your career.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:border-pink transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Safety & Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Creator safety and privacy are non-negotiable. We build every product with privacy-first design
                  and comprehensive safety features.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:border-pink transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Consent & Ethics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  All our platforms are built on principles of consent, respect, and ethical practices.
                  We maintain strict age verification and compliance standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:border-pink transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We're building next-generation tools that empower creators with AI, automation, and advanced
                  features unavailable anywhere else.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="border-pink/20 bg-card/50">
            <CardHeader>
              <CardTitle className="text-3xl text-center mb-4">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                FLESHSESH was founded by creators, for creators. After years of dealing with platform bans,
                payment processor discrimination, and lack of proper tools, we decided to build the ecosystem
                we wished existed.
              </p>
              <p>
                Today, we're a growing team of developers, creators, and industry professionals working together
                to build products that truly serve the adult content community. From live streaming platforms to
                AI-powered creator tools, everything we build puts creators first.
              </p>
              <p>
                We're committed to creating a sustainable, ethical ecosystem where adult content creators can
                thrive without compromising their safety, privacy, or autonomy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
