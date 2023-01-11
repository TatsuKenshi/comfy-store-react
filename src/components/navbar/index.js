import React from "react";
import logo from "../../img/logo.svg";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { links } from "../../utils/constants";
import CartButtons from "../cart-buttons/index";
import { useProductsContext } from "../../context/products-context/ProductsContext";
import { useUserContext } from "../../context/user-context/UserContext";

const Navbar = () => {
  const { openSidebar } = useProductsContext();

  const { myUser } = useUserContext();

  return (
    <nav className="flex justify-between lg:justify-around items-center py-1 bg-amber-100">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <div className="hidden lg:flex">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li
              key={id}
              className="list-none mx-4 hover:text-yellow-800 font-light"
            >
              <NavLink to={url} className="capitalize text-xl">
                {text}
              </NavLink>
            </li>
          );
        })}
        {myUser && (
          <li className="list-none mx-4 hover:text-yellow-800 font-light">
            <NavLink to="/checkout" className="capitalize text-xl">
              Checkout
            </NavLink>
          </li>
        )}
      </div>
      <div className="hidden lg:flex">
        <CartButtons />
      </div>

      <button
        type="button"
        className="p-1 mr-4 lg:hidden"
        onClick={openSidebar}
      >
        <FaBars className="fill-yellow-800 h-8 w-8" />
      </button>
    </nav>
  );
};

export default Navbar;
