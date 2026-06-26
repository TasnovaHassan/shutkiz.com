import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({ selectedCategories }) {
  const products = [
    {
      name: "Shrimp Chips",
      bnName: "চিংড়ি চিপস",
      price: "৳420 - 2100",
      image: "https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2F8H0rws4Vh0-1748425381-%E0%A6%B2%E0%A6%87%E0%A6%9F%E0%A7%8D%E0%A6%9F%E0%A7%8D%E0%A6%AF%E0%A6%BE%20%E0%A6%B6%E0%A7%81%E0%A6%9F%E0%A6%95%E0%A6%BF%20(5).png&w=384&q=75",
      category: "Shrimp Chips"
    }
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
