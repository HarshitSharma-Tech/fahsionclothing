import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function OrderConfirmation() {
  const orderNumber = `PKP-2026-${Math.floor(Math.random() * 10000).toString().padStart(5, '0')}`

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle2 size={64} className="text-green-600 animate-scale-in" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">ORDER CONFIRMED</h1>

        <p className="text-text-secondary text-lg mb-8">Thank you for shopping with Parvi Khular Punjab</p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <p className="text-sm text-text-secondary mb-2">Order Number</p>
          <p className="text-2xl font-bold text-neutral-dark font-mono">{orderNumber}</p>
        </div>

        <div className="text-left bg-neutral-light border border-border-color rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-neutral-dark mb-4">What's Next?</h3>
          <ul className="space-y-3 text-sm text-text-secondary">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold flex-shrink-0">✓</span>
              <span>You'll receive an order confirmation email shortly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold flex-shrink-0">✓</span>
              <span>Your order will be processed and shipped within 2-3 business days</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold flex-shrink-0">✓</span>
              <span>You'll receive a tracking number via email</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold flex-shrink-0">✓</span>
              <span>30-day easy returns if you change your mind</span>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 w-full px-8 py-3 bg-neutral-dark text-white font-semibold rounded hover:bg-gray-800 transition"
          >
            CONTINUE SHOPPING
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full px-8 py-3 border border-border-color text-neutral-dark font-semibold rounded hover:bg-gray-50 transition"
          >
            BACK TO HOME
          </Link>
        </div>

        <p className="text-xs text-text-secondary mt-8">
          Questions? <a href="#" className="underline hover:text-neutral-dark">Contact our support team</a>
        </p>
      </div>
    </div>
  )
}
