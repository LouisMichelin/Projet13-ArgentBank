import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
   name: "token",
   initialState: {},
   reducers: {
      setToken: (currentState, action) => {
         const newState = { ...currentState, token: action.payload };
         return newState;
      },
      removeToken: () => {
         return {};
      },
   },
});

export const { setToken, removeToken } = tokenSlice.actions;
