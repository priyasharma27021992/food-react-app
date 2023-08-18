import { createContext } from "react";

export const authStorage = JSON.parse(localStorage.getItem("user")) || false;

export const AUTH_INITIAL_STATE = {
  user: authStorage || null,
  error: false,
};

const AuthContext = createContext(AUTH_INITIAL_STATE);

export default AuthContext;
