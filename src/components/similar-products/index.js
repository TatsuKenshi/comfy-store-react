import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/products-context/ProductsContext";
import Product from "../product";

const SimilarProducts = () => {
  const { similar_products: similarProducts } = useProductsContext();

  return (
    <section className="h-max py-8 px-8 lg:px-16 flex flex-wrap justify-center items-center bg-slate-100 lg:max-w-[900px] lg:mx-auto mb-32">
      <div className="w-full">
        <h2 className="text-3xl">Similar Products</h2>
        <div className="w-20 h-1 bg-yellow-900 mb-8"></div>
        <div className="flex flex-wrap justify-between">
          {similarProducts.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </div>
      <div className="w-full text-center py-4">
        <button>
          <Link
            to="/products"
            className="p-2 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
          >
            All Products
          </Link>
        </button>
      </div>
    </section>
  );
};

export default SimilarProducts;
