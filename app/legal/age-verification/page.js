'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield } from 'lucide-react'

const AgeVerificationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">Legal</Badge>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-pink/10 text-pink">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Age <span className="text-pink">Verification</span>
            </h1>
          </div>

          <Card className="border-pink/20 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-pink">18+ Only - Strict Age Verification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Age Requirement</h3>
                <p>
                  All FLESHSESH platforms and services are restricted to individuals who are 18 years of age or older.
                  Access to adult content is strictly prohibited for minors.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Verification Process</h3>
                <p className="mb-3">
                  We implement multiple layers of age verification to ensure compliance:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Government-issued ID verification for all creators</li>
                  <li>Third-party age verification services for users</li>
                  <li>Credit card verification (cardholder must be 18+)</li>
                  <li>Continuous monitoring and compliance checks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Creator Verification</h3>
                <p>
                  All creators on our platforms must verify their identity and age through:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Government-issued photo ID</li>
                  <li>Selfie verification</li>
                  <li>Background checks where required by law</li>
                  <li>Periodic re-verification</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">User Responsibilities</h3>
                <p>
                  By accessing any FLESHSESH service, users affirm that:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>They are at least 18 years of age</li>
                  <li>Adult content is legal in their jurisdiction</li>
                  <li>They are accessing the service voluntarily</li>
                  <li>They will not allow minors to access their account</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Reporting</h3>
                <p>
                  If you suspect any underage user or content, please report immediately to:
                  <span className="block mt-2 text-pink font-semibold">compliance@fleshsesh.com</span>
                </p>
              </div>

              <div className="border-t border-border pt-6 mt-6">
                <p className="text-sm">
                  <strong>Last Updated:</strong> January 2025
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AgeVerificationPage
