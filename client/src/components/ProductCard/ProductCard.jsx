import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { Link } from 'react-router-dom';
import './product-card.css'; // Предполагается, что стили находятся в этом файле

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const discountPercent = product.discont_price
    ? Math.round(((product.price - product.discont_price) / product.price) * 100)
    : null;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert(`Товар успешно добавлен`); // Временное уведомление, можно заменить на модалку
  };

  return (
    <Link to={`/products/${product.id}`} className='product-card' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {discountPercent && (
        <div className='discount-badge'>-{discountPercent}%</div>
      )}
      <img
        src={`http://localhost:3333${product.image}`}
        alt={product.title}
        className='product-image'
      />
      <div className='product-block'>
        <h3 className='product-title'>{product.title}</h3>
        <p className='product-price'>
          <span className='new-price'>
            ${(product.discont_price || product.price).toFixed(2)}
          </span>
          {product.discont_price && (
            <span className='old-price'>
              <del>${product.price.toFixed(2)}</del>
            </span>
          )}
        </p>
      </div>
      {isHovered && (
        <button
          className='add-to-cart-btn'
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart();
          }}
        >
          Add to cart
        </button>
      )}
    </Link>
  );
}