import React, { useState, useEffect } from 'react';
import '../styles/products.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3333/products/all');
        if (!response.ok) throw new Error('Ошибка загрузки товаров');

        const data = await response.json();

        // Фильтрация товаров со скидкой и сортировка по убыванию discont_price
        const discountedProducts = data
          .filter(product => product.discont_price !== null && product.discont_price < product.price)
          .sort((a, b) => b.discont_price - a.discont_price)
          .slice(0, 4);

        setProducts(discountedProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products">
      <div className="products-header">
        <h1>Sale</h1>
        <a href="/sale">
          <button className="">All sales</button>
        </a>
      </div>

      <div className="products-list">
        {products.map(product => {
          const discountPercent = Math.round(
            ((product.price - product.discont_price) / product.price) * 100
          );

          return (
            <a
              key={product.id}
              href={`/products/${product.id}`}
              className="product-item"
            >
              <div className="product-discount">-{discountPercent}%</div>
              <img
                src={`http://localhost:3333${product.image}`}
                alt={product.title}
                className="product-img"
              />
              <p className="product-title">{product.title}</p>
              <div className="product-prices">
                <span className="old-price">${product.price.toFixed(2)}</span>
                <span className="new-price">${product.discont_price.toFixed(2)}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}