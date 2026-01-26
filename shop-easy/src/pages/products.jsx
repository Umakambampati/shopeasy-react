// src/pages/Products.jsx - PROPER DESKTOP, TABLET & MOBILE
import React, { useState, useEffect } from 'react'
import { useCart } from '../context/cartcontext'

function Products() {
  const { addToCart } = useCart()
  const [screenSize, setScreenSize] = useState('desktop')
  
  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width <= 480) {
        setScreenSize('mobile')      // Very small phones
      } else if (width <= 768) {
        setScreenSize('tablet')      // Tablets and large phones
      } else if (width <= 1024) {
        setScreenSize('small-desktop') // Small laptops
      } else {
        setScreenSize('desktop')     // Large screens
      }
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])
  
  // Product data
  const products = [
    { id: 1, name: "Wireless Headphones", price: 2999, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&crop=center" },
    { id: 2, name: "Smart Watch", price: 4999, category: "Electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop&crop=center" },
    { id: 3, name: "Bluetooth Speaker", price: 2399, category: "Electronics", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=600&fit=crop&crop=center" },
    { id: 4, name: "Gaming Mouse", price: 1799, category: "Electronics", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&h=600&fit=crop&crop=center" },
    { id: 5, name: "T-Shirt", price: 499, category: "Fashion", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&crop=center" },
    { id: 6, name: "Jeans", price: 1299, category: "Fashion", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=600&fit=crop&crop=center" },
    { id: 7, name: "Coffee Maker", price: 3499, category: "Home", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop&crop=center" },
    { id: 8, name: "Yoga Mat", price: 899, category: "Sports", image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=600&fit=crop&crop=center" },
    { id: 9, name: "Laptop", price: 54999, category: "Electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop&crop=center" },
    { id: 10, name: "Sneakers", price: 3599, category: "Fashion", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop&crop=center" },
    { id: 11, name: "Air Fryer", price: 4299, category: "Home", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&crop=center" },
    { id: 12, name: "Dumbbells Set", price: 2499, category: "Sports", image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&h=600&fit=crop&crop=center" }
  ]

  const categories = ["All", "Electronics", "Fashion", "Home", "Sports"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter products by category
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  // Format price with ₹ symbol
  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`
  }

  // Get grid columns based on screen size
  const getGridColumns = () => {
    switch(screenSize) {
      case 'mobile': return '1fr'                      // 1 column
      case 'tablet': return 'repeat(2, 1fr)'           // 2 columns
      case 'small-desktop': return 'repeat(3, 1fr)'    // 3 columns
      case 'desktop': return 'repeat(4, 1fr)'          // 4 columns
      default: return 'repeat(4, 1fr)'
    }
  }

  // Responsive styles
  const getResponsiveStyles = () => {
    const baseStyles = {
      page: {
        paddingTop: '70px',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa'
      },
      container: {
        maxWidth: screenSize === 'desktop' ? '1400px' : '1200px',
        margin: '0 auto',
        padding: screenSize === 'mobile' ? '15px' : 
                screenSize === 'tablet' ? '20px' : '30px',
        width: '100%'
      },
      title: {
        fontSize: screenSize === 'mobile' ? '1.8rem' : 
                 screenSize === 'tablet' ? '2rem' : '2.5rem',
        color: '#333',
        marginBottom: '10px',
        textAlign: 'center'
      },
      subtitle: {
        fontSize: screenSize === 'mobile' ? '0.9rem' : '1.1rem',
        color: '#666',
        marginBottom: screenSize === 'mobile' ? '25px' : '40px',
        textAlign: 'center'
      },
      filters: {
        display: 'flex',
        justifyContent: 'center',
        gap: screenSize === 'mobile' ? '8px' : '12px',
        marginBottom: '25px',
        flexWrap: 'wrap',
        padding: '0 5px'
      },
      filterButton: {
        padding: screenSize === 'mobile' ? '6px 14px' : '8px 20px',
        border: '1px solid #ddd',
        backgroundColor: 'white',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: screenSize === 'mobile' ? '0.85rem' : '0.95rem',
        transition: 'all 0.3s',
        whiteSpace: 'nowrap'
      },
      filterButtonActive: {
        backgroundColor: '#28a745',
        color: 'white',
        borderColor: '#28a745'
      },
      productCount: {
        textAlign: 'center',
        color: '#666',
        marginBottom: '30px',
        fontSize: screenSize === 'mobile' ? '0.95rem' : '1.1rem',
        padding: '0 10px'
      },
      productsGrid: {
        display: 'grid',
        gridTemplateColumns: getGridColumns(),
        gap: screenSize === 'mobile' ? '20px' : '30px',
        width: '100%'
      },
      productCard: {
        backgroundColor: 'white',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      },
      productImageContainer: {
        height: screenSize === 'mobile' ? '200px' : 
               screenSize === 'tablet' ? '220px' : '240px',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0
      },
      productImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        transition: 'transform 0.5s'
      },
      categoryBadge: {
        position: 'absolute',
        top: '10px',
        left: '10px',
        backgroundColor: 'rgba(40, 167, 69, 0.9)',
        color: 'white',
        padding: screenSize === 'mobile' ? '4px 10px' : '6px 14px',
        borderRadius: '12px',
        fontSize: screenSize === 'mobile' ? '0.75rem' : '0.85rem',
        fontWeight: '500',
        zIndex: 2
      },
      imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        transition: 'opacity 0.3s',
        zIndex: 1
      },
      quickAddButton: {
        padding: screenSize === 'mobile' ? '8px 16px' : '10px 20px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: screenSize === 'mobile' ? '0.9rem' : '1rem',
        fontWeight: '500'
      },
      productInfo: {
        padding: screenSize === 'mobile' ? '15px' : '20px',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      },
      productName: {
        fontSize: screenSize === 'mobile' ? '1rem' : '1.1rem',
        marginBottom: '8px',
        color: '#333',
        height: screenSize === 'mobile' ? '48px' : 
               screenSize === 'tablet' ? '52px' : '56px',
        overflow: 'hidden',
        lineHeight: '1.3'
      },
      productCategory: {
        fontSize: screenSize === 'mobile' ? '0.85rem' : '0.9rem',
        color: '#666',
        marginBottom: '10px'
      },
      productPrice: {
        fontSize: screenSize === 'mobile' ? '1.2rem' : '1.4rem',
        color: '#28a745',
        fontWeight: 'bold',
        marginBottom: '15px'
      },
      addToCartButton: {
        width: '100%',
        padding: screenSize === 'mobile' ? '10px' : '12px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: screenSize === 'mobile' ? '0.95rem' : '1.05rem',
        fontWeight: '500',
        transition: 'background-color 0.3s',
        marginTop: 'auto'
      }
    }
    
    return baseStyles
  }

  const styles = getResponsiveStyles()

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>All Products</h1>
        <p style={styles.subtitle}>Browse our complete collection</p>
        
        {/* Category Filters */}
        <div style={styles.filters}>
          {categories.map(category => (
            <button 
              key={category}
              style={{
                ...styles.filterButton,
                ...(selectedCategory === category && styles.filterButtonActive)
              }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Products Count */}
        <p style={styles.productCount}>
          Showing {filteredProducts.length} products
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </p>
        
        {/* Products Grid - NOW WITH PROPER DESKTOP VIEW */}
        <div style={styles.productsGrid}>
          {filteredProducts.map(product => (
            <div key={product.id} style={styles.productCard}>
              <div style={styles.productImageContainer}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={styles.productImage}
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop&crop=center`;
                    e.target.alt = "Product Image";
                  }}
                />
                <span style={styles.categoryBadge}>{product.category}</span>
                
                {/* Add to Cart Button on Image Hover */}
                <div style={styles.imageOverlay}>
                  <button 
                    style={styles.quickAddButton}
                    onClick={() => addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      category: product.category
                    })}
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
              
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productCategory}>{product.category}</p>
                <p style={styles.productPrice}>{formatPrice(product.price)}</p>
                
                <button 
                  style={styles.addToCartButton}
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    category: product.category
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Add hover effects
const hoverStyles = `
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }
  
  .product-card:hover .product-image {
    transform: scale(1.05);
  }
  
  .product-card:hover .image-overlay {
    opacity: 1;
  }
  
  .add-to-cart-button:hover {
    background-color: #0056b3;
  }
  
  .quick-add-button:hover {
    background-color: #218838;
  }
`

// Add styles to document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = hoverStyles
  document.head.appendChild(styleSheet)
}

export default Products