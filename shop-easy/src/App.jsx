// src/App.jsx
import React from 'react'
import { CartProvider } from './context/cartcontext'
import Navbar from './components/navbar'
import Home from './components/home'
import Products from './pages/products'
import Categories from './pages/categories'
import About from './pages/about'
import Contact from './pages/contact'
import Cart from './components/cartcomponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Navbar />
          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  )
}

export default App