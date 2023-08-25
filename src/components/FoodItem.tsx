import { FoodItem as FoodItemType } from "../types";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";

type FoodItemProps = {
  foodItem: FoodItemType;
};

export function FoodItem({ foodItem }: FoodItemProps) {
  const { name, image, description, id } = foodItem;
  const { addToCart, cartItems, increase } = useContext(CartContext);

  const isInCart = (itemId: string): boolean => {
    return !!cartItems.find((item) => item.id === itemId);
  };

  return (
    <div className="flex flex-row h-50 sm:flex-col rounded-lg bg-white m-2 dark:bg-neutral-700 md:w-7/12 lg:w-5/12 md:justify-between md:flex-row shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="p-3 w-2/3 md:p-6 overflow-scroll">
        <h5 className="mb-2 text-md md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {name}
        </h5>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          26940% OFF | USE TRYNEW
        </p>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
      </div>
      <div className="relative w-1/3">
        <img
          className="h-24 w-48 rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
          src={image}
          alt={`${name} image`}
        />
        <button
          type="button"
          className="absolute w-auto bottom-2 left-0 right-0 rounded bg-primary px-2 md:px-6 pb-2 pt-2.5 disabled:opacity-40 bg-blue-500 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={() =>
            !isInCart(id) ? addToCart(foodItem) : increase(foodItem)
          }
        >
          {!isInCart(id) ? <div>Add to cart</div> : <div>Add More</div>}
        </button>
      </div>
    </div>
  );
}
