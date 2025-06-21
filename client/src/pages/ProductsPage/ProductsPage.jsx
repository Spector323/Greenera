import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import ContactPage from '../../components/ContactPage/ContactPage';
import ProductCard from '../../components/ProductCard/ProductCard';
import './products.css';
import { useGetProductsQuery } from '../../store/api';

export default function ProductsPage() {
  const { data: products = [], isLoading, error } = useGetProductsQuery();
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    onlyDiscounted: false,
    sortBy: 'default',
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
    <div className='products'>
      <Header />
      <div className="cn-products">
        <h1>All products</h1>

        <div className='filters'>
          <div className='filter price'>
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

          <div className='filter discount'>
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

          <div className='filter sort'>
            <label>Sorted:</label>
            <select name="sortBy" value={filters.sortBy} onChange={handleFilterChange}>
              <option value="default">by default</option>
              <option value="priceAsc">price: high-low</option>
              <option value="priceDesc">price: low-high</option>
              <option value="discount">newest</option>
            </select>
          </div>
        </div>

        <div className='product-grid'>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <ContactPage />
    </div>
  );
}