import { FC } from "react";
import { useAppDispatch } from "../../store/hooks";
import { toggleCartOpenAndClose } from "../../store/cart/cartSlice";

interface IProps {}

const EmptyCart: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  const handleCartClose = () => {
    dispatch(toggleCartOpenAndClose(false));
  };
  return (
    <div className="w-[94%] p-3 pb-5 mb-3 mx-auto rounded-md bg-white flex flex-col items-center">
      <img src="/empty_cart.webp" alt="" className="h-28" />
      <h4 className="text-sm font-bold ">
        You don't have any items in your cart
      </h4>
      <p className="mt-1 text-xxs text-zinc-400">
        Your favourite items are just a click away
      </p>
      <div className="my-3" />
      <button
        onClick={handleCartClose}
        className="px-4 py-[0.4rem] text-xxs text-white bg-primary rounded-md"
      >
        Start Shopping
      </button>
    </div>
  );
};

export default EmptyCart;
