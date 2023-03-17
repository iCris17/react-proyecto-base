

const GetUsers = async() => {
  try {
    const response = await fetch("https://fakestoreapi.com/users")
    const data = await response.json();
    data.map(user => {
      console.log(user);
    })
  } catch (error) {
    console.log(error);
  }

  return (<div></div>);
}

export default GetUsers;