import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [
    { id: "iuhiuhiuhuih", title: 1, description: 1 },
    { id: "csqxtffgecsgv", title: 2, description: 2 },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productList = [...state.productList, action.payload];
    },
    deleteProduct: (state, action) => {
      state.productList = state.productList.filter(
        (product) => product.id !== action.payload.id
      );
    },
    editingProduct: (state, action) => {
      const editedProduct = action.payload;
      const updatedList = [...state.productList];
      const indexOfProduct = state.productList.findIndex(
        (product) => product.id === editedProduct.id
      );
      updatedList[indexOfProduct] = editedProduct;
      return (state = { ...state, productList: updatedList });
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
