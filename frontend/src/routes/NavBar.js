import { Link } from 'react-router-dom'

function NavBar(){
  return (
    <>
      <div>
        <Link to="/">Home</Link><br/>
        <Link to="/signup">Registration Page</Link><br/>
        <Link to="/admin">Admin Page</Link><br/>
      </div>
    </>
  )

}


export default NavBar;