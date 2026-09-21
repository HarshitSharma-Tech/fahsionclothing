import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Search } from 'lucide-react'
import { products } from '../data/products'

export default function SearchOverlay({ setSearchOpen }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (query.trim()) {
      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query])

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-20 animate-fade-in">
      <div className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-lg">
        <div className="p-6 border-b border-border-color flex items-center gap-3">
          <Search size={20} className="text-text-secondary" />
          <input
            type="text"
            placeholder="Search products, categories and collections..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 text-lg outline-none"
          />
          <button
            onClick={() => setSearchOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X size={20} />
          </button>
        </div>

        {query && (
          <div className="max-h-96 overflow-y-auto">
            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
                {results.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    onClick={() => setSearchOpen(false)}
                    className="group flex gap-4 hover:bg-gray-50 p-3 rounded-lg transition"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-neutral-dark group-hover:text-text-secondary transition line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-text-secondary">{product.category}</p>
                      <p className="text-sm font-medium text-neutral-dark">₹{product.price.toLocaleString('en-IN')}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center text-text-secondary">
                <p>No products found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
