import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { addProduct } from "../productSlice";

function Header() {
  const dispatch = useDispatch();

  const [newProduct, setNewProduct] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    // console.log("e.target.name", e.target.name);
    // console.log("e.target.value", e.target.value);

    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function putId() {
    if (!newProduct.id) {
      setNewProduct((prevState) => ({
        ...prevState,
        ["id"]: uuidv4(),
      }));
    }
  }

  function handleSubmit() {
    dispatch(addProduct(newProduct));
    setNewProduct({ title: "", description: "", id: "" });
  }

  return (
    <header>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "40%",
          }}
        >
          <TextField
            onChange={handleChange}
            value={newProduct.title}
            onBlur={putId}
            id="title"
            name="title"
            label="Title"
            variant="filled"
          />
          <TextField
            onChange={handleChange}
            onBlur={putId}
            value={newProduct.description}
            id="description"
            name="description"
            label="Description"
            variant="filled"
          />
          <Button onClick={handleSubmit} variant="outlined">
            Add Product
          </Button>
        </Box>
      </Box>
    </header>
  );
}

export default Header;
