import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Checkout({ cart }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pin: '',
    phone: '',
    shipping: 'standard',
    payment: 'card'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.address || !formData.city || !formData.state || !formData.pin || !formData.phone) {
      alert('Please fill in all required fields')
      return
    }
    navigate('/order-confirmation')
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = formData.shipping === 'express' ? 149 : 0
  const total = subtotal + shipping

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-8">CHECKOUT</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact */}
            <div>
              <h2 className="text-lg font-bold text-neutral-dark mb-4">CONTACT INFORMATION</h2>
              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-border-color rounded focus:outline-none focus:ring-2 focus:ring-neutral-dark"
                  required
                />
              </div>
            </div>

            {/* Delivery */}
            <div>
              <h2 className="text-lg font-bold text-neutral-dark mb-4">DELIVERY ADDRESS</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded focus:outline-none focus:ring-2 focus:ring-neutral-dark"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded focus:outline-none focus:ring-2 focus:ring-neutral-dark"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-neutral-dark mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-color rounded focus:outline-none focus:ring-2 focus:ring-neutral-dark"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded focus:outline-none focus:ring-2 focus:ring-neutral-dark"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded focus:outline-none focus:ring-2 focus:ring-neutral-dark"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">PIN Code</label>
                  <input
                    type="text"
                    name="pin"
                    value={formData.pin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded focus:outline-none focus:ring-2 focus:ring-neutral-dark"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded focus:outline-none focus:ring-2 focus:ring-neutral-dark"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Shipping */}
            <div>
              <h2 className="text-lg font-bold text-neutral-dark mb-4">DELIVERY METHOD</h2>
              <div className="space-y-3">
                <label className="flex items-center p-4 border border-border-color rounded cursor-pointer hover:bg-gray-50 transition">
                  <input
                    type="radio"
                    name="shipping"
                    value="standard"
                    checked={formData.shipping === 'standard'}
                    onChange={handleChange}
                    className="mr-4"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-neutral-dark">Standard Delivery</div>
                    <div className="text-sm text-text-secondary">Free</div>
                  </div>
                </label>
                <label className="flex items-center p-4 border border-border-color rounded cursor-pointer hover:bg-gray-50 transition">
                  <input
                    type="radio"
                    name="shipping"
                    value="express"
                    checked={formData.shipping === 'express'}
                    onChange={handleChange}
                    className="mr-4"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-neutral-dark">Express Delivery</div>
                    <div className="text-sm text-text-secondary">₹149</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Payment */}
            <div>
              <h2 className="text-lg font-bold text-neutral-dark mb-4">PAYMENT</h2>
              <div className="space-y-3">
                <label className="flex items-center p-4 border border-border-color rounded cursor-pointer hover:bg-gray-50 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.payment === 'card'}
                    onChange={handleChange}
                    className="mr-4"
                  />
                  <div className="font-medium text-neutral-dark">Credit/Debit Card</div>
                </label>
                <label className="flex items-center p-4 border border-border-color rounded cursor-pointer hover:bg-gray-50 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={formData.payment === 'upi'}
                    onChange={handleChange}
                    className="mr-4"
                  />
                  <div className="font-medium text-neutral-dark">UPI</div>
                </label>
                <label className="flex items-center p-4 border border-border-color rounded cursor-pointer hover:bg-gray-50 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.payment === 'cod'}
                    onChange={handleChange}
                    className="mr-4"
                  />
                  <div className="font-medium text-neutral-dark">Cash on Delivery</div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-neutral-dark text-white font-bold rounded hover:bg-gray-800 transition"
            >
              PLACE ORDER
            </button>
          </form>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="border border-border-color rounded-lg p-6 sticky top-20">
            <h2 className="font-bold text-lg text-neutral-dark mb-6">ORDER SUMMARY</h2>
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
              {cart.map(item => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 text-sm">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                  <div className="flex-1">
                    <p className="font-medium text-neutral-dark line-clamp-1">{item.name}</p>
                    <p className="text-text-secondary text-xs">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium text-neutral-dark">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3 border-t border-border-color pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Subtotal</span>
                <span className="text-neutral-dark font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Shipping</span>
                <span className="text-neutral-dark font-medium">₹{shipping.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-border-color">
                <span className="font-semibold text-neutral-dark">Total</span>
                <span className="font-bold text-lg text-neutral-dark">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
