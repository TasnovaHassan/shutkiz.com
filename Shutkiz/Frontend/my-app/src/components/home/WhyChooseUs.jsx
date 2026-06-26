import './WhyChooseUs.css';

const features = [
  { icon: '🌊', title: 'Direct from Cox\'s Bazar', desc: 'Sourced directly from the fishermen of Bangladesh\'s coast — no middlemen, maximum freshness.' },
  { icon: '☀️', title: 'Traditional Sun-Drying', desc: 'Every fish is dried the authentic way — open sun, clean air, no artificial heating or chemicals.' },
  { icon: '🧪', title: 'Zero Preservatives', desc: 'What you taste is pure fish. No artificial colour, no chemicals, no compromise on quality.' },
  { icon: '📦', title: 'Hygienic Packaging', desc: 'Sealed airtight to preserve freshness and aroma until it reaches your kitchen.' },
  { icon: '🚚', title: 'Fast Home Delivery', desc: 'Delivered across Bangladesh. Free shipping on orders over ৳1,000.' },
  { icon: '💬', title: '24/7 Customer Support', desc: 'Questions? Our team is always reachable via WhatsApp, phone, or email.' },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Why Shutkiz</span>
          <h2 className="section-title">The Shutkiz Promise</h2>
          <p className="section-desc">Every order carries the care of our fishing communities and the rigour of our quality standards</p>
        </div>
        <div className="why-grid">
          {features.map((f, i) => (
            <div key={i} className="why-card">
              <span className="why-icon">{f.icon}</span>
              <h3 className="why-title">{f.title}</h3>
              <p className="why-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}