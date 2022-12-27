import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../../context/products-context/ProductsContext";
import { single_product_url as url } from "../../utils/constants";
import { formatPrice } from "../../utils/helpers";
// import {
//   Loading,
//   Error,
//   ProductImages,
//   AddToCart,
//   Stars,
//   PageHero,
// } from "../components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  return <section>Single Product</section>;
};

export default SingleProductPage;
