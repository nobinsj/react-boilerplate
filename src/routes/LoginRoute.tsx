import React from 'react'
import { Navigate } from 'react-router-dom';

interface LoginRouteProps {
  component: React.ComponentType
}
const LoginRoute: React.FC<LoginRouteProps> = ({ component: Component }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn") || "false");

  return isLoggedIn ? <Navigate to={"/"} /> : <Component />
}

export default LoginRoute