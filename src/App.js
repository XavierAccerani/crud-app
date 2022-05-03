import logo from "./logo.svg";
import "./App.css";
import ProductReviewCard from "./components/productCard";
import NewProductCard from "./components/newProduct";
import Header from "./components/header";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addProduct, toggleShowNewProductForm } from "./productSlice";

function App() {
  const productList = useSelector((state) => {
    // console.log("state dans app: ", state);
    return state.product.productsList;
  });
  const showNewProductForm = useSelector(
    (state) => state.product.showNewProductForm
  );
  const dispatch = useDispatch();

  const showPropIdDuBouton = (e) => {
    console.log(e.target.id); // pour recuperer la prop id du bouton
  };

  return (
    <div className="App">
      <h1>Products Listing</h1>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          // alignContent: "space-around",
        }}
      >
        {productList &&
          productList.map((product, i) => {
            console.log(`product ${i} :`, product);
            console.log("productList: ", productList);
            return (
              <div id={product.id} style={{}}>
                <ProductReviewCard
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  category={product.category}
                />
              </div>
            );
          })}
      </div>

      <button id="toto" onClick={() => dispatch(toggleShowNewProductForm())}>
        Ajouter un nouveau produit
      </button>

      {showNewProductForm && <NewProductCard />}

      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
