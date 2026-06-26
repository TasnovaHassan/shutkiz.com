import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiStar, FiMinus, FiPlus, FiShoppingCart, FiHeart, FiShare2, FiPackage, FiShield } from 'react-icons/fi';
import { productAPI, authAPI } from '../utils/api';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import ProductCard from '../components/product/ProductCard';
import toast from 'react-hot-toast';
import './ProductDetailPage.css';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(0.5);
  const { addToCart } = useCart();
  const { isAuthenticated, user, fetchMe } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    productAPI.getOne(slug)
      .then(r => {
        setProduct(r.data.product);
        document.title = `${r.data.product.name} — Shutkiz`;
        return productAPI.getRelated(r.data.product._id);
      })
      .then(r => setRelated(r.data.products))
      .catch(() => toast.error('Product not found'))
      .finally(() => setLoading(false));
  }, [slug]);

  const handleWishlist = async () => {
    if (!isAuthenticated) { toast.error('Please sign in first'); return; }
    await authAPI.toggleWishlist(product._id);
    await fetchMe();
    toast.success('Wishlist updated');
  };

  const handleAddToCart = () => {
    addToCart(product, qty);
  };

  if (loading) return <div className="spinner" style={{ marginTop: '80px' }} />;
  if (!product) return <div className="page-wrapper"><div className="container"><h2>Product not found</h2></div></div>;

  const price = product.discountPrice || product.price;
  const discount = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;
  const isWishlisted = user?.wishlist?.some(id => (typeof id === 'object' ? id._id : id) === product._id);

  return (
    <div className="page-wrapper">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span>{product.name}</span>
        </nav>

        <div className="product-detail-grid">
          {/* Images */}
          <div className="detail-images">
            <div className="main-img-wrap">
              <img src={product.images?.[activeImg] || 'https://placehold.co/600x600'} alt={product.name} className="main-img" />
              {discount > 0 && <span className="detail-badge">{discount}% OFF</span>}
            </div>
            {product.images?.length > 1 && (
              <div className="thumbnails">
                {product.images.map((img, i) => (
                  <button key={i} className={`thumb${activeImg === i ? ' active' : ''}`} onClick={() => setActiveImg(i)}>
                    <img src={img} alt={`View ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="detail-info">
            <p className="detail-category">{product.category?.name}</p>
            <h1 className="detail-name">{product.name}</h1>
            {product.nameBn && <p className="detail-name-bn">{product.nameBn}</p>}

            {product.numReviews > 0 && (
              <div className="detail-rating">
                <span className="stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FiStar key={i} size={16} fill={i < Math.round(product.rating) ? 'currentColor' : 'none'} />
                  ))}
                </span>
                <span className="detail-rating-text">{product.rating.toFixed(1)} ({product.numReviews} reviews)</span>
              </div>
            )}

            <div className="detail-price-row">
              <span className={product.discountPrice ? 'price-sale' : 'price-regular'} style={{ fontSize: '2rem' }}>
                ৳{price.toLocaleString()}
              </span>
              <span style={{ color: 'var(--gray-400)', fontSize: '1rem' }}>/{product.unit}</span>
              {product.discountPrice && (
                <span className="price-original" style={{ fontSize: '1.1rem' }}>৳{product.price.toLocaleString()}</span>
              )}
            </div>

            <p className="detail-origin">📍 Origin: {product.origin}</p>

            {/* Quantity selector */}
            <div className="qty-section">
              <label className="form-label">Quantity ({product.unit})</label>
              <div className="detail-qty">
                <button onClick={() => setQty(q => Math.max(0.5, +(q - 0.5).toFixed(1)))}><FiMinus size={14} /></button>
                <span>{qty} {product.unit}</span>
                <button onClick={() => setQty(q => +(q + 0.5).toFixed(1))}><FiPlus size={14} /></button>
              </div>
              <p className="subtotal">Subtotal: <strong>৳{(price * qty).toLocaleString()}</strong></p>
            </div>

            {/* CTA buttons */}
            <div className="detail-cta">
              <button
                className="btn btn-primary btn-lg"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                style={{ flex: 1 }}
              >
                <FiShoppingCart size={18} />
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
              <button className={`btn btn-outline wishlist-btn${isWishlisted ? ' wishlisted' : ''}`} onClick={handleWishlist}>
                <FiHeart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
              <button className="btn btn-outline" onClick={() => { navigator.clipboard.writeText(window.location.href); toast.success('Link copied!'); }}>
                <FiShare2 size={18} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="trust-badges">
              <div className="trust-badge"><FiPackage size={16} /> Free delivery over ৳1,000</div>
              <div className="trust-badge"><FiShield size={16} /> 100% Natural, No Preservatives</div>
            </div>

            {/* Description */}
            <div className="detail-desc">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            {/* Nutrition */}
            {product.nutritionInfo && Object.values(product.nutritionInfo).some(Boolean) && (
              <div className="nutrition-table">
                <h3>Nutrition per 100g</h3>
                <div className="nutrition-grid">
                  {product.nutritionInfo.protein && <div className="nut-item"><span>Protein</span><strong>{product.nutritionInfo.protein}</strong></div>}
                  {product.nutritionInfo.fat && <div className="nut-item"><span>Fat</span><strong>{product.nutritionInfo.fat}</strong></div>}
                  {product.nutritionInfo.calories && <div className="nut-item"><span>Calories</span><strong>{product.nutritionInfo.calories}</strong></div>}
                  {product.nutritionInfo.omega3 && <div className="nut-item"><span>Omega-3</span><strong>{product.nutritionInfo.omega3}</strong></div>}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reviews */}
        {product.reviews?.length > 0 && (
          <section className="reviews-section">
            <h2 className="reviews-title">Customer Reviews</h2>
            <div className="reviews-list">
              {product.reviews.map(r => (
                <div key={r._id} className="review-card">
                  <div className="review-header">
                    <span className="review-avatar">{r.name?.charAt(0)}</span>
                    <div>
                      <p className="review-name">{r.name}</p>
                      <div className="stars">
                        {Array.from({ length: 5 }, (_, i) => (
                          <FiStar key={i} size={13} fill={i < r.rating ? 'currentColor' : 'none'} />
                        ))}
                      </div>
                    </div>
                    <span className="review-date">{new Date(r.createdAt).toLocaleDateString('en-BD')}</span>
                  </div>
                  <p className="review-text">{r.comment}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related */}
        {related.length > 0 && (
          <section style={{ marginTop: 'var(--space-16)' }}>
            <h2 className="section-title" style={{ marginBottom: 'var(--space-8)' }}>You May Also Like</h2>
            <div className="grid-4">
              {related.map(p => <ProductCard key={p._id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}