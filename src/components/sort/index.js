import React from "react";
import { useFilterContext } from "../../context/filter-context/FilterContext";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
  } = useFilterContext();

  return (
    <section className="sm:flex items-center justify-between">
      <div className="flex mb-4 sm:mb-0 justify-between sm:justify-start">
        <div>
          <button
            className={`${
              grid_view
                ? "border border-solid border-black rounded-md text-white bg-black p-1 mr-2"
                : "border border-solid border-black rounded-md p-1 mr-2"
            } `}
            onClick={setGridView}
          >
            <BsFillGridFill />
          </button>

          <button
            className={`${
              grid_view
                ? "border border-solid border-black rounded-md p-1 mr-2"
                : "border border-solid border-black rounded-md text-white bg-black p-1 mr-2"
            } `}
            onClick={setListView}
          >
            <BsList />
          </button>
        </div>
        <p>{products.length} products found</p>
      </div>
      <div className="text-center">
        <form action="">
          <label htmlFor="sort">Sort by: </label>
          <select name="sort" id="sort">
            <option value="price-lowest">Price Lowest</option>
            <option value="price-highest">Price Highest</option>
            <option value="name-a">Name A-Z</option>
            <option value="name-z">Name Z-A</option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default Sort;
