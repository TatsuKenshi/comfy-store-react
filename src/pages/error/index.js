import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-screen h-screen bg-white text-center py-32">
      <h1 className="text-9xl">404</h1>
      <p className="text-2xl mt-8">Sorry, the page doesn't exist.</p>
      <button className="mt-8 p-1 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900">
        <NavLink to="/">Back Home</NavLink>
      </button>
    </div>
  );
};

export default Error;
