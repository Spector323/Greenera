import { Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Categories from './pages/Categories';
function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Categories/>} />
            </Routes>
    )
}

export default App;
