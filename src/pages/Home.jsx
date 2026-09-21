import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'

export default function Home({ addToCart, toggleWishlist, isInWishlist }) {
  const [heroIndex, setHeroIndex] = useState(0)
  const [scrollPos, setScrollPos] = useState(0)

  const newArrivals = products.slice(0, 8)
  const trendingProducts = products.slice(8, 14)

  const heroImages = [
    'https://images.pexels.com/photos/2769274/pexels-photo-2769274.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3622621/pexels-photo-3622621.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600'
  ]

  const nextHero = () => setHeroIndex((prev) => (prev + 1) % heroImages.length)
  const prevHero = () => setHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)

  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative h-[400px] md:h-[600px] bg-gray-900 overflow-hidden">
        <img
          src={heroImages[heroIndex]}
          alt="Hero"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/30">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl">DEFINE YOUR EVERYDAY</h1>
          <p className="text-base md:text-lg mb-8 max-w-xl text-gray-100">Modern fashion, rooted in Punjab</p>
        </div>

        {/* Carousel Controls */}
        <button onClick={prevHero} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full transition z-10">
          <ChevronLeft size={24} className="text-black" />
        </button>
        <button onClick={nextHero} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full transition z-10">
          <ChevronRight size={24} className="text-black" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroIndex(idx)}
              className={`w-2 h-2 rounded-full transition ${idx === heroIndex ? 'bg-white w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Shop by Category - Circular */}
        <section className="py-12 md:py-16 border-b border-gray-200">
          <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 justify-center">
            {categories.map(category => (
              <Link key={category.id} to="/shop" className="flex flex-col items-center gap-3 flex-shrink-0">
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-gray-200 hover:border-red-600 transition">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </div>
                <p className="text-sm font-medium text-neutral-dark text-center">{category.name}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* New This Week - Horizontal Scroll */}
        <section className="py-12 md:py-16 border-b border-gray-200">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">NEW THIS WEEK</h2>
            <Link to="/shop" className="text-sm font-semibold text-red-600 hover:text-red-700">SEE ALL →</Link>
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="flex gap-4 pb-2 w-max">
              {newArrivals.map(product => (
                <div key={product.id} className="flex-shrink-0 w-40 md:w-48">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-2 hover:shadow-lg transition">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <p className="text-sm font-medium text-neutral-dark truncate">{product.name}</p>
                  <p className="text-xs text-text-secondary mb-2">{product.category}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-neutral-dark">₹{product.price}</span>
                    <span className="line-through text-xs text-text-secondary">₹{product.originalPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collection */}
        <section className="py-16 md:py-24 border-t border-border-color">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">THE NEW STANDARD</h2>
              <p className="text-text-secondary text-lg mb-6">Designed for movement. Built for everyday life. Our signature collection combines comfort with minimalist aesthetics.</p>
              <Link
                to="/shop"
                className="inline-block px-8 py-3 bg-neutral-dark text-white font-semibold hover:bg-gray-800 transition"
              >
                EXPLORE COLLECTION
              </Link>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Collection"
                className="w-full h-full object-cover hover-scale"
              />
            </div>
          </div>
        </section>

        {/* Trending Now */}
        <section className="py-16 md:py-24 border-t border-border-color">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark">TRENDING NOW</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {trendingProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onWishlistToggle={toggleWishlist}
                isInWishlist={isInWishlist}
              />
            ))}
          </div>
        </section>

        {/* Promo Banner */}
        <section className="py-16 md:py-24 border-t border-border-color">
          <div className="bg-neutral-dark text-white rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">UP TO 40% OFF</h3>
                <p className="text-gray-300 mb-6">Selected styles. Limited time.</p>
                <Link
                  to="/shop"
                  className="inline-block px-8 py-3 bg-white text-neutral-dark font-semibold hover:bg-gray-100 transition w-fit"
                >
                  SHOP SALE
                </Link>
              </div>
              <div className="hidden md:block overflow-hidden h-64 md:h-auto">
                <img
                  src="https://images.pexels.com/photos/3622625/pexels-photo-3622625.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Sale"
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
