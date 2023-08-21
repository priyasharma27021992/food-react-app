import { restaurantList } from "../mockData/restaurantList";
import RestaurantCard from "../components/RestaurantCard";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-10 m-10 lg:grid-cols-4 sm:grid-cols-2">
      {restaurantList.map((restaurant) => {
        return (
          <RestaurantCard
            restaurantData={{
              name: restaurant?.data?.name,
              cuisines: restaurant?.data?.cuisines,
              cloudinaryImageId: restaurant?.data?.cloudinaryImageId,
              id: restaurant?.data?.id,
            }}
          />
        );
      })}
    </div>
  );
}
