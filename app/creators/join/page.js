'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DollarSign, Shield, Users, TrendingUp, Globe, Lock } from 'lucide-react'
import { toast } from 'sonner'
import { useState } from 'react'

const JoinPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    platforms: '',
    goals: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Application submitted!', {
      description: 'Our team will review your application and get back to you soon.'
    })
    setFormData({ name: '', email: '', experience: '', platforms: '', goals: '' })
  }

  const benefits = [
    { icon: <DollarSign className="w-6 h-6" />, title: 'Maximize Earnings', description: 'Tools and resources to increase your income' },
    { icon: <Shield className="w-6 h-6" />, title: 'Safety First', description: 'Comprehensive safety features and support' },
    { icon: <Users className="w-6 h-6" />, title: 'Community', description: 'Join a supportive network of creators' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Growth Tools', description: 'Analytics and insights to grow your brand' },
    { icon: <Globe className="w-6 h-6" />, title: 'Multi-Platform', description: 'Manage all your platforms in one place' },
    { icon: <Lock className="w-6 h-6" />, title: 'Privacy Control', description: 'Complete control over your identity and content' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">Creator Program</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join as a <span className="text-pink">Creator</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Take control of your career with tools designed for autonomy, safety, and growth.
            Join the creator-first ecosystem today.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Join FLESHSESH?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:border-pink transition-all duration-300">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-4">{benefit.icon}</div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-2xl mx-auto">
          <Card className="border-pink/20">
            <CardHeader>
              <CardTitle className="text-2xl text-pink">Creator Application</CardTitle>
              <CardDescription>Fill out the form below to apply</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Stage/Professional Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-border focus:border-pink"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-border focus:border-pink"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level *</Label>
                  <Select value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                    <SelectTrigger className="border-border focus:border-pink">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New to content creation</SelectItem>
                      <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                      <SelectItem value="experienced">Experienced (3+ years)</SelectItem>
                      <SelectItem value="professional">Professional/Agency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="platforms">Current Platforms (Optional)</Label>
                  <Input
                    id="platforms"
                    value={formData.platforms}
                    onChange={(e) => setFormData({ ...formData, platforms: e.target.value })}
                    placeholder="e.g., OnlyFans, ManyVids, Chaturbate"
                    className="border-border focus:border-pink"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">What are your goals? *</Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    required
                    placeholder="Tell us about your goals as a creator..."
                    className="border-border focus:border-pink min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-pink hover:bg-pink-600 text-white glow-pink">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default JoinPage
