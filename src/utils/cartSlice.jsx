import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state here
      /* //in older version like in vanilla redux =dont mutate state and return was mandatory
      // const newState=[...state];
      // newState.items.push(action.payload);
      */

      //but Redux toolkit give its benefit we can mutate the state  which is not possible ti mutate the state behind the scene redux use libraru named immer for unmutating behind the scene but here we can mutate immer find diff. b/w original state and mutated state return is not mandatory
      //redux uses immer lib behind the scene
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0; //[] will make our state as empty array
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

//install redux devtool
