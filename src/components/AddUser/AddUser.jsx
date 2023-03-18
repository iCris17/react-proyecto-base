import { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState([]);

  const handleAdd = async () =>{
    try{
      const respose = await fetch ('https://fakestoreapi.com/users', {
        name,
        email
      });
      setUsers([...users, response.data]);
      setName('');
      setEmail('');
    } catch (error){
      console.log(error);
    }

    return(
      <div>
        <h2>Add User</h2>
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
        <button onClick={handleAdd}>Add User</button>
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

export default AddUser;


