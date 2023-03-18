import React, { useState } from 'react';

const GetUser = () => {
  const [users, setUsers] = useState([]);
  
  const getUsers = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/users');
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Get User</h2>
      <button onClick={getUsers}>Get Users</button>
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
};

export default GetUser;