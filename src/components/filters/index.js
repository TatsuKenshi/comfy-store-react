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

  return (
    <section className="mb-4 lg:mb-0">
      <div className="pt-1">
        <h3 className="text-xl">Filters</h3>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* search input */}
        <div className="mt-4 text-center">
          <input
            type="text"
            name="text"
            placeholder="search products..."
            value={text}
            className="w-[100%] px-2"
            onChange={updateFilters}
          />
        </div>
        {/* end of search input */}
      </form>
    </section>
  );
};

export default Filters;
