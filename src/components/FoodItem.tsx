export function FoodItem({ foodItemData }) {
  const { name, image } = foodItemData;
  return (
    <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-4xl md:flex-row">
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {name}
        </h5>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          26940% OFF | USE TRYNEW
        </p>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Multigrain toasted Sub with chunks of paneer, achari mayo, pickled
          onion, capsicum, tomato and chilli mayo. Serving size - 240 g/ 589
          kcal. Allergens - Contains wheat, rye, barley, oats, milk & soy.
        </p>
      </div>
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
      />
    </div>
  );
}
