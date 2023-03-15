import axios from 'axios';

const UpdateUser = (userId, updatedUser) => {
    axios.put(`https://fakestoreapi.com/users/7${userId}`, updatedUser)
      .then(response => {
        const updatedUsers = users.map(user => {
          if (user.id === response.data.id) {
            return response.data;
          }
          return user;
        });
        setUsers(updatedUsers);
        console.log('User updated successfully');
      })
      .catch(error => console.log(error));
};

export default UpdateUser;