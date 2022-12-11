import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/products-context/ProductsContext";
import { useCartContext } from "../../context/cart-context/CartContext";
import { useUserContext } from "../../context/user-context/UserContext";

const CartButtons = () => {
  return (
    <div className="flex">
      <Link to="/cart" className="flex px-1 relative text-lg">
        Cart
        <span>
          <FaShoppingCart className="w-8 h-8 ml-1" />
        </span>
        <span className="bg-yellow-800 px-0.5 rounded-full text-white text-sm absolute top-0 left-14">
          12
        </span>
      </Link>
      <button type="button" className="flex ml-1 text-lg">
        Login <FaUserPlus className="w-8 h-8 ml-1" />
      </button>
    </div>
  );
};

export default CartButtons;
