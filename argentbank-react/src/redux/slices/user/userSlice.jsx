import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
   name: "user",
   initialState: {},
   reducers: {
      getFirstName: (state, action) => {
         const importedFirstName = { ...state, user: action.payload };
         console.log("NEWSTATE TOKEN:", importedFirstName);
         return importedFirstName;
      },
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
export const { getFirstName } = tokenSlice.actions;
