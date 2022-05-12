import "./App.css";
import React from "react";

import ProductList from "./productList";
import Header from "./header";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
