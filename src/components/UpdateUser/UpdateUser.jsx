import React, {useState} from 'react';

const UpdateUser = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  const handleGet = async () => {
    try{
      const response = await fetch('https://fakestoreapi.com/users/7');
      setName(response.data.name);
      setEmail(response.data.email);
    } catch (error){
      console.log(error);
    }
  }

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`https://fakestoreapi.com/users/7${id}`, {
        name,
        email,
      });
      const updatedUser = response.data;
      const updatedUsers = users.map((user) => (user.id === updatedUser.id ? updatedUser : user));
      setUsers(updatedUsers);
      setId('');
      setName('');
      setEmail('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <input
        type="text"
        placeholder="Enter user ID"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <button onClick={handleGet}>Get User</button>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button onClick={handleUpdate}>Update User</button>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default UpdateUser;



