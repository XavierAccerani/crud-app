import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch, useSelector } from "react-redux";

import {
  addProduct,
  changeNewProductProp,
  addCategoryToNewProduct,
  resetProduct,
  editProduct,
  deleteProduct,
} from "../../productSlice";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [edition, setEdition] = React.useState(false);

  const toggleEdition = () => {
    if (edition) {
      dispatch(editProduct(createEditedProductObject()));
    }
    setEdition(!edition);
  };

  const newProduct = useSelector((state) => state.product.newProduct);
  const dispatch = useDispatch();

  const [editedId, setEditedId] = React.useState(props.id);
  const [editedTitle, setEditedTitle] = React.useState(props.title);
  const [editedDescription, setEditedDescription] = React.useState(
    props.description
  );
  const [editedPrice, setEditedPrice] = React.useState(props.price);
  const [editedCategory, setEditedCategory] = React.useState(props.category);

  const createEditedProductObject = () => {
    let obj = {
      id: editedId,
      title: editedTitle,
      description: editedDescription,
      price: editedPrice,
      category: editedCategory,
    };
    return obj;
  };

  const handleDelete = () => {
    dispatch(deleteProduct(createEditedProductObject()));
  };

  return (
    <>
      {!edition && (
        <Card
          id={props.id}
          sx={{
            maxWidth: 345,
            minWidth: 345,
            marginTop: "5%",
            marginBottom: "5%",
            backgroundColor: "#F8F8F8",
          }}
        >
          <CardHeader
            // avatar={
            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            //     R
            //   </Avatar>
            // }
            action={
              <IconButton onClick={toggleEdition} aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={props.title}
            // subheader="September 14, 2016"
          />
          {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              `Description: {props.description}`
            </Typography>
            {/* <label>
          Deescription:
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
        </label> */}
          </CardContent>
          <CardActions disableSpacing>
            {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Price: {props.price}</Typography>
              <Typography>Category: {props.category}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      )}
      {edition && (
        <Card
          id={editedId}
          sx={{
            maxWidth: 345,
            minWidth: 345,
            marginTop: "5%",
            marginBottom: "5%",
            backgroundColor: "#F8F8F8",
          }}
        >
          <CardHeader
            action={
              <IconButton onClick={toggleEdition} aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={
              <label>
                Title:
                <input
                  value={editedTitle}
                  onChange={(e) => {
                    setEditedTitle(e.target.value);
                  }}
                ></input>
              </label>
            }
          />

          <CardContent>
            <label>
              Description:
              <input
                value={editedDescription}
                onChange={(e) => {
                  setEditedDescription(e.target.value);
                }}
              ></input>
            </label>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <label>
                Price:
                <input
                  value={editedPrice}
                  onChange={(e) => {
                    setEditedPrice(e.target.value);
                  }}
                ></input>
              </label>
              <label>
                Category:
                <input
                  value={editedCategory}
                  onChange={(e) => {
                    setEditedCategory(e.target.value);
                  }}
                ></input>
              </label>
            </CardContent>
          </Collapse>
          <IconButton onClick={handleDelete} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Card>
      )}
    </>
  );
}
