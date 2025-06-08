import { Navigate, Outlet } from "react-router-dom";

//its protected rout for secure authorizationn
const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
