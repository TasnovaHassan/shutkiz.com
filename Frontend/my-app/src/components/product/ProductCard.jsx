import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiStar, FiEye } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { authAPI } from '../../utils/api';
import toast from 'react-hot-toast';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isAuthenticated, user, fetchMe } = useAuth();

  const price = product.discountPrice || product.price;
  const hasDiscount = product.discountPrice && product.discountPrice < product.price;
  const discountPct = hasDiscount
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;
  const isWishlisted = user?.wishlist?.some(
    id => (typeof id === 'object' ? id._id : id) === product._id
  );
  const inStock = product.stock > 0;

  const handleWishlist = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) { toast.error('Please sign in to save to wishlist'); return; }
    try {
      await authAPI.toggleWishlist(product._id);
      await fetchMe();
      toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
    } catch {
      toast.error('Something went wrong');
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!inStock) return;
    addToCart(product);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        size={12}
        fill={i < Math.round(rating) ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.slug}`} className="product-img-wrap">
        <img
          src={product.images?.[0] || 'https://placehold.co/400x400/f5edd9/3d2007?text=Fish'}
          alt={product.name}
          className="product-img"
          loading="lazy"
        />
        <div className="product-badges">
          {hasDiscount && (
            <span className="badge badge-amber">{discountPct}% OFF</span>
          )}
          {!inStock && (
            <span className="badge badge-danger">Out of Stock</span>
          )}
          {product.isFeatured && inStock && !hasDiscount && (
            <span className="badge badge-ocean">Featured</span>
          )}
        </div>
        <div className="product-actions-overlay">
          <button className="overlay-btn" onClick={handleWishlist} aria-label="Wishlist">
            <FiHeart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          <Link to={`/products/${product.slug}`} className="overlay-btn" onClick={e => e.stopPropagation()} aria-label="Quick view">
            <FiEye size={16} />
          </Link>
        </div>
      </Link>

      <div className="product-body">
        <Link to={`/products/${product.slug}`}>
          <p className="product-category">{product.category?.name}</p>
          <h3 className="product-name">{product.name}</h3>
          {product.nameBn && <p className="product-name-bn">{product.nameBn}</p>}
        </Link>

        {product.numReviews > 0 && (
          <div className="product-rating">
            <span className="stars">{renderStars(product.rating)}</span>
            <span className="rating-count">({product.numReviews})</span>
          </div>
        )}

        <div className="product-footer">
          <div className="product-price">
            <span className={hasDiscount ? 'price-sale' : 'price-regular'}>
              ৳{price.toLocaleString()}
            </span>
            <span className="price-unit">/{product.unit}</span>
            {hasDiscount && (
              <span className="price-original">৳{product.price.toLocaleString()}</span>
            )}
          </div>

          <button
            className={`add-cart-btn${!inStock ? ' disabled' : ''}`}
            onClick={handleAddToCart}
            disabled={!inStock}
            aria-label="Add to cart"
          >
            <FiShoppingCart size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}