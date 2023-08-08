import { FoodItem } from "../components/FoodItem";
import { menuItems } from "../mockData/menuItems";

export default function RestaurantMenu() {
  return (
    <div className="flex flex-col justify-center items-center">
      {menuItems?.categories[0]?.menu_item_list.map((foodItem) => {
        return <FoodItem foodItemData={foodItem} />;
      })}
    </div>
  );
}
