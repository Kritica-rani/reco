import { createSlice } from "@reduxjs/toolkit";
import { ProductStatus } from "../../products";

const initialState = {
  products: [],
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProductStatus: (state, action) => {
      const { productId, status } = action.payload;
      const product = state.products.find((p) => p.id === productId);
      if (product) {
        product.status = status;
      }
    },
    approveAllProducts: (state) => {
      state.products.forEach((product) => {
        product.status = ProductStatus.APPROVED;
      });
    },
    resetOrder: (state) => {
      state.products = [];
    },
  },
});
export const { addProduct, updateProductStatus, approveAllProducts } =
  orderSlice.actions;
export const { reducer } = orderSlice;
