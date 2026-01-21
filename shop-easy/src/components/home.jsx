// src/pages/Home.jsx - UPDATED
import { useCart } from "../context/cartcontext"
import './home.css' // ADD THIS IMPORT

function Home() {
  const { addToCart } = useCart()
  
  const categories = [
    { id: 1, name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Home & Kitchen", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Sports & Fitness", image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
  ]

  const products = [
    { id: 1, name: "Wireless Headphones", price: "₹2,999", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Smart Watch", price: "₹4,999", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Bluetooth Speaker", price: "₹2,399", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
  ]

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to ShopEasy!</h1>
          <p className="hero-text">Your favorite online shopping destination</p>
          <button className="hero-button">Start Shopping →</button>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Shop by Category</h2>
        <p className="section-subtitle">Browse your favorite categories</p>
        
        <div className="categories-grid">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <div className="category-image-container">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="category-image"
                />
              </div>
              <h3 className="category-name">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">Best selling items this week</p>
        
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
                <p className="product-price">{product.price}</p>
                <button 
                  className="add-to-cart-button"
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: parseFloat(product.price.replace('₹', '').replace(',', '')),
                    image: product.image
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="deal-banner">
        <div className="deal-content">
          <h2 className="deal-title">Flash Sale Ends Soon! </h2>
          <p className="deal-text">Limited stock available. Grab your favorites now!</p>
          <button className="deal-button">View All Deals</button>
        </div>
      </section>
    </div>
  )
}

export default Home