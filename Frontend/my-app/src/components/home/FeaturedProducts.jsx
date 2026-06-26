import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = ({ products = [] }) => {
  if (products.length === 0) return null;

  return (
    <section className="featured-products-section">
      <div className="container">
        <div className="featured-header">
          <h2>Featured Products</h2>
        </div>
        
        <div className="featured-grid">
          {products.map((product) => (
            <div key={product._id} className="shutkiz-grid-card">
              <div className="grid-card-img-holder">
                <img 
                  src={product.image || 'https://via.placeholder.com/250'} 
                  alt={product.name} 
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/250'; }}
                />
              </div>
              <div className="grid-card-details">
                <h3 className="grid-card-title">{product.name}</h3>
                <div className="grid-card-pricing">
                  <span className="grid-price-bdt">
                    ৳ {product.price || product.priceRange}
                  </span>
                  {product.oldPrice && (
                    <span className="grid-price-old">৳ {product.oldPrice}</span>
                  )}
                </div>
                <button className="grid-card-buy-btn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;