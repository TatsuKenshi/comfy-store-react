import React from "react";
import { useCartContext } from "../../context/cart-context/CartContext";
import { useUserContext } from "../../context/user-context/UserContext";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <div className="text-right">
      <article>
        <h5 className="font-bold text-lg mt-2 capitalize">
          subtotal : <span>{formatPrice(total_amount)}</span>
        </h5>

        <p className="text-lg mt-2 capitalize">
          shipping fee : <span>{formatPrice(shipping_fee)}</span>
        </p>

        <hr className="mt-2" />

        <h4 className="font-bold text-xl capitalize">
          order total : <span>{formatPrice(total_amount + shipping_fee)}</span>
        </h4>
      </article>

      {myUser ? (
        <div className="mt-8 mb-24">
          <button>
            <Link
              to="/checkout"
              className="p-2 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
            >
              Checkout
            </Link>
          </button>
        </div>
      ) : (
        <div className="mt-8 mb-24">
          <button
            type="button"
            className="p-2 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
            onClick={loginWithRedirect}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default CartTotals;
