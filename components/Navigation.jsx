'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <span className="text-2xl font-bold text-pink">FLESHSESH</span>
          </Link>

          {/* Desktop Navigation Links */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <Link href="/ecosystem" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-pink transition-colors">
                    Ecosystem
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">Creators</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-3 p-4">
                    <li>
                      <Link
                        href="/creators/join"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-pink"
                      >
                        <div className="text-sm font-medium leading-none">Join</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Become a creator
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/creators/tools"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-pink"
                      >
                        <div className="text-sm font-medium leading-none">Tools</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Creator resources
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/creators/safety"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-pink"
                      >
                        <div className="text-sm font-medium leading-none">Safety</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Safety guidelines
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-3 p-4">
                    <li>
                      <Link
                        href="/products/os"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-pink"
                      >
                        <div className="text-sm font-medium leading-none">OS</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Creator OS
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/browser"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-pink"
                      >
                        <div className="text-sm font-medium leading-none">Browser</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Private browsing
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/app"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-pink"
                      >
                        <div className="text-sm font-medium leading-none">App</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Mobile control centre
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/directory"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-pink"
                      >
                        <div className="text-sm font-medium leading-none">Directory</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Escort directory
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/partners" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-pink transition-colors">
                    Partners
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-pink transition-colors">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">Legal</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-56 gap-3 p-4">
                    <li>
                      <Link
                        href="/legal/age-verification"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-pink"
                      >
                        <div className="text-sm font-medium leading-none">Age Verification</div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/legal/consent-ethics"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-pink"
                      >
                        <div className="text-sm font-medium leading-none">Consent & Ethics</div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/legal/terms"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-pink"
                      >
                        <div className="text-sm font-medium leading-none">Terms of Service</div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/legal/privacy"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-pink"
                      >
                        <div className="text-sm font-medium leading-none">Privacy Policy</div>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-pink transition-colors">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="https://webcams.fleshsesh.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-pink hover:bg-pink-600 text-white glow-pink transition-all">
                Watch Live
              </Button>
            </a>
            <Link href="/shop">
              <Button variant="outline" className="border-pink text-pink hover:bg-pink hover:text-white transition-all">
                Shop
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Link href="/ecosystem" className="text-sm font-medium hover:text-pink transition-colors">
                Ecosystem
              </Link>
              <Link href="/creators/join" className="text-sm font-medium hover:text-pink transition-colors">
                Join as Creator
              </Link>
              <Link href="/products/os" className="text-sm font-medium hover:text-pink transition-colors">
                Products
              </Link>
              <Link href="/partners" className="text-sm font-medium hover:text-pink transition-colors">
                Partners
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-pink transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-pink transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/watch">
                  <Button className="w-full bg-pink hover:bg-pink-600 text-white">
                    Watch Live
                  </Button>
                </Link>
                <Link href="/shop">
                  <Button variant="outline" className="w-full border-pink text-pink hover:bg-pink hover:text-white">
                    Shop
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
