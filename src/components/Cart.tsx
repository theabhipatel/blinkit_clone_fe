import { FC } from "react";
import { MdClose } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { IoMdListBox } from "react-icons/io";
import { GiScooter } from "react-icons/gi";
import { BsInfoCircle } from "react-icons/bs";
import Slider from "./Slider";
import ProductCard from "./ProductCard";
import CartItem from "./molecules/CartItem";
import EmptyCart from "./molecules/EmptyCart";

interface IProps {
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: FC<IProps> = ({ setIsCartOpen }) => {
  return (
    <div className="fixed  inset-0   flex justify-end z-50">
      <div
        onClick={() => setIsCartOpen(false)}
        className="w-[75%] h-full bg-black opacity-75 duration-300 ease-in"
      />
      {/* ---> Whole Cart  <--- */}
      <div className="w-[20rem] h-full  bg-blue-50 text-zinc-800 overflow-x-auto">
        {/* ---> Cart Header <--- */}
        <div className="w-full h-12  px-4 bg-white flex justify-between items-center ">
          <h4 className="text-xs font-bold">My Cart</h4>
          <button onClick={() => setIsCartOpen(false)}>
            <MdClose />
          </button>
        </div>

        {/* ---> Cart Body <--- */}
        <div className="mt-3">
          {/* ---> Empty Cart <--- */}
          <EmptyCart setIsCartOpen={setIsCartOpen} />
          {/* ---> Filled Cart <--- */}
          <div className="w-[94%] mx-auto rounded-md flex justify-between items-center mb-2 p-2 bg-blue-100 text-blue-500 text-xs font-[500]">
            <h3> Your total savings </h3>
            <span>₹27</span>
          </div>

          {/* ---> Filled Cart <--- */}
          <div className="w-[94%] p-3  mx-auto rounded-md bg-white flex flex-col ">
            <div className="flex gap-4">
              <div className="bg-blue-50 rounded-md flex justify-center items-center px-1 ">
                <img src="/timer.avif" alt="timer" className="w-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold ">Delivery in 12 minutes</h4>
                <p className=" text-xxs text-zinc-400">Shipment of 4 items</p>
              </div>
            </div>

            <div className="my-3" />
            {/* ---> Cart Items <--- */}
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* ---> Before you checkout <--- */}
          <div className="w-[94%] my-3 p-3 pb-5 mx-auto rounded-md bg-white flex flex-col ">
            <h4 className="text-xs font-bold "> Before you checkout</h4>

            <Slider>
              {[...new Array(10)].map((_, idx) => (
                <ProductCard key={idx} width="8rem" />
              ))}
            </Slider>
          </div>
          {/* ---> Bill details <--- */}
          <div className="w-[94%] my-3 p-3  mx-auto rounded-md bg-white flex flex-col ">
            <h4 className="text-xs font-bold ">Bill details</h4>
            <div>
              <div className="mt-1 flex justify-between text-[11px]">
                <div className="flex items-center gap-1 ">
                  <IoMdListBox />
                  <span>Item total</span>
                  <span className=" text-[8px] text-blue-600 font-semibold bg-blue-100 px-1  rounded-sm">
                    Saved ₹1
                  </span>
                </div>
                <div className="flex items-center gap-1 font-[500]">
                  <span className="line-through text-zinc-500 text-xxs">
                    ₹223
                  </span>
                  <span>₹222</span>
                </div>
              </div>
              <div className="mt-1 flex justify-between text-[11px] ">
                <div className="flex items-center gap-1">
                  <GiScooter className="text-sm" />
                  <span>Delivery charge</span>
                  <span className="text-xxs cursor-pointer ">
                    <BsInfoCircle />
                  </span>
                </div>
                <div className="flex items-center gap-1 font-[500]">
                  <span className="line-through text-zinc-500 ">₹9</span>
                  <span className="text-blue-500">FREE</span>
                </div>
              </div>
              <div className="mt-1 flex justify-between text-xs font-semibold">
                <span>Grand total</span>
                <span>₹222</span>
              </div>
            </div>
          </div>
          {/* ---> Cancellation Policy <--- */}
          <div className="w-[94%] my-3 p-3  mx-auto rounded-md bg-white flex flex-col ">
            <h4 className="text-xs font-bold "> Cancellation Policy</h4>
            <p className=" text-xxs text-zinc-500 font-semibold">
              Orders cannot be cancelled once packed for delivery. In case of
              unexpected delays, a refund will be provided, if applicable.
            </p>
          </div>
          <div className="my-24" />
          {/* ---> Login to Proceed <--- */}
          <div className="fixed bottom-0 w-[20rem]  my-3 p-3  mx-auto rounded-md bg-white flex flex-col ">
            <button className="px-2 py-[0.4rem] text-xs text-white bg-primary rounded-md flex justify-between items-center">
              <div className="flex flex-col items-center">
                <span className="font-semibold">₹222</span>
                <span className="text-[9px] tracking-wide text-gray-300">
                  TOTAL
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">Login to Proceed</span>
                <FaChevronRight className="mt-[.15rem]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
