import React from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <section className="h-40 flex justify-center items-center bg-slate-100">
      <button>
        <Link
          to="/products"
          className="p-2 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
        >
          All Products
        </Link>
      </button>
    </section>
  );
};

export default FeaturedProducts;
