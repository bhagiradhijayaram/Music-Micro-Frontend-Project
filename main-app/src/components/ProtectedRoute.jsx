import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { userData } = useAuth();

  if (!userData) return <Navigate to="/login" />;

  if (role && userData.role !== role) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
