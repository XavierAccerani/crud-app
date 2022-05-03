import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addProduct,
  changeNewProductProp,
  addCategoryToNewProduct,
  resetProduct,
} from "../../productSlice";

import ProductReviewCard from "../productCard";

export default function NewProductCard({ setNewProduct }) {
  const newProduct = useSelector((state) => state.product.newProduct);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(newProduct));
    dispatch(resetProduct());
  };

  useEffect(() => {}, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          required
          value={newProduct.title}
          onChange={(e) => {
            dispatch(
              changeNewProductProp({
                prop: "title",
                value: `${e.target.value}`,
              })
            );
            dispatch(
              changeNewProductProp({
                prop: "id",
                value: uuidv4(),
              })
            );
          }}
        />
      </label>
      <label>
        Description:
        <input
          required
          value={newProduct.description}
          onChange={(e) =>
            dispatch(
              changeNewProductProp({
                prop: "description",
                value: `${e.target.value}`,
              })
            )
          }
        />
      </label>
      <label>
        Price:
        <input
          required
          value={newProduct.price}
          onChange={(e) =>
            dispatch(
              changeNewProductProp({ prop: "price", value: e.target.value })
            )
          }
        />
      </label>
      <label>
        Category:
        <input
          required
          value={newProduct.category}
          onChange={(e) =>
            dispatch(
              changeNewProductProp({ prop: "category", value: e.target.value })
            )
          }
        />
      </label>
      <input type="submit" value="Add new product" />
    </form>

    // <Card sx={{ maxWidth: 345 }}>
    //   <CardHeader title="Add a New Product" />

    //   <CardContent>
    //     <TextField
    //       size="small"
    //       id="outlined-basic"
    //       label="Title"
    //       variant="outlined"
    //     />
    //   </CardContent>
    //   <CardContent>
    //     <TextField
    //       size="small"
    //       id="outlined-basic"
    //       label="Description"
    //       variant="outlined"
    //     />
    //   </CardContent>
    //   <CardContent>
    //     <TextField
    //       size="small"
    //       id="outlined-basic"
    //       label="Price"
    //       variant="outlined"
    //     />
    //   </CardContent>
    //   <CardContent>
    //     <TextField
    //       size="small"
    //       id="outlined-basic"
    //       label="categorie"
    //       variant="outlined"
    //     />
    //   </CardContent>
    // </Card>
  );
}
