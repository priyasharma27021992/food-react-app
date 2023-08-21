import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  return children;
}
