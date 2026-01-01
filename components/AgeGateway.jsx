'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Shield, AlertCircle } from 'lucide-react'

const AgeGateway = ({ children }) => {
  const [isVerified, setIsVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has already verified their age
    const ageVerified = localStorage.getItem('fleshsesh_age_verified')
    if (ageVerified === 'true') {
      setIsVerified(true)
    }
    setIsLoading(false)
  }, [])

  const handleEnter = () => {
    localStorage.setItem('fleshsesh_age_verified', 'true')
    setIsVerified(true)
  }

  const handleExit = () => {
    window.location.href = 'https://www.google.com'
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-pink text-2xl">Loading...</div>
      </div>
    )
  }

  if (!isVerified) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          {/* Age Gateway Card */}
          <div className="bg-card border border-pink/20 rounded-xl shadow-2xl p-8 md:p-12 text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-48 h-16 relative">
                <span className="text-4xl font-bold text-pink">FLESHSESH</span>
              </div>
            </div>

            {/* Warning Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-pink/10 glow-pink">
                <Shield className="w-16 h-16 text-pink" />
              </div>
            </div>

            {/* Main Message */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Age Verification Required
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              This website contains adult content and is intended for adults only.
            </p>

            {/* Legal Notice */}
            <div className="bg-secondary/50 border border-border rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3 text-left">
                <AlertCircle className="w-6 h-6 text-pink flex-shrink-0 mt-1" />
                <div className="text-sm text-muted-foreground">
                  <p className="mb-3">
                    By entering this website, you confirm that:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>You are <strong className="text-pink">at least 18 years of age</strong></li>
                    <li>Adult content is <strong className="text-pink">legal in your jurisdiction</strong></li>
                    <li>You are accessing this site <strong className="text-pink">voluntarily</strong></li>
                    <li>You agree to our <strong className="text-pink">Terms of Service</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleEnter}
                size="lg"
                className="bg-pink hover:bg-pink-600 text-white glow-pink text-lg px-12 py-6 h-auto"
              >
                <Shield className="mr-2 w-5 h-5" />
                I am 18 or Older - Enter
              </Button>
              
              <Button
                onClick={handleExit}
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary text-lg px-12 py-6 h-auto"
              >
                I am Under 18 - Exit
              </Button>
            </div>

            {/* Footer Note */}
            <p className="text-xs text-muted-foreground mt-8">
              This age verification is required by law. No explicit content is hosted on this domain.
              <br />
              We use cookies to remember your age verification.
            </p>
          </div>

          {/* Additional Legal Text */}
          <div className="text-center mt-6 text-xs text-muted-foreground">
            <p>
              © 2025 FLESHSESH. All rights reserved. 
              <span className="text-pink font-semibold"> 18+ only.</span>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export default AgeGateway
