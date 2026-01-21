// src/pages/Products.jsx - FIXED VERSION
import React from 'react'
import { useCart } from '../context/cartcontext' // ADD THIS IMPORT

function Products() { // REMOVED addToCart prop
  const { addToCart } = useCart() // ADD THIS LINE
  
  // Product data with NUMERIC prices
  const products = [
    { id: 1, name: "Wireless Headphones", price: 2999, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Smart Watch", price: 4999, category: "Electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Bluetooth Speaker", price: 2399, category: "Electronics", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Gaming Mouse", price: 1799, category: "Electronics", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "T-Shirt", price: 499, category: "Fashion", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Jeans", price: 1299, category: "Fashion", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 7, name: "Coffee Maker", price: 3499, category: "Home", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "Yoga Mat", price: 899, category: "Sports", image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 9, name: "Laptop", price: 54999, category: "Electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 10, name: "Sneakers", price: 3599, category: "Fashion", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 11, name: "Air Fryer", price: 4299, category: "Home", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 12, name: "Dumbbells Set", price: 2499, category: "Sports", image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
  ]

  const categories = ["All", "Electronics", "Fashion", "Home", "Sports"]
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  // Filter products by category
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  // Format price with ₹ symbol
  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`
  }

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
        
        {/* Products Grid */}
        <div style={styles.productsGrid}>
          {filteredProducts.map(product => (
            <div key={product.id} style={styles.productCard}>
              <div style={styles.productImageContainer}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={styles.productImage}
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

const styles = {
  page: {
    paddingTop: '70px',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '30px 20px'
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '40px',
    textAlign: 'center'
  },
  filters: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap'
  },
  filterButton: {
    padding: '8px 20px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.3s'
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
    fontSize: '1rem'
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '30px'
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s, box-shadow 0.3s'
  },
  productImageContainer: {
    height: '200px',
    position: 'relative',
    overflow: 'hidden'
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s'
  },
  categoryBadge: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: 'rgba(40, 167, 69, 0.9)',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: '500'
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
    transition: 'opacity 0.3s'
  },
  quickAddButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  productInfo: {
    padding: '20px'
  },
  productName: {
    fontSize: '1.1rem',
    marginBottom: '5px',
    color: '#333',
    height: '50px',
    overflow: 'hidden'
  },
  productCategory: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '10px'
  },
  productPrice: {
    fontSize: '1.3rem',
    color: '#28a745',
    fontWeight: 'bold',
    marginBottom: '15px'
  },
  addToCartButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'background-color 0.3s'
  }
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