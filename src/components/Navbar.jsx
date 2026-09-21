import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Search, Heart, ShoppingBag } from 'lucide-react'
import SearchOverlay from './SearchOverlay'

export default function Navbar({ cartCount, wishlistCount, cartOpen, setCartOpen, searchOpen, setSearchOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-center hover:opacity-80 transition">
              <div className="leading-tight">
                <div className="text-lg font-black text-red-600 tracking-tight">PARVI KHULAR</div>
                <div className="text-xs font-bold text-neutral-dark tracking-widest">PUNJAB</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/shop" className="text-sm font-medium text-neutral-dark hover:text-red-500 transition">
                MEN
              </Link>
              <Link to="/shop" className="text-sm font-medium text-neutral-dark hover:text-red-500 transition">
                WOMEN
              </Link>
              <Link to="/shop" className="text-sm font-medium text-neutral-dark hover:text-red-500 transition">
                NEW ARRIVALS
              </Link>
              <Link to="/shop" className="text-sm font-medium text-neutral-dark hover:text-red-500 transition">
                COLLECTIONS
              </Link>
              <Link to="/shop" className="text-sm font-medium text-neutral-dark hover:text-red-500 transition">
                SALE
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-neutral-dark hover:text-text-secondary transition"
              >
                <Search size={20} />
              </button>
              <Link to="/wishlist" className="p-2 text-neutral-dark hover:text-text-secondary transition relative">
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-neutral-dark text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link to="/cart" className="p-2 text-neutral-dark hover:text-text-secondary transition relative">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-neutral-dark text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-neutral-dark"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-border-color">
              <Link to="/shop" className="block px-0 py-3 text-sm font-medium text-neutral-dark hover:text-text-secondary">
                MEN
              </Link>
              <Link to="/shop" className="block px-0 py-3 text-sm font-medium text-neutral-dark hover:text-text-secondary">
                WOMEN
              </Link>
              <Link to="/shop" className="block px-0 py-3 text-sm font-medium text-neutral-dark hover:text-text-secondary">
                NEW ARRIVALS
              </Link>
              <Link to="/shop" className="block px-0 py-3 text-sm font-medium text-neutral-dark hover:text-text-secondary">
                COLLECTIONS
              </Link>
              <Link to="/shop" className="block px-0 py-3 text-sm font-medium text-neutral-dark hover:text-text-secondary">
                SALE
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Search Overlay */}
      {searchOpen && <SearchOverlay setSearchOpen={setSearchOpen} />}
    </>
  )
}
