import useLocalStorageState from "use-local-storage-state";
import { FoodItem as FoodItemType } from "../types";

type FoodItemProps = {
  foodItem: FoodItemType;
};

export function FoodItem({ foodItem }: FoodItemProps) {
  const [cart, setCart] = useLocalStorageState("cart", {});
  const { name, image, description, id } = foodItem;

  const addToCart = (item: FoodItemType): void => {
    setCart((prevCart: FoodItemType) => ({
      ...prevCart,
      [item.id]: item,
    }));
  };

  const isInCart = (itemId: string): boolean => {
    debugger;
    return Object.keys(cart || {}).includes(itemId.toString());
  };

  return (
    <div className="flex flex-col rounded-lg bg-white m-2 dark:bg-neutral-700 md:w-7/12 md:justify-between md:flex-row shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col justify-start p-6 w-3/4">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {name}
        </h5>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          26940% OFF | USE TRYNEW
        </p>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
      </div>
      <div className="relative">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt={`${name} image`}
        />
        <button
          type="button"
          className="absolute w-auto z-10 bottom-2 left-0 right-0 rounded bg-primary px-6 pb-2 pt-2.5 disabled:opacity-40 bg-blue-500 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          disabled={isInCart(id)}
          onClick={() => addToCart(foodItem)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
