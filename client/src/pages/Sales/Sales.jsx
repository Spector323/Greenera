import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import ContactPage from '../../components/ContactPage/ContactPage';
import ProductCard from '../../components/ProductCard/ProductCard';
import './sales.css';
import { useGetProductsQuery } from '../../store/api';

export default function Sales() {
    const { data: products = [], isLoading, error } = useGetProductsQuery();
    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
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

    // Фильтрация только товаров со скидками и применение фильтров
    const filteredProducts = products
        .filter((product) => product.discont_price) // Только товары со скидкой
        .filter((product) => {
            const price = product.discont_price;
            if (filters.minPrice && price < parseFloat(filters.minPrice)) return false;
            if (filters.maxPrice && price > parseFloat(filters.maxPrice)) return false;
            return true;
        });

    // Сортировка товаров
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (filters.sortBy) {
            case 'priceAsc':
                return a.discont_price - b.discont_price;
            case 'priceDesc':
                return b.discont_price - a.discont_price;
            case 'discount':
                const aDisc = a.price - a.discont_price;
                const bDisc = b.price - b.discont_price;
                return bDisc - aDisc;
            default:
                return 0;
        }
    });

    return (
        <div className="sales">
            <Header />
            <div className="cn-products">
                <h1>Discounted items</h1>
                <div className="sales-header">
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
                </div>
                <div className="product-grid">
                    {sortedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <ContactPage />
        </div>
    );
}