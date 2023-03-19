import React, { useState } from 'react';

const DeleteUser = () => {
  const [userId, setUserId] = useState('');
  const [users, setUsers] = useState([]);

  const handleDelete = async () => {
    try {
      await fetch(`https://fakestoreapi.com/users/6${userId}`);
      const response = await fetch('https://fakestoreapi.com/users/6');
      setUsers(response.data);

    } catch (error){
      console.log(error);
    }

    return(
      <div>
        <h2>Delete User</h2>
          <input
            type="text"
            placeholder="Enter user ID"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
          <button onClick={handleDelete}>Delete User</button>
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
}


export default DeleteUser;
