import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
   name: "user",
   initialState: {},
   reducers: {
      setUser: (currentState, action) => {
         const newState = { ...currentState, ...action.payload };
         console.log("NEWSTATE user:", newState);
         return newState;
      },
   },
});

export default tokenSlice.reducer;
export const { setUser } = tokenSlice.actions;
