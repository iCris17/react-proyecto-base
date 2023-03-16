import AddUser from './components/Components/AddUser';
import DeleteUser from './components/Components/DeleteUser';
import UpdateUser from './components/Components/UpdateUser';
import GetUser from './components/Components/GetUser';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
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
    <div>
      <h1>Users Management</h1>
      <button onClick={handleAddUserClick}>Add User</button>
      <button onClick={handleUpdateUserClick}>Update User</button>
      <button onClick={handleDeleteUserClick}>Delete User</button>
      <button onClick={handleGetUserClick}>Get User</button>
      {showAddUser && <AddUser />}
      {showUpdateUser && <UpdateUser />}
      {showDeleteUser && <DeleteUser />}
      {showGetUser && <GetUser />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>

  );

}

export default App;
