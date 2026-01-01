'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Eye, Users, Sparkles, Globe, Lock, Smartphone, Shield } from 'lucide-react'

const EcosystemPage = () => {
  const liveProducts = [
    {
      title: 'FLESHSESH Cams',
      description: 'Interactive, creator-controlled live streaming experiences with real-time engagement.',
      features: ['HD Streaming', 'Private Shows', 'Tipping System', 'Chat Integration'],
      href: '/watch',
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: 'SINORGYModels',
      description: 'Professional talent management and booking platform for adult content creators.',
      features: ['Talent Management', 'Brand Partnerships', 'Booking System', 'Portfolio Management'],
      href: '/models',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'FLESHSESH eStore',
      description: 'Curated marketplace for pleasure tech, creator tools, and wellness products.',
      features: ['Creator Tools', 'Pleasure Tech', 'Wellness Products', 'Secure Checkout'],
      href: '/shop',
      icon: <Sparkles className="w-8 h-8" />
    }
  ]

  const developmentProducts = [
    {
      title: 'FLESHSESH OS',
      description: 'AI-native operating system designed specifically for adult content creators.',
      features: ['Privacy First', 'Workflow Automation', 'Multi-Platform Sync', 'AI Assistant'],
      href: '/products/os',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'FLESHSESH Browser',
      description: 'Privacy-focused browser with persona isolation to protect creator identities.',
      features: ['Persona Isolation', 'Ban Prevention', 'Encrypted Storage', 'VPN Integration'],
      href: '/products/browser',
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: 'FLESHSESH App',
      description: 'Mobile command center for managing your creator business on the go.',
      features: ['Earnings Dashboard', 'Schedule Management', 'Safety Alerts', 'Content Backup'],
      href: '/products/app',
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: 'Escort Directory',
      description: 'Verified, consent-driven directory for professional companions.',
      features: ['Verification System', 'Booking Management', 'Safety Features', 'Review System'],
      href: '/products/directory',
      icon: <Shield className="w-8 h-8" />
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">
            Complete Ecosystem
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The <span className="text-pink">FLESHSESH</span> Ecosystem
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A comprehensive suite of tools and platforms designed to empower adult content creators
            with autonomy, safety, and growth opportunities.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="live" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="live" className="text-base">Live Now</TabsTrigger>
            <TabsTrigger value="development" className="text-base">In Development</TabsTrigger>
          </TabsList>

          {/* Live Now Tab */}
          <TabsContent value="live" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Currently Available</h2>
              <p className="text-muted-foreground">
                Active platforms serving creators today
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {liveProducts.map((product, index) => (
                <Card key={index} className="hover:border-pink transition-all duration-300 hover:glow-pink">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-pink/10 text-pink">
                        {product.icon}
                      </div>
                      <Badge className="bg-pink text-white">LIVE</Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{product.title}</CardTitle>
                    <CardDescription className="text-base mb-4">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={product.href}>
                      <Button className="w-full bg-pink hover:bg-pink-600 text-white">
                        Explore
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* In Development Tab */}
          <TabsContent value="development" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                Next-generation tools currently in development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentProducts.map((product, index) => (
                <Card key={index} className="hover:border-pink transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-secondary text-pink">
                        {product.icon}
                      </div>
                      <Badge variant="secondary">SOON</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                    <CardDescription className="text-sm mb-4">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={product.href}>
                      <Button variant="outline" className="w-full hover:border-pink hover:text-pink">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-pink">Join</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Become part of the creator-first ecosystem today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/creators/join">
              <Button size="lg" className="bg-pink hover:bg-pink-600 text-white glow-pink">
                Join as Creator
              </Button>
            </Link>
            <Link href="/watch">
              <Button size="lg" variant="outline" className="border-pink text-pink hover:bg-pink hover:text-white">
                Explore Cams
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default EcosystemPage
