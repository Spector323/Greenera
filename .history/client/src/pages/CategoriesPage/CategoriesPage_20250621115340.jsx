import Header from '../../components/Header/Header';
import ContactPage from '../../components/ContactPage/ContactPage';
import { Link } from 'react-router-dom';
import  './categories-page.css';
import { useGetCategoriesQuery } from '../../store/api';

export default function CategoriesPage() {
  const { data: categories = [], isLoading, error } = useGetCategoriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='category-item'>
      <Header />
      <div className='category-header'>
        <h1>Categories</h1>
        <Link to="/categories">
          <button>All categories</button>
        </Link>
      </div>

      <div className='category-list'>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
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
      <ContactPage />
      <Footer/>

    </div>
  );
}