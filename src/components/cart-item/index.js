import React from "react";
import { formatPrice } from "../../utils/helpers";
import AmountButtons from "../amount-buttons/index";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/cart-context/CartContext";

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increaseAmount = () => {
    toggleAmount(id, "increase");
  };
  const decreaseAmount = () => {
    toggleAmount(id, "decrease");
  };

  return (
    <div className="flex py-4 justify-between">
      {/* item */}
      <div className="w-content md:w-[22.5%] flex justify-start">
        <div className="w-[70px] md:w-[40%] mr-2">
          <img src={image} alt={name} className="w-100% h-[70px]" />
        </div>

        <div>
          <div className="">
            <h5 className="font-bold capitalize">{name}</h5>
          </div>

          <div className="flex items-center">
            <div className="mr-2 font-bold capitalize">color : </div>
            <div
              className="h-4 w-4 rounded-full"
              style={{ background: color }}
            ></div>
          </div>

          <div className="md:hidden">
            <p className="text-yellow-800">{formatPrice(price)}</p>
          </div>
        </div>
      </div>
      {/* end of item */}

      {/* price */}
      <div className="hidden md:flex md:w-[22.5%] flex justify-start items-center">
        <p className="text-yellow-800 text-lg">{formatPrice(price)}</p>
      </div>
      {/* end of price */}

      {/* amount buttons */}
      <div className="w-[content] md:w-[22.5%] flex justify-start items-center">
        <AmountButtons
          amount={amount}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />
      </div>
      {/* end of amount buttons */}

      {/* subtotal */}
      <div className="md:w-[22.5%] justify-start items-center hidden md:flex">
        <h5 className="text-lg">{formatPrice(price * amount)}</h5>
      </div>
      {/* end of subtotal */}

      {/* remove button */}
      <div className="w-content md:w-[10%] flex justify-end items-center">
        <button className="mr-2" onClick={() => removeItem(id)}>
          <FaTrash className="h-6 w-6 text-red-700" />
        </button>
      </div>
      {/* end of remove button */}
    </div>
  );
};

export default CartItem;
