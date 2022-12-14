import React from "react";
import PageHero from "../../components/page-hero/index";
import hero from "../../img/hero-bcg.jpeg";

const About = () => {
  return (
    <main className="w-screen h-max bg-white">
      <PageHero title="About" />
      <section className="flex flex-wrap max-w-[500px] mx-auto px-8 py-16 min-h-[700px] lg:max-w-[900px]">
        <div className="p-2 h-max w-6/6 lg:w-3/6">
          <img src={hero} alt="hero" />
        </div>
        <article className="p-2 w-6/6 lg: w-3/6 mt-12 lg:mt-0">
          <div className="w-6/6">
            <h2 className="text-3xl mb-2 font-semibold">Our Story</h2>
            <div className="w-20 h-1 bg-yellow-900 mb-8"></div>
            <p className="w-[200%] lg:w-[100%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              possimus corporis quos fugiat animi quasi, accusamus
              exercitationem ullam veniam commodi quisquam neque numquam.
              Exercitationem inventore officiis quaerat eos enim accusamus
              minima tenetur architecto quas, corporis nemo labore id a
              provident libero reiciendis omnis placeat. Earum quibusdam
              doloremque totam consequatur quis!
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default About;
