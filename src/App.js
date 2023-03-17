import LandingPage from "./components/LandingPage/LandingPage";
import { Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import UserArea from "./components/UserArea/UserArea";

    
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/users/" element={<UserArea/>}></Route>
      </Routes>
    </>
  );
}

export default App;