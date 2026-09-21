import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'

export default function Home({ addToCart, toggleWishlist, isInWishlist }) {
  const newArrivals = products.slice(0, 8)
  const trendingProducts = products.slice(8, 14)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen md:h-[600px] bg-gray-900 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2769274/pexels-photo-2769274.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Hero"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl">DEFINE YOUR EVERYDAY</h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl text-gray-200">Modern fashion, rooted in Punjab and designed for your everyday.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/shop"
              className="px-8 py-3 bg-red-600 text-white font-bold text-lg hover:bg-red-700 transition"
            >
              SHOP MEN
            </Link>
            <Link
              to="/shop"
              className="px-8 py-3 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-red-600 transition"
            >
              SHOP WOMEN
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Shop by Category */}
        <section className="py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">SHOP BY CATEGORY</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16 md:py-24 border-t border-border-color">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-2">NEW ARRIVALS</h2>
            <p className="text-text-secondary">Fresh pieces. New season.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {newArrivals.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onWishlistToggle={toggleWishlist}
                isInWishlist={isInWishlist}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-neutral-dark font-semibold hover:text-text-secondary transition"
            >
              VIEW ALL
              <ArrowRight size={16} />
            </Link>
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
