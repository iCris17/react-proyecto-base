import ProductsPage from './components/ProductsPage/ProductsPage';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import UserArea from "./components/UserArea/UserArea"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category/:categoryName" element={<ProductsPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/users" element={<UserArea/>}/>
      </Routes>
    </>
  );
}

export default App;
