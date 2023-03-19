import ProductsPage from './components/ProductsPage/ProductsPage';
import LandingPage from './components/LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category/:categoryName" element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
