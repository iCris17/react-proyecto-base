import LandingPage from "./components/LandingPage/LandingPage";
import { Routes, Route } from 'react-router-dom';
    
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category/:categoryName" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
