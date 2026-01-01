'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Eye, Play } from 'lucide-react'

const WatchPage = () => {
  const featuredCreators = [
    { name: 'Featured Creator 1', status: 'LIVE', viewers: '1.2K' },
    { name: 'Featured Creator 2', status: 'LIVE', viewers: '856' },
    { name: 'Featured Creator 3', status: 'LIVE', viewers: '2.4K' },
    { name: 'Featured Creator 4', status: 'LIVE', viewers: '643' },
    { name: 'Featured Creator 5', status: 'LIVE', viewers: '1.8K' },
    { name: 'Featured Creator 6', status: 'LIVE', viewers: '925' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6 animate-glow-pulse">
            LIVE NOW
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-pink">FLESHSESH</span> Cams
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Interactive, creator-controlled live streaming experiences.
            Connect with performers in real-time with full respect for autonomy and consent.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-pink hover:bg-pink-600 text-white glow-pink">
              <Eye className="mr-2 w-5 h-5" />
              Browse Live Cams
            </Button>
            <Link href="/creators/join">
              <Button size="lg" variant="outline" className="border-pink text-pink hover:bg-pink hover:text-white">
                Become a Creator
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Live Creators */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Live Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCreators.map((creator, index) => (
              <Card key={index} className="hover:border-pink transition-all duration-300 hover:glow-pink overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-pink/20 to-purple-900/20 relative flex items-center justify-center">
                  <Play className="w-16 h-16 text-pink opacity-50" />
                  <Badge className="absolute top-3 left-3 bg-pink text-white animate-glow-pulse">
                    {creator.status}
                  </Badge>
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur px-2 py-1 rounded text-sm">
                    <Eye className="inline w-4 h-4 mr-1" />
                    {creator.viewers}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{creator.name}</CardTitle>
                  <CardDescription>Live now - Click to join</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-pink hover:bg-pink-600 text-white">
                    Watch Stream
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink/10 flex items-center justify-center">
                <Eye className="w-8 h-8 text-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">HD Streaming</h3>
              <p className="text-muted-foreground">
                Crystal clear video quality with adaptive bitrate streaming
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink/10 flex items-center justify-center">
                <Play className="w-8 h-8 text-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Private Shows</h3>
              <p className="text-muted-foreground">
                One-on-one intimate experiences with your favorite creators
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink/10 flex items-center justify-center">
                <Badge className="w-8 h-8 bg-pink text-white flex items-center justify-center">$</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tipping System</h3>
              <p className="text-muted-foreground">
                Support creators directly with secure tipping and gifts
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WatchPage
