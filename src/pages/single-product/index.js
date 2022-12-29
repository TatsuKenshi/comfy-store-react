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
  const params = useParams();
  let navigate = useNavigate();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();
  console.log(product);

  // fetching useEffect
  useEffect(() => {
    fetchSingleProduct(`${url}${params.id.slice(1)}`);
  }, []);

  // error redirection useEffect
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error, navigate]);

  if (loading) {
    return (
      <section>
        <Loading />
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <ErrorComponent />
      </section>
    );
  }

  return (
    <section>
      <PageHero></PageHero>
      <h2>{params.id.slice(1)}</h2>
      {/* <Stars></Stars> */}
      {/* <ProductImages></ProductImages> */}
      {/* <AddToCart></AddToCart> */}
    </section>
  );
};

export default SingleProductPage;
