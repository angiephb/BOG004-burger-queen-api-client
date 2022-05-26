import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const IsAuthentication = localStorage.getItem('Token:')
  // console.log(IsAuthentication.length,'tamaño del token')
  if (IsAuthentication === 0 === true) {
    return <Navigate to="/" />;
   
  
  } else {
    return children
  }
};
export default ProtectedRoute;