import { Link } from 'react-router-dom';
import { FiPhone, FiFacebook, FiInstagram, FiYoutube, FiSend } from 'react-icons/fi';
import { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* Column 1: Phone + Social */}
        <div className="footer-contact-col">
          <div className="footer-phone-box">
            <FiPhone size={15} />
            <span>+008 01324536626</span>
          </div>
          <div className="footer-social-box">
            <a href="https://facebook.com/shutkiz" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FiFacebook size={20} />
            </a>
            <a href="https://instagram.com/shutkiz" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FiInstagram size={20} />
            </a>
            <a href="https://youtube.com/shutkiz" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FiYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Policy links */}
        <div className="footer-links-col">
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/returns">Return &amp; Refund Policy</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/delivery">Delivery Policy</Link></li>
          </ul>
        </div>

        {/* Column 3: Company links */}
        <div className="footer-links-col">
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/privacy">Privacy Policies</Link></li>
            <li><Link to="/terms">Terms &amp; Conditions</Link></li>
            <li><Link to="/career">Career</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-newsletter-col">
          <h4>Subscribe Our Newsletter</h4>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
            />
            <button className="newsletter-submit" onClick={handleSubscribe} aria-label="Subscribe">
              <FiSend size={16} />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>© {currentYear} Shutkiz. All rights reserved.</p>
          <span>Developed by <strong>Authentic Four Technology</strong></span>
        </div>
      </div>
    </footer>
  );
}