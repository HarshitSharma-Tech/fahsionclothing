import { useState, useMemo } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Shop({ addToCart, toggleWishlist, isInWishlist }) {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [sortBy, setSortBy] = useState('featured')

  const categories = [...new Set(products.map(p => p.category))]
  const colors = ['Black', 'White', 'Grey', 'Navy', 'Blue', 'Beige', 'Brown', 'Olive']
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  const filteredAndSorted = useMemo(() => {
    let result = products.filter(product => {
      if (selectedCategory && product.category !== selectedCategory) return false
      if (selectedSize && !product.sizes.includes(selectedSize)) return false
      if (selectedColor && !product.colors.includes(selectedColor)) return false
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false
      return true
    })

    // Sort
    switch (sortBy) {
      case 'newest':
        result = [...result].sort((a, b) => b.id - a.id)
        break
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'featured':
      default:
        break
    }

    return result
  }, [selectedCategory, selectedSize, selectedColor, priceRange, sortBy])

  return (
    <div>
      {/* Hero */}
      <div className="bg-neutral-dark text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">ALL PRODUCTS</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="md:col-span-1">
            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold text-neutral-dark mb-3">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value=""
                      checked={selectedCategory === ''}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">All Categories</span>
                  </label>
                  {categories.map(category => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="font-semibold text-neutral-dark mb-3">Size</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      value=""
                      checked={selectedSize === ''}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">All Sizes</span>
                  </label>
                  {sizes.map(size => (
                    <label key={size} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={selectedSize === size}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-sm">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="font-semibold text-neutral-dark mb-3">Color</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      value=""
                      checked={selectedColor === ''}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">All Colors</span>
                  </label>
                  {colors.map(color => (
                    <label key={color} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-sm">{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-semibold text-neutral-dark mb-3">Price Range</h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="text-sm text-text-secondary">
                    ₹{priceRange[0].toLocaleString('en-IN')} - ₹{priceRange[1].toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-3">
            {/* Sort */}
            <div className="mb-8 flex justify-between items-center border-b border-border-color pb-4">
              <p className="text-sm text-text-secondary">{filteredAndSorted.length} products</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm px-3 py-1 border border-border-color rounded outline-none hover:border-neutral-dark transition"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Grid */}
            {filteredAndSorted.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filteredAndSorted.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    onWishlistToggle={toggleWishlist}
                    isInWishlist={isInWishlist}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-text-secondary">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
