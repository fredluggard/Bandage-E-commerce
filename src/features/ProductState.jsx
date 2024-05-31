/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "item",
  initialState: { value: { title: "", image: "", price: 0 } },
  reducers: {
    setItem: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setItem } = ProductSlice.actions;

export default ProductSlice.reducer;
