'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WaitlistCTA from '@/components/WaitlistCTA'
import BackgroundSlideshow from '@/components/BackgroundSlideshow'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Lock, Eye, CheckCircle2, Sparkles, Smartphone, Globe, Users } from 'lucide-react'

const HomePage = () => {
  const liveProducts = [
    {
      title: 'FLESHSESH Cams',
      description: 'Interactive, creator-controlled experiences.',
      badge: 'LIVE',
      href: '/watch',
      cta: 'Enter Cams',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'SINORGYModels',
      description: 'Talent management, brand deals, and bookings.',
      badge: 'LIVE',
      href: '/models',
      cta: 'View Models',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'FLESHSESH eStore',
      description: 'Pleasure tech, creator tools, and aftercare essentials.',
      badge: 'LIVE',
      href: '/shop',
      cta: 'Visit Store',
      icon: <Sparkles className="w-6 h-6" />
    }
  ]

  const developmentProducts = [
    {
      title: 'FLESHSESH OS',
      description: 'AI-native creator operating system for privacy and workflow control.',
      badge: 'COMING SOON',
      href: '/products/os',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'FLESHSESH Browser',
      description: 'Persona-isolated browsing built to reduce bans and leakage.',
      badge: 'COMING SOON',
      href: '/products/browser',
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: 'FLESHSESH App',
      description: 'Pocket command centre for earnings, schedule, and safety.',
      badge: 'COMING SOON',
      href: '/products/app',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: 'Escort Directory',
      description: 'Verified, consent-driven companion directory (launching progressively).',
      badge: 'COMING SOON',
      href: '/products/directory',
      icon: <Shield className="w-6 h-6" />
    }
  ]

  const trustFeatures = [
    { icon: <Shield className="w-5 h-5" />, text: '18+ only' },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: 'Consent-first' },
    { icon: <Lock className="w-5 h-5" />, text: 'Privacy by design' },
    { icon: <Eye className="w-5 h-5" />, text: 'No explicit content hosted here' }
  ]

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Slideshow */}
      <BackgroundSlideshow />
      
      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <Badge className="bg-pink/10 text-pink border-pink/20 text-sm px-4 py-1">
              Creator-First Ecosystem
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Creator-first adult{' '}
            <span className="text-pink text-glow-pink">ecosystem</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Autonomy, safety, and scale — without compromising identity or control.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://webcams.fleshsesh.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-pink hover:bg-pink-600 text-white glow-pink text-lg px-8">
                Watch Live
              </Button>
            </a>
            <Link href="/shop">
              <Button size="lg" variant="outline" className="border-pink text-pink hover:bg-pink hover:text-white text-lg px-8">
                Shop the eStore
              </Button>
            </Link>
            <Link href="/ecosystem">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Explore Ecosystem
              </Button>
            </Link>
            <Link href="/creators/join">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Join as Creator
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative Pink Accent */}
        <div className="mt-16 flex justify-center">
          <div className="w-48 h-48 relative animate-glow-pulse">
            <Image
              src="/brand/fleshsesh-sticker-pink.png"
              alt="FLESHSESH"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-border bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <span className="text-pink">{feature.icon}</span>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Now Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Live <span className="text-pink">Now</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Platforms and services currently available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {liveProducts.map((product, index) => (
            <Card key={index} className="group hover:border-pink transition-all duration-300 hover:glow-pink">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-pink/10 text-pink group-hover:bg-pink group-hover:text-white transition-colors">
                    {product.icon}
                  </div>
                  <Badge className="bg-pink text-white animate-glow-pulse">
                    {product.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl mb-2">{product.title}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="https://webcams.fleshsesh.com" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-pink hover:bg-pink-600 text-white">
                    {product.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* In Development Section */}
      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            In <span className="text-pink">Development</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Next-generation tools launching soon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {developmentProducts.map((product, index) => (
            <Card key={index} className="group hover:border-pink transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-secondary text-pink group-hover:bg-pink group-hover:text-white transition-colors">
                    {product.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {product.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href={product.href}>
                  <Button variant="outline" className="w-full hover:border-pink hover:text-pink">
                    Learn More
                  </Button>
                </Link>
                <a href="#waitlist">
                  <Button variant="ghost" className="w-full text-pink hover:text-pink hover:bg-pink/10">
                    Join Waitlist
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Waitlist Form */}
        <div id="waitlist" className="scroll-mt-20">
          <WaitlistCTA productName="FLESHSESH Products" />
        </div>
      </section>

      <Footer />
      </div>
    </div>
  )
}

export default HomePage
