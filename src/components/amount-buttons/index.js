import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ amount, increaseAmount, decreaseAmount }) => {
  return (
    <div className="flex mt-4 mb-6">
      <button onClick={decreaseAmount} className="mr-8">
        <FaMinus />
      </button>

      <h4 className="mr-8 text-xl font-bold">{amount}</h4>

      <button onClick={increaseAmount}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
