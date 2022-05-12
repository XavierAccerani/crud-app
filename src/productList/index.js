import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";

import ProductCard from "../productCard";
import { deleteProduct } from "../productSlice";

function ProductList() {
  const product = useSelector((state) => {
    return state.product;
  });

  console.log("product: ", product);
  return (
    <div className="App">
      <h1>Products List </h1>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          //   justifyContent: "space-around",
        }}
      >
        {product &&
          product.productList.map((p) => {
            return (
              <div key={p.id}>
                <ProductCard product={p} />
              </div>
            );
          })}
      </Box>
    </div>
  );
}

export default ProductList;
