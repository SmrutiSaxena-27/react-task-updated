import { ADD_TO_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
  };
};

export const emptyCart = (data) => {
  return {
    type: EMPTY_CART,
  };
};
