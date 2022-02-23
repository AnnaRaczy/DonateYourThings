import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const location = useLocation();

  const user = localStorage.getItem("isLoggedIn");

  return !user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { Protected };
