import trashIcon from "/assets/icons/trash-outline.svg";
import plus from "/assets/icons/add-circle-outline.svg";
import minus from "/assets/icons/remove-circle-outline.svg";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import { FoodItem as FoodItemType } from "../types";

export default function CartItem({ product }: { product: FoodItemType }) {
  const { name, image, quantity, id } = product;
  const { increase, decrease, removeFromCart } = useContext(CartContext);
  return (
    <div className="w-4/6 mx-auto" key={id}>
      <div className="flex flex-row justify-evenly items-center">
        <img
          className="h-20 w-40 rounded-lg object-cover"
          src={image}
          alt={`${name} image`}
        />
        <p className="text-md w-40 text-black-500">{name}</p>
        <div className="w-40 flex">
          <button onClick={() => increase(product)}>
            <img src={plus} alt="plus-icon" className="h-5 w-5 bg-white" />
          </button>
          <p className="inline-block px-2">{quantity}</p>
          {quantity > 1 ? (
            <button onClick={() => decrease(product)}>
              <img src={minus} alt="minus-icon" className="h-5 w-5 bg-white" />
            </button>
          ) : (
            <button onClick={() => removeFromCart(product)}>
              <img
                src={trashIcon}
                alt="trash-icon"
                className="h-5 w-5 bg-white"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
