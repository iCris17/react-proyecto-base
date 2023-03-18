import LandingPage from "./components/LandingPage/LandingPage";
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import CategoryFilters from "./components/CategoryFilters/CategoryFilters";
    
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category/:categoryName" element={<CategoryFilters />} />
      </Routes>
=======
/*import Login from "./components/Login/Login";
import CategoryFilters from "./components/CategoryFilters/CategoryFilters"
import { Route, Routes } from "react-router-dom";
import UserArea from "./components/UserArea/UserArea"*/

function App() {
  return (
    <>
      <LandingPage></LandingPage>
      {/*<Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/category" element={<CategoryFilters />}/>
        <Route path="/users" element={<UserArea />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>*/}
>>>>>>> aea1960d5eeab02a195a773f2a423be67bf6b3db
    </>
  );
}

export default App;
