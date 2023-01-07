import React from "react";
import { useProductsContext } from "../../context/products-context/ProductsContext";

const SimilarProducts = () => {
  const { similar_products: similarProducts } = useProductsContext();

  return (
    <div>
      <h2>Similar Products</h2>

      <div className="flex">
        {similarProducts.map((product, index) => {
          return (
            <article key={index} className="mr-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-[150px] h-[150px]"
              />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default SimilarProducts;
