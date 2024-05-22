import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./slices/counter/counterSlice";
import tokenSlice from "./slices/token/tokenSlice";
import userSlice from "./slices/user/userSlice";

let state = {
   token: "",
   user: {},
};

export const store = configureStore({
   preloadedState: state,
   reducer: {
      token: tokenSlice,
      user: userSlice,
   },
});

store.subscribe(() => console.log("UPDATE STORE:", store.getState()));

// const unsubscribe = store.subscribe(() =>
//    console.log("init state store:", store.getState())
// );
// unsubscribe();
