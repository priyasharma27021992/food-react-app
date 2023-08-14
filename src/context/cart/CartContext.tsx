import { createContext } from "react";

const CartContext = createContext("");

export const storage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

export default CartContext;
