import React from "react";
import logo from "../../img/logo.svg";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { links } from "../../utils/constants";
import CartButtons from "../cart-buttons/index";
import { useProductsContext } from "../../context/products-context/ProductsContext";
import { useUserContext } from "../../context/user-context/UserContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <>
      {isSidebarOpen ? (
        <aside className="z-100 fixed top-0 right-0 h-screen w-screen bg-amber-100 lg:hidden">
          <div className="flex justify-between">
            <img src={logo} alt="logo" />
            <button
              type="button"
              className="mr-4 text-red-800"
              onClick={closeSidebar}
            >
              <FaTimes className="w-8 h-8" />
            </button>
          </div>

          <div className="text-center pt-8">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li
                  key={id}
                  className="list-none hover:text-yellow-800 font-light mt-8"
                >
                  <NavLink
                    to={url}
                    onClick={closeSidebar}
                    className="capitalize text-xl"
                  >
                    {text}
                  </NavLink>
                </li>
              );
            })}

            <div className="mt-8">
              <NavLink
                to="/checkout"
                onClick={closeSidebar}
                className="hover:text-yellow-800 font-light text-xl"
              >
                Checkout
              </NavLink>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <CartButtons />
          </div>
        </aside>
      ) : null}
    </>
  );
};

export default Sidebar;
