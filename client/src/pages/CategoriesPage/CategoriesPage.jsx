import React from 'react';
import Header from '../../components/Header/Header';
import ContactPage from '../../components/ContactPage/ContactPage';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../store/api';
import './categories-page.css';

export default function CategoriesPage() {
  const { id } = useParams();
  const { data: categoryResponse = {}, isLoading, error } = useGetProductsByCategoryQuery(id);

  console.log('Category Response:', categoryResponse);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  const categoryProducts = categoryResponse.data || [];
  const categoryTitle = categoryResponse.category?.title || 'Categories';

  return (
    <div className="categories-page">
      <Header />
      <div className="categories-header">
        <h1>{categoryTitle}</h1>
      </div>
      <div className="product-grid">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <ContactPage />
    </div>
  );
}