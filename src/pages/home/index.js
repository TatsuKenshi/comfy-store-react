import React from "react";
import FeaturedProducts from "../../components/featured-products";
import Services from "../../components/services";
import HomeHero from "../../components/home-hero";

const Home = () => {
  return (
    <main className="w-screen bg-white">
      <HomeHero />
      <FeaturedProducts />
      <Services />
    </main>
  );
};

export default Home;
