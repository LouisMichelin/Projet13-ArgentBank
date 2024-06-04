import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: "user",
   initialState: {},
   reducers: {
      setUser: (currentState, action) => {
         const newState = { ...currentState, ...action.payload };
         console.log("SET user:", newState);
         return newState;
      },
      editUserFirstName: (currentState, action) => {
         const newState = { ...currentState, firstName: action.payload };
         return newState;
      },
      editUserLastName: (currentState, action) => {
         const newState = { ...currentState, lastName: action.payload };
         return newState;
      },
      removeUser: () => {
         return {};
      },
   },
});

export default userSlice.reducer;
export const { setUser, editUserFirstName, editUserLastName, removeUser } =
   userSlice.actions;
