import Header from '../../components/Header/Header';
import ContactPage from '../../components/ContactPage/ContactPage';
import { Link } from 'react-router-dom';
import  './categories.css';
import { useGetCategoriesQuery } from '../../store/api';

export default function Categories() {
  const { data: categories = []} = useGetCategoriesQuery();


  return (
    <div className='categories-item'>
      <Header />
      <div className='categories-header'>
        <h1>Categories</h1>
        <Link to="/categories">
          <button>All categories</button>
        </Link>
      </div>

      <div className='categories-list'>
        {categories.map((categories) => (
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
      <ContactPage />
      
    </div>
  );
}