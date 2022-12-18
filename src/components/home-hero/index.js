import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../../img/hero-bcg.jpeg";
import heroBg2 from "../../img/hero-bcg-2.jpeg";

const HomeHero = () => {
  return (
    <section className="bg-white pt-32 pb-16 mx-auto max-w-[900px] lg:flex lg:px-8 lg:justify-evenly">
      <article className="mb-4 px-8 lg:w-6/12 lg:pt-24">
        <h1 className="text-3xl">
          Design Your <br /> Comfort Zone
        </h1>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          magnam quo vitae voluptas fugiat est, architecto nam at atque odit
          nesciunt voluptates, tenetur eveniet magni! Possimus tempore placeat,
          natus sint velit temporibus, impedit aliquam ab quae corrupti
          praesentium sit ex facere rem totam, nostrum repudiandae asperiores
          reprehenderit veniam id saepe.
        </p>
        <button>
          <Link
            to="/products"
            className="p-2 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
          >
            Shop Now
          </Link>
        </button>
      </article>
      <article className="relative mt-8 px-8 z-0">
        <img
          src={heroBg}
          alt="hero-main"
          className="max-w-[900px] max-h-[500px] h-full w-10/12 mx-auto"
        />
        <img
          src={heroBg2}
          alt="hero-accent"
          className="max-w-[250px] max-h-[180px] w-[150px] absolute bottom-0 left-0 ml-8"
        />
      </article>
    </section>
  );
};

export default HomeHero;
