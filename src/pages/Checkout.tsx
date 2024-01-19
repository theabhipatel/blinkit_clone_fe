import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { FaAngleDown } from "react-icons/fa6";
import { toggleCartOpenAndClose } from "../store/cart/cartSlice";

const paymentMethods = [
  "Wallets",
  "Add credit or debit cards",
  "Netbanking",
  "Add new UPI ID",
  "Cash",
  "Pay Later",
];

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalItems = useAppSelector((state) => state.cart.totalItems);
  const selectedAddress = useAppSelector((state) => state.user.selectedAddress);
  const { addressType, addressLine1, addressLine2, landmark } = selectedAddress;

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
      dispatch(toggleCartOpenAndClose(true));
    }
  }, [cartItems]);

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row px-5 lg:px-40 mt-24 mb-5 ">
      {/* ---> Select Payment Method */}
      <div className="w-[100%] md:w-[65%] h-full ">
        <h1 className="text-xl font-bold">Select Payment Method</h1>
        <div className="border rounded-md mt-2">
          {paymentMethods.map((item) => {
            if (item === "Cash") {
              return (
                <div className="flex justify-between items-center px-5 border-b py-3 cursor-pointer">
                  <div>
                    <h4 className="text-zinc-300">{item}</h4>
                    <p className="text-xs text-[#A8B5C1]">
                      This payment method is not available at the moment
                    </p>
                  </div>
                  <FaAngleDown />
                </div>
              );
            }
            return (
              <div className="flex justify-between items-center px-5 border-b py-3 cursor-pointer">
                <h4>{item}</h4>
                <FaAngleDown />
              </div>
            );
          })}
        </div>
      </div>
      {/* ---> Cart items and pay now */}
      <div className="w-[100%] md:w-[35%] mt-5 md:mt-0 md:px-5 ">
        <div className="sticky top-24 ">
          <div className="border border-b-0  pt-2">
            <div className="px-5">
              <h2 className="text-sm font-semibold text-zinc-700">
                Delivery Address
              </h2>
              <p className="text-xxs text-zinc-500">
                {addressType}: {addressLine1}, {addressLine2}, {landmark}
              </p>
            </div>

            <div className="bg-zinc-50 border-y px-5 py-3 my-3  flex justify-between items-center text-xs text-zinc-500">
              <span className="font-semibold">My Cart</span>
              <span>
                {totalItems} {totalItems > 1 ? "items" : "item"}{" "}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {cartItems.map((item) => {
                return (
                  <div className="flex items-center gap-2 px-3 border-b">
                    <div className="w-[30%] flex items-center gap-2">
                      <span className="text-sm text-zinc-600">
                        {item.quantity}
                      </span>
                      <div className="w-14 h-12 ">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-[70%]">
                      <h2 className="text-xxs line-clamp-1">{item.title}</h2>
                      <h3 className="text-xxs text-zinc-500 leading-3">
                        {item.unit}
                      </h3>
                      <h3 className="text-xxs leading-3">₹{item.price}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-3">
            <button className="w-full h-10 bg-primary font-bold text-sm   text-white rounded-md">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
