import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiHeart, FiLogOut, FiPackage, FiSettings, FiGlobe } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const [searchQ, setSearchQ] = useState('');
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout, isAdmin, isAuthenticated } = useAuth();
  const { cartCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const profileRef = useRef(null);

  // Default to first item active if no matching route is met to look exactly like the screenshot
  const currentPath = location.pathname;

  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQ.trim()) {
      navigate(`/products?keyword=${encodeURIComponent(searchQ.trim())}`);
    }
  };

  const categories = [
    { label: 'Premium Dry Fish', path: '/' }, // Set to root or your specific route
    { label: 'Raw Fish', path: '/category/raw-fish' },
    { label: 'Balachao', path: '/category/balachao' },
    { label: 'Fish Chips', path: '/category/fish-chips' },
    { label: 'Dry Fish Bharta Mix', path: '/category/bharta-mix' },
    { label: 'Shutki Recipe', path: '/recipes' },
    { label: 'Shutki Blog', path: '/blog' },
    { label: 'Our Activities', path: '/activities' }
  ];

  return (
    <header className="shutkiz-header-container">
      <div className="shutkiz-nav-wrapper">
        
        {/* Top Header Row */}
        <div className="shutkiz-top-bar">
          {/* Brand Logo Asset Frame */}
          <Link to="/" className="shutkiz-logo-link">
            <img 
              src="https://www.shutkiz.com/_next/static/media/Shutkiz.21bbfc24.png" 
              alt="Shutkiz Premium Logo" 
              className="shutkiz-logo-img" 
            />
          </Link>

          {/* Centered Minimal Pill Search */}
          <form onSubmit={handleSearch} className="shutkiz-search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchQ}
              onChange={e => setSearchQ(e.target.value)}
              className="shutkiz-search-input"
            />
            <button type="submit" className="shutkiz-search-submit-icon-btn">
              <FiSearch size={16} />
            </button>
          </form>

          {/* Action Icons Layout Block */}
          <div className="shutkiz-actions-group">
            {/* Account Utility drop menu */}
            <div className="shutkiz-profile-dropdown-root" ref={profileRef}>
              <button 
                className="shutkiz-utility-icon-btn" 
                onClick={() => isAuthenticated ? setProfileOpen(!profileOpen) : navigate('/login')}
                aria-label="User Account"
              >
                <FiUser size={22} />
              </button>
              {isAuthenticated && profileOpen && (
                <div className="shutkiz-account-dropdown-box">
                  <div className="dropdown-profile-info">
                    <p className="dropdown-info-name">{user?.name}</p>
                    <p className="dropdown-info-email">{user?.email}</p>
                  </div>
                  <div className="dropdown-interactive-list">
                    <Link to="/account" className="dropdown-nav-item"><FiUser size={14} /> Account</Link>
                    <Link to="/orders" className="dropdown-nav-item"><FiPackage size={14} /> Orders</Link>
                    {isAdmin && <Link to="/admin" className="dropdown-nav-item admin-text"><FiSettings size={14} /> Admin</Link>}
                    <button onClick={logout} className="dropdown-nav-item logout-text"><FiLogOut size={14} /> Sign Out</button>
                  </div>
                </div>
              )}
            </div>

            {/* Shopping Cart Icon + Notification Badge */}
            <button className="shutkiz-utility-icon-btn cart-relative-wrapper" onClick={() => setIsCartOpen(true)} aria-label="Cart">
              <FiShoppingCart size={22} />
              <span className="shutkiz-red-badge-counter">{cartCount}</span>
            </button>

            {/* Country/Globe translation node */}
            <button className="shutkiz-utility-icon-btn" aria-label="Language Selector">
              <FiGlobe size={22} />
            </button>

            {/* Mobile hamburger configuration link */}
            <button className="shutkiz-utility-icon-btn mobile-menu-toggle-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Bottom Horizontal Tags Subnavigation Row */}
        <nav className={`shutkiz-tags-subnav${menuOpen ? ' show-mobile' : ''}`}>
          {categories.map((cat, index) => {
            const isFirstOrActive = currentPath === cat.path || (currentPath === '/' && index === 0);
            return (
              <Link 
                key={index} 
                to={cat.path} 
                className={`shutkiz-category-pill${isFirstOrActive ? ' active-pill' : ''}`}
              >
                {cat.label}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}