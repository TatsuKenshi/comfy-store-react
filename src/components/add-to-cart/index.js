import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../../context/cart-context/CartContext";
import AmountButtons from "../amount-buttons";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    setAmount((previousAmount) => {
      let newAmount = previousAmount + 1;
      if (newAmount > stock) {
        newAmount = stock;
      }
      return newAmount;
    });
  };

  const decreaseAmount = () => {
    setAmount((previousAmount) => {
      let newAmount = previousAmount - 1;
      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  return (
    <div>
      <div className="flex items-center">
        <span className="text-lg font-bold mr-[50px]">Colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className={`w-4 h-4 rounded-full mx-1 text-center ${
                  mainColor === color ? "opacity-100" : "opacity-60"
                }`}
                style={{ background: color }}
                onClick={() => {
                  setMainColor(color);
                }}
              >
                {mainColor === color ? (
                  <FaCheck className="text-white text-center" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <AmountButtons
          amount={amount}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />
        <button>
          <Link
            to="/cart"
            className="p-2 rounded-md border border-solid border-stone-900 text-stone-900 bg-amber-100 hover:text-amber-100 hover:bg-stone-900"
          >
            Add to Cart
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
