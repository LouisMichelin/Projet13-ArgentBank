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
      editUserFirstName: (currentState, action) => {
         const newState = { ...currentState, firstName: action.payload };
         console.log("EDITED USER", newState);
         return newState;
      },
      editUserLastName: (currentState, action) => {
         const newState = { ...currentState, lastName: action.payload };
         console.log("EDITED USER", newState);
         return newState;
      },
   },
});

export default tokenSlice.reducer;
export const { setUser, editUserFirstName, editUserLastName } =
   tokenSlice.actions;
