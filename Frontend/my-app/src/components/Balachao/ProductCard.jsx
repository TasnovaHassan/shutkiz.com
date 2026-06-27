import "./ProductCard.css";

function ProductCard({ name, bnName, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4>{name} ({bnName})</h4>
      <p>{price}</p>
      <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;
