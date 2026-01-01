'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="lg:col-span-1">
            <div className="w-32 h-10 relative mb-4">
              <Image
                src="/brand/fleshsesh-wordmark-lips.png"
                alt="FLESHSESH"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Creator-first adult ecosystem
            </p>
          </div>

          {/* Ecosystem */}
          <div>
            <h3 className="font-semibold mb-4 text-pink">Ecosystem</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://webcams.fleshsesh.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  Watch Live
                </a>
              </li>
              <li>
                <Link href="/models" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  Models
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  Ecosystem Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-pink">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/os" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  OS
                </Link>
              </li>
              <li>
                <Link href="/products/browser" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  Browser
                </Link>
              </li>
              <li>
                <Link href="/products/app" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  App
                </Link>
              </li>
              <li>
                <Link href="/products/directory" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  Escort Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* Creators */}
          <div>
            <h3 className="font-semibold mb-4 text-pink">Creators</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/creators/join" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  Join
                </Link>
              </li>
              <li>
                <Link href="/creators/tools" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/creators/safety" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-pink">Company</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
            <h3 className="font-semibold mb-4 text-pink">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/age-verification" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  Age Verification
                </Link>
              </li>
              <li>
                <Link href="/legal/consent-ethics" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  Consent & Ethics
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-sm text-muted-foreground hover:text-pink transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 FLESHSESH. <span className="text-pink font-semibold">18+ only.</span> No explicit content hosted on this domain.
          </p>
          <div className="flex space-x-4">
            <button className="text-muted-foreground hover:text-pink transition-colors" disabled>
              <Facebook size={20} />
            </button>
            <button className="text-muted-foreground hover:text-pink transition-colors" disabled>
              <Twitter size={20} />
            </button>
            <button className="text-muted-foreground hover:text-pink transition-colors" disabled>
              <Instagram size={20} />
            </button>
            <button className="text-muted-foreground hover:text-pink transition-colors" disabled>
              <Linkedin size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
