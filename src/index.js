import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/cart-context/CartContext";
import { FilterProvider } from "./context/filter-context/FilterContext";
import { ProductsProvider } from "./context/products-context/ProductsContext";
import { UserProvider } from "./context/user-context/UserContext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
