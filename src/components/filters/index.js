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

  const [expandForm, setExpandForm] = useState("hidden");
  const [showSearch, setShowSearch] = useState("hidden");
  const [showCategory, setShowCategory] = useState("hidden");
  const [showCompany, setShowCompany] = useState("hidden");
  const [showColor, setShowColor] = useState("hidden");
  const [showPrice, setShowPrice] = useState("hidden");
  const [showShipping, setShowShipping] = useState("hidden");

  // get unique category, company, and color values
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <section className="mb-4 lg:mb-0">
      <div className="pt-1 flex justify-between">
        <h3 className="text-xl">Filters</h3>
        <button
          className="capitalize lg:invisible"
          onClick={() => {
            if (expandForm === "hidden") {
              setExpandForm("");
            } else {
              setExpandForm("hidden");
              setShowSearch("hidden");
              setShowCategory("hidden");
              setShowCompany("hidden");
              setShowColor("hidden");
              setShowPrice("hidden");
              setShowShipping("hidden");
            }
          }}
        >
          {expandForm ? "expand" : "collapse"}
        </button>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className={`${expandForm} lg:block`}
      >
        {/* search input */}
        <div className="mt-4">
          <div className="flex justify-between">
            <h5 className="font-bold">Search</h5>
            <button
              className="capitalize lg:invisible"
              onClick={() => {
                if (showSearch === "hidden") {
                  setShowSearch("");
                } else {
                  setShowSearch("hidden");
                }
              }}
            >
              {showSearch ? "show filter" : "hide filter"}
            </button>
          </div>

          <div className={`${showSearch} lg:block`}>
            <input
              type="text"
              name="text"
              placeholder="type here..."
              value={text}
              className="w-[100%] text-lg"
              onChange={updateFilters}
            />
          </div>
        </div>
        {/* end of search input */}

        {/* categories */}
        <div className="mt-4">
          <div className="flex justify-between">
            <h5 className="font-bold">Category</h5>
            <button
              className="capitalize lg:invisible"
              onClick={() => {
                if (showCategory === "hidden") {
                  setShowCategory("");
                } else {
                  setShowCategory("hidden");
                }
              }}
            >
              {showCategory ? "show filter" : "hide filter"}
            </button>
          </div>

          <div className={`${showCategory} lg:block`}>
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
          <div className="flex justify-between">
            <h5 className="font-bold">Company</h5>
            <button
              className="capitalize lg:invisible"
              onClick={() => {
                if (showCompany === "hidden") {
                  setShowCompany("");
                } else {
                  setShowCompany("hidden");
                }
              }}
            >
              {showCompany ? "show filter" : "hide filter"}
            </button>
          </div>

          <div className={`${showCompany} lg:block`}>
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
          <div className="flex justify-between">
            <h5 className="font-bold">Color</h5>
            <button
              className="capitalize lg:invisible"
              onClick={() => {
                if (showColor === "hidden") {
                  setShowColor("");
                } else {
                  setShowColor("hidden");
                }
              }}
            >
              {showColor ? "show filter" : "hide filter"}
            </button>
          </div>

          <div className={`${showColor} lg:block`}>
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
          <div className="flex justify-between">
            <h5 className="font-bold">Price</h5>
            <button
              className="capitalize lg:invisible"
              onClick={() => {
                if (showPrice === "hidden") {
                  setShowPrice("");
                } else {
                  setShowPrice("hidden");
                }
              }}
            >
              {showPrice ? "show filter" : "hide filter"}
            </button>
          </div>

          <div className={`${showPrice} lg:block`}>
            <p className="text-yellow-900">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
              className="w-[100%]"
            />
          </div>
        </div>
        {/* end of price */}

        {/* shipping */}
        <div className="mt-4">
          <div className="flex justify-between">
            <h5 className="font-bold">Shipping Options</h5>
            <button
              className="capitalize lg:invisible"
              onClick={() => {
                if (showShipping === "hidden") {
                  setShowShipping("");
                } else {
                  setShowShipping("hidden");
                }
              }}
            >
              {showShipping ? "show filter" : "hide filter"}
            </button>
          </div>

          <div className={`${showShipping} lg:block`}>
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

      <div className={`${expandForm} lg:block`}>
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
