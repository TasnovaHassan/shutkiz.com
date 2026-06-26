import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import ProductCard from '../product/ProductCard';
import './FeaturedProducts.css';

export default function FeaturedProducts({ products = [] }) {
  if (!products.length) return null;
  return (
    <section className="featured-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Top Picks</span>
          <h2 className="section-title">Best Selling Products</h2>
          <p className="section-desc">Our most-loved dry fish — chosen by thousands of happy customers across Bangladesh</p>
        </div>
        <div className="grid-4">
          {products.slice(0, 8).map(p => <ProductCard key={p._id} product={p} />)}
        </div>
        <div className="featured-more">
          <Link to="/products" className="btn btn-outline btn-lg">
            View All Products <FiArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}