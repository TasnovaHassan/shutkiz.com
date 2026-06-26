import { useEffect, useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyChooseUs from '../components/home/WhyChooseUs';
import { productAPI, categoryAPI } from '../utils/api';
import './HomePage.css';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    document.title = 'Shutkiz — Premium Taste of Dry Fish';
    const fetchData = async () => {
      try {
        const [pRes, cRes] = await Promise.all([
          productAPI.getFeatured(),
          categoryAPI.getAll(),
        ]);
        setProducts(pRes.data.products);
        setCategories(cRes.data.categories);
      } catch (err) {
        console.error('Failed to load home data', err);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <HeroSection />
      <CategorySection categories={categories} />
      <FeaturedProducts products={products} />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTABanner />
    </main>
  );
}

function TestimonialsSection() {
  const reviews = [
    { name: 'Rahim Uddin', city: 'Dhaka', rating: 5, text: 'সেরা শুঁটকি! মানের সাথে কোনো আপোস নেই। প্যাকেজিং অনেক সুন্দর এবং ডেলিভারি দ্রুত।' },
    { name: 'Nasrin Akter', city: 'Chittagong', rating: 5, text: 'The Rupchanda was exactly like the ones from Cox\'s Bazar market. No smell of chemicals. Will definitely reorder.' },
    { name: 'Kamal Hossain', city: 'Sylhet', rating: 4, text: 'Ilish shutki was rare to find. Shutkiz had it in stock and delivered on time. Quality is excellent.' },
    { name: 'Fatema Begum', city: 'Rajshahi', rating: 5, text: 'Combo pack is perfect for gifting. Beautifully packed. My family loved it. ধন্যবাদ Shutkiz!' },
  ];
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Customer Love</span>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>
        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <div key={i} className="testimonial-card">
              <div className="t-stars">
                {'⭐'.repeat(r.rating)}
              </div>
              <p className="t-text">"{r.text}"</p>
              <div className="t-author">
                <span className="t-avatar">{r.name.charAt(0)}</span>
                <div>
                  <p className="t-name">{r.name}</p>
                  <p className="t-city">{r.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <div className="cta-text">
          <h2>রেডি অর্ডার করতে?</h2>
          <p>Call us or order online — delivery across Bangladesh in 2–4 days</p>
        </div>
        <div className="cta-actions">
          <a href="tel:+8801324536626" className="btn btn-primary btn-lg">📞 01324 53 66 26</a>
          <a href="https://wa.me/8801324536626" className="btn btn-outline-white btn-lg" target="_blank" rel="noreferrer">💬 WhatsApp</a>
        </div>
      </div>
    </section>
  );
}