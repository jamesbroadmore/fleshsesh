'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const BackgroundSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    'https://images.unsplash.com/photo-1615984259571-4d4d1084abbd?w=1920&q=80',
    'https://images.unsplash.com/photo-1701286618296-b40443dc63a9?w=1920&q=80',
    'https://images.unsplash.com/photo-1701287348766-2eeb0e16f874?w=1920&q=80',
    'https://images.unsplash.com/photo-1542513217-0b0eedf7005d?w=1920&q=80',
    'https://images.unsplash.com/photo-1699783021126-80783ef0e54f?w=1920&q=80',
    'https://images.pexels.com/photos/2531356/pexels-photo-2531356.jpeg?w=1920&q=80'
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
