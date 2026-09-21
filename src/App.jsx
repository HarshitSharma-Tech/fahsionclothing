import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Toast from './components/Toast'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'

function App() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [toast, setToast] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    const savedWishlist = localStorage.getItem('wishlist')
    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const addToCart = (product, quantity = 1, size = null, color = null) => {
    const existingItem = cart.find(
      item => item.id === product.id && item.size === size && item.color === color
    )

    if (existingItem) {
      setCart(cart.map(item =>
        item === existingItem
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity, size, color }])
    }
    showToast('Added to bag')
  }

  const removeFromCart = (productId, size, color) => {
    setCart(cart.filter(
      item => !(item.id === productId && item.size === size && item.color === color)
    ))
    showToast('Removed from bag')
  }

  const updateCartQuantity = (productId, quantity, size, color) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color)
    } else {
      setCart(cart.map(item =>
        item.id === productId && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      ))
    }
  }

  const toggleWishlist = (product) => {
    const exists = wishlist.find(item => item.id === product.id)
    if (exists) {
      setWishlist(wishlist.filter(item => item.id !== product.id))
      showToast('Removed from wishlist')
    } else {
      setWishlist([...wishlist, product])
      showToast('Added to wishlist')
    }
  }

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId)
  }

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar
          cartCount={cart.length}
          wishlistCount={wishlist.length}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
        />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  addToCart={addToCart}
                  toggleWishlist={toggleWishlist}
                  isInWishlist={isInWishlist}
                />
              }
            />
            <Route
              path="/shop"
              element={
                <Shop
                  addToCart={addToCart}
                  toggleWishlist={toggleWishlist}
                  isInWishlist={isInWishlist}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductDetail
                  addToCart={addToCart}
                  toggleWishlist={toggleWishlist}
                  isInWishlist={isInWishlist}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  removeFromCart={removeFromCart}
                  updateCartQuantity={updateCartQuantity}
                />
              }
            />
            <Route
              path="/wishlist"
              element={
                <Wishlist
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="/checkout"
              element={
                <Checkout cart={cart} />
              }
            />
            <Route
              path="/order-confirmation"
              element={
                <OrderConfirmation />
              }
            />
          </Routes>
        </main>

        <Footer />
        {toast && <Toast message={toast.message} type={toast.type} />}
      </div>
    </Router>
  )
}

export default App
