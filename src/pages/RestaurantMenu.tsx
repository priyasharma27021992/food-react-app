import { FoodItem } from "../components/FoodItem";
import { menuItems } from "../mockData/menuItems";
import { FoodItem as FoodItemType } from "../types";

export default function RestaurantMenu() {
  return (
    <div className="flex flex-col justify-center md:items-center">
      {menuItems?.map((foodItem: FoodItemType) => {
        return <FoodItem foodItem={foodItem} key={foodItem?.id} />;
      })}
    </div>
  );
}
