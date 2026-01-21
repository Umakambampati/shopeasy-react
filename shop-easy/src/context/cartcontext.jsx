// src/context/CartContext.jsx - COMPLETE FIXED VERSION
import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Helper function to convert price to number
  const parsePrice = (price) => {
    if (typeof price === 'number') return price
    if (typeof price === 'string') {
      // Remove ₹ symbol and commas, convert to number
      return parseFloat(price.replace('₹', '').replace(/,/g, ''))
    }
    return 0
  }

  // Add item to cart
  const addToCart = (product) => {
    console.log('Adding to cart:', product) // Debug log
    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id)
      
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...currentItems, { 
          ...product, 
          quantity: 1,
          price: parsePrice(product.price)
        }]
      }
    })
  }

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(currentItems =>
      currentItems.filter(item => item.id !== productId)
    )
  }

  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }
    
    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    )
  }

  // Calculate total items in cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  // Calculate total price
  const cartTotal = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  )

  // Clear cart
  const clearCart = () => {
    setCartItems([])
  }

  // Open/close cart
  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  // Format price for display
  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        formatPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}