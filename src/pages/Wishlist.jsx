import { Link } from 'react-router-dom'
import { Heart, ArrowRight } from 'lucide-react'
import ProductCard from '../components/ProductCard'

export default function Wishlist({ wishlist, toggleWishlist, addToCart }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-8">WISHLIST</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-16">
          <Heart size={48} className="mx-auto text-text-secondary mb-4" />
          <p className="text-text-secondary text-lg mb-6">Your wishlist is empty</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3 bg-neutral-dark text-white font-semibold rounded hover:bg-gray-800 transition"
          >
            START SHOPPING
            <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {wishlist.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onWishlistToggle={toggleWishlist}
              isInWishlist={() => true}
            />
          ))}
        </div>
      )}
    </div>
  )
}
