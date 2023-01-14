import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../../components/page-hero";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [messageSent, setMessageSent] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    delayError: 500,
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  return (
    <section>
      <PageHero title={"Contact"} />

      <div className="max-w-[900px] mx-auto py-16 px-8 lg:py-16 bg-yellow-100 rounded-md mt-16 mb-32">
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            Welcome to the Contact page!
          </h2>
          <p>
            If you have any questions or suggestions regarding our products,
            prices, and delivery, or would like to order something special from
            our custom shop, please shoot us an email! We'd love to hear from
            you!
          </p>
        </div>

        <form
          onSubmit={handleSubmit((data) => {
            setMessageSent(
              "Your message has been sent. You will be redirected to the home page shortly."
            );

            setTimeout(() => {
              setMessageSent("");
              navigate("/");
            }, 5000);
          })}
        >
          <div className="p-4">
            <div>
              <label htmlFor="fullName" className="font-bold">
                Your Name
              </label>
            </div>
            <div>
              <input
                {...register("fullName", {
                  required: "This field is required",
                  minLength: { value: 4, message: "The name is too short" },
                })}
                id="fullName"
                className="w-[100%] lg:w-[50%] h-8 mt-2 pl-1"
              />
            </div>
            <p>{errors?.fullName?.message}</p>
          </div>

          <div className="p-4">
            <div>
              <label htmlFor="email" className="font-bold">
                Email
              </label>
            </div>
            <div>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                aria-invalid={errors.mail ? "true" : "false"}
                className="w-[100%] lg:w-[50%] h-8 mt-2 pl-1"
              />
            </div>
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}
          </div>

          <div className="p-4">
            <div>
              <label htmlFor="message" className="font-bold">
                Your Message
              </label>
            </div>
            <div>
              <textarea
                rows="4"
                cols="50"
                {...register("message", {
                  required: "This field is required",
                  minLength: { value: 4, message: "The name is too short" },
                })}
                id="message"
                className="w-[100%] lg:w-[50%] h-24 mt-2 pl-1"
              />
            </div>
            <p>{errors?.message?.message}</p>
          </div>

          <div className="p-4">
            <input
              type="submit"
              className="p-2 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
              disabled={!isValid}
            />
          </div>

          <div>
            <p>{messageSent}</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
