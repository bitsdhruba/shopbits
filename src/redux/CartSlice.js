import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  initialState: [],
  name: "Cart",
  reducers: {
    addtoCart: (state, action) => {
      state.push(action.payload);
    },
    removefromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addtoCart, removefromCart } = CartSlice.actions;
export default CartSlice.reducer;
