import { useUser } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
import React from "react";

const ProtectedRoute = ({ children }) => {
  const user = useUser();

  if (!user.token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
