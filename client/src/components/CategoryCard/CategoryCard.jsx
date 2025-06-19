import { Link } from 'react-router-dom';
import './category-card.css';

import { useGetCategoriesQuery } from '../../store/api';

export default function CategoryCard() {
  const { data: categories = [], isLoading, error } = useGetCategoriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='category-item'>
      <div className='category-header'>
        <h1>Categories</h1>
        <Link to="/categories">
          <button>All Categories</button>
        </Link>
      </div>

      <div className='category-list'>
        {categories.slice(0, 4).map((category) => (
          <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className='category-item'
          >
            <img
              src={`http://localhost:3333${category.image}`}
              alt=""
              className='img-ct'
            />
            <p className='title-ct'>{category.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}