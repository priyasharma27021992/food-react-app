export type FoodItem = {
  name: string;
  price: number;
  is_available: boolean;
  description: string;
  id: string;
  image: string;
  quantity: number;
};
export interface CartProps {
  [productId: string]: FoodItem;
}
