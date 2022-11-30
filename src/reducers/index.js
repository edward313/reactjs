

import { combineReducers } from "redux";
import { userLoginReducer } from "./userreducers";
import { productListReducer,productDetailsReducer } from "./Productreducers";
import { cartReducer } from "./cartReducers";
const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  user: userLoginReducer,
  cart: cartReducer,
});

export default rootReducer;