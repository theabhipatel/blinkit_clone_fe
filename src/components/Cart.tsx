import { FC, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { IoMdListBox } from "react-icons/io";
import { GiScooter } from "react-icons/gi";
import { BsInfoCircle } from "react-icons/bs";
import Slider from "./Slider";
import ProductCard from "./ProductCard";
import CartItem from "./molecules/CartItem";
import EmptyCart from "./molecules/EmptyCart";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleCartOpenAndClose } from "../store/cart/cartSlice";
import { axiosInstance } from "../utils/axiosInstance";
import { IProduct } from "../interfaces";

interface IProps {}

const Cart: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalItems = useAppSelector((state) => state.cart.totalItems);
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  const discountedAmount = useAppSelector(
    (state) => state.cart.discountedAmount
  );
  const totalSaving = totalAmount - discountedAmount;
  const grandTotal = discountedAmount + (discountedAmount > 99 ? 0 : 9);
  const [beforeYouCheckoutProducts, setBeforeYouCheckoutProducts] = useState<
    IProduct[]
  >([]);

  const handleCartClose = () => {
    dispatch(toggleCartOpenAndClose(false));
  };

  /** ---> Calling api for relevant Products */
  useEffect(() => {
    if (cartItems.length) {
      getRelevantProducts();
    }
  }, []);

  const getRelevantProducts = async () => {
    try {
      const res = await axiosInstance.get(
        `/products/category/${cartItems[cartItems.length - 1].categoryId}`
      );
      if (res.status === 200) {
        setBeforeYouCheckoutProducts(res.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed  inset-0   flex justify-end z-50">
      <div
        onClick={handleCartClose}
        className="w-[75%] h-full bg-black opacity-75 duration-300 ease-in"
      />
      {/* ---> Whole Cart  <--- */}
      <div className="w-[20rem] h-full  bg-blue-50 text-zinc-800 overflow-x-auto">
        {/* ---> Cart Header <--- */}
        <div className="w-full h-12  px-4 bg-white flex justify-between items-center ">
          <h4 className="text-xs font-bold">My Cart</h4>
          <button onClick={handleCartClose}>
            <MdClose />
          </button>
        </div>

        {/* ---> Cart Body <--- */}
        <div className="mt-3">
          {cartItems.length === 0 && <EmptyCart />}
          {cartItems.length !== 0 && (
            <>
              {/* ---> If Cart has Items then showing <--- */}
              {totalSaving > 0 && (
                <div className="w-[94%] mx-auto rounded-md flex justify-between items-center mb-2 p-2 bg-blue-100 text-blue-500 text-xs font-[500]">
                  <h3> Your total savings </h3>
                  <span>₹{totalSaving}</span>
                </div>
              )}

              <div className="w-[94%] p-3  mx-auto rounded-md bg-white flex flex-col ">
                <div className="flex gap-4">
                  <div className="bg-blue-50 rounded-md flex justify-center items-center px-1 ">
                    <img src="/timer.avif" alt="timer" className="w-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold ">
                      Delivery in 12 minutes
                    </h4>
                    <p className=" text-xxs text-zinc-400">
                      Shipment of {totalItems} items
                    </p>
                  </div>
                </div>

                <div className="my-3" />
                {/* ---> Cart Items <--- */}
                {cartItems.map((item) => {
                  return <CartItem item={item} />;
                })}
              </div>
              {/* ---> Before you checkout <--- */}
              <div className="w-[94%] my-3 p-3 pb-5 mx-auto rounded-md bg-white flex flex-col ">
                <h4 className="text-xs font-bold "> Before you checkout</h4>

                <Slider>
                  {beforeYouCheckoutProducts.map((item) => (
                    <ProductCard key={item._id} width="8rem" product={item} />
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
                      {totalSaving > 0 && (
                        <span className=" text-[8px] text-blue-600 font-semibold bg-blue-100 px-1  rounded-sm">
                          Saved ₹{totalSaving}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 font-[500]">
                      {totalSaving > 0 && (
                        <span className="line-through text-zinc-500 text-xxs">
                          ₹{totalAmount}
                        </span>
                      )}

                      <span>₹{discountedAmount}</span>
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
                      {discountedAmount > 99 ? (
                        <>
                          <span className="line-through text-zinc-500 ">
                            ₹9
                          </span>
                          <span className="text-blue-500">FREE</span>
                        </>
                      ) : (
                        <>
                          <span className="line-through text-zinc-500 ">
                            ₹25
                          </span>
                          <span className="text-blue-500">₹9</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs font-semibold">
                    <span>Grand total</span>
                    <span>₹{grandTotal}</span>
                  </div>
                </div>
              </div>
              {/* ---> Cancellation Policy <--- */}
              <div className="w-[94%] my-3 p-3  mx-auto rounded-md bg-white flex flex-col ">
                <h4 className="text-xs font-bold "> Cancellation Policy</h4>
                <p className=" text-xxs text-zinc-500 font-semibold">
                  Orders cannot be cancelled once packed for delivery. In case
                  of unexpected delays, a refund will be provided, if
                  applicable.
                </p>
              </div>
              <div className="my-24" />
              {/* ---> Login to Proceed <--- */}
              <div className="fixed bottom-0 w-[20rem]  my-3 p-3  mx-auto rounded-md bg-white flex flex-col ">
                <button className="px-2 py-[0.4rem] text-xs text-white bg-primary rounded-md flex justify-between items-center">
                  <div className="flex flex-col items-center">
                    <span className="font-semibold">₹{grandTotal}</span>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
