import React, { useState, useEffect } from 'react';
import './tools-and-equipment.css';

const ToolsAndEquipment = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    // Загрузка данных из API (замените на реальный запрос)
    const mockData = [
      // Здесь должен быть массив товаров из вашего JSON
    ];

    setProducts(mockData);

    // Фильтрация и сортировка товаров
    filterProducts();
  }, [priceRange, showDiscounted, sortOption]);

  const filterProducts = () => {
    let filtered = products;

    // Фильтр по ценовому диапазону
    filtered = filtered.filter(product =>
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Фильтр только товаров со скидкой
    if (showDiscounted) {
      filtered = filtered.filter(product => product.discont_price !== null);
    }

    // Сортировка
    switch (sortOption) {
      case 'priceAsc':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'discount':
        filtered = [...filtered].sort(
          (a, b) =>
            (b.discont_price || b.price) - (a.discont_price || a.price)
        );
        break;
      default:
        // По умолчанию — не сортируем
        break;
    }

    setFilteredProducts(filtered);
  };

  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value, 10);
    setPriceRange(prevState => ({
      ...prevState,
      [type]: value,
    }));
  };

  const toggleDiscountFilter = () => {
    setShowDiscounted(!showDiscounted);
  };

  const handleSortChange = e => {
    setSortOption(e.target.value);
  };

  return (
    <div className="tools-and-equipment">
      <h1>Tools and equipment</h1>

      {/* Фильтры */}
      <div className="filters">
        <div className="price-filter">
          <label>Price</label>
          <input
            type="number"
            placeholder="from"
            value={priceRange.min}
            onChange={e => handlePriceChange(e, 'min')}
          />
          <input
            type="number"
            placeholder="to"
            value={priceRange.max}
            onChange={e => handlePriceChange(e, 'max')}
          />
        </div>
        <div className="discount-filter">
          <label>
            <input
              type="checkbox"
              checked={showDiscounted}
              onChange={toggleDiscountFilter}
            />
            Discounted items
          </label>
        </div>
        <div className="sort-filter">
          <label>Sorted by:</label>
          <select value={sortOption} onChange={handleSortChange}>
            <option value="default">Default</option>
            <option value="priceAsc">Price (low to high)</option>
            <option value="priceDesc">Price (high to low)</option>
            <option value="discount">Discount amount</option>
          </select>
        </div>
      </div>

      {/* Товары */}
      <div className="product-grid">
        {filteredProducts.map(product => {
          const discountPercent = Math.round(
            ((product.price - (product.discont_price || product.price)) / product.price) * 100
          );

          return (
            <div key={product.id} className="product-card">
              <div className="discount-badge">
                {product.discont_price && (
                  <span>-{discountPercent}%</span>
                )}
              </div>
              <img src={`http://localhost:3333${product.image}`} alt={product.title} className="product-image" />
              <button className="add-to-cart-btn">Add to cart</button>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">
                <span className="new-price">${product.price.toFixed(2)}</span>
                {product.discont_price && (
                  <span className="old-price">
                    <del>${product.discont_price.toFixed(2)}</del>
                  </span>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToolsAndEquipment;