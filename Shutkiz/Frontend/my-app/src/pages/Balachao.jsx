import { useState } from "react";
import Sidebar from "../components/Balachao/Sidebar";
import ProductGrid from "../components/Balachao/ProductGrid";
import "./Balachao.css";

function Balachao() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <div className="balachao-page">
      <div className="banner">
        <img src="https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2Fm2yXq0r7RY-1775557209-Hero%20Image%202.png&w=1200&q=75" alt="Balachao Banner" />
       
      </div>

      <div className="balachao-content">
        <Sidebar onSelectCategory={setSelectedCategories} />
        <ProductGrid selectedCategories={selectedCategories} />
      </div>
    </div>
  );
}

export default Balachao;
