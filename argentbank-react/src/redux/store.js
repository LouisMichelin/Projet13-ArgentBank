import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter/counterSlice";
import tokenSlice from "./slices/token/tokenSlice";

let state = {
   token: "",
};

export const store = configureStore({
   preloadedState: state,
   reducer: {
      counter: counterSlice,
      token: tokenSlice,
      // token: tokenSlice.reducer,
   },
});

store.subscribe(() => console.log("UPDATE STORE:", store.getState()));
/////////////////////////////////////////////////////////
// const unsubscribe = store.subscribe(() =>
//    console.log("init state store:", store.getState())
// );
// unsubscribe();
