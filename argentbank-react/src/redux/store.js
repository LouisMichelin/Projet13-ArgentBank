import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter/counterSlice";
// import authReducer

let state = {
   user: {},
};

export const store = configureStore({
   preloadedState: state,
   reducer: {
      counter: counterSlice,
      // auth: authReducer,
   },
   // middleware: [
   //       () => (next) => (action) => {
   //           console.log('Action', action)
   //           next(action);
   //       },
   //       thunk,
   // ]
});
