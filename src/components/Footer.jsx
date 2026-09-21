import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-2">PARVI KHULAR</h4>
            <p className="text-gray-400 text-xs mb-3">PUNJAB, INDIA</p>
            <p className="text-gray-400 text-sm">Modern fashion, rooted in Punjab and designed for your everyday.</p>
          </div>
          <div>
            <h5 className="font-medium mb-4">SHOP</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-white transition">All Products</Link></li>
              <li><Link to="/shop" className="hover:text-white transition">New Arrivals</Link></li>
              <li><Link to="/shop" className="hover:text-white transition">Sale</Link></li>
              <li><Link to="/shop" className="hover:text-white transition">Collections</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-4">SUPPORT</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-4">COMPANY</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex justify-between items-center">
          <p className="text-gray-400 text-sm">© 2026 Parvi Khular Punjab. All rights reserved.</p>
          <div className="flex gap-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
