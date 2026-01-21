// src/components/Cart.jsx - FIXED VERSION
import React from 'react'
import { useCart } from '../context/cartcontext'
import './cart.css'

function Cart() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    isCartOpen,
    removeFromCart,
    updateQuantity,
    closeCart,
    clearCart,
    formatPrice
  } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="cart-overlay" onClick={closeCart}></div>
      
      {/* Cart Sidebar */}
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Your Shopping Cart ({cartCount})</h2>
          <button className="close-cart" onClick={closeCart}>×</button>
        </div>
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <p>Add some products to get started!</p>
            </div>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="cart-item-image" 
                  />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    {item.category && <p className="cart-item-category">{item.category}</p>}
                    <p className="cart-item-price">{formatPrice(item.price)}</p>
                    <div className="quantity-controls">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              ))}
              
              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="cart-actions">
                  <button 
                    className="clear-cart-btn" 
                    onClick={clearCart}
                    disabled={cartItems.length === 0}
                  >
                    Clear Cart
                  </button>
                  <button 
                    className="checkout-btn"
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart