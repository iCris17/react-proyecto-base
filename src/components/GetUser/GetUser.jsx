import axios from 'axios';

const GetUser = () => {
    axios.get('https://fakestoreapi.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
};

export default GetUser;

