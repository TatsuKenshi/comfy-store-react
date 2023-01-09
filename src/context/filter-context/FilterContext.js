import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../../reducers/filter-reducer/FilterReducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../../Actions";
import { useProductsContext } from "../../context/products-context/ProductsContext";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // get all products from the Products context
  const { products } = useProductsContext();

  // load all products into the base filter context array
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

// custom hook function - move it out
export const useFilterContext = () => {
  return useContext(FilterContext);
};
