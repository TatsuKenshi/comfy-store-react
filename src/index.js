import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/cart-context/CartContext";
import { FilterProvider } from "./context/filter-context/FilterContext";
import { ProductsProvider } from "./context/products-context/ProductsContext";
import { UserProvider } from "./context/user-context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>
);
