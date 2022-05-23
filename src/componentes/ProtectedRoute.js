import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const Token = localStorage.getItem("Token");
  console.log("this", Token);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        Token ? <Component {...props} /> : <Navigate to="/waiter" />
      }
    />
  );
}

export default ProtectedRoute;