import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./slices/token/tokenSlice";
import userSlice from "./slices/user/userSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import storageSession from "redux-persist/lib/storage/session";

////////////////////////////////////////////////////////////////////
// PERSIST SETUP
////////////////////////////////////////////////////////////////////
//
// REDUCERS FROM SLICES
//
const rootReducer = combineReducers({
   token: tokenSlice,
   user: userSlice,
});
//
// ROOT PERSIST (box checked) : LOCAL STORAGE
//
const persistConfig = {
   key: "root",
   storage,
   version: 1,
};
//
// AUTH PERSIST (box unchecked) : SESSION STORAGE
//
// const authPersistConfig = {
//    key: "user",
//    storage: storageSession,
//    version: 2,
// };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   reducer: persistedReducer,
   // "REMOVE DEFAULT ERROR CHECKER"
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
});
export const persistor = persistStore(store);

////////////////////////////////////////////////////////////////////
// SETUP store.SUBSCRIBE()
////////////////////////////////////////////////////////////////////
store.subscribe(() => console.log("UPDATE STORE INFO:", store.getState()));
//
// const unsubscribe = store.subscribe(() =>
//    console.log("init state store:", store.getState())
// );
// unsubscribe();
