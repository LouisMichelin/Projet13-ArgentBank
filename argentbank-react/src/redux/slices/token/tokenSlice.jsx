import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
   name: "token",
   initialState: {},
   reducers: {
      setToken: (state, action) => {
         const newState = { ...state, token: action.payload };
         console.log("NEWSTATE TOKEN:", newState);
         return newState;
      },
      // removeToken: () => {
      //    return {};
      // },
   },
});

export default tokenSlice.reducer;
export const { setToken, removeToken } = tokenSlice.actions;
