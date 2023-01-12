import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/page-hero/index";
import StripeCheckout from "../../components/stripe-checkout";
import { useCartContext } from "../../context/cart-context/CartContext";

const Checkout = () => {
  const { cart } = useCartContext();

  return (
    <main className="bg-white min-h-[800px]">
      <PageHero title="Checkout" />
      <section>
        {cart.length < 1 ? (
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
        ) : (
          <section>
            <StripeCheckout />
          </section>
        )}
      </section>
    </main>
  );
};

export default Checkout;
