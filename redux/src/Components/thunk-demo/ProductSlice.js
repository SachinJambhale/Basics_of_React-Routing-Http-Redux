import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state, { payload }) => [...payload],
  },
});

export const { addProduct } = ProductSlice.actions;

export const selectProduct = (state) => state.products;

export default ProductSlice.reducer;
