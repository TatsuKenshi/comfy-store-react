import React from "react";
import { Link } from "react-router-dom";

const PageHero = ({ title }) => {
  return (
    <section className="flex h-40 items-center bg-slate-100 w-12/12">
      <h3 className="text-xl pl-24">
        <Link to="/" className="hover:text-yellow-800">
          Home
        </Link>{" "}
        / {title}
      </h3>
    </section>
  );
};

export default PageHero;
