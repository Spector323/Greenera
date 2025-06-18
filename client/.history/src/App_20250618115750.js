import { Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Categories from './pages/Categories';
import Products from './pages/Products';

function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories/>} />
                <Route path="/Products" element={<Products/>} />

            </Routes>
    )
}

export default App;
