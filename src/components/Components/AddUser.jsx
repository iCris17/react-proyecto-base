
import axios from 'axios';

const AddUser = (user) =>{
    axios.post('https://fakestoreapi.com/users', user)
      .then(response => {
        setUsers([...user, response.data]);
        console.log('User added successfully');
      })
      .catch(error => console.log(error));
}

export default AddUser;