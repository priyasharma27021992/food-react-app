import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="h-full w-full">
      <div className="my-4 mx-10 text-3xl">
        <h1>Shopping Basket</h1>
      </div>
      {cartItems.length === 0 ? (
        <div></div>
      ) : (
        <ul>
          {cartItems.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
}
