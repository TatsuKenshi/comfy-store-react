import React from "react";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        const { id, image, name, price, description } = product;

        return (
          <article key={id} className="py-2 md:flex justify-between">
            <div className="w-[100%] md:w-[34%]">
              <img
                src={image}
                alt={name}
                className="w-[100%] h-[45vw] md:h-[160px]"
              />
            </div>
            <div className="w-[64%]">
              <h4>{name}</h4>
              <h5>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <button className="mt-2">
                <Link
                  to={`/products/${id}`}
                  className="p-2 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
                >
                  Details
                </Link>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListView;
