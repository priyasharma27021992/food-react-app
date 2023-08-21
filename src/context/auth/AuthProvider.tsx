import { useMemo, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { AuthReducer } from "./AuthReducer";
import AuthContext, { AUTH_INITIAL_STATE } from "./AuthContext";
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./AuthTypes";

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(AuthReducer, AUTH_INITIAL_STATE);

  const login = (payload) => {
    dispatch({ type: LOGIN, payload });
    try {
      dispatch({ type: LOGIN_SUCCESS });
      navigate("/");
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE });
    }
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user: state.user,
      login,
      logout,
    }),
    [login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
