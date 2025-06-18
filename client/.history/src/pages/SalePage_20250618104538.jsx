import React, { useEffect, useState } from 'react';
import '../styles/sale-page.css';

const SalePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3333/products/all');
                if (!response.ok) throw new Error('Ошибка при загрузке товаров');

                const data = await response.json();

                // Фильтруем товары со скидкой и сортируем по убыванию discont_price
                const discountedProducts = data
                    .filter(product => product.discont_price !== null && product.discont_price !== undefined)
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

    if (loading) return <p>Загрузка товаров...</p>;
    if (error) return <p>Ошибка: {error}</p>;

    return (
        <div className="sale-page">
            <div className="sale-header">
                <h2>Sale</h2>
                <a href="/sale">
                    <button className="all-sales-button">All sales</button>
                </a>
            </div>

            <div className="products-container">
                {products.map(product => {
                    const discountPercent = Math.round(
                        ((product.price - product.discont_price) / product.price) * 100
                    );

                    return (
                        <a
                            key={product.id}
                            href={`/product/${product.id}`}
                            className="product-card"
                        >
                            <div className="discount-badge">-{discountPercent}%</div>
                            <img
                                src={`http://localhost:3333${product.image}`}
                                alt={product.title}
                                className="product-image"
                            />
                            <div className="product-block">
                                <h3 className="product-title">{product.title}</h3>
                            <p className="product-price">
                                <span className="new-price">${product.discont_price.toFixed(2)}</span>
                                <span className="old-price">${product.price.toFixed(2)}</span>
                            </p>
                            </div>
                            
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default SalePage;