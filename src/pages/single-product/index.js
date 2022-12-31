import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useProductsContext } from "../../context/products-context/ProductsContext";
import { single_product_url as url } from "../../utils/constants";
import { capitalizeTitle, formatPrice } from "../../utils/helpers";
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

  // loading return
  if (loading) {
    return (
      <section className="bg-white">
        <Loading />
      </section>
    );
  }

  // error return
  if (error) {
    return (
      <section className="bg-white">
        <ErrorComponent />
      </section>
    );
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  // regular return
  return (
    <section className="bg-white">
      <PageHero title={name} product />

      <div className="max-w-[900px] mx-auto py-16 px-8 lg:py-16">
        <div className="mb-16">
          <button>
            <Link
              to="/products"
              className="p-2 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
            >
              Back to Products
            </Link>
          </button>
        </div>

        <div className="block lg:flex lg:justify-between">
          <div className="w-[100%] lg:w-[49%]">
            <ProductImages images={images}></ProductImages>
          </div>

          <article className="w-[100%] lg:w-[49%]">
            <h2>{name && capitalizeTitle(name)}</h2>
            <Stars></Stars>
            <h5>{price && formatPrice(price)}</h5>
            <p>{description}</p>
            <p>
              <span>Availability : </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p>
              <span>SKU : </span>
              {sku?.slice(1)}
            </p>
            <p>
              <span>Brand : </span>
              {company && capitalizeTitle(company)}
            </p>
            <hr />
            {stock > 0 && <AddToCart></AddToCart>}
          </article>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
