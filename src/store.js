import { createStore } from "redux";
import { applyMiddleware, compose } from "redux"
import thunk from "redux-thunk";
import rootReducer from "../src/reducers/index.js";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
export default store;