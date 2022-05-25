import React from "react";
import { Navigate, Route } from "react-router-dom";
// import Login from './login/login.js'
// import Waiter from './rol/waiter/waiter.js'
// import Chef from './rol/chef/chef.js'
// import Admin from '../rol/admin/admin.js';

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isRol = localStorage.getItem('Rol');
  console.log("this", isRol);

  return (
    <Route
      {...restOfProps}
      render={(Admin) =>

        isRol === "admin" ? <Component {...Admin} /> : <Navigate to="/" />
      }
    />
  );
}

export default ProtectedRoute;