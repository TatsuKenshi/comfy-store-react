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

const initialState = {};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  return (
    <FilterContext.Provider value="filter context">
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
