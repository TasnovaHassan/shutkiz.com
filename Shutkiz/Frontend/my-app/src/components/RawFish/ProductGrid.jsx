import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({ selectedCategories }) {
  const products = [
    { name: "Kalo Chanda Fish", bnName: "কালো চাঁদা মাছ", price: "৳730", image:"https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FubhfhLOfUS-1761119694-Kalo%20chanda%201.jpg&w=384&q=75", category: "Kalo Chanda Fish" },
    { name: "Fot Popa Fish", bnName: "ফট পোপা মাছ", price: "৳650", image: "https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2Fd1csF419XA-1761119673-Pot%20Popa%20Fish%201.jpg&w=384&q=75", category: "Fot Popa Fish" },
    { name: "Red Snapper Fish", bnName: "লাল কোরাল মাছ", price: "৳750", image: "https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FhK3IOI7tk2-1761119647-Red%20Snapper%201.jpg&w=384&q=75", category: "Red Snapper Fish" },
    { name: "Datina Koral Fish", bnName: "দাতিনা কোরাল মাছ", price: "৳710", image: "https://www.shutkiz.com/_next/image?url=https%3A%2F%2Fapi-shutkiz.beemartbd.com%2Fuploads%2FGwHyNGaT8R-1761119594-Datina%20Koral%201.jpg&w=384&q=75", category: "Datina Fish" },
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
