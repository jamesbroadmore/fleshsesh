'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Lock } from 'lucide-react'

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">Legal</Badge>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-pink/10 text-pink">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Privacy <span className="text-pink">Policy</span>
            </h1>
          </div>

          <Card className="border-pink/20 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-pink">Your Privacy Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. Information We Collect</h3>
                <p className="mb-3">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account information (email, username, password)</li>
                  <li>Profile information (display name, bio, profile photo)</li>
                  <li>Payment information (processed securely by third-party processors)</li>
                  <li>Content you create and upload</li>
                  <li>Communications with us</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. How We Use Your Information</h3>
                <p className="mb-3">
                  We use collected information to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Process transactions and send notifications</li>
                  <li>Communicate with you about our services</li>
                  <li>Enforce our terms and policies</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect the security of our platform</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">3. Information Sharing</h3>
                <p className="mb-3">
                  We do not sell your personal information. We may share information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your consent</li>
                  <li>With service providers who assist in operating our platform</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect rights, property, or safety</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">4. Creator Privacy</h3>
                <p>
                  We understand the importance of privacy for adult content creators. We:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Never share your real identity without your consent</li>
                  <li>Provide tools to separate personal and professional identities</li>
                  <li>Allow you to control who can see your content</li>
                  <li>Offer anonymous payment options</li>
                  <li>Do not disclose creator information to third parties</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">5. Data Security</h3>
                <p>
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Secure payment processing</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">6. Your Rights</h3>
                <p className="mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Export your data</li>
                  <li>Object to processing in certain circumstances</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">7. Cookies and Tracking</h3>
                <p>
                  We use cookies and similar technologies to improve your experience. You can control cookie
                  preferences through your browser settings.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">8. Data Retention</h3>
                <p>
                  We retain your information for as long as necessary to provide services or as required by law.
                  You can request deletion of your account at any time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">9. International Data Transfers</h3>
                <p>
                  Your information may be transferred to and processed in countries other than your own.
                  We ensure appropriate safeguards are in place for such transfers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">10. Children's Privacy</h3>
                <p>
                  Our services are not intended for anyone under 18. We do not knowingly collect information
                  from minors.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">11. Changes to This Policy</h3>
                <p>
                  We may update this privacy policy from time to time. We will notify you of significant changes
                  via email or platform notification.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">12. Contact Us</h3>
                <p>
                  For privacy-related questions or to exercise your rights, contact:
                  <span className="block mt-2 text-pink font-semibold">privacy@fleshsesh.com</span>
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

export default PrivacyPage
