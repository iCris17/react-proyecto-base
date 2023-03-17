import LandingPage from './components/LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom';

import UserArea from './components/UserArea/UserArea';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category/:categoryName" element={<LandingPage />} />
        <Route path="/users/" element={<UserArea />}></Route>
      </Routes>
    </>
  );
}

export default App;
