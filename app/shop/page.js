'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShoppingBag, Package, Heart, Shield } from 'lucide-react'

const ShopPage = () => {
  const productCategories = [
    { name: 'Creator Tools', description: 'Professional equipment for content creation', icon: <Package className="w-8 h-8" />, items: 24 },
    { name: 'Pleasure Tech', description: 'High-quality intimate products', icon: <Heart className="w-8 h-8" />, items: 156 },
    { name: 'Wellness', description: 'Aftercare and wellness essentials', icon: <Shield className="w-8 h-8" />, items: 42 },
    { name: 'Accessories', description: 'Costumes, lingerie, and more', icon: <ShoppingBag className="w-8 h-8" />, items: 89 }
  ]

  const featuredProducts = [
    { name: '4K Streaming Camera', price: '$299', category: 'Creator Tools', rating: 4.8 },
    { name: 'Studio Lighting Kit', price: '$149', category: 'Creator Tools', rating: 4.9 },
    { name: 'Premium Collection', price: '$89', category: 'Pleasure Tech', rating: 5.0 },
    { name: 'Wellness Bundle', price: '$45', category: 'Wellness', rating: 4.7 }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-pink/10 text-pink border-pink/20 mb-6">
            Official Store
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-pink">FLESHSESH</span> eStore
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Curated selection of pleasure tech, creator tools, and aftercare essentials.
            Everything you need to thrive as a creator or enjoy premium experiences.
          </p>
          <Button size="lg" className="bg-pink hover:bg-pink-600 text-white glow-pink">
            <ShoppingBag className="mr-2 w-5 h-5" />
            Browse Products
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:border-pink transition-all duration-300 hover:glow-pink cursor-pointer">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-pink/10 text-pink w-fit mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{category.items} products</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="hover:border-pink transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-pink/20 to-purple-900/20 relative flex items-center justify-center">
                  <Package className="w-16 h-16 text-pink opacity-50" />
                  <Badge className="absolute top-3 right-3 bg-pink/90 text-white">
                    ★ {product.rating}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.category}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-2xl font-bold text-pink">{product.price}</p>
                  <Button className="w-full bg-pink hover:bg-pink-600 text-white">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ShopPage
