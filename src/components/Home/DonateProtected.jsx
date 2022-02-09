import React from "react";
import { Donate } from "./Donate";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Protected = () => {
  const { currentUser } = useAuth();
  const location = useLocation();
  console.log("location:", location);

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { Protected };
