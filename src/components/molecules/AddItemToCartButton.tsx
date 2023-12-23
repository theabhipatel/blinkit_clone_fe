import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const AddItemToCartButton = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncQty = () => {
    setQuantity((prev) => ++prev);
  };

  const handleDecQty = () => {
    if (quantity === 0) {
      setQuantity(0);
    } else {
      setQuantity((prev) => --prev);
    }
  };

  return (
    <>
      {quantity === 0 ? (
        <button
          onClick={handleIncQty}
          className="w-14 px-4 py-1 border border-primary rounded-md text-xs text-primary font-semibold bg-green-50 cursor-pointer"
        >
          ADD
        </button>
      ) : (
        <div className="bg-primary text-white flex justify-between items-center w-14 rounded-md ">
          <button onClick={handleDecQty} className=" px-[0.35rem] py-2 ">
            <FaMinus className="text-xxs h-full " />
          </button>
          <span className="text-xxs font-semibold">{quantity}</span>
          <button onClick={handleIncQty} className=" px-[0.35rem] py-2 ">
            <FaPlus className="text-xxs" />
          </button>
        </div>
      )}
    </>
  );
};

export default AddItemToCartButton;
