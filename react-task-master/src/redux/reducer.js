import { ADD_TO_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];
    case EMPTY_CART:
      data = [];
      return [...data];
    default:
      return data;
  }
};
