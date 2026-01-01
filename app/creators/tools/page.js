'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Camera, Edit, BarChart, DollarSign, Cloud, Zap } from 'lucide-react'

const ToolsPage = () => {
  const tools = [
    { icon: <Camera className="w-6 h-6" />, title: 'Streaming Tools', description: 'Professional broadcasting software and guides' },
    { icon: <Edit className="w-6 h-6" />, title: 'Content Editing', description: 'Video and photo editing tools for creators' },
    { icon: <BarChart className="w-6 h-6" />, title: 'Analytics', description: 'Track performance across all platforms' },
    { icon: <DollarSign className="w-6 h-6" />, title: 'Financial Tools', description: 'Tax planning and earnings management' },
    { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Storage', description: 'Secure backup for all your content' },
    { icon: <Zap className="w-6 h-6" />, title: 'Automation', description: 'Automate posting and scheduling' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">Creator Resources</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Creator <span className="text-pink">Tools</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professional tools and resources to help you succeed as a creator.
            Everything you need to create, manage, and grow your business.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Available Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="hover:border-pink transition-all duration-300">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-4">{tool.icon}</div>
                  <CardTitle>{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{tool.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ToolsPage
