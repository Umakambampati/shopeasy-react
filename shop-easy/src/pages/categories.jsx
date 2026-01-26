// src/pages/Categories.jsx - WITH PROPER RESPONSIVE DESIGN
import React, { useState, useEffect } from 'react'

function Categories() {
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
  
  const categories = [
    { id: 1, name: "Electronics", count: 45, image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=600&fit=crop&crop=center" },
    { id: 2, name: "Fashion", count: 78, image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=600&fit=crop&crop=center" },
    { id: 3, name: "Home & Kitchen", count: 32, image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop&crop=center" },
    { id: 4, name: "Sports & Fitness", count: 23, image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?w=600&h=600&fit=crop&crop=center" },
    { id: 5, name: "Books & Media", count: 56, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop&crop=center" },
    { id: 6, name: "Beauty & Health", count: 34, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center" },
    { id: 7, name: "Toys & Games", count: 28, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=600&fit=crop&crop=center" },
    { id: 8, name: "Automotive", count: 19, image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&h=600&fit=crop&crop=center" }
  ]

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
        marginBottom: screenSize === 'mobile' ? '30px' : '50px',
        textAlign: 'center'
      },
      categoriesGrid: {
        display: 'grid',
        gridTemplateColumns: getGridColumns(),
        gap: screenSize === 'mobile' ? '20px' : '30px',
        width: '100%'
      },
      categoryCard: {
        backgroundColor: 'white',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      },
      categoryImageContainer: {
        height: screenSize === 'mobile' ? '180px' : 
               screenSize === 'tablet' ? '200px' : '220px',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0
      },
      categoryImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        transition: 'transform 0.3s'
      },
      categoryOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
        padding: screenSize === 'mobile' ? '15px' : '20px',
        color: 'white'
      },
      productCount: {
        fontSize: screenSize === 'mobile' ? '0.8rem' : '0.9rem',
        opacity: '0.9'
      },
      categoryInfo: {
        padding: screenSize === 'mobile' ? '15px' : '20px',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      },
      categoryName: {
        fontSize: screenSize === 'mobile' ? '1.1rem' : '1.2rem',
        marginBottom: screenSize === 'mobile' ? '12px' : '15px',
        color: '#333',
        flexGrow: 1
      },
      viewButton: {
        width: '100%',
        padding: screenSize === 'mobile' ? '10px' : '12px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: screenSize === 'mobile' ? '0.9rem' : '0.8rem',
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
        <h1 style={styles.title}>Product Categories</h1>
        <p style={styles.subtitle}>Shop by your favorite categories</p>
        
        <div style={styles.categoriesGrid}>
          {categories.map(category => (
            <div key={category.id} style={styles.categoryCard}>
              <div style={styles.categoryImageContainer}>
                <img 
                  src={category.image} 
                  alt={category.name}
                  style={styles.categoryImage}
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop&crop=center`;
                    e.target.alt = "Category Image";
                  }}
                />
                <div style={styles.categoryOverlay}>
                  <span style={styles.productCount}>{category.count} products</span>
                </div>
              </div>
              
              <div style={styles.categoryInfo}>
                <h3 style={styles.categoryName}>{category.name}</h3>
                <button style={styles.viewButton}>View Products →</button>
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
  .category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
  }
  
  .category-card:hover .category-image {
    transform: scale(1.05);
  }
  
  .view-button:hover {
    background-color: #218838;
  }
`

// Add styles to document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = hoverStyles
  document.head.appendChild(styleSheet)
}

export default Categories