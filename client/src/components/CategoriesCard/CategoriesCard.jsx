import { Link } from 'react-router-dom';
import './categories-card.css';
import { useGetCategoriesQuery } from '../../store/api';

export default function CategoriesCard() {
  const { data: categories = [], isLoading, error } = useGetCategoriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='categories-item'>
      <div className='categories-header'>
        <h1>Categories</h1>
        <Link to="/categories">
          <button>All Categories</button>
        </Link>
      </div>

      <div className='categories-list'>
        {categories.slice(0, 4).map((categories) => (
          <Link
            key={categories.id}
            to={`/categories/${categories.id}`}
            className='categories-item'
          >
            <img
              src={`http://localhost:3333${categories.image}`}
              alt=""
              className='img-ct'
            />
            <p className='title-ct'>{categories.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}