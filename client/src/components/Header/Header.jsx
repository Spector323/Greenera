import { Link } from 'react-router-dom';
import  './header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='cn-header'>
        <Link to="/">
          <img src="/assets/logo.svg" alt="" className='header-logo' />
        </Link>

        <div className='header-nav'>
          <Link to="/">Main Page</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/products">All products</Link>
          <Link to="/sale">All sales</Link>
        </div>

        <Link to="/cart">
          <img src="/assets/icons/basket.svg" alt="" className='header-basket' />
        </Link>
      </div>
    </header>
  );
}