import React from "react";
import PageHero from "../../components/page-hero";
import Filters from "../../components/filters";
import Sort from "../../components/sort";
import ProductsList from "../../components/products-list";

const Products = () => {
  return (
    <section className="bg-white">
      <PageHero title="Products" />

      <div className="max-w-[900px] mx-auto py-16 px-8 lg:py-16 lg:flex justify-between bg-pink-500">
        <aside className="lg:w-[23%] bg-teal-500">
          <Filters />
        </aside>
        <article className="lg:w-[73%] bg-fuchsia-200">
          <div className="bg-amber-200 mb-4">
            <Sort />
          </div>
          <div className="bg-green-200">
            <ProductsList />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Products;
