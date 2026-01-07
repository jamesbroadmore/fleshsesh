'use client'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

const JoinPage = () => {
  useEffect(() => {
    // Redirect to external creators onboarding page
    window.location.href = 'https://creators.fleshsesh.com'
  }, [])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-pink">Creator Onboarding</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Redirecting you to our creators onboarding portal...
        </p>
        <p className="text-lg text-muted-foreground mb-12">
          If you are not automatically redirected within a few seconds, please click the button below.
        </p>
        <a href="https://creators.fleshsesh.com" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-pink hover:bg-pink-600 text-white glow-pink">
            Continue to Creator Onboarding
          </Button>
        </a>
      </div>
    </div>
  )
}

export default JoinPage
