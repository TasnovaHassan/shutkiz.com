import { useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({ selectedCategories }) {
  const products = [
    { name: "Chatgaiya Chingri Balachao", bnName: "চাটগাইয়া চিংড়ি বালাচাও", price: "৳250 - 390", image: "https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FY2muljX1UM-1775557873-Chingdi%20Balachao.png&w=384&q=75", category: "Balachao" },
    { name: "Chatgaiya Naga Balachao", bnName: "চাটগাইয়া নাগা বালাচাও", price: "৳275 - 425", image: "https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2Fy0z2HOTkRZ-1775556390-Naga%20Balachao.png&w=384&q=75", category: "Naga Balachao" },
    { name: "Chatgaiya Mix Balachao", bnName: "চাটগাইয়া মিক্স বালাচাও", price: "৳275 - 425", image: "https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FFIOP4ymSKH-1775557779-Mix%20Balachao.png&w=384&q=75", category: "Chatgaiya Mix Balachao" },
  ];

  const filteredProducts =
    selectedCategories && selectedCategories.length > 0
      ? products.filter(p => selectedCategories.includes(p.category))
      : products;

  return (
    <div className="product-grid">
      {filteredProducts.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
}

export default ProductGrid;
