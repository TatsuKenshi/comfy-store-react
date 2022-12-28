import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useProductsContext } from "../../context/products-context/ProductsContext";
import { single_product_url as url } from "../../utils/constants";
import { formatPrice } from "../../utils/helpers";
import Loading from "../../components/loading";
import ErrorComponent from "../../components/error";
import ProductImages from "../../components/product-images";
import AddToCart from "../../components/add-to-cart";
import Stars from "../../components/stars";
import PageHero from "../../components/page-hero";

const SingleProductPage = () => {
  return (
    <section>
      <PageHero></PageHero>
      <Stars></Stars>
      <ProductImages></ProductImages>
      <AddToCart></AddToCart>
    </section>
  );
};

export default SingleProductPage;
