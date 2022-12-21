import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./src/pages/PrivateRoute";
import Navbar from "./components/navbar/index";
import Sidebar from "./components/sidebar/index";
import Footer from "./components/footer/index";
import Home from "./pages/home";
import Error from "./pages/error/index";
import About from "./pages/about/index";
import Checkout from "./pages/checkout";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Products from "./pages/products";
import SingleProductPage from "./pages/single-product";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProductPage />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
