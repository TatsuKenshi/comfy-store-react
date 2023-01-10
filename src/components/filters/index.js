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
                        ? "text-left my-1 capitalize text-yellow-800 mr-1 capitalize text-lg font-bold"
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
      </form>
    </section>
  );
};

export default Filters;
