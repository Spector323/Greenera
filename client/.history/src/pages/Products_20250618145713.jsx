import React, { useState, useEffect } from 'react';
import '../styles/products.css';
import Header from '../components/Header';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    onlyDiscounted: false,
    sortBy: 'default',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3333/products/all');
        if (!response.ok) throw new Error('Ошибка загрузки товаров');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const filteredProducts = products.filter((product) => {
    const price = product.discont_price || product.price;

    if (filters.onlyDiscounted && !product.discont_price) return false;
    if (filters.minPrice && price < parseFloat(filters.minPrice)) return false;
    if (filters.maxPrice && price > parseFloat(filters.maxPrice)) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case 'priceAsc':
        return (a.discont_price || a.price) - (b.discont_price || b.price);
      case 'priceDesc':
        return (b.discont_price || b.price) - (a.discont_price || a.price);
      case 'discount':
        const aDisc = a.price - (a.discont_price || 0);
        const bDisc = b.price - (b.discont_price || 0);
        return bDisc - aDisc;
      default:
        return 0;
    }
  });

  return (
    <div className="products">
        <Header/>
      <h1>Tools and equipment</h1>

      <div className="filters">
        <div className="filter price">
          <label>Price</label>
          <input
            type="number"
            name="minPrice"

            placeholder="from"
            value={filters.minPrice}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="to"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
        </div>

        <div className="filter discount">
          <label>
            Discounted items
            <input
              type="checkbox"
              name="onlyDiscounted"
              checked={filters.onlyDiscounted}
              onChange={handleFilterChange}
            />
          </label>
        </div>

        <div className="filter sort">
          <label>Sorted by:</label>
          <select name="sortBy" value={filters.sortBy} onChange={handleFilterChange}>
            <option value="default">Default</option>
            <option value="priceAsc">Price (low to high)</option>
            <option value="priceDesc">Price (high to low)</option>
            <option value="discount">Discount amount</option>
          </select>
        </div>
      </div>

      <div className="product-grid">
        {sortedProducts.map((product) => {
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
                <span className="new-price">
                  ${(product.discont_price || product.price).toFixed(2)}
                </span>
                {product.discont_price && (
                  <span className="old-price">
                    <del>${product.price.toFixed(2)}</del>
                  </span>
                )}
              </p>
              {discountPercent && (
                <div className="product-discount">-{discountPercent}%</div>
              )}
              <button className="add-to-cart-btn">Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;