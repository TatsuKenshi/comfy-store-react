import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/products-context/ProductsContext";
import { useCartContext } from "../../context/cart-context/CartContext";
import { useUserContext } from "../../context/user-context/UserContext";

const CartButtons = () => {
  return (
    <div className="flex">
      <Link to="/cart" className="flex px-1">
        Cart
        <span>
          <FaShoppingCart className="w-6 h-6 ml-1" />
        </span>
        <span className="bg-amber-700 px-0.5 rounded-full text-white">12</span>
      </Link>
      <button type="button" className="flex ml-1">
        Login <FaUserPlus className="w-6 h-6 ml-1" />
      </button>
    </div>
  );
};

export default CartButtons;
