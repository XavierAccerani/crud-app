import React from "react";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { TextField } from "@mui/material";

function ShowOrEditProductInfo({ product, edit, setEditedProduct }) {
  const handleChange = (e) => {
    // console.log("e.target.name", e.target.name);
    // console.log("e.target.value", e.target.value);

    const { name, value } = e.target;
    setEditedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      {!edit && (
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography
            style={{ wordWrap: "break-word" }}
            variant="body2"
            color="text.secondary"
          >
            {product.description}
          </Typography>
        </CardContent>
      )}
      {edit && (
        <CardContent>
          <TextField
            name="title"
            value={product.title}
            onChange={handleChange}
            id="standard-basic"
            label="Title"
            variant="standard"
          />
          <TextField
            name="description"
            value={product.description}
            onChange={handleChange}
            id="standard-basic"
            label="Description"
            variant="standard"
            multiline={true}
          />
        </CardContent>
      )}
    </>
  );
}

export default ShowOrEditProductInfo;
