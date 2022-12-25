import React from "react";
import FeaturedProducts from "../../components/featured-products";
import Services from "../../components/services";
import HomeHero from "../../components/home-hero";
import ContactUs from "../../components/contact-section";

const Home = () => {
  return (
    <main className="w-full bg-white">
      <HomeHero />
      <FeaturedProducts />
      <Services />
      <ContactUs />
    </main>
  );
};

export default Home;
