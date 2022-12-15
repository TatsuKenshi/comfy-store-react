import React from "react";
import { NavLink } from "react-router-dom";
import heroBg from "../../img/hero-bcg.jpeg";
import heroBg2 from "../../img/hero-bcg-2.jpeg";

const HomeHero = () => {
  return (
    <section>
      <article>
        <h1>
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
        <NavLink to="/products">Shop Now</NavLink>
      </article>
      <article>
        <img src={heroBg} alt="hero-main" />
        <img src={heroBg2} alt="hero-accent" />
      </article>
    </section>
  );
};

export default HomeHero;
