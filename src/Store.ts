import { combineReducers, createStore } from "redux";
import { userReducer } from "./Reducers/userReducer";
import { UIReducer } from "./Reducers/uiReducer";
// import { configureStore } from "@reduxjs/toolkit";

const combineReducer = combineReducers({
  userReducer: userReducer,
  UIReducer: UIReducer,
});

const store = createStore(combineReducer);

export default store;
