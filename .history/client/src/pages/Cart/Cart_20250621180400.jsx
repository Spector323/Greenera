import { useDispatch, useSelector } from 'react-redux';
import { useGetProductsQuery } from '../../store/api';
import Header from '../../components/Header/Header';
import ContactPage from '../../components/ContactPage/ContactPage';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';
import './cart.css';

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const { data: products = [] } = useGetProductsQuery();

  const getProduct = (id) => products.find((p) => p.id === id) || {};

  const total = cartItems.reduce((sum, item) => {
    const product = getProduct(item.id);
    const price = item.price || product.price || 0;
    return sum + price * item.quantity;
  }, 0);

  const handleRemove = (id) => dispatch(removeFromCart(id));
  const handleQuantityChange = (id, delta) => {
    dispatch(updateQuantity({ id, quantity: delta }));
  };

  if (cartItems.length === 0) return (
    <div className="cart">
      <Header />
      <div className="cart-content">
        <h2 className="cart-title">Your Cart is Empty</h2>
        <p>Add items to your cart to proceed.</p>
      </div>
      <ContactPage />
    </div>
  );

  return (
    <div className="cart">
      <Header />
      <div className="cart-content">
        <h2 className="cart-title">Your Cart</h2>
        <div className="cart-items">
          {cartItems.map((item) => {
            const product = getProduct(item.id);
            const price = item.price || product.price || 0;
            const discontPrice = product.discont_price || null;
            const displayPrice = discontPrice || price;

            return (
              <div key={item.id} className="cart-item">
                <img
                  src={`http://localhost:3333${product.image || '/default-image.jpg'}`}
                  alt={product.title || 'Cart Item'}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{product.title || 'Unnamed Product'}</h3>
                  <div className="cart-item-price">
                    <span className="new-price">${(displayPrice * item.quantity).toFixed(2)}</span>
                    {discontPrice && (
                      <span className="old-price">
                        <del>${(price * item.quantity).toFixed(2)}</del>
                      </span>
                    )}
                  </div>
                  <div className="quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <div className="cart-total">
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
      <ContactPage />
    </div>
  );
}