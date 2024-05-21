import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
   name: "token",
   initialState: {},
   reducers: {
      // setToken: (currentState, action) => {
      //    const newState = { ...currentState, token: action.payload };
      //    return newState;
      // },
      setToken: (state, action) => {
         const newState = { ...state, userToken: action.payload };
         console.log("state tokenslice: ", state);
         console.log("newstate tokenslice: ", newState);
         return newState;
      },
      // removeToken: () => {
      //    return {};
      // },
   },
});

export default tokenSlice.reducer;
export const { setToken, removeToken } = tokenSlice.actions;
