import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";

type restaurantDataProps = {
  restaurantData: {
    name: string;
    cuisines: string[];
    cloudinaryImageId: string;
  };
};

export default function RestaurantCard({
  restaurantData,
}: restaurantDataProps) {
  const { name, cuisines, cloudinaryImageId, id } = restaurantData;
  return (
    <Link to={`/restaurants/${name}`}>
      <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:scale-95">
        <img
          className="rounded-t-lg"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={`${name} image`}
        />

        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight md:whitespace-nowrap overflow-scroll text-neutral-800 dark:text-neutral-50">
            {name}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {cuisines}
          </p>
        </div>
      </div>
    </Link>
  );
}
