import { FoodItem } from "../../types";
import { storage } from "./CartContext";
import {
  ADD_TO_CART,
  DECREASE,
  INCREASE,
  REMOVE_ITEM,
} from "./CartTypes";

const Storage = (cartItems: FoodItem[]) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems?.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems: FoodItem[]) => {
  Storage(cartItems);
  const itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const total = cartItems
    .reduce(
      (total, product) =>
        total + Number(product.price) * Number(product?.quantity),
      0
    )
    .toFixed(0);

  return { itemCount, total };
};

const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false,
};

export function useApiCallReducer() {
  const CartReducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        if (!state.cartItems.find((item) => item.id === action.payload.id)) {
          state.cartItems.push({
            ...action.payload,
            quantity: 1,
            timeAdded: new Date(),
          });
        }
        return {
          ...state,
          ...sumItems(state.cartItems),
          cartItems: [...state.cartItems],
        };

      case REMOVE_ITEM: {
        return {
          ...state,
          ...sumItems(
            state.cartItems.filter((item) => item.id !== action.payload.id)
          ),
          cartItems: [
            ...state.cartItems.filter((item) => item.id !== action.payload.id),
          ],
        };
      }

      case INCREASE: {
        return {
          ...state,
          ...sumItems(state.cartItems),
          cartItems: [
            ...state.cartItems.map((item) => {
              if (item.id === action.payload.id) {
                return {
                  ...item,
                  quantity: item.quantity++,
                  timeAdded: new Date(),
                };
              }
              return item;
            }),
          ],
        };
      }

      case DECREASE:
        return {
          ...state,
          ...sumItems(state.cartItems),
          cartItems: [
            ...state.cartItems.map((item) => {
              if (item.id === action.payload.id) {
                return { ...item, quantity: item.quantity--;,
                  timeAdded: new Date() };
              }
              return item;
            }),
          ],
        };

      case EXPIRE_CART_ITEMS:
        return {
          ...state,
          cartItems: [
            ...state.cartItems.filter((item) => {
              if (new Date() - item.timeAdded > 5000) return item;
            }),
          ],
        };

      case CHECKOUT:
        return {
          cartItems: [],
          checkout: true,
          ...sumItems([]),
        };

      case CLEAR:
        return {
          cartItems: [],
          ...sumItems([]),
        };

      default:
        return state;
    }
  };
  return useReducer(CartReducer, initialState);
}
