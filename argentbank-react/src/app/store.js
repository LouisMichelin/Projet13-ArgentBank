import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";

let state = {
   counter: {},
};

export const store = configureStore({
   preloadedState: state,
   reducer: {
      counter: counterSlice,
   },
});
