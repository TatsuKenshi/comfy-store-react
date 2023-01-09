import React from "react";
import Product from "../product/index";

const GridView = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-between">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default GridView;
