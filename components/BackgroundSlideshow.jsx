'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const BackgroundSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    'https://images.unsplash.com/photo-1565014208903-fdfd6c464221?w=1920&q=80',
    'https://images.unsplash.com/photo-1526404746352-668ded9b50ab?w=1920&q=80',
    'https://images.unsplash.com/photo-1611699082439-a8de44ba565f?w=1920&q=80',
    'https://images.unsplash.com/photo-1710968282393-8725f1c7b77b?w=1920&q=80',
    'https://images.unsplash.com/photo-1575553940130-23d2a8249ba3?w=1920&q=80',
    'https://images.unsplash.com/photo-1526604330406-5fc5bf5224e4?w=1920&q=80'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="fixed inset-0 z-0">
      {/* Slideshow Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide}
            alt={`Background ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            quality={80}
          />
        </div>
      ))}
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Optional gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
    </div>
  )
}

export default BackgroundSlideshow
