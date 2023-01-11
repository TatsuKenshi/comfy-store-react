import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/products-context/ProductsContext";
import { useCartContext } from "../../context/cart-context/CartContext";
import { useUserContext } from "../../context/user-context/UserContext";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <div className="flex">
      <Link
        to="/cart"
        className="flex px-1 relative text-lg"
        onClick={closeSidebar}
      >
        Cart
        <span>
          <FaShoppingCart className="w-8 h-8 ml-1" />
        </span>
        <span className="bg-yellow-800 px-0.5 rounded-full text-white text-sm absolute top-0 left-14">
          {total_items}
        </span>
      </Link>
      {myUser ? (
        <button
          type="button"
          className="flex ml-1 text-lg"
          onClick={() => {
            logout({ returnTo: window.location.origin });
            clearCart();
          }}
        >
          Logout <FaUserMinus className="w-8 h-8 ml-1" />
        </button>
      ) : (
        <button
          type="button"
          className="flex ml-1 text-lg"
          onClick={loginWithRedirect}
        >
          Login <FaUserPlus className="w-8 h-8 ml-1" />
        </button>
      )}
    </div>
  );
};

export default CartButtons;
