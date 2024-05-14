import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   totalCounter: 0,
};

export const counterSlice = createSlice({
   name: "counter",
   initialState,
   reducers: {
      increment: (state) => {
         state.totalCounter++;
      },
      decrement: (state) => {
         state.totalCounter--;
      },
   },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
