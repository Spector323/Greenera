import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice';
import styles from './cart.css';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + (item.discont_price || item.price) * item.quantity, 0);

  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className={styles['cart-item']}>
              <span>{item.title} x{item.quantity}</span>
              <span>${(item.discont_price || item.price).toFixed(2)}</span>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
          <div className={styles.total}>Total: ${total.toFixed(2)}</div>
        </>
      )}
    </div>
  );
}