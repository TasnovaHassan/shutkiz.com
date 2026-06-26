import { useState } from "react";
import Sidebar from "../components/RawFish/Sidebar";
import ProductGrid from "../components/RawFish/ProductGrid";
import "./RawFish.css";

function RawFish() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <div className="rawfish-page">
      <div className="banner">
        <img src="https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FQdBNsw9cgS-1733809942-Hero-Banner.webp&w=1200&q=75" alt="Raw Fish Banner" />
        
      </div>

      <div className="rawfish-content">
        <Sidebar onSelectCategory={setSelectedCategories} />
        <ProductGrid selectedCategories={selectedCategories} />
      </div>
    </div>
  );
}

export default RawFish;
