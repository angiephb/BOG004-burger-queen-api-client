import React from "react";
import { Navigate } from "react-router-dom";
// import Login from './login/login.js'
// import Waiter from './rol/waiter/waiter.js'
// import Chef from './rol/chef/chef.js'
// import Admin from '../rol/admin/admin.js';

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
export default ProtectedRoute;