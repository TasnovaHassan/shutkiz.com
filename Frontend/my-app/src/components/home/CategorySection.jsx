import React from 'react';
import './CategorySection.css';

// Dummy data matching the items in image_3eb09e.png
const categories = [
  { id: 1, name: 'Premium Dry Fish', image: 'https://www.shutkiz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPremium%20Dry%20Fish.260bd593.png&w=96&q=75' },
  { id: 2, name: 'Raw Fish', image: 'https://www.shutkiz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFresh%20Sea%20Fish.da7bbd8c.png&w=96&q=75' },
  { id: 3, name: 'Balachao', image: 'https://www.shutkiz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBalachao.0f218449.png&w=96&q=75' },
  { id: 4, name: 'Fish Chips', image: 'https://www.shutkiz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFish%20Chips.7c4770df.png&w=96&q=75' },
  { id: 5, name: 'Recipe Book', image: 'https://www.shutkiz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDry%20Fish%20Recipe%20Book.92843c47.png&w=96&q=75' },
  { id: 6, name: 'Combo Package', image: 'https://www.shutkiz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCombo%20Box.27d53b71.png&w=96&q=75' },
  { id: 7, name: 'Dry Fish Gift Box', image: 'https://www.shutkiz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGift%20Box.59508f4e.png&w=96&q=75' },
];

const CategorySection = () => {
  return (
    <div className="category-section">
      {categories.map((cat) => (
        <div key={cat.id} className="category-item">
          <div className="image-circle">
            <img src={cat.image} alt={cat.name} />
          </div>
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;