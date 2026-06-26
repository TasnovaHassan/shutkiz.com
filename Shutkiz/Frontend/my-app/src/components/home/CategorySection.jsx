import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './CategorySection.css';

export default function CategorySection({ categories = [] }) {
  if (!categories.length) return null;
  return (
    <section className="category-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Browse By Type</span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-desc">From classic Loitta to rare Ilish — explore our full range of premium dry fish</p>
        </div>
        <div className="category-grid">
          {categories.map(cat => (
            <Link key={cat._id} to={`/products?category=${cat._id}`} className="category-card">
              <div className="category-img-wrap">
                <img
                  src={cat.image || `https://placehold.co/200x200/e8d5b7/3d2007?text=${encodeURIComponent(cat.name)}`}
                  alt={cat.name}
                  className="category-img"
                />
                <div className="category-overlay">
                  <FiArrowRight size={20} />
                </div>
              </div>
              <div className="category-info">
                <h3 className="category-name">{cat.name}</h3>
                {cat.nameBn && <p className="category-name-bn">{cat.nameBn}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}