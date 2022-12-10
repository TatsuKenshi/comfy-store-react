import React from "react";
import logo from "../../img/logo.svg";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { links } from "../../utils/constants";
import CartButtons from "../cart-buttons/index";
import { useProductsContext } from "../../context/products-context/ProductsContext";
import { useUserContext } from "../../context/user-context/UserContext";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center py-1 bg-amber-100">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <div className="flex ">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li
              key={id}
              className="list-none mx-4 hover:text-amber-700 font-light"
            >
              <NavLink to={url} className="capitalize text-xl">
                {text}
              </NavLink>
            </li>
          );
        })}
      </div>

      <CartButtons />

      <button type="button" className="p-1 hidden">
        <FaBars className="fill-amber-700 h-8 w-8" />
      </button>
    </div>
  );
};

export default Navbar;
