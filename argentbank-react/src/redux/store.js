import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./slices/token/tokenSlice";
import userSlice from "./slices/user/userSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

////////////////////////////////////////////////////////////////////
// PERSIST SETUP
////////////////////////////////////////////////////////////////////

const rootReducer = combineReducers({
   token: tokenSlice,
   user: userSlice,
});

// ROOT PERSIST
const persistConfig = {
   key: "root",
   storage,
   version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   reducer: persistedReducer,
   // REMOVE DEFAULT ERROR CHECKER
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
});
export const persistor = persistStore(store);

// STORE UPDATES
store.subscribe(() => console.log("UPDATE STORE INFO:", store.getState()));

////////////////////////////////////////////////////////////////////
// DEFAULT SLICE SETUP
////////////////////////////////////////////////////////////////////
//
// let state = {
//    token: "",
//    user: {},
// };
//
// export const store = configureStore({
//    preloadedState: state,
//    reducer: {
//       token: tokenSlice,
//       user: userSlice,
//    },
// });
