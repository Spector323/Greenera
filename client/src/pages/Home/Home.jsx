import Header from '../../components/Header/Header';
import OrderPage from '../OrderPage/OrderPage';
import ContactPage from '../../components/ContactPage/ContactPage';
import  './home.css';
import SalePage from '../../components/SalePage/SalePage';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';


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
      <CategoriesCard />
      <OrderPage />
      <SalePage/>
      <ContactPage />
    </div>
  );
}