import React from "react";

const CartColumns = () => {
  return (
    <div className="hidden md:block mb-4">
      <div className="flex">
        <h5 className="w-[22.5%] capitalize text-lg">item</h5>
        <h5 className="w-[22.5%] capitalize text-lg">price</h5>
        <h5 className="w-[22.5%] capitalize text-lg">quantity</h5>
        <h5 className="w-[22.5%] capitalize text-lg">subtotal</h5>
        <span className="w-[10%] capitalize text-lg text-right">remove</span>
      </div>
      <hr />
    </div>
  );
};

export default CartColumns;
