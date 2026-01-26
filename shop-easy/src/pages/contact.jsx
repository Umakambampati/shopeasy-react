// src/pages/Contact.jsx - RESPONSIVE VERSION
import React, { useState, useEffect } from 'react'

function Contact() {
  const [screenSize, setScreenSize] = useState('desktop')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  
  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width <= 480) {
        setScreenSize('mobile')
      } else if (width <= 768) {
        setScreenSize('tablet')
      } else if (width <= 1024) {
        setScreenSize('small-desktop')
      } else {
        setScreenSize('desktop')
      }
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
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
        maxWidth: screenSize === 'desktop' ? '1200px' : '100%',
        margin: '0 auto',
        padding: screenSize === 'mobile' ? '20px 15px' : 
                screenSize === 'tablet' ? '30px 20px' : '40px 20px'
      },
      header: {
        textAlign: 'center',
        marginBottom: screenSize === 'mobile' ? '30px' : '50px'
      },
      title: {
        fontSize: screenSize === 'mobile' ? '2rem' : 
                 screenSize === 'tablet' ? '2.2rem' : '2.5rem',
        color: '#333',
        marginBottom: screenSize === 'mobile' ? '8px' : '10px'
      },
      subtitle: {
        fontSize: screenSize === 'mobile' ? '1rem' : '1.1rem',
        color: '#666'
      },
      content: {
        display: 'grid',
        gridTemplateColumns: screenSize === 'mobile' ? '1fr' : '1fr 1fr',
        gap: screenSize === 'mobile' ? '30px' : '50px'
      },
      infoSection: {
        backgroundColor: 'white',
        padding: screenSize === 'mobile' ? '25px' : '40px',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
      },
      formSection: {
        backgroundColor: 'white',
        padding: screenSize === 'mobile' ? '25px' : '40px',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
      },
      sectionTitle: {
        fontSize: screenSize === 'mobile' ? '1.5rem' : '1.8rem',
        color: '#333',
        marginBottom: screenSize === 'mobile' ? '20px' : '30px',
        paddingBottom: '10px',
        borderBottom: '2px solid #28a745'
      },
      contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: screenSize === 'mobile' ? '20px' : '30px'
      },
      contactItem: {
        display: 'flex',
        gap: screenSize === 'mobile' ? '15px' : '20px',
        alignItems: 'flex-start'
      },
      contactIcon: {
        fontSize: screenSize === 'mobile' ? '1.8rem' : '2rem',
        color: '#28a745',
        flexShrink: 0
      },
      contactTitle: {
        fontSize: screenSize === 'mobile' ? '1.1rem' : '1.2rem',
        marginBottom: '8px',
        color: '#333'
      },
      contactText: {
        color: '#666',
        lineHeight: '1.5',
        margin: '3px 0',
        fontSize: screenSize === 'mobile' ? '0.9rem' : '1rem'
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
        gap: screenSize === 'mobile' ? '20px' : '25px'
      },
      formGroup: {
        display: 'flex',
        flexDirection: 'column'
      },
      label: {
        marginBottom: '8px',
        fontWeight: '500',
        color: '#333',
        fontSize: screenSize === 'mobile' ? '0.95rem' : '1rem'
      },
      input: {
        padding: screenSize === 'mobile' ? '10px' : '12px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: screenSize === 'mobile' ? '1rem' : '1.05rem'
      },
      textarea: {
        padding: screenSize === 'mobile' ? '10px' : '12px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: screenSize === 'mobile' ? '1rem' : '1.05rem',
        resize: 'vertical',
        minHeight: '120px'
      },
      submitButton: {
        padding: screenSize === 'mobile' ? '12px' : '15px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: screenSize === 'mobile' ? '1rem' : '1.1rem',
        cursor: 'pointer',
        fontWeight: '500',
        marginTop: '10px'
      },
      successMessage: {
        textAlign: 'center',
        padding: screenSize === 'mobile' ? '30px 20px' : '40px 20px',
        backgroundColor: '#d4edda',
        borderRadius: '10px',
        color: '#155724'
      },
      successIcon: {
        fontSize: screenSize === 'mobile' ? '3rem' : '4rem',
        marginBottom: screenSize === 'mobile' ? '15px' : '20px'
      },
      successTitle: {
        fontSize: screenSize === 'mobile' ? '1.5rem' : '1.8rem',
        marginBottom: screenSize === 'mobile' ? '8px' : '10px'
      },
      successText: {
        fontSize: screenSize === 'mobile' ? '1rem' : '1.1rem'
      }
    }
    
    return baseStyles
  }

  const styles = getResponsiveStyles()

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Contact Us</h1>
          <p style={styles.subtitle}>We'd love to hear from you. Send us a message!</p>
        </div>
        
        <div style={styles.content}>
          
          {/* Contact Info */}
          <div style={styles.infoSection}>
            <h2 style={styles.sectionTitle}>Get in Touch</h2>
            
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>📍</div>
                <div>
                  <h3 style={styles.contactTitle}>Address</h3>
                  <p style={styles.contactText}>
                    123 Shopping Street<br />
                    Bengaluru, Karnataka 560001
                  </p>
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>📞</div>
                <div>
                  <h3 style={styles.contactTitle}>Phone</h3>
                  <p style={styles.contactText}>(080) 1234-5678</p>
                  <p style={styles.contactText}>Mon-Fri: 9AM-6PM</p>
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>📧</div>
                <div>
                  <h3 style={styles.contactTitle}>Email</h3>
                  <p style={styles.contactText}>support@shopeasy.com</p>
                  <p style={styles.contactText}>info@shopeasy.com</p>
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>⏰</div>
                <div>
                  <h3 style={styles.contactTitle}>Business Hours</h3>
                  <p style={styles.contactText}>Monday - Friday: 9AM - 6PM</p>
                  <p style={styles.contactText}>Saturday: 10AM - 4PM</p>
                  <p style={styles.contactText}>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div style={styles.formSection}>
            <h2 style={styles.sectionTitle}>Send Message</h2>
            
            {submitted ? (
              <div style={styles.successMessage}>
                <div style={styles.successIcon}>✅</div>
                <h3 style={styles.successTitle}>Message Sent!</h3>
                <p style={styles.successText}>Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                  <label htmlFor="name" style={styles.label}>Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.label}>Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.label}>Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={styles.textarea}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" style={styles.submitButton}>
                  Send Message
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </div>
  )

  
}

export default Contact