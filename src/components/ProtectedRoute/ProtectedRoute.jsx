import { React } from 'react';
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, navigateTo }) {

  return isLoggedIn
    ? <Outlet />
    : <Navigate to={navigateTo} />
}

export default ProtectedRoute;
