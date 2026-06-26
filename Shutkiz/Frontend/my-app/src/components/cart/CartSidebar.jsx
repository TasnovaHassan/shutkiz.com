import { useNavigate } from 'react-router-dom';
import { FiX, FiTrash2, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import './CartSidebar.css';

export default function CartSidebar() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, shippingFee, grandTotal, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2 className="cart-title">Your Cart</h2>
          <button className="cart-close" onClick={() => setIsCartOpen(false)}>
            <FiX size={22} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <FiShoppingBag size={48} />
            <h3>Your cart is empty</h3>
            <p>Add some premium shutki to get started</p>
            <button className="btn btn-primary" onClick={() => { setIsCartOpen(false); navigate('/products'); }}>
              Browse Products
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => {
                const price = item.discountPrice || item.price;
                return (
                  <div key={item._id} className="cart-item">
                    <img
                      src={item.images?.[0] || 'https://placehold.co/80x80'}
                      alt={item.name}
                      className="cart-item-img"
                    />
                    <div className="cart-item-info">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <p className="cart-item-price">৳{price.toLocaleString()} / {item.unit}</p>
                      <div className="qty-control">
                        <button
                          onClick={() => updateQuantity(item._id, +(item.quantity - 0.5).toFixed(1))}
                          disabled={item.quantity <= 0.5}
                        >
                          <FiMinus size={12} />
                        </button>
                        <span>{item.quantity} {item.unit}</span>
                        <button onClick={() => updateQuantity(item._id, +(item.quantity + 0.5).toFixed(1))}>
                          <FiPlus size={12} />
                        </button>
                      </div>
                    </div>
                    <div className="cart-item-right">
                      <p className="cart-item-total">৳{(price * item.quantity).toLocaleString()}</p>
                      <button className="cart-remove" onClick={() => removeFromCart(item._id)}>
                        <FiTrash2 size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart-footer">
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>৳{cartTotal.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery</span>
                  <span className={shippingFee === 0 ? 'free-delivery' : ''}>
                    {shippingFee === 0 ? 'FREE' : `৳${shippingFee}`}
                  </span>
                </div>
                {shippingFee > 0 && (
                  <p className="delivery-hint">Add ৳{(1000 - cartTotal).toLocaleString()} more for free delivery</p>
                )}
                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>৳{grandTotal.toLocaleString()}</span>
                </div>
              </div>
              <button className="btn btn-primary btn-lg checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}