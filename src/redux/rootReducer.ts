import { combineReducers } from "@reduxjs/toolkit";
import { homeReducer } from "../pages/Home/homeSlice";

export default combineReducers({
  homeReducer: homeReducer,
});
