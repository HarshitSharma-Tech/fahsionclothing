import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Heart, ChevronRight } from 'lucide-react'
import { products } from '../data/products'

export default function ProductDetail({ addToCart, toggleWishlist, isInWishlist }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === parseInt(id))
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-text-secondary">Product not found</p>
      </div>
    )
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    addToCart(product, quantity, selectedSize, selectedColor)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-secondary mb-8">
        <span>Home</span>
        <ChevronRight size={16} />
        <span>{product.category}</span>
        <ChevronRight size={16} />
        <span className="text-neutral-dark">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Image */}
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {discount > 0 && (
              <div className="absolute top-4 right-4 bg-neutral-dark text-white px-3 py-1 rounded-full text-sm font-medium">
                -{discount}%
              </div>
            )}
          </div>
        </div>

        {/* Details */}
        <div>
          <div className="mb-6">
            <p className="text-xs text-text-secondary uppercase tracking-wide mb-2">{product.category}</p>
            <h1 className="text-3xl font-bold text-neutral-dark mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1 text-yellow-500">
                <span>★★★★★</span>
              </div>
              <span className="text-sm text-text-secondary">{product.rating} ({product.reviews} reviews)</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl font-bold text-neutral-dark">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && (
              <span className="text-lg text-text-secondary line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>

          {/* Description */}
          <p className="text-text-secondary mb-8">{product.description}</p>

          {/* Colors */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-neutral-dark mb-3">COLOR</label>
            <div className="flex gap-3">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-lg border-2 transition ${
                    selectedColor === color
                      ? 'border-neutral-dark bg-neutral-dark text-white'
                      : 'border-border-color text-neutral-dark hover:border-neutral-dark'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-neutral-dark mb-3">SIZE</label>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 border-2 rounded-lg transition ${
                    selectedSize === size
                      ? 'border-neutral-dark bg-neutral-dark text-white'
                      : 'border-border-color text-neutral-dark hover:border-neutral-dark'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-neutral-dark mb-3">QUANTITY</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 border border-border-color rounded hover:bg-gray-50 transition"
              >
                -
              </button>
              <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 border border-border-color rounded hover:bg-gray-50 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleAddToCart}
              className="flex-1 px-8 py-4 bg-neutral-dark text-white font-semibold rounded hover:bg-gray-800 transition"
            >
              ADD TO BAG
            </button>
            <button
              onClick={() => toggleWishlist(product)}
              className="px-8 py-4 border border-border-color rounded hover:bg-gray-50 transition"
            >
              <Heart size={20} fill={isInWishlist(product.id) ? "currentColor" : "none"} className={isInWishlist(product.id) ? "text-red-500" : "text-neutral-dark"} />
            </button>
          </div>

          {/* Details Tabs */}
          <div className="border-t border-border-color pt-8 space-y-8">
            <div>
              <h3 className="font-semibold text-neutral-dark mb-3">PRODUCT DETAILS</h3>
              <p className="text-text-secondary text-sm">{product.description}</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-dark mb-3">MATERIALS & CARE</h3>
              <p className="text-text-secondary text-sm">Premium quality fabric. Machine wash cold. Tumble dry low. Do not bleach.</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-dark mb-3">SHIPPING & RETURNS</h3>
              <p className="text-text-secondary text-sm">Free shipping on orders over ₹500. Easy 30-day returns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
