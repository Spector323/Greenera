import React, { useState, useEffect } from 'react';
import '../sproducts.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3333/products/all');
        if (!response.ok) throw new Error('Ошибка загрузки товаров');

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="loading">Загрузка товаров...</p>;
  if (error) return <p className="error">Ошибка: {error}</p>;

  return (
    <div className="products">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map(product => {
          const discountPercent = product.discont_price
            ? Math.round(((product.price - product.discont_price) / product.price) * 100)
            : null;

          return (
            <div key={product.id} className="product-card">
              <img
                src={`http://localhost:3333${product.image}`}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">
                <span className="new-price">${product.price.toFixed(2)}</span>
                {product.discont_price && (
                  <span className="old-price">
                    <del>${product.discont_price.toFixed(2)}</del>
                  </span>
                )}
              </p>
              {discountPercent && <div className="product-discount">-{discountPercent}%</div>}
              <button className="add-to-cart-btn">Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;