import { Navigate } from "react-router-dom";
import Admin from "../rol/admin/admin";
import Waiter from "../rol/waiter/waiter";
import Chef from "../rol/chef/chef";

const ProtectedRoute = ({ children }) => {
  console.log(children);
  const IsAuthentication = localStorage.getItem('Token:')
  const IsRol = localStorage.getItem('rol')
  if (IsRol === 'admin' && IsAuthentication !== null) {
    return <Admin/>;
  }
  if (IsRol === 'waiter' && IsAuthentication !== null) {
    return <Waiter/>;
  }
  if (IsRol === 'chef' && IsAuthentication !== null) {
    return <Chef/>;
  }
  else{
    return <Navigate to='/' />
  }
};

export default ProtectedRoute;