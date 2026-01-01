'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WaitlistCTA from '@/components/WaitlistCTA'
import { Badge } from '@/components/ui/badge'
import { Globe, Cpu, Shield, Zap, Users, BarChart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const OSPage = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Privacy First',
      description: 'Built-in encryption and privacy tools to protect your identity and content'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Workflow Automation',
      description: 'AI-powered tools to automate repetitive tasks and boost productivity'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-Platform Sync',
      description: 'Manage all your platforms from one unified dashboard'
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Analytics & Insights',
      description: 'Deep insights into your earnings, audience, and performance'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI Assistant',
      description: 'Intelligent assistant to help with scheduling, content ideas, and more'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Cloud Integration',
      description: 'Secure cloud storage and backup for all your content'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">
            COMING SOON
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-pink">FLESHSESH</span> OS
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            AI-native creator operating system designed specifically for adult content creators.
            Take full control of your workflow, privacy, and business operations.
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
                  <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-4">
                    {feature.icon}
                  </div>
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
            <h2 className="text-4xl font-bold mb-4">
              Be the First to <span className="text-pink">Experience</span> It
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the waitlist and get early access when we launch
            </p>
          </div>
          <WaitlistCTA productName="FLESHSESH OS" />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OSPage
