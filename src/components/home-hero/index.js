import React from "react";
import { NavLink } from "react-router-dom";
import heroBg from "../../img/hero-bcg.jpeg";
import heroBg2 from "../../img/hero-bcg-2.jpeg";

const HomeHero = () => {
  return (
    <section className="bg-white">
      <article>
        <h1 className="text-3xl">
          Design Your <br /> Comfort Zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          magnam quo vitae voluptas fugiat est, architecto nam at atque odit
          nesciunt voluptates, tenetur eveniet magni! Possimus tempore placeat,
          natus sint velit temporibus, impedit aliquam ab quae corrupti
          praesentium sit ex facere rem totam, nostrum repudiandae asperiores
          reprehenderit veniam id saepe.
        </p>
        <NavLink
          to="/products"
          className="p-1 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
        >
          Shop Now
        </NavLink>
      </article>
      <article>
        <img
          src={heroBg}
          alt="hero-main"
          className="max-w-[600px] max-h-[400px] w-[600px]"
        />
        <img
          src={heroBg2}
          alt="hero-accent"
          className="max-w-[200px] max-h-[150px] w-[200px]"
        />
      </article>
    </section>
  );
};

export default HomeHero;
