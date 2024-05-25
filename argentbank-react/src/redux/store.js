import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./slices/counter/counterSlice";
import tokenSlice from "./slices/token/tokenSlice";
import userSlice from "./slices/user/userSlice";
import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// PERSIST SETUP
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const persistConfig = {
   key: "root",
   version: 1,
   storage,
   token: "",
   user: {},
};
const reducer = combineReducers({
   token: tokenSlice,
   user: userSlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
let state = {
   token: "",
   user: {},
};

export const store = configureStore({
   // preloadedState: state,
   reducer: {
      persistedReducer,
      // token: tokenSlice,
      // user: userSlice,
   },
});

store.subscribe(() => console.log("UPDATE STORE INFO:", store.getState()));

// const unsubscribe = store.subscribe(() =>
//    console.log("init state store:", store.getState())
// );
// unsubscribe();
