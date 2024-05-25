import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./slices/counter/counterSlice";
import tokenSlice from "./slices/token/tokenSlice";
import userSlice from "./slices/user/userSlice";
// import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import persistStore from "redux-persist/es/persistStore";

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// PERSIST SETUP
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

const rootReducer = combineReducers({
   token: tokenSlice,
   user: userSlice,
});

const persistConfig = {
   key: "root",
   storage,
   version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// let state = {
//    token: "",
//    user: {},
// };

export const store = configureStore({
   // preloadedState: state,
   reducer: persistedReducer,
   // reducer: {
   // token: tokenSlice,
   // user: userSlice,
   // "REMOVE DEFAULT ERROR CHECKER"
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
   // },
});

store.subscribe(() => console.log("UPDATE STORE INFO:", store.getState()));

// const unsubscribe = store.subscribe(() =>
//    console.log("init state store:", store.getState())
// );
// unsubscribe();

export const persistor = persistStore(store);
