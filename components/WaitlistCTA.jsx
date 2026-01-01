'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'

const WaitlistCTA = ({ productName = "Product" }) => {
  const [formData, setFormData] = useState({
    email: '',
    role: '',
    region: '',
    interests: [],
    notes: ''
  })

  const interests = [
    'Creator Tools',
    'Privacy Features',
    'Earnings Management',
    'Safety Tools',
    'Booking Management',
    'Content Management',
    'Analytics'
  ]

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.email || !formData.role || !formData.region) {
      toast.error('Please fill in all required fields')
      return
    }

    // Show success message
    toast.success('Successfully joined the waitlist!', {
      description: 'We\'ll notify you when we launch.'
    })

    // Reset form
    setFormData({
      email: '',
      role: '',
      region: '',
      interests: [],
      notes: ''
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card border-pink/20">
      <CardHeader>
        <CardTitle className="text-2xl text-pink">Join the Waitlist</CardTitle>
        <CardDescription>
          Be the first to know when {productName} launches
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="border-border focus:border-pink"
            />
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label htmlFor="role">Your Role *</Label>
            <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
              <SelectTrigger className="border-border focus:border-pink">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="creator">Creator/Performer</SelectItem>
                <SelectItem value="agency">Agency/Management</SelectItem>
                <SelectItem value="platform">Platform Owner</SelectItem>
                <SelectItem value="developer">Developer/Tech</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Region */}
          <div className="space-y-2">
            <Label htmlFor="region">Region *</Label>
            <Select value={formData.region} onValueChange={(value) => setFormData({ ...formData, region: value })}>
              <SelectTrigger className="border-border focus:border-pink">
                <SelectValue placeholder="Select your region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="north-america">North America</SelectItem>
                <SelectItem value="south-america">South America</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
                <SelectItem value="africa">Africa</SelectItem>
                <SelectItem value="oceania">Oceania</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Interests */}
          <div className="space-y-3">
            <Label>What interests you most? (Select all that apply)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {interests.map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={formData.interests.includes(interest)}
                    onCheckedChange={() => handleInterestChange(interest)}
                    className="border-pink data-[state=checked]:bg-pink"
                  />
                  <label
                    htmlFor={interest}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {interest}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Tell us what you're looking for..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="border-border focus:border-pink min-h-[100px]"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-pink hover:bg-pink-600 text-white glow-pink"
          >
            Join Waitlist
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default WaitlistCTA
