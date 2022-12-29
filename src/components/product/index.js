import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import { FaSearch } from "react-icons/fa";

const Product = ({ image, name, price, id }) => {
  return (
    <article className="w-[100%] md:w-[30%] my-2">
      <div className="relative w-inherit h-max">
        <img
          src={image}
          alt={name}
          className="w-full h-[45vw] md:h-[130px] lg:h-[150px]"
        />
        <Link
          to={`/products/:${id}`}
          className="absolute top-0 left-0 opacity-0 hover:opacity-100 py-[22%] px-[45.5%] md:py-[19%] md:px-[42%] lg:py-[24%] lg:px-[42%]"
        >
          <div className="p-2 bg-yellow-50 rounded-full">
            <FaSearch className="h-6 w-6 text-black font-black" />
          </div>
        </Link>
      </div>
      <footer className="flex justify-between">
        <h5 className="capitalize font-medium">{name}</h5>
        <p className="text-yellow-900">{formatPrice(price)}</p>
      </footer>
    </article>
  );
};

export default Product;
