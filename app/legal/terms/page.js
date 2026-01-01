'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText } from 'lucide-react'

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">Legal</Badge>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-pink/10 text-pink">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Terms of <span className="text-pink">Service</span>
            </h1>
          </div>

          <Card className="border-pink/20 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-pink">Terms of Service Agreement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. Acceptance of Terms</h3>
                <p>
                  By accessing or using any FLESHSESH platform or service, you agree to be bound by these Terms of Service.
                  If you do not agree to these terms, do not use our services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. Eligibility</h3>
                <p>
                  You must be at least 18 years old to use FLESHSESH services. By using our services, you represent and
                  warrant that you meet this age requirement and that adult content is legal in your jurisdiction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">3. User Accounts</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are responsible for maintaining the security of your account</li>
                  <li>You must provide accurate and complete information</li>
                  <li>You may not share your account with others</li>
                  <li>You are responsible for all activity under your account</li>
                  <li>We reserve the right to suspend or terminate accounts that violate our terms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">4. Creator Terms</h3>
                <p className="mb-3">
                  If you are a creator on FLESHSESH platforms:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You retain ownership of your content</li>
                  <li>You grant FLESHSESH a license to display and distribute your content</li>
                  <li>You are responsible for all applicable taxes</li>
                  <li>You must comply with all content guidelines and policies</li>
                  <li>We may suspend or terminate your account for policy violations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">5. Prohibited Conduct</h3>
                <p className="mb-3">
                  Users and creators must not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Post or distribute illegal content</li>
                  <li>Engage in harassment or abusive behavior</li>
                  <li>Violate intellectual property rights</li>
                  <li>Attempt to hack or compromise platform security</li>
                  <li>Use the platform for money laundering or fraud</li>
                  <li>Share non-consensual content</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">6. Payment Terms</h3>
                <p>
                  All transactions are subject to our payment processing terms. Refund policies vary by service.
                  Creators receive payouts according to their specific agreements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">7. Intellectual Property</h3>
                <p>
                  FLESHSESH trademarks, logos, and platform features are owned by FLESHSESH. User-generated content
                  remains the property of the creator, subject to the license granted to FLESHSESH.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">8. Disclaimer of Warranties</h3>
                <p>
                  FLESHSESH services are provided "as is" without warranties of any kind. We do not guarantee
                  uninterrupted or error-free service.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">9. Limitation of Liability</h3>
                <p>
                  FLESHSESH shall not be liable for any indirect, incidental, special, or consequential damages
                  arising from your use of our services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">10. Modifications</h3>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of our services after
                  changes constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">11. Termination</h3>
                <p>
                  We may terminate or suspend your access to our services at any time, with or without cause,
                  with or without notice.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">12. Contact</h3>
                <p>
                  For questions about these terms, contact us at:
                  <span className="block mt-2 text-pink font-semibold">legal@fleshsesh.com</span>
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

export default TermsPage
