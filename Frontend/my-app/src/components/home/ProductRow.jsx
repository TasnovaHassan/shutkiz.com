import React, { useRef } from 'react';
import './ProductRow.css';

const ProductRow = ({ title, products = [] }) => {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (products.length === 0) return null;

  return (
    <section className="product-row-section">
      <div className="product-row-header">
        <h2>{title}</h2>
        <span className="row-arrow-link">→</span>
      </div>

      <div className="slider-container-wrapper">
        <button className="slider-nav-btn btn-left" onClick={() => scroll('left')}>‹</button>

        <div className="product-row-slider" ref={rowRef}>
          {products.map((product) => (
            <div key={product._id} className="shutkiz-row-card">
              <div className="row-card-img-holder">
                <img 
                  src={product.image || 'https://via.placeholder.com/250'} 
                  alt={product.name} 
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/250'; }}
                />
              </div>
              <div className="row-card-details">
                <h3 className="row-card-title">{product.name}</h3>
                <div className="row-card-pricing">
                  <span className="row-price-bdt">
                    ৳ {product.priceRange ? product.priceRange : product.price}
                  </span>
                </div>
                <button className="row-card-buy-btn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-nav-btn btn-right" onClick={() => scroll('right')}>›</button>
      </div>
    </section>
  );
};

export default ProductRow;