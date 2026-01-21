// src/pages/About.jsx
import React from 'react'

function About() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        
        {/* Hero Section */}
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>About ShopEasy</h1>
          <p style={styles.heroText}>Your trusted online shopping destination since 2023</p>
        </div>
        
        {/* Content Sections */}
        <div style={styles.content}>
          
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Our Story</h2>
            <p style={styles.sectionText}>
              Founded in 2023, ShopEasy started with a simple mission: to make online shopping 
              easy, convenient, and accessible for everyone. What began as a small startup has 
              grown into one of India's favorite e-commerce platforms.
            </p>
            <p style={styles.sectionText}>
              We believe that everyone deserves access to quality products at affordable prices, 
              delivered right to their doorstep with a seamless shopping experience.
            </p>
          </section>
          
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Our Mission</h2>
            <p style={styles.sectionText}>
              To revolutionize online shopping by providing a user-friendly platform with 
              a vast selection of products, competitive prices, and exceptional customer service.
            </p>
          </section>
          
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
            <div style={styles.featuresGrid}>
              <div style={styles.feature}>
                <div style={styles.featureIcon}>🚚</div>
                <h3 style={styles.featureTitle}>Fast Delivery</h3>
                <p style={styles.featureText}>Free shipping on orders above ₹499. Delivery in 2-5 days.</p>
              </div>
              
              <div style={styles.feature}>
                <div style={styles.featureIcon}>✅</div>
                <h3 style={styles.featureTitle}>Quality Assurance</h3>
                <p style={styles.featureText}>All products are verified for quality before shipping.</p>
              </div>
              
              <div style={styles.feature}>
                <div style={styles.featureIcon}>🔄</div>
                <h3 style={styles.featureTitle}>Easy Returns</h3>
                <p style={styles.featureText}>30-day return policy. No questions asked.</p>
              </div>
              
              <div style={styles.feature}>
                <div style={styles.featureIcon}>📞</div>
                <h3 style={styles.featureTitle}>24/7 Support</h3>
                <p style={styles.featureText}>Our customer support team is always here to help you.</p>
              </div>
            </div>
          </section>
          
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Our Values</h2>
            <div style={styles.valuesList}>
              <div style={styles.valueItem}>
                <h3 style={styles.valueTitle}>Customer First</h3>
                <p>Our customers are at the heart of everything we do.</p>
              </div>
              <div style={styles.valueItem}>
                <h3 style={styles.valueTitle}>Transparency</h3>
                <p>Clear pricing, honest product descriptions, no hidden charges.</p>
              </div>
              <div style={styles.valueItem}>
                <h3 style={styles.valueTitle}>Innovation</h3>
                <p>Continuously improving our platform and services.</p>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    paddingTop: '70px',
    minHeight: '100vh'
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px'
  },
  hero: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    marginBottom: '50px'
  },
  heroTitle: {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '15px'
  },
  heroText: {
    fontSize: '1.2rem',
    color: '#666'
  },
  content: {
    paddingBottom: '60px'
  },
  section: {
    marginBottom: '60px'
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '2px solid #28a745'
  },
  sectionText: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '15px'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '30px'
  },
  feature: {
    textAlign: 'center',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '20px'
  },
  featureTitle: {
    fontSize: '1.3rem',
    marginBottom: '15px',
    color: '#333'
  },
  featureText: {
    color: '#666',
    lineHeight: '1.5'
  },
  valuesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px'
  },
  valueItem: {
    padding: '25px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px'
  },
  valueTitle: {
    fontSize: '1.3rem',
    color: '#28a745',
    marginBottom: '10px'
  }
}

export default About