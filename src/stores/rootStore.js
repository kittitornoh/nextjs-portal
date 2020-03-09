import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./rootReducer";

const store = (initialState = {}) => {
  return createStore(reducer, initialState, applyMiddleware(thunk));
};

export default store;
