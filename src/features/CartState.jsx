/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const startItem =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: startItem },
  reducers: {
    setCart: (state, action) => {
      state.items = [...state.items, action.payload];

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items.map((item) => item))
      );
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item, index) => index !== action.payload.index
      );
    },
    setQty: (state, action) => {
      const index = action.payload.index;
      const newQuantity = action.payload.qty;
      state.items[index].qty = newQuantity;
    },
  },
});

export const { setCart, removeFromCart, setQty } = cartSlice.actions;
export default cartSlice.reducer;
