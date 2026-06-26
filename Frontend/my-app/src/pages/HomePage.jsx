import React, { useEffect, useState, useRef } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
//import WhyChooseUs from '../components/home/WhyChooseUs';
import { productAPI, categoryAPI } from '../utils/api';
import ProductRow from '../components/home/ProductRow';
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
        setProducts(pRes.data.products || []);
        setCategories(cRes.data.categories || []);
      } catch (err) {
        console.error('Failed to load home data', err);
      }
    };
    fetchData();
  }, []);

  const dummyFeaturedProducts = [
    { _id: 'f1', name: 'Chatgaiya Balachao Combo Package', price: '1000', oldPrice: '1240', image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FQMdktPSBYF-1781085312-Combo%20Balachao.jpg&w=640&q=75' },
    { _id: 'f2', name: 'Family Combo Pack', price: '1500', oldPrice: '1750', image: 'https://th.bing.com/th/id/OIP.PoApUuGwuU7jTtbhcJAYxgHaHa?w=174&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
    { _id: 'f4', name: '3 Pack Combo', price: '2000', image: 'https://tse1.mm.bing.net/th/id/OIP.zGmLdd95jljgmBdm3KMwegHaKe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { _id: 'f5', name: 'Mega Premium Shutki Mix', price: '2500', oldPrice: '3000', image: 'https://img.drz.lazcdn.com/static/bd/p/61056ee05e95ad826df1047fcfc2b3e4.jpg_720x720q80.jpg_.webp' },
  ];

  const dummyProducts = [
    { _id: '1', name: 'Premium Loitta Shutki', price: '450', image: 'https://via.placeholder.com/250' },
    { _id: '2', name: 'Kachki Shutki', price: '550', image: 'https://via.placeholder.com/250' },
    { _id: '3', name: 'Rupchanda Shutki', price: '1200', image: 'https://via.placeholder.com/250' },
    { _id: '4', name: 'Shrimp Shutki', price: '800', image: 'https://via.placeholder.com/250' },
    { _id: '5', name: 'Baila Shutki', price: '650', image: 'https://via.placeholder.com/250' },
    { _id: '6', name: 'Koral Fish Shutki', price: '1100', image: 'https://via.placeholder.com/250' },
    { _id: '7', name: 'Chepa Shutki Premium', price: '500', image: 'https://via.placeholder.com/250' },
    { _id: '8', name: 'Ilish Vorta Mix', price: '400', image: 'https://via.placeholder.com/250' },
  ];

  const premiumDryFishProducts = [
    { _id: 'p1', name: 'Loila Icha - লইল্যা ইছা', priceRange: '750 - 2950', image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FSj5MK9TxNX-1761376171-Loila%20Icha%20-%20%E0%A6%B2%E0%A6%87%E0%A6%B2%E0%A7%8D%E0%A6%AF%E0%A6%BE%20%E0%A6%87%E0%A6%9B%E0%A6%BE.jpg&w=640&q=75' },
    { _id: 'p2', name: 'Nona Ilish - নোনা ইলিশ', priceRange: '600 - 1200', image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FKAWzaQ4E9k-1761376413-%E0%A6%A8%E0%A7%8B%E0%A6%A8%E0%A6%BE%20%E0%A6%87%E0%A6%B2%E0%A6%BF%E0%A6%B6-Nona%20Ilish_1.jpg&w=640&q=75' },
    { _id: 'p4', name: 'Churi Shutki - ছুরি শুঁটকি', priceRange: '700 - 2750', image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FccKPH3cDg3-1761376622-%E0%A6%9B%E0%A7%83%E0%A6%A1%E0%A6%BC%E0%A6%BF%20%E0%A6%B6%E0%A7%81%E0%A6%9F%E0%A6%95%E0%A6%BF-Churi%20Shutki_1.jpg&w=640&q=75' },
    { _id: 'p5', name: 'Loitta Shutki - লইট্যা শুঁটকি', priceRange: '470 - 1850', image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FRNzzj9Dtzo-1761377316-%E0%A6%B2%E0%A6%87%E0%A6%9F%E0%A7%8D%E0%A6%9F%E0%A6%BE%20%E0%A6%B6%E0%A7%81%E0%A6%9F%E0%A6%95%E0%A6%BF-Loitta%20Shutki_1.jpg&w=640&q=75' },
    { _id: 'p7', name: 'Lakha Shutki - লাক্ষা শুঁটকি', priceRange: '1500 - 3500', image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FU2cvcubHQa-1761377456-%E0%A6%B2%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE%20%E0%A6%B6%E0%A7%81%E0%A6%9F%E0%A6%95%E0%A6%BF-Lakka%20Shutki_1.jpg&w=640&q=75' },
  ];

  const rawFishProducts = [
    { _id: 'r1', name: 'Kalo Chanda Fish (কালো চান্দা মাছ)', price: '730', image: 'https://via.placeholder.com/250' },
    { _id: 'r2', name: 'Fot Popa Fish (ফোট পোয়া মাছ)', price: '650', image: 'https://via.placeholder.com/250' },
    { _id: 'r3', name: 'Red Snapper Fish (লাল কোরাল মাছ)', price: '750', image: 'https://via.placeholder.com/250' },
    { _id: 'r4', name: 'Datina Koral Fish (দাতিনা কোরাল মাছ)', price: '710', image: 'https://via.placeholder.com/250' },
    { _id: 'r5', name: 'Lal Poa (লাল পোয়া)', price: '480', image: 'https://via.placeholder.com/250' },
    { _id: 'r6', name: 'Rupchanda (রূপচাঁদা)', price: '950', image: 'https://via.placeholder.com/250' },
    { _id: 'r7', name: 'Aar Fish (আড় মাছ)', price: '850', image: 'https://via.placeholder.com/250' },
    { _id: 'r8', name: 'Boal Fish (বোয়াল মাছ)', price: '900', image: 'https://via.placeholder.com/250' },
  ];

  return (
    <main style={{ backgroundColor: '#fff' }}>
      <HeroSection />
      <CategorySection categories={categories} />

      <ProductRow title="Special Combo Packages" products={dummyFeaturedProducts} />
      <ProductRow title="Best Selling Shutki" products={dummyProducts} />
      <ProductRow title="Premium Dry Fish" products={premiumDryFishProducts} />
      <ProductRow title="Raw Fish" products={rawFishProducts} />

      <RecipeBlogSection />
      <RecipeVideoSection />

      <RecommendationSection />
      <MediaCoverageSection />
      <SeoInfoSection />
    </main>
  );
}

// --- SEO INFO SECTION ---
function SeoInfoSection() {
  return (
    <section className="seo-info-section">
      <div className="seo-info-inner">

        <div className="seo-info-block">
          <h2 className="seo-info-heading">Buy the Best Shutki in Bangladesh.</h2>
          <p className="seo-info-text">
            At Shutkiz, we offer the finest selection of dried fish, known as Shutki in Bengali, sourced from the best coastal regions of Bangladesh. Our Shutki is carefully dried to preserve its rich flavor and nutrients, ensuring that every bite delivers an authentic taste. Whether you are looking for traditional varieties or new flavors, we guarantee fresh, high-quality Shutki delivered right to your door.
          </p>
        </div>

        <div className="seo-info-block">
          <h2 className="seo-info-heading">Who We Are?</h2>
          <p className="seo-info-text">
            Shutkiz is an online platform dedicated to providing the best quality dried fish in Bangladesh. We are passionate about bringing the traditional taste of Shutki to your home with ease and convenience. Our mission is to deliver top-notch products sourced from trusted suppliers, ensuring every purchase is fresh and flavorful. We pride ourselves on our quality and customer satisfaction.
          </p>
        </div>

        <div className="seo-info-block">
          <h2 className="seo-info-heading">Products We Sell</h2>
          <p className="seo-info-text">
            At Shutkiz, we offer a wide variety of dried fish products, including popular types like Chhuri Shutki, Loitta Shutki, and Rupchanda Shutki. Each product is carefully selected to meet the highest standards, ensuring premium taste and texture. Our catalog includes both whole and filleted options to suit your cooking needs. Explore our range and enjoy the authentic taste of Bangladesh finest Shutki!
          </p>
        </div>

      </div>
    </section>
  );
}

// --- RECOMMENDATION SECTION ---
function RecommendationSection() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const recommendations = [
    { id: 1, image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2Ftestimonial-4.jpeg&w=1080&q=75' },
    { id: 2, image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2Ftestimonial-3.jpeg&w=1080&q=75' },
    { id: 3, image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2Ftestimonial-2.jpeg&w=1080&q=75' },
    { id: 4, image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2Ftestimonial-1.jpeg&w=1080&q=75' },
  ];

  return (
    <section className="recommendation-section">
      <div className="rec-header">
        <h2>Who Recommended Us</h2>
      </div>

      <div className="rec-slider-wrapper">
        <button className="rec-nav-btn rec-btn-left" onClick={() => scroll('left')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="rec-slider" ref={sliderRef}>
          {recommendations.map((rec) => (
            <div key={rec.id} className="rec-card">
              <img src={rec.image} alt={`Recommendation ${rec.id}`} />
            </div>
          ))}
        </div>

        <button className="rec-nav-btn rec-btn-right" onClick={() => scroll('right')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}

// --- MEDIA COVERAGE SECTION ---
function MediaCoverageSection() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const mediaLogos = [
    { id: 1, name: 'Rtv', image: 'https://www.shutkiz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia2.44fcd04d.png&w=750&q=75' },
    { id: 2, name: 'RisingBd', image: 'https://www.shutkiz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia3.5b266b53.png&w=640&q=75' },
    { id: 3, name: 'Prothom Alo', image: 'https://www.shutkiz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia1.092d9011.png&w=1080&q=75' },
    { id: 4, name: 'Rtv 2', image: 'https://www.shutkiz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia2.44fcd04d.png&w=750&q=75' },
  ];

  return (
    <section className="media-coverage-section">
      <div className="mc-header">
        <h2>Media Coverage</h2>
      </div>

      <div className="mc-slider-wrapper">
        <button className="mc-nav-btn mc-btn-left" onClick={() => scroll('left')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="mc-slider" ref={sliderRef}>
          {mediaLogos.map((logo) => (
            <div key={logo.id} className="mc-logo-card">
              <img src={logo.image} alt={logo.name} />
            </div>
          ))}
        </div>

        <button className="mc-nav-btn mc-btn-right" onClick={() => scroll('right')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}

// --- SHUTKI RECIPE BLOG COMPONENT ---
function RecipeBlogSection() {
  const recipes = [
    { id: 1, title: 'শুঁটকি গ্নোক্কি উইথ রোমেস্কো সস', image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2Fz6FlP5AjJP-1772430658-%E0%A6%9A%E0%A6%BF%E0%A6%82%E0%A6%A1%E0%A6%BC%E0%A6%BF%20%20%E0%A6%B6%E0%A7%81%E0%A6%9F%E0%A6%95%E0%A6%BF%20%E0%A6%97%E0%A7%8D%E0%A6%A8%E0%A7%8B%E0%A6%95%E0%A7%8D%E0%A6%95%E0%A6%BF%20%E0%A6%89%E0%A6%87%E0%A6%A5%20%E0%A6%B0%E0%A7%8B%E0%A6%AE%E0%A7%87%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8B%20%E0%A6%B8%E0%A6%B8.jpg&w=1080&q=75' },
    { id: 2, title: 'চিংড়ি শুঁটকির ঝাল কদম', image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FwkwfuDLzLA-1772430444-%E0%A6%9A%E0%A6%BF%E0%A6%82%E0%A6%A1%E0%A6%BC%E0%A6%BF%20%20%E0%A6%B6%E0%A7%81%E0%A6%9F%E0%A6%95%E0%A6%BF%E0%A6%B0%20%E0%A6%9D%E0%A6%BE%E0%A6%B2%20%E0%A6%95%E0%A6%A6%E0%A6%AE.jpg&w=1080&q=75' },
    { id: 3, title: 'চিংড়ি শুঁটকির সুশি', image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FihQA9rW5IZ-1772430311-%E0%A6%9A%E0%A6%BF%E0%A6%82%E0%A6%A1%E0%A6%BC%E0%A6%BF%20%E0%A6%B6%E0%A7%81%E0%A6%9F%E0%A6%95%E0%A6%BF%E0%A6%B0%20%E0%A6%B8%E0%A7%81%E0%A6%B6%E0%A6%BF.jpg&w=1080&q=75' },
    { id: 4, title: 'টালা চিংড়ি শুঁটকির সালাদ', image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FlrmaTcH0mT-1772430125-%E0%A6%9A%E0%A6%BF%E0%A6%82%E0%A6%A1%E0%A6%BC%E0%A6%BF%20%20%E0%A6%B6%E0%A7%81%E0%A6%9F%E0%A6%95%E0%A6%BF%E0%A6%B0%20%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A6.jpg&w=1080&q=75' },
    { id: 5, title: 'ছুরি শুঁটকির পাতুরি', image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FfM9V6DS6Oy-1772429884-%E0%A6%9B%E0%A7%81%E0%A6%B0%E0%A6%BF%20%E0%A6%B6%E0%A7%81%E0%A6%81%E0%A6%9F%E0%A6%95%E0%A6%BF%E0%A6%B0%20%E0%A6%AA%E0%A6%BE%E0%A6%A4%E0%A7%81%E0%A6%B0%E0%A6%BF.jpg&w=1080&q=75' },
    { id: 6, title: 'ছুরি শুঁটকির নার্গিস কাবাব', image: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FRctIxFWeiN-1772429785-%E0%A6%9B%E0%A7%81%E0%A6%B0%E0%A6%BF%20%E0%A6%B6%E0%A7%81%E0%A6%81%E0%A6%9F%E0%A6%95%E0%A6%BF%E0%A6%B0%20%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A6%97%E0%A6%BF%E0%A6%B8%20%E0%A6%95%E0%A6%BE%E0%A6%AC%E0%A6%BE%E0%A6%AC.jpg&w=1080&q=75' },
  ];

  return (
    <section className="recipe-blog-section">
      <div className="rb-header">
        <div className="rb-header-left">
          <div className="rb-subtitle">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Shutki Recipe
          </div>
          <h2>Shutki Recipe</h2>
        </div>
        <span className="rb-arrow">→</span>
      </div>

      <div className="rb-grid">
        <div className="rb-featured-card">
          <img
            src="https://www.shutkiz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcategory-3.b91085d2.jpeg&w=2048&q=75"
            alt="Shutki Balachao Jars"
            className="rb-featured-img"
          />
          <div className="rb-featured-overlay">
            <button className="rb-see-all-btn">See All</button>
          </div>
        </div>

        {recipes.map((recipe) => (
          <div key={recipe.id} className="rb-small-card">
            <div className="rb-small-img-holder">
              <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className="rb-small-details">
              <h3 className="rb-small-title">{recipe.title}</h3>
              <button className="rb-read-more-btn">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- RECIPE VIDEO COMPONENT ---
function RecipeVideoSection() {
  const dummyVideos = [
    {
      id: 1,
      title: '৩টি শুটকি ভুনার রেসিপি একসাথে || How to make Shutki Recipe Bangla',
      duration: '10:02',
      views: '1.2K views',
      date: '9 months ago',
      image: 'https://img.youtube.com/vi/Kbx5RqVppuo/hqdefault.jpg'
    },
    {
      id: 2,
      title: 'লইট্যা শুঁটকি ভুনা করার সবচেয়ে সহজ রেসিপি',
      duration: '08:20',
      views: '89K views',
      date: '1 month ago',
      image: 'https://img.youtube.com/vi/ox7CZo4oxAQ/hqdefault.jpg'
    },
    {
      id: 3,
      title: 'মজাদার চেপা শুঁটকি ভর্তা তৈরির আদি ও আসল নিয়ম',
      duration: '05:12',
      views: '45K views',
      date: '3 months ago',
      image: 'https://img.youtube.com/vi/ox7CZo4oxAQ/hqdefault.jpg'
    },
    {
      id: 4,
      title: 'কাচকি শুঁটকি চরচরি রান্নার গোপন রহস্য',
      duration: '10:30',
      views: '210K views',
      date: '5 months ago',
      image: 'https://img.youtube.com/vi/VFtDMgK6jso/hqdefault.jpg'
    },
  ];

  return (
    <section className="recipe-video-section">
      <div className="video-header">
        <h2>Dried Fish Recipe Video</h2>
        <span className="video-arrow-link">→</span>
      </div>

      <div className="video-slider">
        {dummyVideos.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-thumbnail-holder">
              <img src={video.image} alt={video.title} />
              <div className="play-btn-overlay"></div>
              <span className="video-duration">{video.duration}</span>
            </div>
            <div className="video-info">
              <h3 className="video-title" title={video.title}>{video.title}</h3>
              <p className="video-meta">Shutkiz Official • {video.views} • {video.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}