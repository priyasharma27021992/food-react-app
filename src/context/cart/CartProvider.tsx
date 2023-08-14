import { useReducer } from "react";
import CartContext, { storage } from "./CartContext";
import { CartReducer, sumItems } from "./CartReducer";

const CartProvider = ({ children }) => {
  // Initial state of cart
  const initialState = {
    cartItems: storage,
    ...sumItems(storage),
    checkout: false,
  };

  //set up a reducer
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // Function to handle when an item is added from the store to cart
  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  // Function to handle when an item that is in the cart is added again
  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  // Function to handle when an item is removed from the cart
  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  // Function to remove an item from the cart
  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = (payload) => {
    dispatch({ type: "CLEAR" });
  };

  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
