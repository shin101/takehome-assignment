
function AdminList({ data }){
  //props?.data =  if (props) {return props.data} 
  const users = Object.values(data);

  return(
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <b>{user.firstName} </b>
          {user.email}
        </li>
      ))}


    </ul>

  )
}

export default AdminList;
