import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/cart-context/CartContext";
import { FilterProvider } from "./context/filter-context/FilterContext";
import { ProductsProvider } from "./context/products-context/ProductsContext";
import { UserProvider } from "./context/user-context/UserContext";
import { Auth0Provider } from "@auth0/auth0-react";

// REACT_APP_AUTH0_DOMAIN=dev-n7f-c1rx.us.auth0.com
// REACT_APP_AUTH0_CLIENT_ID=gGSLUhA05o3OlyEyoXZQ06F9M6393Rzg

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-n7f-c1rx.us.auth0.com"
      clientId="gGSLUhA05o3OlyEyoXZQ06F9M6393Rzg"
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
