import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./AuthTypes";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: null,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        user: action.payload,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        user: null,
        error: true,
      };
    case LOGOUT:
      return {
        user: null,
        error: false,
      };
    default:
      return { ...state };
  }
};
