// src/components/Navbar.jsx - WITH HAMBURGER MENU
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cartcontext'
import './navbar.css'

function Navbar() {
  const { cartCount, openCart } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          Shop<span className="logo-easy">Easy</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
          <Link to="/products" className="nav-link" onClick={closeMobileMenu}>Products</Link>
          <Link to="/categories" className="nav-link" onClick={closeMobileMenu}>Categories</Link>
          <Link to="/about" className="nav-link" onClick={closeMobileMenu}>About</Link>
          <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</Link>
        </div>
        
        {/* Cart Button */}
        <button className="cart-button" onClick={openCart}>
          cart {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
        
        {/* Hamburger Menu Button (Mobile Only) */}
        {isMobile && (
          <button 
            className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}
    </nav>
  )
}

export default Navbar