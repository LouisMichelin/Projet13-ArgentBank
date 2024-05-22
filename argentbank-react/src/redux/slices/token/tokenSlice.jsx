import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//    token: 1337,
// };

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
// Nous créons le reducer
// const reducer = (currentState, action) => {
//    switch (action.type) {
//       case "ADD_TOKEN": {
//          const ADD_TOKEN = { ...currentState, token: action.payload };
//          return ADD_TOKEN;
//       }
//       default:
//          return currentState;
//    }
// };
export default tokenSlice.reducer;
export const { setToken, removeToken } = tokenSlice.actions;
