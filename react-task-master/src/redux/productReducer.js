import { SET_PROUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  if (action.type === SET_PROUCT_LIST) {
    return [action.data, ...data];
  } else {
    return data;
  }
};
