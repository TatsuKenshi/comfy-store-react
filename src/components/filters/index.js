import React, { useState } from "react";
import { useFilterContext } from "../../context/filter-context/FilterContext";
import { getUniqueValues, formatPrice } from "../../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const [visibleOnSmallScreen, setVisibleOnSmallScreen] = useState("invisible");

  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  console.log(shipping);

  // get unique category, company, and color values
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <section className="mb-4 lg:mb-0">
      <div className="pt-1">
        <h3 className="text-xl">Filters</h3>
        <hr />
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* search input */}
        <div className="mt-4">
          <div>
            <h5 className="font-bold">Search</h5>
          </div>

          <div className="hidden lg:block">
            <input
              type="text"
              name="text"
              placeholder="type here..."
              value={text}
              className="w-[100%] px-2 text-lg"
              onChange={updateFilters}
            />
          </div>
        </div>
        {/* end of search input */}

        {/* categories */}
        <div className="mt-4">
          <div>
            <h5 className="font-bold">Category</h5>
          </div>

          <div className="hidden lg:block">
            {categories.map((cat, index) => {
              return (
                <button
                  key={index}
                  className={`${
                    category === cat.toLowerCase()
                      ? "w-full text-left my-1 capitalize text-yellow-800"
                      : "w-full text-left my-1 capitalize"
                  }`}
                  type="button"
                  name="category"
                  onClick={updateFilters}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
        {/* end of categories */}

        {/* companies */}
        <div className="mt-4">
          <div>
            <h5 className="font-bold">Company</h5>
          </div>

          <div className="hidden lg:block">
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="w-full"
            >
              {companies.map((comp, index) => {
                return (
                  <option key={index} value={comp}>
                    {comp}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {/* end of companies */}

        {/* colors */}
        <div className="mt-4">
          <div>
            <h5 className="font-bold">Color</h5>
          </div>

          <div className="hidden lg:block">
            {colors.map((col, index) => {
              if (col === "all") {
                return (
                  <button
                    key={index}
                    name="color"
                    onClick={updateFilters}
                    data-color="all"
                    className={`${
                      color === col
                        ? "text-left my-1 capitalize text-yellow-800 mr-2 capitalize text-lg"
                        : "text-left my-1 capitalize mr-2 capitalize text-lg"
                    }`}
                  >
                    all
                  </button>
                );
              }

              return (
                <button
                  key={index}
                  name="color"
                  data-color={col}
                  className="h-6 w-6 mr-2 rounded-full"
                  style={{ background: col }}
                  onClick={updateFilters}
                >
                  {color === col.toLowerCase() ? (
                    <FaCheck className="text-white h-6 w-6" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
        {/* end of colors */}

        {/* price */}
        <div className="mt-4">
          <div>
            <h5 className="font-bold">Price</h5>
          </div>

          <div className="hidden lg:block">
            <p className="text-yellow-900">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
              className=" w-[100%] sm:w-[50%] lg:w-[100%]"
            />
          </div>
        </div>
        {/* end of price */}

        {/* shipping */}
        <div className="mt-4">
          <div>
            <h5 className="font-bold">Shipping Options</h5>
          </div>

          <div className="hidden lg:block">
            <label htmlFor="shipping" className="mr-12 capitalize">
              free shipping
            </label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
        </div>
        {/* end of shipping */}
      </form>

      <div>
        <button
          className="mt-4 p-2 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </section>
  );
};

export default Filters;
