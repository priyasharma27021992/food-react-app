import { useEffect } from "react";
import CartContext from "./CartContext";
import { useApiCallReducer } from "./CartReducer";

const CartProvider = ({ children }) => {
  //set up a reducer
  const [state, dispatch] = useApiCallReducer();

  // Function to handle when an item is added from the store to cart
  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  // Function to handle when an item that is in the cart is added again
  const increase = (payload) => {
    console.log("called");
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

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "EXPIRE_CART_ITEMS" });
    }, 1000);
    return clearInterval(timer);
  });

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
