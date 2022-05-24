import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isRol = localStorage.getItem("Rol");
  console.log("this", isRol);

  return (
    <Route
      {...restOfProps}
      render={(Admin) =>

        isRol=== "Admin" ? <Component {...Admin} /> : <Navigate to="/admin" />
      }
    />
  );
}

export default ProtectedRoute;