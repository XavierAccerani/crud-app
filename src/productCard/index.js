import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { useDispatch } from "react-redux";
import { deleteProduct } from "../productSlice";
import ShowOrEditProductInfo from "./ShowOrEditInfo";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const [editProduct, setEditProduct] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

  function toggleEdit() {
    setEditProduct(!editProduct);
  }
  function handleDelete(p) {
    dispatch(deleteProduct(p));
    console.log("editProduct", editProduct);
  }

  function save() {
    console.log("editedProduct: ", editedProduct);
    setEditProduct(false);
  }
  console.log("editProduct", editProduct);
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <ShowOrEditProductInfo
          edit={editProduct}
          product={editedProduct}
          setEditedProduct={setEditedProduct}
        />
      </CardContent>
      <CardActions>
        {!editProduct && (
          <Button onClick={toggleEdit} size="small">
            Edit Product
          </Button>
        )}
        {editProduct && (
          <Button onClick={save} size="small">
            Save Product
          </Button>
        )}
        <Button onClick={() => handleDelete(product)} size="small">
          Delete Product
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
