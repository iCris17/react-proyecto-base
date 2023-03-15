import ProductsPage from './components/ProductsPage/ProductsPage';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import { Routes, Route } from 'react-router-dom';

const App = () =>{

  const [showAddUser, setShowAddUser] = useState(false);
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [showGetUser, setShowGetUser] = useState(false);


  const handleAddUserClick = () => {
    setShowAddUser(true);
  };

  const handleUpdateUserClick = () => {
    setShowUpdateUser(true);
  };

  const handleDeleteUserClick = () => {
    setShowDeleteUser(true);
  };

  const handleGetUserClick = () => {
    setShowGetUser(true);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category/:categoryName" element={<ProductsPage />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );

}

export default App;
