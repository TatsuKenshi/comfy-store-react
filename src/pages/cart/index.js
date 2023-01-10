import React from "react";
import { useCartContext } from "../../context/cart-context/CartContext";
import { Link } from "react-router-dom";
import CartContent from "../../components/cart-content/index";
import PageHero from "../../components/page-hero/index";

const Cart = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <section className="bg-white">
        <PageHero title="Cart" />

        <div className="text-center pt-64 pb-96">
          <h2 className="text-3xl font-bold text-yellow-800">
            Your cart is empty...
          </h2>
          <button className="mt-8">
            <Link
              to="/products"
              className="p-2 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
            >
              Start Shopping
            </Link>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <PageHero title="Cart" />

      <div>
        <CartContent />
      </div>
    </section>
  );
};

export default Cart;
