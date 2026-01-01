'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { toast } from 'sonner'
import { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Message sent!', {
      description: 'We\'ll get back to you within 24-48 hours.'
    })
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">Get in Touch</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-pink">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-pink/20">
              <CardHeader>
                <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-2">
                  <Mail className="w-6 h-6" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-2">General Inquiries:</p>
                <p className="text-pink">hello@fleshsesh.com</p>
                <p className="text-muted-foreground text-sm mt-4 mb-2">Support:</p>
                <p className="text-pink">support@fleshsesh.com</p>
              </CardContent>
            </Card>

            <Card className="border-pink/20">
              <CardHeader>
                <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-2">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <CardTitle>Creator Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-2">Dedicated creator support:</p>
                <p className="text-pink">creators@www.fleshsesh.com</p>
              </CardContent>
            </Card>

            <Card className="border-pink/20">
              <CardHeader>
                <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-2">
                  <Phone className="w-6 h-6" />
                </div>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Monday - Friday: 9am - 6pm PST<br />
                  Saturday - Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-pink/20">
              <CardHeader>
                <CardTitle className="text-2xl text-pink">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-border focus:border-pink"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
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
                    <Label htmlFor="subject">Subject *</Label>
                    <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                      <SelectTrigger className="border-border focus:border-pink">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="creator">Creator Application</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="press">Press/Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Tell us how we can help..."
                      className="border-border focus:border-pink min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-pink hover:bg-pink-600 text-white glow-pink">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
