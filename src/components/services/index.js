import React from "react";
import { services } from "../../utils/constants";

const Services = () => {
  return (
    <section className="w-full py-8 lg:max-w-[900px] lg:mx-auto px-8 bg-white">
      <div>
        <article className="lg:flex">
          <h3 className="text-2xl mb-4 lg:w-[50%]">
            Premium Furniture <br /> Built With Love
          </h3>
          <p className="lg:w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            repellendus! Minus omnis, optio facere nam iure tempora nesciunt?
            Voluptates, voluptatum quas nam ut sequi iure harum modi totam illo
            magnam.
          </p>
        </article>
        <div className="lg:flex lg:justify-between lg:w-full lg:max-w-[900px] mt-8">
          {services.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <article
                key={id}
                className="flex flex-wrap justify-center w-full bg-amber-100 mx-auto mb-8 h-max p-4 lg:w-[30%] text-center rounded-md lg:mx-0"
              >
                <span className="bg-amber-50 p-4 mx-auto rounded-full">
                  {icon}
                </span>
                <h4 className="w-full my-2">{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
