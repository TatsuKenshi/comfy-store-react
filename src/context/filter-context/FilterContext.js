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
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    cagetory: "all",
    colors: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    free_shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  // get all products from the Products context
  const { products } = useProductsContext();

  // useReducer setup
  const [state, dispatch] = useReducer(reducer, initialState);

  // load all products into the base filter context array
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  // sort displayed products
  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort]);

  // grid view and list view functions
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  // sort function
  const updateSort = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch({ type: UPDATE_SORT, payload: value });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// custom hook function - move it out
export const useFilterContext = () => {
  return useContext(FilterContext);
};
