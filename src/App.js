import LandingPage from "./components/LandingPage/LandingPage";
import { Routes, Route } from 'react-router-dom';
import CategoryFilters from "./components/CategoryFilters/CategoryFilters";
    
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category/:categoryName" element={<CategoryFilters />} />
      </Routes>
    </>
  );
}

export default App;
