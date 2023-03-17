import axios from 'axios';

const DeleteUser = (userId) => {
    axios.delete(`https://fakestoreapi.com/users/6${userId}`)
      .then(() => {
        const filteredUsers = users.filter(user => user.id !== userId);
        setUsers(filteredUsers);
        console.log('User deleted successfully');
      })
      .catch(error => console.log(error));
};

export default DeleteUser;
