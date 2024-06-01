/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    setCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
