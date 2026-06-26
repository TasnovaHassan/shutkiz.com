import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span>🐟</span>
            <div>
              <span className="footer-logo-brand">Shutkiz</span>
              <span className="footer-logo-tag">Premium Dry Fish</span>
            </div>
          </Link>
          <p className="footer-about">
            Bangladesh's most trusted source for premium, hygienically processed dry fish — straight from Cox's Bazar to your kitchen.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com/shutkiz" className="social-btn" target="_blank" rel="noreferrer"><FiFacebook size={18} /></a>
            <a href="https://instagram.com/shutkiz" className="social-btn" target="_blank" rel="noreferrer"><FiInstagram size={18} /></a>
            <a href="https://youtube.com/shutkiz" className="social-btn" target="_blank" rel="noreferrer"><FiYoutube size={18} /></a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-heading">Shop</h4>
          <ul className="footer-links">
            <li><Link to="/products?category=premium-dry-fish">Premium Dry Fish</Link></li>
            <li><Link to="/products?category=raw-fish">Raw Fish</Link></li>
            <li><Link to="/products?category=balachao">Balachao</Link></li>
            <li><Link to="/products?category=fish-chips">Fish Chips</Link></li>
            <li><Link to="/products?category=combo-package">Combo Packages</Link></li>
            <li><Link to="/products?category=gift-box">Gift Boxes</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-heading">Account</h4>
          <ul className="footer-links">
            <li><Link to="/login">Sign In</Link></li>
            <li><Link to="/register">Create Account</Link></li>
            <li><Link to="/orders">Track Order</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
          </ul>
          <h4 className="footer-heading" style={{ marginTop: 'var(--space-5)' }}>Company</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <FiPhone size={15} />
              <a href="tel:+8801324536626">01324 53 66 26</a>
            </li>
            <li>
              <FiMail size={15} />
              <a href="mailto:info@shutkiz.com">info@shutkiz.com</a>
            </li>
            <li>
              <FiMapPin size={15} />
              <span>Cox's Bazar, Chittagong, Bangladesh</span>
            </li>
          </ul>
          <div className="footer-payments">
            <span className="payment-badge">bKash</span>
            <span className="payment-badge">Nagad</span>
            <span className="payment-badge">COD</span>
            <span className="payment-badge">Card</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {currentYear} Shutkiz. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/returns">Return Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}