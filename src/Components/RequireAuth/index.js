import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  let token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/auth/login"} replace />;
  }
  return children;
};

export default RequireAuth;
