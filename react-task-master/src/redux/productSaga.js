import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LISTING, SET_PROUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("https://dummyjson.com/products");
  data = yield data.json();
  yield put({ type: SET_PROUCT_LIST, data: data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LISTING, getProducts);
}

export default productSaga;
