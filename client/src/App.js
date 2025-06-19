import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import SalePage from './pages/SalePage/SalePage';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/sale" element={<SalePage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;