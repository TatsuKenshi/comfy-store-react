import React from "react";
import PageHero from "../../components/page-hero";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      developer: "yes",
    },
  });

  console.log("errors", errors);

  return (
    <section className="bg-pink-500">
      <PageHero title={"Contact"} />

      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="p-4">
          <div>
            <label htmlFor="firstName">First Name: </label>
          </div>
          <div>
            <input
              {...register("firstName", { required: "This field is required" })}
              id="firstName"
            />
          </div>
          <p>{errors?.firstName?.message}</p>
        </div>

        <div className="p-4">
          <div>
            <label htmlFor="lastName">Last Name: </label>
          </div>
          <div>
            <input
              {...register("lastName", {
                required: "This field is required",
                maxLength: { value: 5, message: "last name too long" },
              })}
              id="lastName"
            />
          </div>
          <p>{errors?.lastName?.message}</p>
        </div>

        <div className="p-4">
          <div>
            <label htmlFor="age">Age: </label>
          </div>
          <div>
            <input
              type="number"
              {...register("age", { valueAsNumber: true })}
              id="age"
            />
          </div>
        </div>

        <div className="p-4">
          <div>
            <label htmlFor="gender">Your Gender: </label>
          </div>
          <div>
            <select {...register("gender")} id="gender">
              <option value="">Select...</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </div>
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
            disabled={!isValid}
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
