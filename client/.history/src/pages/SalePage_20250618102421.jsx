import React, { useEffect, useState } from 'react';
import '../styles/sale-page.css';

const SalePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Запрос к вашему API
        fetch('http://localhost:3333/products/all')
            .then(res => res.json())
            .then(data => {
                // Фильтруем товары со скидкой и сортируем по убыванию discont_price
                const discountedProducts = data
                    .filter(product => product.discont_price !== null && product.discont_price !== undefined)
                    .sort((a, b) => b.discont_price - a.discont_price)
                    .slice(0, 4);

                setProducts(discountedProducts);
            })
            .catch(err => console.error('Ошибка при загрузке товаров:', err));
    }, []);

    return (
        <div className="sale-page">
            <h2 className="sale-title">Sale</h2>
            

            <div className="products-container">
                {products.length > 0 ? (
                    products.map(product => {
                        const discountPercent = Math.round(
                            ((product.price - product.discont_price) / product.price) * 100
                        );
                        return (
                            <div className="product-card" key={product.id}>
                                <div className="discount-badge">-{discountPercent}%</div>
                                <img src={`http://localhost:3333${product.image}`} alt="" className="img-ct" />
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-price">
                                    <span className="old-price">${product.price.toFixed(2)}</span>
                                    <span className="new-price">${product.discont_price.toFixed(2)}</span>
                                </p>
                            </div>
                        );
                    })
                ) : (
                    <p>Загрузка товаров...</p>
                )}
            </div>
        </div>
    );
};

export default SalePage;