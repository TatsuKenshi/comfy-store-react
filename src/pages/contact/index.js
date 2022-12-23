import React from "react";
import PageHero from "../../components/page-hero";
import { useForm } from "react-hook-form";

let renderCount = 0;

const Contact = () => {
  renderCount++;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("errors", errors);

  return (
    <section>
      <PageHero title={"Contact"} />

      <h2 className="p-4 bg-pink-100">{renderCount}</h2>

      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="p-4">
          <label htmlFor="firstName">First Name: </label>
          <input
            {...register("firstName", { required: "This field is required" })}
            id="firstName"
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div className="p-4">
          <label htmlFor="lastName">Last Name: </label>
          <input
            {...register("lastName", {
              required: "This field is required",
              maxLength: { value: 5, message: "last name too long" },
            })}
            id="lastName"
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <div className="p-4">
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            {...register("age", { valueAsNumber: true })}
            id="age"
          />
        </div>

        <div className="p-4">
          <label htmlFor="gender"></label>
          <select {...register("gender")} id="gender">
            <option value="">Select...</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
        </div>

        <div className="p-4">
          <label htmlFor="developer">Are you a developer?</label>
          <input
            {...register("developer")}
            value="yes"
            type="checkbox"
            name="developer"
            id="developer"
            className="ml-4"
          />
        </div>

        <div className="p-4">
          <input
            type="submit"
            className="p-2 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
