// src/pages/Categories.jsx
import React from 'react'

function Categories() {
  const categories = [
    { id: 1, name: "Electronics", count: 45, image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Fashion", count: 78, image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Home & Kitchen", count: 32, image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Sports & Fitness", count: 23, image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Books & Media", count: 56, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Beauty & Health", count: 34, image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&auto=format&fit=crop" },
    { id: 7, name: "Toys & Games", count: 28, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "Automotive", count: 19, image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
  ]

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
    marginBottom: '50px',
    textAlign: 'center'
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '30px'
  },
  categoryCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s'
  },
  categoryImageContainer: {
    height: '200px',
    position: 'relative',
    overflow: 'hidden'
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  categoryOverlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
    padding: '20px',
    color: 'white'
  },
  productCount: {
    fontSize: '0.9rem',
    opacity: '0.9'
  },
  categoryInfo: {
    padding: '20px'
  },
  categoryName: {
    fontSize: '1.2rem',
    marginBottom: '15px',
    color: '#333'
  },
  viewButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9rem'
  }
}

export default Categories