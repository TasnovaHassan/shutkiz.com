import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSection.css';

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const banners = [
    { id: 1, img: 'https://api-shutkiz.beemartbd.com/uploads/PFMv11jKhn-1760268270-Balachao%20Banner.png', link: '/products?category=balachao' },
    { id: 2, img: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FMUvZ85Gi9P-1760344312-Dry%20Fish.png&w=1200&q=75', link: '/products?category=fish-chips' },
    { id: 3, img: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FTLvX0wQYO8-1775555763-Hero%20Image%202.png&w=1920&q=75', link: '/products?category=premium-dry-fish' },
    { id: 4, img: 'https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FJQVUqgvQ4D-1760268594-fish%20Chips%20hero%20image.png&w=3840&q=75', link: '/products?category=balachao' },
  ];

  return (
    <section className="hero-slider-section">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="hero-slide-item">
            <Link to={banner.link}>
              <img src={banner.img} alt="Slider Image" className="hero-banner-img" />
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
}