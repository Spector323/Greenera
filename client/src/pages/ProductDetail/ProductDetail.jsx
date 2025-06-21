import React from 'react';
import Header from '../../components/Header/Header';
import ContactPage from '../../components/ContactPage/ContactPage';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../store/api';
import './product-detail.css';

export default function ProductDetail() {
    const { id } = useParams();
    const { data: products = [], isLoading, error } = useGetProductsQuery();
    const dispatch = useDispatch();
    const product = products.find((p) => p.id === parseInt(id));

    console.log('Params ID:', id);
    console.log('Products Data:', products);
    console.log('Found Product:', product);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error?.toString() || 'Unknown error'}</div>;
    if (!product) return <div>Product not found</div>;

    const price = product.price || 0;
    const discontPrice = product.discont_price || null;
    const discountPercent = discontPrice && price
        ? Math.round(((price - discontPrice) / price) * 100)
        : null;

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, price: discontPrice || price }));
        alert(`Товар "${product.title || 'Unnamed Product'}" успешно добавлен`);
    };

    return (
        <div className="product-detail">
            <Header />
            <div className="product-content">
                <div className="product-image-container">
                    <img
                        src={`http://localhost:3333${product.image || '/default-image.jpg'}`}
                        alt={product.title || 'Product Image'}
                        className="product-image"
                    />
                </div>
                <div className="product-info">
                    <h1 className="product-title">{product.title || 'No Title Available'}</h1>

                    <div className="product-price">
                        <span className="new-price">
                            ${discontPrice?.toFixed(2) || price.toFixed(2)}
                        </span>
                        {discontPrice && (
                            <span className="old-price">
                                <del>${price.toFixed(2)}</del>
                            </span>
                        )}
                        {discountPercent && (
                            <div className="discount-badge-2">-{discountPercent}%</div>
                        )}
                    </div>
                    
                    <button className="add-to-cart-btn-2" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                    <p className="product-description">
                        <h3>Description</h3>
                        {product.description || 'No description available for this product.'}
                    </p>
                </div>
            </div>
            <ContactPage />
        </div>
    );
}