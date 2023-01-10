import React from "react";
import { useCartContext } from "../../context/cart-context/CartContext";
import { Link } from "react-router-dom";
import CartColumns from "../cart-columns/index";
import CartItem from "../cart-item/index";
import CartTotals from "../cart-totals/index";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <div>
      <CartColumns />

      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <hr />

      <div className="flex justify-between my-8">
        <button>
          <Link
            to="/products"
            className="p-2 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
          >
            Shop More
          </Link>
        </button>

        <button className="my-4" onClick={clearCart}>
          <Link
            to="/checkout"
            className="p-2 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
          >
            Clear Cart
          </Link>
        </button>
      </div>

      <div>
        <CartTotals />
      </div>
    </div>
  );
};

export default CartContent;
