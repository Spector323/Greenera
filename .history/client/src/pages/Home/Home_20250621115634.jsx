import Header from '../../components/Header/Header';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import OrderPage from '../OrderPage/OrderPage';
import SalePage from '../SalePage/SalePage';
import ContactPage from '../../components/ContactPage/ContactPage';
import  './home.css';


export default function Home() {
  return (
    <div className='home'>
      <Header />
      <main className='main'>
        <div className='block-main'>
          <div className='cn-bl-main'>
            <h1>
              Amazing Discounts <br />
              on Garden Products!
            </h1>
            <a href="/products">
              <button className='btn-bl-main'>Check out</button>
            </a>
          </div>
        </div>
      </main>
      <CategoryCard />
      <OrderPage />
      <SalePage />
      <ContactPage />
    </div>
  );
}