import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section className="flex flex-wrap justify-center items-center w-full p-8 lg:max-w-[900px] lg:mx-auto lg:px-16 bg-slate-100 mb-16">
      <article className="lg:flex">
        <h3 className="text-2xl mb-4 lg:w-[50%]">
          Custom Shop <br /> Built Only For You
        </h3>
        <p className="lg:w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          repellendus! Minus omnis, optio facere nam iure tempora nesciunt?
          Voluptates, voluptatum quas nam ut sequi iure harum modi totam illo
          magnam.
        </p>
      </article>
      <div className="w-full pt-8 text-center">
        <button>
          <Link
            to="/contact"
            className="p-2 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
          >
            Contact Us
          </Link>
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
