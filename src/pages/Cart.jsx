import { Link } from 'react-router-dom'
import { Trash2, ArrowRight } from 'lucide-react'

export default function Cart({ cart, removeFromCart, updateCartQuantity }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 149
  const total = subtotal + (subtotal > 0 ? shipping : 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-8">YOUR BAG</h1>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-text-secondary text-lg mb-6">Your bag is empty</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3 bg-neutral-dark text-white font-semibold rounded hover:bg-gray-800 transition"
          >
            CONTINUE SHOPPING
            <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6 border-b border-border-color pb-6">
              {cart.map(item => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-6">
                  <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`} className="font-semibold text-neutral-dark hover:text-text-secondary transition">
                      {item.name}
                    </Link>
                    <p className="text-sm text-text-secondary mt-1">
                      {item.color && <span>{item.color} · </span>}
                      {item.size && <span>Size: {item.size}</span>}
                    </p>
                    <p className="font-semibold text-neutral-dark mt-2">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.id, item.size, item.color)}
                      className="p-2 text-text-secondary hover:text-neutral-dark transition"
                    >
                      <Trash2 size={18} />
                    </button>
                    <div className="flex items-center gap-2 border border-border-color rounded">
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1, item.size, item.color)}
                        className="px-3 py-1 hover:bg-gray-50 transition"
                      >
                        -
                      </button>
                      <span className="px-3 text-sm font-medium min-w-[20px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1, item.size, item.color)}
                        className="px-3 py-1 hover:bg-gray-50 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="border border-border-color rounded-lg p-6 sticky top-20">
              <h2 className="font-bold text-lg text-neutral-dark mb-6">ORDER SUMMARY</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="text-neutral-dark font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Shipping</span>
                  <span className="text-neutral-dark font-medium">
                    {subtotal > 0 ? `₹${shipping}` : 'TBD'}
                  </span>
                </div>
                <div className="border-t border-border-color pt-4 flex justify-between">
                  <span className="font-semibold text-neutral-dark">Total</span>
                  <span className="font-bold text-lg text-neutral-dark">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="block w-full px-6 py-3 bg-neutral-dark text-white font-semibold rounded text-center hover:bg-gray-800 transition"
              >
                PROCEED TO CHECKOUT
              </Link>
              <Link
                to="/shop"
                className="block w-full mt-3 px-6 py-3 border border-border-color text-neutral-dark font-semibold rounded text-center hover:bg-gray-50 transition"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
