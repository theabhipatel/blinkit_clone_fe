import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const ProductCard = () => {
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
      <div className="w-36 h-[14.2rem] border border-gray-300 rounded-md p-3 text-zinc-700 cursor-pointer">
        <div className="h-[50%] flex justify-center items-center">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/329500a.jpg?ts=1687949315"
            alt="product cart"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-12 px-[2px] py-[1px]  flex  items-center bg-gray-100 rounded-sm">
          <img src="../../public/timer.avif" alt="timer" className="h-3" />
          <span className="text-[8px] font-bold ">9 MINS</span>
        </div>
        <div className="mt-2 h-[3.2rem] flex flex-col justify-between">
          <h3 className="text-[11px] font-semibold">
            Amul Fresh Malai Paneer and this is...
          </h3>
          <h6 className="text-xxs text-gray-400">200 g</h6>
        </div>
        <div className="mt-2 flex justify-between items-center ">
          <div className="flex flex-col justify-center items-center">
            <h6 className="text-xxs font-semibold">₹88</h6>
            <h6 className="text-[11px] text-zinc-400 font-[300] leading-none line-through">
              ₹98
            </h6>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default ProductCard;
