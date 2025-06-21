import { Link } from 'react-router-dom';
import './sale-page.css';
import ProductCard from '../ProductCard/ProductCard';
import { useGetProductsQuery } from '../../store/api';

export default function SalePage() {
  const { data: products = []} = useGetProductsQuery();


  const discountedProducts = products
    .filter((product) => product.discont_price)
    .sort((a, b) => b.discont_price - a.discont_price)
    .slice(0, 4);

  return (
    <div className='sale-page'>
      <div className='sale-header'>
        <h2>Sale</h2>
        <Link to="/sales">
          <button className='all-sales-button'>All sales</button>
        </Link>
      </div>

      <div className='products-container'>
        {discountedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}