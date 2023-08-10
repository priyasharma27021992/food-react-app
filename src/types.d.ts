export type FoodItem = {
  name: string;
  price: number;
  is_available: boolean;
  description: string;
  id: string;
  image: string;
};
export interface CartProps {
  [productId: string]: FoodItem;
}
