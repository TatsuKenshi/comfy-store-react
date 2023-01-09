import React from "react";
import { useFilterContext } from "../../context/filter-context/FilterContext";
import GridView from "../grid-view/index.js";
import ListView from "../list-view/index.js";

const ProductsList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return (
      <section className="text-center pt-48 pb-96">
        <h5 className="text-3xl font-bold text-red-500">
          Sorry, no products match your search...
        </h5>
      </section>
    );
  }

  if (!grid_view) {
    return (
      <section>
        <ListView products={products} />
      </section>
    );
  }

  return (
    <section>
      <GridView products={products} />
    </section>
  );
};

export default ProductsList;
