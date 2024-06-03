/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "item",
  initialState: { value: [{ id: 0, title: "", image: "", price: 0, qty: 0 }] },
  reducers: {
    setItem: (state, action) => {
      state.value.push(action.payload);
    },

    removeFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id !== action.payload.item.id
      );
      console.log(existingItem);
      if (existingItem) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const { setItem, removeFromCart } = ProductSlice.actions;

export default ProductSlice.reducer;
