/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    setCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item, index) => index !== action.payload.index
      );
    },
    setQty: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].qty = action.payload.qty;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
  },
});

export const { setCart, removeFromCart, setQty } = cartSlice.actions;
export default cartSlice.reducer;
