import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorageState("user", null);
  const navigate = useNavigate();

  const login = async (data) => {
    setUser(data);
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [login, logout, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
