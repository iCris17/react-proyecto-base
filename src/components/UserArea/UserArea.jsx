import GetUser from "../GetUser/GetUser";
import DeleteUser from "../DeleteUser/DeleteUser";
import AddUser from "../AddUser/AddUser";
import UpdateUser from "../UpdateUser/UpdateUser";

const UserArea = () =>{
  return(
    <div> 
      <GetUser></GetUser>
      <AddUser></AddUser>
      <DeleteUser></DeleteUser>
      <UpdateUser></UpdateUser>
    </div>
  )
}

export default UserArea;