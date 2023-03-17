import ProductsPage from './components/ProductsPage/ProductsPage';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import { Routes, Route } from 'react-router-dom';

const App = () =>{
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category/:categoryName" element={<LandingPage />} />
        <Route path="/category/:categoryName" element={<ProductsPage />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
