import { useState } from "react";
import Sidebar from "../components/FishChips/Sidebar";
import ProductGrid from "../components/FishChips/ProductGrid";
import "./FishChips.css";

function FishChips() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <div className="fishchips-page">
      <div className="banner">
        <img src="https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FLJ48bS5Lmd-1760249560-fish%20Chips%20hero%20image.png&w=1200&q=75" alt="Fish Chips Banner" />
        </div>

      <div className="fishchips-content">
        <Sidebar onSelectCategory={setSelectedCategories} />
        <ProductGrid selectedCategories={selectedCategories} />
      </div>
    </div>
  );
}

export default FishChips;
