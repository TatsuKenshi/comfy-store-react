import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../../context/cart-context/CartContext";
import AmountButtons from "../amount-buttons";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);

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
      <div></div>
    </div>
  );
};

export default AddToCart;
