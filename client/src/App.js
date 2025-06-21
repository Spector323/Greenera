import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import Sales from './pages/Sales/Sales';
import Cart from './pages/Cart/Cart';
import Categories from './pages/Categories/Categories';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:id" element={<CategoriesPage />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;