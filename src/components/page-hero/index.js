import React from "react";
import { Link } from "react-router-dom";
import { capitalizeTitle } from "../../utils/helpers";

const PageHero = ({ title, product }) => {
  return (
    <section className="flex h-40 items-center bg-slate-100">
      <div className="w-[900px] mx-auto text-left">
        <h3 className="text-xl pl-8">
          <Link to="/" className="hover:text-yellow-800">
            Home
          </Link>{" "}
          {product && (
            <Link to="/products" className="hover:text-yellow-800">
              / Products{" "}
            </Link>
          )}
          / {title && capitalizeTitle(title)}
        </h3>
      </div>
    </section>
  );
};

export default PageHero;
