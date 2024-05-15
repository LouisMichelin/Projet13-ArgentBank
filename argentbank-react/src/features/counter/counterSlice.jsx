import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const test = [{ name: "Bobleponge" }, { name: "Garry" }];

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
   return axios.get(test).then((response) => response.data);
});

const initialState = {
   totalCounter: 0,
   users: [],
   error: "",
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
   extraReducers: (builder) => {
      builder.addCase(fetchUsers.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
         state.loading = false;
         state.users = action.payload;
         state.error = "";
      });
      builder.addCase(fetchUsers.rejected, (state, action) => {
         state.loading = false;
         state.users = [];
         state.error = action.error.message;
      });
   },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
