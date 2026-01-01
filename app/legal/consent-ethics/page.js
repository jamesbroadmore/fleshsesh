'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart } from 'lucide-react'

const ConsentEthicsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">Legal</Badge>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-pink/10 text-pink">
              <Heart className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Consent & <span className="text-pink">Ethics</span>
            </h1>
          </div>

          <Card className="border-pink/20 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-pink">Our Ethical Framework</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Consent-First Platform</h3>
                <p>
                  FLESHSESH is built on the principle that consent is paramount. All interactions, content creation,
                  and transactions must be based on informed, enthusiastic consent from all parties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Creator Autonomy</h3>
                <p className="mb-3">
                  We believe creators have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full control over their content and how it's distributed</li>
                  <li>Set their own boundaries and limits</li>
                  <li>Refuse any request or client at any time</li>
                  <li>Keep their personal identity private</li>
                  <li>Fair compensation for their work</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Ethical Content Standards</h3>
                <p className="mb-3">
                  All content on FLESHSESH platforms must be:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Created by consenting adults (18+)</li>
                  <li>Produced legally and ethically</li>
                  <li>Free from exploitation or coercion</li>
                  <li>Compliant with all applicable laws</li>
                  <li>Respectful of all participants</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Zero Tolerance Policies</h3>
                <p className="mb-3">
                  We have zero tolerance for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Any content involving minors</li>
                  <li>Non-consensual content of any kind</li>
                  <li>Content depicting or promoting violence</li>
                  <li>Human trafficking or exploitation</li>
                  <li>Harassment or abuse of creators or users</li>
                  <li>Revenge porn or unauthorized sharing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">User Conduct</h3>
                <p>
                  Users of FLESHSESH platforms must:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Treat all creators with respect and dignity</li>
                  <li>Respect creator boundaries and limits</li>
                  <li>Never attempt to coerce or manipulate creators</li>
                  <li>Report any unethical behavior immediately</li>
                  <li>Comply with all platform rules and guidelines</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Reporting & Enforcement</h3>
                <p>
                  If you witness any violations of these ethical standards, please report to:
                  <span className="block mt-2 text-pink font-semibold">ethics@fleshsesh.com</span>
                </p>
                <p className="mt-3">
                  All reports are taken seriously and investigated promptly. Violators will face immediate
                  suspension or permanent ban from all FLESHSESH platforms.
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

export default ConsentEthicsPage
