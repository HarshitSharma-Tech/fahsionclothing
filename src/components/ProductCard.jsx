import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

export default function ProductCard({ product, onAddToCart, onWishlistToggle, isInWishlist }) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 h-64 md:h-80 hover-scale">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:opacity-75 transition duration-300"
        />
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-neutral-dark text-white px-3 py-1 rounded-full text-sm font-medium">
            -{discount}%
          </div>
        )}
        <button
          onClick={(e) => {
            e.preventDefault()
            onWishlistToggle(product)
          }}
          className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition hover-lift"
        >
          <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} className={isInWishlist(product.id) ? "text-red-500" : "text-neutral-dark"} />
        </button>
      </div>
      <div className="mt-4">
        <p className="text-xs text-text-secondary uppercase tracking-wide">{product.category}</p>
        <h3 className="text-sm font-medium text-neutral-dark mt-1 group-hover:text-text-secondary transition line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-semibold text-neutral-dark">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && (
            <span className="text-xs text-text-secondary line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          )}
        </div>
        {product.rating && (
          <div className="flex items-center gap-1 mt-2">
            <div className="text-xs text-yellow-500">★★★★★</div>
            <span className="text-xs text-text-secondary">({product.reviews})</span>
          </div>
        )}
      </div>
    </Link>
  )
}
