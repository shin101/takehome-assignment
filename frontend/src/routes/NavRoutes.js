import { Routes, Route} from "react-router-dom";
import AdminList from "../admin/AdminList";
import RegisterForm from "../registration/RegisterForm";

function navRoutes({ addUser, data }){
  return (
    <Routes>
      <Route>
      <Route exact path="/signup" element=<RegisterForm addUser={addUser} /> />
      <Route exact path="/admin" element=<AdminList data={data} /> />
      </Route>
    </Routes>
  )
}

export default navRoutes;