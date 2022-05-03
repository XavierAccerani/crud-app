import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  productsList: [
    {
      id: "oiehguvbebzy",
      title: "0",
      description: "0",
      price: "3",
      category: "housing",
    },
    {
      id: "ivuhdslinjs",
      title: "1",
      description: "1",
      price: "3",
      category: "housing",
    },
    {
      id: "pojkoijmklmjkln",
      title: "2",
      description: "2",
      price: "3",
      category: "housing",
    },
    {
      id: "scytjgkvhbjenc",
      title: "3",
      description: "3",
      price: "3",
      category: "housing",
    },
  ],
  showNewProductForm: false,
  newProduct: {
    id: "",
    title: "",
    description: "",
    price: "",
    category: "",
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productsList = [...state.productsList, action.payload];
    },
    toggleShowNewProductForm: (state) => {
      state.showNewProductForm = !state.showNewProductForm;
    },
    changeNewProductProp: (state, action) => {
      state.newProduct[action.payload.prop] = action.payload.value;
    },
    addCategoryToNewProduct: (state, action) => {
      state.newProduct.category = [
        ...state.newProduct.category,
        action.payload,
      ];
    },
    deleteProduct: (state, action) => {
      let array = [];
      //   let indexProduct = array.findIndex(
      //     (element) => element.id === action.payload
      //   );

      state.productsList.map((obj, i) => {
        if (obj.id !== action.payload.id) {
          array.push(obj);
        }
      });
      state.productsList = array;

      //   state.productsList.splice(indexProduct, 1);

      //   state.productsList = state.productsList.filter((obj) => {
      //     return obj !== action.payload;
      //   });
    },
    editProduct: (state, action) => {
      state.productsList.find((obj, i) => {
        if (obj.id === action.payload.id) {
          state.productsList[i] = {
            id: obj.id,
            title: action.payload.title,
            description: action.payload.description,
            price: action.payload.price,
            category: action.payload.category,
          };
          //   console.log(" dans editProduct obj: ", obj);
        }
      });
    },

    resetProduct: (state) => {
      state.newProduct = {
        id: "",
        title: "",
        description: "",
        price: "",
        category: "",
      };
    },
  },
});

export const {
  addProduct,
  toggleShowNewProductForm,
  changeNewProductProp,
  addCategoryToNewProduct,
  deleteProduct,
  editProduct,
  resetProduct,
} = productSlice.actions;

export default productSlice.reducer;
